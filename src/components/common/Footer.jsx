// src/components/common/Footer.jsx
import { Link } from 'react-router-dom';
import { 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin, 
  FaEnvelope, FaPhone, FaMapMarkerAlt 
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Add this import

const Navbar = () => {
  const navigate = useNavigate(); // Add this line
  // ... rest of your component code

  const handleLogout = () => {
    logout();
    navigate('/'); // Navigate to home after logout
  };

  // ... rest of your component
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold">E</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">EduLearn School</h2>
                <p className="text-gray-400">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Providing quality education and holistic development since 1995. 
              Nurturing young minds for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition duration-200">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition duration-200">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition duration-200">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition duration-200">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-400 hover:text-white transition duration-200">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/admissions" className="text-gray-400 hover:text-white transition duration-200">
                  Admissions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* LMS Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Learning Portal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/lms/online-classes" className="text-gray-400 hover:text-white transition duration-200">
                  Online Classes
                </Link>
              </li>
              <li>
                <Link to="/lms/assignments" className="text-gray-400 hover:text-white transition duration-200">
                  Assignments
                </Link>
              </li>
              <li>
                <Link to="/lms/exams-results" className="text-gray-400 hover:text-white transition duration-200">
                  Exams & Results
                </Link>
              </li>
              <li>
                <Link to="/lms/attendance" className="text-gray-400 hover:text-white transition duration-200">
                  Attendance
                </Link>
              </li>
              <li>
                <Link to="/dashboard/student" className="text-gray-400 hover:text-white transition duration-200">
                  Student Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <span className="text-gray-400">
                  123 Education Street, Knowledge City, 12345
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <span className="text-gray-400">info@edulearn.edu</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Subscribe to Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-r-lg transition duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} EduLearn School & Learning Management System. All rights reserved.</p>
          <div className="mt-2">
            <Link to="/privacy" className="hover:text-white transition duration-200 mx-2">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-white transition duration-200 mx-2">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;