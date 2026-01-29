// src/services/notificationService.js
import { toast } from 'react-hot-toast';
import Pusher from 'pusher-js';

class NotificationService {
  constructor() {
    this.notifications = [];
    this.listeners = new Set();
    
    // Initialize Pusher for real-time notifications
    if (process.env.REACT_APP_PUSHER_KEY) {
      this.pusher = new Pusher(process.env.REACT_APP_PUSHER_KEY, {
        cluster: process.env.REACT_APP_PUSHER_CLUSTER,
      });
      this.setupRealtime();
    }
  }

  setupRealtime() {
    const channel = this.pusher.subscribe('school-notifications');
    
    channel.bind('new-assignment', (data) => {
      this.add({
        id: Date.now(),
        type: 'assignment',
        title: 'New Assignment',
        message: `New assignment posted: ${data.title}`,
        link: `/assignments/${data.id}`,
        read: false,
        timestamp: new Date().toISOString(),
      });
    });

    channel.bind('grade-update', (data) => {
      this.add({
        id: Date.now(),
        type: 'grade',
        title: 'Grade Updated',
        message: `Your grade for ${data.assignment} has been updated`,
        link: '/exams-results',
        read: false,
        timestamp: new Date().toISOString(),
      });
    });
  }

  add(notification) {
    this.notifications.unshift(notification);
    this.saveToStorage();
    this.notifyListeners();
    
    // Show toast
    toast.custom((t) => (
      <div className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              {this.getNotificationIcon(notification.type)}
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-gray-900">
                {notification.title}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {notification.message}
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none"
          >
            View
          </button>
        </div>
      </div>
    ));
  }

  getNotificationIcon(type) {
    const icons = {
      assignment: '📝',
      grade: '📊',
      attendance: '📅',
      announcement: '📢',
      event: '🎉',
      warning: '⚠️',
    };
    return icons[type] || '🔔';
  }

  markAsRead(id) {
    const notification = this.notifications.find(n => n.id === id);
    if (notification) {
      notification.read = true;
      this.saveToStorage();
      this.notifyListeners();
    }
  }

  markAllAsRead() {
    this.notifications.forEach(n => n.read = true);
    this.saveToStorage();
    this.notifyListeners();
  }

  getUnreadCount() {
    return this.notifications.filter(n => !n.read).length;
  }

  saveToStorage() {
    localStorage.setItem('notifications', JSON.stringify(this.notifications));
  }

  loadFromStorage() {
    const saved = localStorage.getItem('notifications');
    if (saved) {
      this.notifications = JSON.parse(saved);
    }
  }

  addListener(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notifyListeners() {
    this.listeners.forEach(callback => callback(this.notifications));
  }
}

export default new NotificationService();