// src/pages/lms/Assignments.jsx
import { useState } from 'react';
import { 
  FaFileAlt, FaCalendarAlt, FaUpload, FaCheckCircle, 
  FaClock, FaBook, FaDownload, FaEye 
} from 'react-icons/fa';

const Assignments = () => {
  const [activeTab, setActiveTab] = useState('pending');
  
  const assignments = {
    pending: [
      {
        id: 1,
        title: 'Math Project - Algebra',
        subject: 'Mathematics',
        dueDate: '2024-01-25',
        points: 100,
        description: 'Solve linear equations and submit project report.',
        submitted: false,
        fileUrl: null
      },
      {
        id: 2,
        title: 'Physics Lab Report',
        subject: 'Physics',
        dueDate: '2024-01-22',
        points: 50,
        description: 'Complete lab experiment and submit report.',
        submitted: false,
        fileUrl: null
      },
    ],
    submitted: [
      {
        id: 3,
        title: 'English Essay',
        subject: 'English',
        dueDate: '2024-01-20',
        points: 80,
        description: 'Write essay on given topic.',
        submitted: true,
        grade: '85/100',
        feedback: 'Well written!',
        fileUrl: '/assignments/essay.pdf'
      },
      {
        id: 4,
        title: 'History Assignment',
        subject: 'History',
        dueDate: '2024-01-18',
        points: 60,
        description: 'Research on historical events.',
        submitted: true,
        grade: '55/60',
        feedback: 'Good research work.',
        fileUrl: '/assignments/history.pdf'
      },
    ]
  };

  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (assignmentId) => {
    // Simulate upload
    setUploading(true);
    setTimeout(() => {
      setUploading(false);
      alert('Assignment submitted successfully!');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Assignments</h1>
        <p className="text-gray-600 mb-8">Submit your assignments and track progress</p>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${
              activeTab === 'pending'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Pending Assignments
          </button>
          <button
            onClick={() => setActiveTab('submitted')}
            className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${
              activeTab === 'submitted'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Submitted Assignments
          </button>
          <button
            onClick={() => setActiveTab('graded')}
            className={`px-6 py-3 rounded-lg font-medium transition duration-200 ${
              activeTab === 'graded'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Graded Assignments
          </button>
        </div>

        {/* Assignments Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {assignments[activeTab].map(assignment => (
            <div key={assignment.id} className="card overflow-hidden">
              <div className="p-6">
                {/* Assignment Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{assignment.title}</h3>
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                        <FaBook />
                        {assignment.subject}
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                        <FaCalendarAlt />
                        Due: {assignment.dueDate}
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                        <FaFileAlt />
                        Points: {assignment.points}
                      </span>
                    </div>
                  </div>
                  {assignment.submitted ? (
                    <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm">
                      <FaCheckCircle className="inline mr-1" />
                      Submitted
                    </span>
                  ) : (
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-sm">
                      <FaClock className="inline mr-1" />
                      Pending
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">{assignment.description}</p>

                {/* Upload/Status Section */}
                {!assignment.submitted ? (
                  <div className="border rounded-lg p-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Assignment
                    </label>
                    <div className="flex gap-4">
                      <input
                        type="file"
                        onChange={(e) => setSelectedFile(e.target.files[0])}
                        className="flex-1"
                      />
                      <button
                        onClick={() => handleFileUpload(assignment.id)}
                        disabled={!selectedFile || uploading}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                      >
                        {uploading ? 'Uploading...' : 'Submit'}
                      </button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Supported formats: PDF, DOC, PPT, ZIP (Max: 10MB)
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {assignment.grade && (
                      <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                        <div>
                          <p className="font-semibold">Grade</p>
                          <p className="text-2xl font-bold text-blue-600">{assignment.grade}</p>
                        </div>
                        <div>
                          <p className="font-semibold">Feedback</p>
                          <p className="text-gray-600">{assignment.feedback}</p>
                        </div>
                      </div>
                    )}
                    
                    <div className="flex gap-3">
                      <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 flex items-center justify-center gap-2">
                        <FaEye /> View Assignment
                      </button>
                      <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200 flex items-center gap-2">
                        <FaDownload /> Download
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Assignments;