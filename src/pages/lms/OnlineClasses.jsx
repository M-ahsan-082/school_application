// src/pages/lms/OnlineClasses.jsx
import { useState } from 'react';
import { 
  FaVideo, FaCalendarAlt, FaClock, FaUserFriends, 
  FaPlay, FaMicrophone, FaComments, FaDownload 
} from 'react-icons/fa';

const OnlineClasses = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedClass, setSelectedClass] = useState(null);

  const classes = {
    upcoming: [
      {
        id: 1,
        subject: 'Mathematics - Algebra',
        teacher: 'Mr. John Smith',
        time: 'Today, 10:00 AM - 10:45 AM',
        description: 'Linear equations and inequalities',
        duration: '45 min',
        participants: 35,
        meetingLink: 'https://meet.school.edu/math101'
      },
      {
        id: 2,
        subject: 'Physics - Mechanics',
        teacher: 'Dr. Sarah Johnson',
        time: 'Tomorrow, 11:30 AM - 12:30 PM',
        description: 'Newton\'s laws of motion',
        duration: '60 min',
        participants: 42,
        meetingLink: 'https://meet.school.edu/physics101'
      },
    ],
    recorded: [
      {
        id: 3,
        subject: 'Chemistry - Organic',
        teacher: 'Dr. Robert Wilson',
        date: 'Jan 15, 2024',
        duration: '50 min',
        views: 125,
        downloadUrl: '/recordings/chem-organic.mp4'
      },
      {
        id: 4,
        subject: 'English Literature',
        teacher: 'Ms. Emily Davis',
        date: 'Jan 14, 2024',
        duration: '55 min',
        views: 98,
        downloadUrl: '/recordings/english-lit.mp4'
      },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Online Classes</h1>
        <p className="text-gray-600 mb-8">Join live classes or watch recorded sessions</p>

        {/* Class Room (If selected) */}
        {selectedClass && (
          <div className="card p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">{selectedClass.subject}</h2>
              <button 
                onClick={() => setSelectedClass(null)}
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
              >
                Back to List
              </button>
            </div>
            
            {/* Video Player */}
            <div className="bg-black rounded-lg aspect-video mb-6 flex items-center justify-center">
              <div className="text-center">
                <FaVideo className="text-white text-6xl mb-4" />
                <p className="text-white text-xl">Live Class in Progress</p>
              </div>
            </div>

            {/* Class Controls */}
            <div className="flex gap-4 mb-6">
              <button className="flex-1 py-3 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700">
                <FaPlay /> Join Class
              </button>
              <button className="p-3 bg-gray-200 rounded-lg hover:bg-gray-300">
                <FaMicrophone />
              </button>
              <button className="p-3 bg-gray-200 rounded-lg hover:bg-gray-300">
                <FaComments />
              </button>
            </div>

            {/* Class Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Teacher</h4>
                <p>{selectedClass.teacher}</p>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Duration</h4>
                <p>{selectedClass.duration}</p>
              </div>
              <div className="card p-4">
                <h4 className="font-semibold mb-2">Participants</h4>
                <p>{selectedClass.participants} students</p>
              </div>
            </div>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${
              activeTab === 'upcoming'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Upcoming Classes
          </button>
          <button
            onClick={() => setActiveTab('recorded')}
            className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${
              activeTab === 'recorded'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Recorded Sessions
          </button>
        </div>

        {/* Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes[activeTab].map(cls => (
            <div key={cls.id} className="card overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{cls.subject}</h3>
                    <p className="text-gray-600">{cls.teacher}</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FaVideo className="text-blue-600 text-xl" />
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCalendarAlt />
                    <span className="text-sm">{cls.time || cls.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaClock />
                    <span className="text-sm">{cls.duration}</span>
                  </div>
                  {cls.participants && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaUserFriends />
                      <span className="text-sm">{cls.participants} students</span>
                    </div>
                  )}
                </div>

                {cls.description && (
                  <p className="text-gray-600 mb-6">{cls.description}</p>
                )}

                <div className="flex gap-3">
                  {activeTab === 'upcoming' ? (
                    <>
                      <button
                        onClick={() => setSelectedClass(cls)}
                        className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                      >
                        Join Class
                      </button>
                      <button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                        <FaCalendarAlt />
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                        Watch Now
                      </button>
                      <button className="p-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                        <FaDownload />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineClasses;