// src/components/lms/NoticeBoard.jsx
import { useState } from 'react';
import { FaBell, FaExclamationCircle, FaInfoCircle, FaCalendarCheck } from 'react-icons/fa';

const NoticeBoard = () => {
  const [notices] = useState([
    {
      id: 1,
      title: 'Mid-Term Exam Schedule',
      type: 'exam',
      date: '2024-02-15',
      priority: 'high',
      description: 'Mid-term exams will begin from February 15th. Check schedule on notice board.',
      author: 'Examination Department'
    },
    {
      id: 2,
      title: 'Sports Day Celebration',
      type: 'event',
      date: '2024-02-20',
      priority: 'medium',
      description: 'Annual Sports Day will be celebrated on February 20th. All students must participate.',
      author: 'Sports Department'
    },
    {
      id: 3,
      title: 'Parent-Teacher Meeting',
      type: 'meeting',
      date: '2024-02-25',
      priority: 'medium',
      description: 'Quarterly parent-teacher meeting scheduled for February 25th.',
      author: 'Academic Office'
    },
    {
      id: 4,
      title: 'Library Hours Extended',
      type: 'information',
      date: '2024-02-01',
      priority: 'low',
      description: 'Library will remain open until 6:00 PM during exam preparation.',
      author: 'Library Department'
    },
  ]);

  const getIcon = (type) => {
    switch(type) {
      case 'exam': return <FaExclamationCircle className="text-red-500" />;
      case 'event': return <FaCalendarCheck className="text-green-500" />;
      case 'meeting': return <FaInfoCircle className="text-blue-500" />;
      default: return <FaBell className="text-gray-500" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'high': return 'bg-red-100 text-red-600 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-600 border-yellow-200';
      case 'low': return 'bg-blue-100 text-blue-600 border-blue-200';
      default: return 'bg-gray-100 text-gray-600 border-gray-200';
    }
  };

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Notice Board</h2>
        <FaBell className="text-gray-600 text-xl" />
      </div>

      <div className="space-y-4">
        {notices.map(notice => (
          <div key={notice.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                {getIcon(notice.type)}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{notice.title}</h3>
                  <span className={`px-2 py-1 text-xs rounded ${getPriorityColor(notice.priority)}`}>
                    {notice.priority.toUpperCase()}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{notice.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-4">
                    <span>{notice.author}</span>
                    <span>•</span>
                    <span>{notice.date}</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-700">
                    View Details →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 border rounded-lg text-blue-600 hover:bg-blue-50 transition duration-200">
        View All Notices
      </button>
    </div>
  );
};

export default NoticeBoard;