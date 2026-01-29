// src/pages/Dashboard/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { 
  FaUsers, FaChalkboardTeacher, FaBook, FaDollarSign, 
  FaChartLine, FaCalendarAlt, FaBell, FaCog 
} from 'react-icons/fa';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalStudents: 1245,
    totalTeachers: 86,
    activeCourses: 42,
    revenue: 1250000,
    attendanceRate: 94.5,
    satisfactionRate: 92.3
  });

  const [revenueData, setRevenueData] = useState([
    { month: 'Jan', revenue: 120000 },
    { month: 'Feb', revenue: 145000 },
    { month: 'Mar', revenue: 135000 },
    { month: 'Apr', revenue: 160000 },
    { month: 'May', revenue: 185000 },
    { month: 'Jun', revenue: 210000 },
  ]);

  const [studentDemographics, setStudentDemographics] = useState([
    { grade: '9th', students: 320 },
    { grade: '10th', students: 315 },
    { grade: '11th', students: 305 },
    { grade: '12th', students: 305 },
  ]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600">Welcome back, Administrator</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <FaUsers className="text-2xl text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.totalStudents}</div>
              <div className="text-gray-600">Students</div>
            </div>
          </div>
          <div className="mt-4 text-sm text-green-600">
            <FaChartLine className="inline mr-1" />
            +12% from last month
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 rounded-lg mr-4">
              <FaChalkboardTeacher className="text-2xl text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.totalTeachers}</div>
              <div className="text-gray-600">Teachers</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 rounded-lg mr-4">
              <FaBook className="text-2xl text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.activeCourses}</div>
              <div className="text-gray-600">Active Courses</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 rounded-lg mr-4">
              <FaDollarSign className="text-2xl text-yellow-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">
                ${(stats.revenue / 1000).toFixed(0)}K
              </div>
              <div className="text-gray-600">Revenue</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-red-100 rounded-lg mr-4">
              <FaCalendarAlt className="text-2xl text-red-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.attendanceRate}%</div>
              <div className="text-gray-600">Attendance</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-indigo-100 rounded-lg mr-4">
              <FaBell className="text-2xl text-indigo-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{stats.satisfactionRate}%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-bold mb-4">Revenue Trend</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Student Demographics */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-bold mb-4">Student Distribution by Grade</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={studentDemographics}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={(entry) => `${entry.grade}: ${entry.students}`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="students"
                >
                  {studentDemographics.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-lg font-bold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { user: 'John Smith', action: 'submitted assignment', time: '2 mins ago' },
                { user: 'Dr. Sarah Johnson', action: 'posted new assignment', time: '15 mins ago' },
                { user: 'Emma Wilson', action: 'updated grades', time: '1 hour ago' },
                { user: 'System', action: 'scheduled maintenance', time: '2 hours ago' },
              ].map((activity, index) => (
                <div key={index} className="flex items-center p-3 border rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <FaUsers className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{activity.user}</div>
                    <div className="text-sm text-gray-600">{activity.action}</div>
                  </div>
                  <div className="text-sm text-gray-500">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow p-6">
          <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full text-left p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
              <FaCog className="inline mr-3 text-blue-600" />
              Manage Users
            </button>
            <button className="w-full text-left p-4 bg-green-50 rounded-lg hover:bg-green-100 transition">
              <FaBook className="inline mr-3 text-green-600" />
              Add New Course
            </button>
            <button className="w-full text-left p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition">
              <FaDollarSign className="inline mr-3 text-purple-600" />
              View Financial Reports
            </button>
            <button className="w-full text-left p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition">
              <FaCalendarAlt className="inline mr-3 text-yellow-600" />
              Schedule Events
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;