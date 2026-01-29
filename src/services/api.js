// src/services/api.js
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth Services
export const authService = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (userData) => api.post('/auth/register', userData),
  logout: () => api.post('/auth/logout'),
  refreshToken: () => api.post('/auth/refresh'),
};

// Assignment Services
export const assignmentService = {
  getAll: (filters) => api.get('/assignments', { params: filters }),
  getById: (id) => api.get(`/assignments/${id}`),
  create: (assignment) => api.post('/assignments', assignment),
  update: (id, assignment) => api.put(`/assignments/${id}`, assignment),
  submit: (id, submission) => api.post(`/assignments/${id}/submit`, submission),
  grade: (id, gradeData) => api.post(`/assignments/${id}/grade`, gradeData),
};

// Grade Services
export const gradeService = {
  getGrades: (studentId) => api.get(`/grades/student/${studentId}`),
  updateGrade: (gradeId, data) => api.put(`/grades/${gradeId}`, data),
  getClassStats: (classId) => api.get(`/grades/class/${classId}/stats`),
};

// Attendance Services
export const attendanceService = {
  markAttendance: (data) => api.post('/attendance', data),
  getStudentAttendance: (studentId) => api.get(`/attendance/student/${studentId}`),
  getClassAttendance: (classId, date) => api.get(`/attendance/class/${classId}`, { params: { date } }),
};

export default api;