// src/components/common/Navbar.jsx
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  FaHome, FaInfoCircle, FaBook, FaChalkboardTeacher, 
  FaUserGraduate, FaCalendarAlt, FaEnvelope, FaUser, 
  FaSignOutAlt, FaBars, FaTimes, FaCaretDown 
} from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { to: '/', label: 'Home', icon: <FaHome /> },
    { to: '/about', label: 'About', icon: <FaInfoCircle /> },
    { to: '/courses', label: 'Courses', icon: <FaBook /> },
    { to: '/teachers', label: 'Teachers', icon: <FaChalkboardTeacher /> },
    { to: '/admissions', label: 'Admissions', icon: <FaUserGraduate /> },
    { to: '/events-gallery', label: 'Events & Gallery', icon: <FaCalendarAlt /> },
    { to: '/contact', label: 'Contact', icon: <FaEnvelope /> },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <FaBook className="text-white text-xl" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">EduLearn</h1>
              <p className="text-sm text-gray-600">School & LMS</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center space-x-2 py-2 px-3 rounded-lg transition duration-200 ${
                  location.pathname === link.to 
                    ? 'bg-blue-100 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {link.icon}
                <span className="font-medium">{link.label}</span>
              </Link>
            ))}

            {/* User Menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-3 bg-gray-100 hover:bg-gray-200 py-2 px-4 rounded-lg transition duration-200"
                >
                  <img 
                    src={user.avatar} 
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="text-left">
                    <p className="font-medium text-sm">{user.name}</p>
                    <p className="text-xs text-gray-600 capitalize">{user.role}</p>
                  </div>
                  <FaCaretDown />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border py-2 z-50">
                    <div className="px-4 py-3 border-b">
                      <p className="font-semibold">{user.name}</p>
                      <p className="text-sm text-gray-600">{user.email}</p>
                      {user.role === 'student' && (
                        <p className="text-sm text-gray-600">{user.class} • Roll: {user.rollNumber}</p>
                      )}
                    </div>
                    
                    <Link
                      to={`/dashboard/${user.role}`}
                      className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <FaUser className="text-gray-600" />
                      <span>Dashboard</span>
                    </Link>

                    {user.role === 'student' && (
                      <>
                        <Link
                          to="/lms/online-classes"
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <FaChalkboardTeacher className="text-gray-600" />
                          <span>Online Classes</span>
                        </Link>
                        <Link
                          to="/lms/assignments"
                          className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50"
                          onClick={() => setDropdownOpen(false)}
                        >
                          <FaBook className="text-gray-600" />
                          <span>Assignments</span>
                        </Link>
                      </>
                    )}

                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 w-full"
                    >
                      <FaSignOutAlt />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-6 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`flex items-center space-x-3 py-3 px-4 rounded-lg ${
                    location.pathname === link.to 
                      ? 'bg-blue-100 text-blue-600' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  <span className="font-medium">{link.label}</span>
                </Link>
              ))}

              {user ? (
                <>
                  <Link
                    to={`/dashboard/${user.role}`}
                    className="flex items-center space-x-3 py-3 px-4 rounded-lg bg-gray-100 text-gray-700"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaUser />
                    <span>Dashboard</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-3 py-3 px-4 rounded-lg text-red-600 hover:bg-red-50"
                  >
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="flex items-center justify-center space-x-2 py-3 px-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaUser />
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/register"
                    className="flex items-center justify-center space-x-2 py-3 px-4 bg-blue-600 text-white rounded-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>Register</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;