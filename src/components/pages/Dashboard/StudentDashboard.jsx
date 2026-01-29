import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaBook, 
  FaChartLine, 
  FaClipboardList,
  FaBell,
  FaUserGraduate
} from 'react-icons/fa';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';
import { useAuth } from '../../context/AuthContext';

const StudentDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const attendanceData = [
    { month: 'Jan', attendance: 92 },
    { month: 'Feb', attendance: 88 },
    { month: 'Mar', attendance: 95 },
    { month: 'Apr', attendance: 90 },
    { month: 'May', attendance: 94 },
  ];

  const gradeData = [
    { subject: 'Math', grade: 85, color: '#0088FE' },
    { subject: 'Science', grade: 92, color: '#00C49F' },
    { subject: 'English', grade: 78, color: '#FFBB28' },
    { subject: 'History', grade: 88, color: '#FF8042' },
  ];

  const upcomingAssignments = [
    { id: 1, title: 'Math Homework', dueDate: '2024-01-20', course: 'Mathematics' },
    { id: 2, title: 'Science Project', dueDate: '2024-01-25', course: 'Science' },
    { id: 3, title: 'English Essay', dueDate: '2024-01-22', course: 'English' },
  ];

  const recentActivities = [
    { id: 1, activity: 'Submitted Math assignment', time: '2 hours ago' },
    { id: 2, activity: 'Joined online Physics class', time: '1 day ago' },
    { id: 3, activity: 'Received grade for History test', time: '2 days ago' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                {user?.avatar ? (
                  <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-full" />
                ) : (
                  <FaUserGraduate className="text-3xl text-blue-600" />
                )}
              </div>
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {user?.name}!</h1>
                <p className="text-blue-100">Class: {user?.class} | Roll No: {user?.rollNumber}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition">
                <FaBell className="inline mr-2" />
                Notifications
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto p-4">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Current GPA</p>
                <p className="text-3xl font-bold text-blue-600">3.8</p>
              </div>
              <FaChartLine className="text-4xl text-blue-200" />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Attendance</p>
                <p className="text-3xl font-bold text-green-600">92%</p>
              </div>
              <FaCalendarAlt className="text-4xl text-green-200" />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Courses</p>
                <p className="text-3xl font-bold text-purple-600">6</p>
              </div>
              <FaBook className="text-4xl text-purple-200" />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500">Pending Assignments</p>
                <p className="text-3xl font-bold text-yellow-600">3</p>
              </div>
              <FaClipboardList className="text-4xl text-yellow-200" />
            </div>
          </motion.div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Attendance Chart */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Attendance Trend</h2>
              <div className="h-64">
                <LineChart width={600} height={250} data={attendanceData}>
                  <Line type="monotone" dataKey="attendance" stroke="#8884d8" />
                </LineChart>
              </div>
            </div>

            {/* Upcoming Assignments */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Upcoming Assignments</h2>
              <div className="space-y-4">
                {upcomingAssignments.map((assignment) => (
                  <div key={assignment.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                    <div>
                      <h3 className="font-semibold">{assignment.title}</h3>
                      <p className="text-gray-600 text-sm">{assignment.course}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-500">Due Date</p>
                      <p className="font-semibold text-red-600">{assignment.dueDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Grades Overview */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Grades Overview</h2>
              <div className="h-64">
                <PieChart width={300} height={200}>
                  <Pie
                    data={gradeData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.subject}: ${entry.grade}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="grade"
                  >
                    {gradeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="border-l-4 border-blue-500 pl-4 py-2">
                    <p className="font-medium">{activity.activity}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <div className="space-y-3">
                <a href="/online-classes" className="block p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition">
                  🎓 Join Online Class
                </a>
                <a href="/assignments" className="block p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition">
                  📝 Submit Assignment
                </a>
                <a href="/exams-results" className="block p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition">
                  📊 View Results
                </a>
                <a href="/attendance" className="block p-3 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition">
                  📅 Check Attendance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;