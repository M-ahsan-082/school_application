// src/context/AuthContext.jsx
import { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data
    const storedUser = localStorage.getItem('school_lms_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password, role) => {
    // Demo authentication - In real app, connect to backend
    const demoUsers = {
      student: {
        id: 1,
        name: 'John Student',
        email: 'student@school.com',
        role: 'student',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
        class: 'Grade 10-A',
        rollNumber: '2023001'
      },
      teacher: {
        id: 2,
        name: 'Sarah Teacher',
        email: 'teacher@school.com',
        role: 'teacher',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
        department: 'Mathematics',
        subjects: ['Math', 'Physics']
      },
      admin: {
        id: 3,
        name: 'Admin User',
        email: 'admin@school.com',
        role: 'admin',
        avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Admin'
      }
    };

    const demoUser = demoUsers[role];
    if (demoUser) {
      setUser(demoUser);
      localStorage.setItem('school_lms_user', JSON.stringify(demoUser));
      // Return success and user data - navigation will be handled in Login component
      return { success: true, user: demoUser };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('school_lms_user');
    // Return logout status - navigation will be handled in Navbar component
    return { success: true };
  };

  const value = {
    user,
    login,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};