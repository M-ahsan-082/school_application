import React, { useState } from 'react';
import { FaVideo, FaCalendarAlt, FaChalkboardTeacher, FaUsers, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const OnlineClasses = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const classData = [
    {
      id: 1,
      title: 'Advanced Mathematics',
      teacher: 'Dr. Sarah Johnson',
      time: '10:00 AM - 11:30 AM',
      day: 'Mon, Wed, Fri',
      status: 'live',
      students: 45,
      thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb',
      meetingLink: '#'
    },
    // More classes...
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Online Classes</h1>
        <p className="text-gray-600">Join live classes and access recorded sessions</p>
      </div>

      {/* Live Now Section */}
      <div className="mb-8">
        <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                <span className="font-semibold">LIVE NOW</span>
              </div>
              <h2 className="text-2xl font-bold">Physics - Quantum Mechanics</h2>
              <p className="mt-2">Dr. Michael Chen • 65 students attending</p>
            </div>
            <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              <FaVideo className="inline mr-2" />
              Join Class
            </button>
          </div>
        </div>
      </div>

      {/* Class Schedule */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classData.map((classItem, index) => (
          <motion.div
            key={classItem.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            <div className="relative">
              <img 
                src={classItem.thumbnail} 
                alt={classItem.title}
                className="w-full h-48 object-cover"
              />
              {classItem.status === 'live' && (
                <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  LIVE
                </span>
              )}
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg mb-1">{classItem.title}</h3>
                  <p className="text-gray-600 text-sm flex items-center">
                    <FaChalkboardTeacher className="mr-2" />
                    {classItem.teacher}
                  </p>
                </div>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-gray-600">
                  <FaClock className="mr-2" />
                  <span>{classItem.time}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaCalendarAlt className="mr-2" />
                  <span>{classItem.day}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <FaUsers className="mr-2" />
                  <span>{classItem.students} students</span>
                </div>
              </div>

              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Join Class
                </button>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Calendar View */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Weekly Schedule</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Time</th>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                  <th key={day} className="text-left p-3">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {/* Schedule rows would go here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OnlineClasses;