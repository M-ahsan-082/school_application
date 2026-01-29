// src/pages/lms/Attendance.jsx
import { useState } from 'react';
import { 
  FaCalendarAlt, FaCheckCircle, FaTimesCircle, FaClock, 
  FaChartBar, FaDownload, FaFilter, FaSearch 
} from 'react-icons/fa';

const Attendance = () => {
  const [activeMonth, setActiveMonth] = useState('January 2024');
  const [viewType, setViewType] = useState('calendar');
  
  const attendanceData = {
    overall: {
      present: 45,
      absent: 3,
      late: 2,
      leave: 5,
      percentage: '89.1%'
    },
    monthly: [
      { month: 'Jan', present: 22, absent: 1, percentage: '95.7%' },
      { month: 'Feb', present: 20, absent: 2, percentage: '90.9%' },
      { month: 'Mar', present: 23, absent: 0, percentage: '100%' },
      { month: 'Apr', present: 21, absent: 3, percentage: '87.5%' },
    ],
    daily: [
      { date: '2024-01-01', status: 'present', checkIn: '8:45 AM', checkOut: '3:15 PM' },
      { date: '2024-01-02', status: 'present', checkIn: '8:50 AM', checkOut: '3:10 PM' },
      { date: '2024-01-03', status: 'absent', checkIn: null, checkOut: null, reason: 'Sick Leave' },
      { date: '2024-01-04', status: 'late', checkIn: '9:15 AM', checkOut: '3:20 PM' },
      { date: '2024-01-05', status: 'present', checkIn: '8:55 AM', checkOut: '3:05 PM' },
      { date: '2024-01-06', status: 'leave', checkIn: null, checkOut: null, reason: 'Family Function' },
      { date: '2024-01-07', status: 'present', checkIn: '8:40 AM', checkOut: '3:00 PM' },
    ]
  };

  const subjectsAttendance = [
    { subject: 'Mathematics', total: 45, present: 42, percentage: '93.3%' },
    { subject: 'Physics', total: 30, present: 28, percentage: '93.3%' },
    { subject: 'English', total: 40, present: 38, percentage: '95.0%' },
    { subject: 'Chemistry', total: 35, present: 32, percentage: '91.4%' },
  ];

  const getStatusIcon = (status) => {
    switch(status) {
      case 'present': return <FaCheckCircle className="text-green-500" />;
      case 'absent': return <FaTimesCircle className="text-red-500" />;
      case 'late': return <FaClock className="text-yellow-500" />;
      case 'leave': return <FaCalendarAlt className="text-blue-500" />;
      default: return null;
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'present': return 'bg-green-100 text-green-600';
      case 'absent': return 'bg-red-100 text-red-600';
      case 'late': return 'bg-yellow-100 text-yellow-600';
      case 'leave': return 'bg-blue-100 text-blue-600';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Attendance</h1>
            <p className="text-gray-600">Track your attendance record and statistics</p>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="month"
                className="pl-12 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value="2024-01"
              />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <FaDownload /> Export
            </button>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="card p-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{attendanceData.overall.present}</div>
              <p className="opacity-90">Days Present</p>
            </div>
          </div>
          <div className="card p-6 bg-gradient-to-r from-red-500 to-pink-600 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{attendanceData.overall.absent}</div>
              <p className="opacity-90">Days Absent</p>
            </div>
          </div>
          <div className="card p-6 bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{attendanceData.overall.late}</div>
              <p className="opacity-90">Late Arrivals</p>
            </div>
          </div>
          <div className="card p-6 bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{attendanceData.overall.leave}</div>
              <p className="opacity-90">Leave Days</p>
            </div>
          </div>
          <div className="card p-6 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">{attendanceData.overall.percentage}</div>
              <p className="opacity-90">Attendance %</p>
            </div>
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setViewType('calendar')}
            className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${
              viewType === 'calendar'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Calendar View
          </button>
          <button
            onClick={() => setViewType('monthly')}
            className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${
              viewType === 'monthly'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Monthly Report
          </button>
          <button
            onClick={() => setViewType('subject')}
            className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${
              viewType === 'subject'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Subject-wise
          </button>
        </div>

        {viewType === 'calendar' ? (
          /* Calendar View */
          <div className="card p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">January 2024</h2>
              <div className="flex gap-2">
                <button className="px-4 py-2 border rounded-lg">←</button>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Today</button>
                <button className="px-4 py-2 border rounded-lg">→</button>
              </div>
            </div>

            {/* Calendar Header */}
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="text-center font-semibold text-gray-600 p-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {attendanceData.daily.map((day, index) => (
                <div key={index} className="aspect-square">
                  <div className={`h-full border rounded-lg p-2 flex flex-col items-center justify-center ${
                    day.status === 'present' ? 'bg-green-50 border-green-200' :
                    day.status === 'absent' ? 'bg-red-50 border-red-200' :
                    day.status === 'late' ? 'bg-yellow-50 border-yellow-200' :
                    'bg-blue-50 border-blue-200'
                  }`}>
                    <div className="text-lg font-bold">{new Date(day.date).getDate()}</div>
                    <div className="mt-1">
                      {getStatusIcon(day.status)}
                    </div>
                    <div className="text-xs mt-1 capitalize">{day.status}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-100 border border-green-300 rounded"></div>
                <span>Present</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-100 border border-red-300 rounded"></div>
                <span>Absent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-100 border border-yellow-300 rounded"></div>
                <span>Late</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-100 border border-blue-300 rounded"></div>
                <span>Leave</span>
              </div>
            </div>
          </div>
        ) : viewType === 'monthly' ? (
          /* Monthly Report View */
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Monthly Attendance Report</h2>
            <div className="space-y-6">
              {attendanceData.monthly.map((month, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">{month.month} 2024</h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full">
                      {month.percentage}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Present: {month.present} days</span>
                        <span>{Math.round((month.present / (month.present + month.absent)) * 100)}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${(month.present / (month.present + month.absent)) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      Absent: {month.absent} days
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Subject-wise View */
          <div className="card p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6">Subject-wise Attendance</h2>
            <div className="space-y-6">
              {subjectsAttendance.map((subject, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg font-semibold">{subject.subject}</h3>
                      <p className="text-sm text-gray-600">
                        {subject.present} of {subject.total} classes attended
                      </p>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">{subject.percentage}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Attendance Progress</span>
                      <span>{subject.percentage}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full"
                        style={{ width: subject.percentage }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Detailed Attendance Table */}
        <div className="card p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Detailed Attendance Record</h2>
            <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 flex items-center gap-2">
              <FaFilter /> Filter
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Date</th>
                  <th className="text-left py-3 px-4">Day</th>
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-left py-3 px-4">Check-in</th>
                  <th className="text-left py-3 px-4">Check-out</th>
                  <th className="text-left py-3 px-4">Remarks</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.daily.map((day, index) => (
                  <tr key={index} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">{day.date}</td>
                    <td className="py-3 px-4">
                      {new Date(day.date).toLocaleDateString('en-US', { weekday: 'long' })}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-sm ${getStatusColor(day.status)}`}>
                        {day.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="py-3 px-4">{day.checkIn || '--:--'}</td>
                    <td className="py-3 px-4">{day.checkOut || '--:--'}</td>
                    <td className="py-3 px-4">{day.reason || '--'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;