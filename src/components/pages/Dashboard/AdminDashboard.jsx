// src/pages/dashboard/AdminDashboard.jsx
import { useState } from 'react';
import { 
  FaUsers, FaChalkboardTeacher, FaBook, FaChartBar, 
  FaCog, FaBell, FaFileInvoiceDollar, FaCalendarCheck,
  FaUserPlus, FaUserCheck, FaUserClock, FaMoneyCheckAlt
} from 'react-icons/fa';
import { Bar, Pie, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const AdminDashboard = () => {
  const [stats] = useState({
    totalStudents: 1250,
    totalTeachers: 85,
    activeCourses: 56,
    pendingAdmissions: 34,
    revenue: '$125,450',
    attendance: '94.2%'
  });

  const [recentActivities] = useState([
    { id: 1, user: 'John Doe', action: 'Enrolled in Mathematics', time: '10 min ago', type: 'enrollment' },
    { id: 2, user: 'Sarah Smith', action: 'Submitted Assignment', time: '25 min ago', type: 'assignment' },
    { id: 3, user: 'Mike Johnson', action: 'Joined Online Class', time: '1 hour ago', type: 'class' },
    { id: 4, user: 'Emily Davis', action: 'Fee Payment', time: '2 hours ago', type: 'payment' },
  ]);

  const [pendingRequests] = useState([
    { id: 1, type: 'admission', name: 'Robert Wilson', date: '2024-01-20', status: 'pending' },
    { id: 2, type: 'leave', name: 'Mr. John Smith', date: '2024-01-21', status: 'pending' },
    { id: 3, type: 'certificate', name: 'Emma Brown', date: '2024-01-22', status: 'pending' },
  ]);

  // Chart.js Data
  const enrollmentData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'New Students',
      data: [65, 78, 90, 85, 92, 110],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgb(59, 130, 246)',
      borderWidth: 2
    }]
  };

  const revenueData = {
    labels: ['Tuition', 'Admission', 'Transport', 'Activities', 'Others'],
    datasets: [{
      data: [85000, 25000, 8000, 4500, 5000],
      backgroundColor: [
        'rgba(59, 130, 246, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(245, 158, 11, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(239, 68, 68, 0.8)'
      ]
    }]
  };

  const attendanceTrend = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Students',
        data: [92, 94, 93, 95, 94],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.3
      },
      {
        label: 'Teachers',
        data: [96, 97, 95, 98, 97],
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.1)',
        tension: 0.3
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">School Management Overview</p>
            <p className="text-sm text-gray-500">Last updated: Today, 10:30 AM</p>
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="relative">
              <FaBell className="text-2xl text-gray-600 cursor-pointer" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </div>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
              Generate Report
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <div className="card p-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Total Students</p>
                <p className="text-3xl font-bold">{stats.totalStudents}</p>
              </div>
              <FaUsers className="text-3xl opacity-80" />
            </div>
            <div className="mt-4 text-sm opacity-90">
              <span className="text-green-300">↑ 5.2%</span> from last month
            </div>
          </div>
          
          <div className="card p-6 bg-gradient-to-r from-green-500 to-green-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Teachers</p>
                <p className="text-3xl font-bold">{stats.totalTeachers}</p>
              </div>
              <FaChalkboardTeacher className="text-3xl opacity-80" />
            </div>
            <div className="mt-4 text-sm opacity-90">
              <span className="text-green-300">↑ 2.1%</span> from last month
            </div>
          </div>
          
          <div className="card p-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Active Courses</p>
                <p className="text-3xl font-bold">{stats.activeCourses}</p>
              </div>
              <FaBook className="text-3xl opacity-80" />
            </div>
            <div className="mt-4 text-sm opacity-90">
              <span className="text-green-300">↑ 3.4%</span> from last month
            </div>
          </div>
          
          <div className="card p-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Pending Admissions</p>
                <p className="text-3xl font-bold">{stats.pendingAdmissions}</p>
              </div>
              <FaUserClock className="text-3xl opacity-80" />
            </div>
            <div className="mt-4 text-sm opacity-90">
              Needs review
            </div>
          </div>
          
          <div className="card p-6 bg-gradient-to-r from-red-500 to-red-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Revenue</p>
                <p className="text-3xl font-bold">{stats.revenue}</p>
              </div>
              <FaMoneyCheckAlt className="text-3xl opacity-80" />
            </div>
            <div className="mt-4 text-sm opacity-90">
              <span className="text-green-300">↑ 12.5%</span> from last month
            </div>
          </div>
          
          <div className="card p-6 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Attendance</p>
                <p className="text-3xl font-bold">{stats.attendance}</p>
              </div>
              <FaCalendarCheck className="text-3xl opacity-80" />
            </div>
            <div className="mt-4 text-sm opacity-90">
              <span className="text-green-300">↑ 0.8%</span> from last week
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Enrollment Trend */}
          <div className="card p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Student Enrollment Trend</h3>
              <select className="border rounded-lg px-3 py-2">
                <option>Last 6 Months</option>
                <option>Last Year</option>
                <option>Last 3 Years</option>
              </select>
            </div>
            <div className="h-64">
              <Bar 
                data={enrollmentData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>

          {/* Revenue Distribution */}
          <div className="card p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Revenue Distribution</h3>
              <FaChartBar className="text-gray-600" />
            </div>
            <div className="h-64">
              <Pie 
                data={revenueData}
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
              />
            </div>
          </div>
        </div>

        {/* Attendance Trend */}
        <div className="card p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold">Weekly Attendance Trend</h3>
            <select className="border rounded-lg px-3 py-2">
              <option>This Week</option>
              <option>Last Week</option>
              <option>This Month</option>
            </select>
          </div>
          <div className="h-64">
            <Line 
              data={attendanceTrend}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: false,
                    min: 90,
                    max: 100
                  }
                }
              }}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-6">Recent Activities</h3>
            <div className="space-y-4">
              {recentActivities.map(activity => (
                <div key={activity.id} className="flex items-start gap-3 p-3 border rounded-lg hover:bg-gray-50 transition duration-200">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    activity.type === 'enrollment' ? 'bg-blue-100 text-blue-600' :
                    activity.type === 'assignment' ? 'bg-green-100 text-green-600' :
                    activity.type === 'class' ? 'bg-purple-100 text-purple-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>
                    {activity.type === 'enrollment' ? <FaUserPlus /> :
                     activity.type === 'assignment' ? <FaBook /> :
                     activity.type === 'class' ? <FaChalkboardTeacher /> :
                     <FaFileInvoiceDollar />}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="font-semibold">{activity.user}</p>
                      <span className="text-sm text-gray-500">{activity.time}</span>
                    </div>
                    <p className="text-gray-600">{activity.action}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-2 border rounded-lg text-blue-600 hover:bg-blue-50 transition duration-200">
              View All Activities
            </button>
          </div>

          {/* Pending Requests */}
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-6">Pending Requests</h3>
            <div className="space-y-4">
              {pendingRequests.map(request => (
                <div key={request.id} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-semibold capitalize">{request.type}</p>
                      <p className="text-gray-600">{request.name}</p>
                    </div>
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-600 text-sm rounded">
                      {request.status}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>Submitted: {request.date}</span>
                    <div className="flex gap-2">
                      <button className="px-3 py-1 bg-green-100 text-green-600 rounded hover:bg-green-200">
                        Approve
                      </button>
                      <button className="px-3 py-1 bg-red-100 text-red-600 rounded hover:bg-red-200">
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-6">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <button className="p-4 bg-blue-50 rounded-lg text-center hover:bg-blue-100 transition duration-200">
                <FaUserPlus className="text-blue-600 text-2xl mx-auto mb-2" />
                <span className="text-sm font-medium">Add User</span>
              </button>
              <button className="p-4 bg-green-50 rounded-lg text-center hover:bg-green-100 transition duration-200">
                <FaBook className="text-green-600 text-2xl mx-auto mb-2" />
                <span className="text-sm font-medium">Add Course</span>
              </button>
              <button className="p-4 bg-purple-50 rounded-lg text-center hover:bg-purple-100 transition duration-200">
                <FaFileInvoiceDollar className="text-purple-600 text-2xl mx-auto mb-2" />
                <span className="text-sm font-medium">Generate Bill</span>
              </button>
              <button className="p-4 bg-yellow-50 rounded-lg text-center hover:bg-yellow-100 transition duration-200">
                <FaChalkboardTeacher className="text-yellow-600 text-2xl mx-auto mb-2" />
                <span className="text-sm font-medium">Add Teacher</span>
              </button>
              <button className="p-4 bg-red-50 rounded-lg text-center hover:bg-red-100 transition duration-200">
                <FaCalendarCheck className="text-red-600 text-2xl mx-auto mb-2" />
                <span className="text-sm font-medium">Attendance</span>
              </button>
              <button className="p-4 bg-indigo-50 rounded-lg text-center hover:bg-indigo-100 transition duration-200">
                <FaCog className="text-indigo-600 text-2xl mx-auto mb-2" />
                <span className="text-sm font-medium">Settings</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;