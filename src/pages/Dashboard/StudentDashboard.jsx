// src/pages/dashboard/StudentDashboard.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaBook, FaCalendarAlt, FaClipboardList, FaChartLine, 
  FaUserGraduate, FaFileAlt, FaBell, FaClock 
} from 'react-icons/fa';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const StudentDashboard = () => {
  const [stats] = useState({
    enrolledCourses: 6,
    assignmentsPending: 3,
    attendance: '92%',
    averageScore: '85%'
  });

  const [upcomingClasses] = useState([
    { id: 1, subject: 'Mathematics', time: '10:00 AM', teacher: 'Mr. Smith' },
    { id: 2, subject: 'Physics', time: '11:30 AM', teacher: 'Ms. Johnson' },
    { id: 3, subject: 'English', time: '2:00 PM', teacher: 'Mrs. Davis' },
  ]);

  const [recentAssignments] = useState([
    { id: 1, title: 'Math Project', dueDate: '2024-01-25', status: 'Pending', subject: 'Mathematics' },
    { id: 2, title: 'Physics Lab Report', dueDate: '2024-01-22', status: 'Submitted', subject: 'Physics' },
    { id: 3, title: 'English Essay', dueDate: '2024-01-20', status: 'Graded', subject: 'English' },
  ]);

  const performanceData = {
    labels: ['Math', 'Physics', 'Chemistry', 'English', 'History', 'Computer'],
    datasets: [{
      label: 'Scores',
      data: [85, 78, 92, 88, 75, 95],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(14, 165, 233, 0.8)'
      ],
      borderWidth: 1
    }]
  };

  const attendanceData = {
    labels: ['Present', 'Absent', 'Leave'],
    datasets: [{
      data: [92, 5, 3],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(239, 68, 68, 0.8)',
        'rgba(245, 158, 11, 0.8)'
      ],
      borderWidth: 1
    }]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Student Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back! Here's your learning overview</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="relative">
              <FaBell className="text-2xl text-gray-600 cursor-pointer" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex items-center gap-3">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">John Student</p>
                <p className="text-sm text-gray-600">Grade 10-A | Roll: 2023001</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Enrolled Courses</p>
                <p className="text-3xl font-bold">{stats.enrolledCourses}</p>
              </div>
              <FaBook className="text-3xl opacity-80" />
            </div>
          </div>
          
          <div className="card p-6 bg-gradient-to-r from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Attendance</p>
                <p className="text-3xl font-bold">{stats.attendance}</p>
              </div>
              <FaChartLine className="text-3xl opacity-80" />
            </div>
          </div>
          
          <div className="card p-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Assignments Pending</p>
                <p className="text-3xl font-bold">{stats.assignmentsPending}</p>
              </div>
              <FaClipboardList className="text-3xl opacity-80" />
            </div>
          </div>
          
          <div className="card p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Average Score</p>
                <p className="text-3xl font-bold">{stats.averageScore}</p>
              </div>
              <FaUserGraduate className="text-3xl opacity-80" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4">Subject Performance</h3>
                <div className="h-64">
                  <Bar 
                    data={performanceData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      scales: {
                        y: {
                          beginAtZero: true,
                          max: 100
                        }
                      }
                    }}
                  />
                </div>
              </div>
              
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4">Attendance Distribution</h3>
                <div className="h-64">
                  <Doughnut 
                    data={attendanceData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Upcoming Classes */}
            <div className="card p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Today's Classes</h3>
                <Link to="/lms/online-classes" className="text-blue-600 hover:text-blue-700 font-semibold">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {upcomingClasses.map((cls) => (
                  <div key={cls.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition duration-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaBook className="text-blue-600 text-xl" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{cls.subject}</h4>
                        <p className="text-gray-600 text-sm">{cls.teacher}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaClock />
                        <span>{cls.time}</span>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                        Join
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Quick Actions */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link to="/lms/assignments" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition duration-200">
                  <FaFileAlt className="text-blue-600" />
                  <span>View Assignments</span>
                </Link>
                <Link to="/lms/exams-results" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition duration-200">
                  <FaClipboardList className="text-green-600" />
                  <span>Check Results</span>
                </Link>
                <Link to="/lms/attendance" className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-50 transition duration-200">
                  <FaChartLine className="text-purple-600" />
                  <span>View Attendance</span>
                </Link>
              </div>
            </div>

            {/* Recent Assignments */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Assignments</h3>
              <div className="space-y-4">
                {recentAssignments.map((assignment) => (
                  <div key={assignment.id} className="p-3 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{assignment.title}</h4>
                      <span className={`px-2 py-1 rounded text-xs ${
                        assignment.status === 'Submitted' ? 'bg-green-100 text-green-600' :
                        assignment.status === 'Pending' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-blue-100 text-blue-600'
                      }`}>
                        {assignment.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{assignment.subject}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Due: {assignment.dueDate}</span>
                      <Link to="/lms/assignments" className="text-blue-600 hover:text-blue-700">
                        View Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timetable */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Class Schedule</h3>
              <div className="space-y-3">
                {[
                  { day: 'Monday', schedule: 'Math, Physics, English' },
                  { day: 'Tuesday', schedule: 'Chemistry, History, PE' },
                  { day: 'Wednesday', schedule: 'Computer, Math, Physics' },
                  { day: 'Thursday', schedule: 'English, Chemistry, Art' },
                  { day: 'Friday', schedule: 'Physics, Computer, Math' }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-2 border-b">
                    <span className="font-medium">{item.day}</span>
                    <span className="text-sm text-gray-600">{item.schedule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;