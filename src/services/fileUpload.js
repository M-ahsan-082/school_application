// src/services/fileUpload.js
import axios from 'axios';

export const uploadFile = async (file, onProgress) => {
  const formData = new FormData();
  formData.append('file', file);

  return axios.post(`${API_BASE_URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: (progressEvent) => {
      const percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      onProgress?.(percentCompleted);
    },
  });
};

export const uploadAssignment = async (assignmentId, file, onProgress) => {
  const formData = new FormData();
  formData.append('assignment', file);
  formData.append('assignmentId', assignmentId);

  return axios.post(`${API_BASE_URL}/assignments/submit`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: onProgress,
  });
};