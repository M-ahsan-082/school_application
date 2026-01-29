// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Sidebar from './components/common/Sidebar';
import ProtectedRoute from './components/common/ProtectedRoute';

// Public Pages
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Teachers from './pages/Teachers';
import Admissions from './pages/Admissions';
import EventsGallery from './pages/EventsGallery';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';

// Dashboard Pages
import StudentDashboard from './pages/dashboard/StudentDashboard';
import TeacherDashboard from './pages/dashboard/TeacherDashboard';
import AdminDashboard from './pages/dashboard/AdminDashboard';

// LMS Pages
import OnlineClasses from './pages/lms/OnlineClasses';
import Assignments from './pages/lms/Assignments';
import ExamsResults from './pages/lms/ExamsResults';
import Attendance from './pages/lms/Attendance';

// Dashboard Layout Component
const DashboardLayout = ({ children }) => {
  const { user } = useAuth();
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <div className="flex-1 lg:ml-64 overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

// Public Layout Component (without sidebar)
const PublicLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes with Navbar & Footer */}
          <Route path="/" element={
            <PublicLayout>
              <Home />
            </PublicLayout>
          } />
          <Route path="/about" element={
            <PublicLayout>
              <About />
            </PublicLayout>
          } />
          <Route path="/courses" element={
            <PublicLayout>
              <Courses />
            </PublicLayout>
          } />
          <Route path="/teachers" element={
            <PublicLayout>
              <Teachers />
            </PublicLayout>
          } />
          <Route path="/admissions" element={
            <PublicLayout>
              <Admissions />
            </PublicLayout>
          } />
          <Route path="/events-gallery" element={
            <PublicLayout>
              <EventsGallery />
            </PublicLayout>
          } />
          <Route path="/contact" element={
            <PublicLayout>
              <Contact />
            </PublicLayout>
          } />
          <Route path="/login" element={
            <PublicLayout>
              <Login />
            </PublicLayout>
          } />
          <Route path="/register" element={
            <PublicLayout>
              <Register />
            </PublicLayout>
          } />

          {/* Dashboard Routes with Sidebar */}
          <Route path="/dashboard/student" element={
            <ProtectedRoute role="student">
              <DashboardLayout>
                <StudentDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          
          <Route path="/dashboard/teacher" element={
            <ProtectedRoute role="teacher">
              <DashboardLayout>
                <TeacherDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          
          <Route path="/dashboard/admin" element={
            <ProtectedRoute role="admin">
              <DashboardLayout>
                <AdminDashboard />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          {/* LMS Routes with Sidebar */}
          <Route path="/lms/online-classes" element={
            <ProtectedRoute>
              <DashboardLayout>
                <OnlineClasses />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          
          <Route path="/lms/assignments" element={
            <ProtectedRoute>
              <DashboardLayout>
                <Assignments />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          
          <Route path="/lms/exams-results" element={
            <ProtectedRoute>
              <DashboardLayout>
                <ExamsResults />
              </DashboardLayout>
            </ProtectedRoute>
          } />
          
          <Route path="/lms/attendance" element={
            <ProtectedRoute>
              <DashboardLayout>
                <Attendance />
              </DashboardLayout>
            </ProtectedRoute>
          } />

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;