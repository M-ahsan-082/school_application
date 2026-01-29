// src/components/common/Sidebar.jsx
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, FaChartLine, FaBook, FaChalkboardTeacher, 
  FaFileAlt, FaCalendarCheck, FaGraduationCap, 
  FaCog, FaSignOutAlt, FaBars, FaTimes 
} from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const studentLinks = [
    { to: '/dashboard/student', icon: <FaHome />, label: 'Dashboard' },
    { to: '/lms/online-classes', icon: <FaChalkboardTeacher />, label: 'Online Classes' },
    { to: '/lms/assignments', icon: <FaFileAlt />, label: 'Assignments' },
    { to: '/lms/exams-results', icon: <FaGraduationCap />, label: 'Exams & Results' },
    { to: '/lms/attendance', icon: <FaCalendarCheck />, label: 'Attendance' },
    { to: '/courses', icon: <FaBook />, label: 'Courses' },
  ];

  const teacherLinks = [
    { to: '/dashboard/teacher', icon: <FaHome />, label: 'Dashboard' },
    { to: '/lms/online-classes', icon: <FaChalkboardTeacher />, label: 'Classes' },
    { to: '/lms/assignments', icon: <FaFileAlt />, label: 'Assignments' },
    { to: '/lms/exams-results', icon: <FaGraduationCap />, label: 'Grading' },
    { to: '/lms/attendance', icon: <FaCalendarCheck />, label: 'Attendance' },
    { to: '/courses', icon: <FaBook />, label: 'Courses' },
  ];

  const adminLinks = [
    { to: '/dashboard/admin', icon: <FaHome />, label: 'Dashboard' },
    { to: '/dashboard/students', icon: <FaChartLine />, label: 'Students' },
    { to: '/dashboard/teachers', icon: <FaChalkboardTeacher />, label: 'Teachers' },
    { to: '/dashboard/courses', icon: <FaBook />, label: 'Courses' },
    { to: '/dashboard/finance', icon: <FaChartLine />, label: 'Finance' },
    { to: '/dashboard/settings', icon: <FaCog />, label: 'Settings' },
  ];

  const links = user?.role === 'student' ? studentLinks : 
                user?.role === 'teacher' ? teacherLinks : 
                adminLinks;

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-white rounded-lg shadow-lg"
      >
        <FaBars className="text-gray-700" />
      </button>

      {/* Sidebar */}
      <div className={`
        fixed lg:relative inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 transition-transform duration-300
      `}>
        {/* Close Button (Mobile) */}
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700"
        >
          <FaTimes />
        </button>

        {/* User Profile */}
        <div className="p-6 border-b">
          <div className="flex items-center gap-3">
            <img
              src={user?.avatar || 'https://api.dicebear.com/7.x/avataaars/svg?seed=User'}
              alt="Profile"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="font-semibold">{user?.name || 'User'}</p>
              <p className="text-sm text-gray-600 capitalize">{user?.role || 'Student'}</p>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="p-4">
          <ul className="space-y-2">
            {links.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition duration-200
                    ${location.pathname === link.to
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  {link.icon}
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Logout Button */}
          <button
            onClick={logout}
            className="w-full mt-8 flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition duration-200"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </nav>

        {/* School Info */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <div className="text-center">
            <p className="text-sm text-gray-600">EduLearn School</p>
            <p className="text-xs text-gray-500">© 2024 All rights reserved</p>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
        />
      )}
    </>
  );
};

export default Sidebar;