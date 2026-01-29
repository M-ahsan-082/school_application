// src/pages/dashboard/TeacherDashboard.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaChalkboardTeacher, FaUsers, FaClipboardList, FaChartLine, 
  FaCalendarAlt, FaBell, FaFileAlt, FaGraduationCap 
} from 'react-icons/fa';
import { Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const TeacherDashboard = () => {
  const [stats] = useState({
    totalStudents: 45,
    classes: 4,
    assignments: 12,
    attendance: '94%'
  });

  const [upcomingClasses] = useState([
    { id: 1, subject: 'Mathematics - Grade 10', time: '10:00 AM', duration: '45 min' },
    { id: 2, subject: 'Advanced Algebra', time: '11:30 AM', duration: '60 min' },
    { id: 3, subject: 'Calculus', time: '2:00 PM', duration: '45 min' },
  ]);

  const [recentSubmissions] = useState([
    { id: 1, student: 'John Smith', assignment: 'Math Project', submitted: '2 hours ago', status: 'Pending' },
    { id: 2, student: 'Emma Wilson', assignment: 'Algebra Homework', submitted: '1 day ago', status: 'Graded' },
    { id: 3, student: 'Michael Brown', assignment: 'Calculus Test', submitted: '2 days ago', status: 'Pending' },
  ]);

  const studentPerformanceData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Class Average',
        data: [75, 78, 82, 85],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.3
      },
      {
        label: 'Top Performer',
        data: [85, 88, 92, 95],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.3
      }
    ]
  };

  const gradeDistributionData = {
    labels: ['A (90-100)', 'B (80-89)', 'C (70-79)', 'D (60-69)', 'F (<60)'],
    datasets: [{
      label: 'Students',
      data: [8, 15, 12, 7, 3],
      backgroundColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(239, 68, 68, 0.8)'
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
            <h1 className="text-4xl font-bold text-gray-800">Teacher Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome, Dr. Sarah Johnson</p>
            <p className="text-sm text-gray-500">Mathematics Department | 15 years experience</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="relative">
              <FaBell className="text-2xl text-gray-600 cursor-pointer" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
            <div className="flex items-center gap-3">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                alt="Avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">Dr. Sarah Johnson</p>
                <p className="text-sm text-gray-600">Head of Mathematics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Students</p>
                <p className="text-3xl font-bold">{stats.totalStudents}</p>
              </div>
              <FaUsers className="text-3xl opacity-80" />
            </div>
          </div>
          
          <div className="card p-6 bg-gradient-to-r from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Classes</p>
                <p className="text-3xl font-bold">{stats.classes}</p>
              </div>
              <FaChalkboardTeacher className="text-3xl opacity-80" />
            </div>
          </div>
          
          <div className="card p-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Assignments</p>
                <p className="text-3xl font-bold">{stats.assignments}</p>
              </div>
              <FaClipboardList className="text-3xl opacity-80" />
            </div>
          </div>
          
          <div className="card p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Avg. Attendance</p>
                <p className="text-3xl font-bold">{stats.attendance}</p>
              </div>
              <FaChartLine className="text-3xl opacity-80" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Charts */}
          <div className="lg:col-span-2">
            {/* Performance Charts */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="card p-6">
                <h3 className="text-xl font-semibold mb-4">Class Performance Trend</h3>
                <div className="h-64">
                  <Line 
                    data={studentPerformanceData}
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
                <h3 className="text-xl font-semibold mb-4">Grade Distribution</h3>
                <div className="h-64">
                  <Bar 
                    data={gradeDistributionData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Today's Schedule */}
            <div className="card p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-semibold">Today's Schedule</h3>
                <FaCalendarAlt className="text-gray-600" />
              </div>
              <div className="space-y-4">
                {upcomingClasses.map((cls) => (
                  <div key={cls.id} className="p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold">{cls.subject}</h4>
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-sm rounded">
                        {cls.duration}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaCalendarAlt className="text-sm" />
                      <span className="text-sm">{cls.time}</span>
                    </div>
                    <button className="mt-3 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                      Start Class
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Submissions */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Submissions</h3>
              <div className="space-y-4">
                {recentSubmissions.map((submission) => (
                  <div key={submission.id} className="p-3 border rounded-lg hover:bg-gray-50 transition duration-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-semibold">{submission.assignment}</h4>
                        <p className="text-sm text-gray-600">{submission.student}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs ${
                        submission.status === 'Graded' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-yellow-100 text-yellow-600'
                      }`}>
                        {submission.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Submitted {submission.submitted}</span>
                      <Link to="/lms/assignments" className="text-blue-600 hover:text-blue-700">
                        Review
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link
                  to="/lms/assignments/create"
                  className="p-4 bg-blue-50 rounded-lg text-center hover:bg-blue-100 transition duration-200"
                >
                  <FaFileAlt className="text-blue-600 text-xl mx-auto mb-2" />
                  <span className="text-sm font-medium">Create Assignment</span>
                </Link>
                <Link
                  to="/lms/attendance"
                  className="p-4 bg-green-50 rounded-lg text-center hover:bg-green-100 transition duration-200"
                >
                  <FaUsers className="text-green-600 text-xl mx-auto mb-2" />
                  <span className="text-sm font-medium">Take Attendance</span>
                </Link>
                <Link
                  to="/lms/exams-results"
                  className="p-4 bg-purple-50 rounded-lg text-center hover:bg-purple-100 transition duration-200"
                >
                  <FaGraduationCap className="text-purple-600 text-xl mx-auto mb-2" />
                  <span className="text-sm font-medium">Enter Grades</span>
                </Link>
                <Link
                  to="/lms/online-classes"
                  className="p-4 bg-yellow-50 rounded-lg text-center hover:bg-yellow-100 transition duration-200"
                >
                  <FaChalkboardTeacher className="text-yellow-600 text-xl mx-auto mb-2" />
                  <span className="text-sm font-medium">Schedule Class</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;