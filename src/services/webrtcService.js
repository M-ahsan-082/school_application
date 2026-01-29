// src/services/webrtcService.js
import io from 'socket.io-client';
import Peer from 'simple-peer';

class WebRTCService {
  constructor() {
    this.socket = null;
    this.peers = {};
    this.localStream = null;
    this.roomId = null;
  }

  async init(roomId, userId) {
    this.roomId = roomId;
    this.socket = io(process.env.REACT_APP_SOCKET_URL || 'http://localhost:3001');

    // Get user media
    this.localStream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true
    });

    // Join room
    this.socket.emit('join-room', { roomId, userId });

    // Setup socket listeners
    this.setupSocketListeners(userId);

    return this.localStream;
  }

  setupSocketListeners(userId) {
    this.socket.on('user-joined', (remoteUserId) => {
      this.createPeer(remoteUserId, false, userId);
    });

    this.socket.on('offer', ({ from, offer }) => {
      this.handleOffer(from, offer);
    });

    this.socket.on('answer', ({ from, answer }) => {
      this.handleAnswer(from, answer);
    });

    this.socket.on('ice-candidate', ({ from, candidate }) => {
      this.handleIceCandidate(from, candidate);
    });

    this.socket.on('user-left', (userId) => {
      this.removePeer(userId);
    });
  }

  createPeer(userToSignal, isInitiator, userId) {
    const peer = new Peer({
      initiator: isInitiator,
      stream: this.localStream,
      config: {
        iceServers: [
          { urls: 'stun:stun.l.google.com:19302' },
          { urls: 'stun:global.stun.twilio.com:3478' }
        ]
      }
    });

    peer.on('signal', (signal) => {
      if (isInitiator) {
        this.socket.emit('offer', {
          to: userToSignal,
          from: userId,
          offer: signal
        });
      } else {
        this.socket.emit('answer', {
          to: userToSignal,
          from: userId,
          answer: signal
        });
      }
    });

    peer.on('stream', (remoteStream) => {
      // Handle incoming stream (update UI)
      this.onRemoteStream(userToSignal, remoteStream);
    });

    peer.on('close', () => {
      this.removePeer(userToSignal);
    });

    this.peers[userToSignal] = peer;
    return peer;
  }

  handleOffer(from, offer) {
    const peer = this.createPeer(from, false, from);
    peer.signal(offer);
  }

  handleAnswer(from, answer) {
    const peer = this.peers[from];
    if (peer) {
      peer.signal(answer);
    }
  }

  handleIceCandidate(from, candidate) {
    const peer = this.peers[from];
    if (peer) {
      peer.signal(candidate);
    }
  }

  removePeer(userId) {
    const peer = this.peers[userId];
    if (peer) {
      peer.destroy();
      delete this.peers[userId];
    }
  }

  sendMessage(message) {
    this.socket.emit('chat-message', {
      roomId: this.roomId,
      message
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
    }
    Object.values(this.peers).forEach(peer => peer.destroy());
    this.localStream?.getTracks().forEach(track => track.stop());
  }
}

export default new WebRTCService();