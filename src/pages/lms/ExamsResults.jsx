// src/pages/lms/ExamsResults.jsx
import { useState } from 'react';
import { 
  FaFileAlt, FaChartLine, FaCalendarAlt, FaDownload, 
  FaPrint, FaSearch, FaFilter, FaSort 
} from 'react-icons/fa';

const ExamsResults = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExam, setSelectedExam] = useState(null);

  const exams = {
    upcoming: [
      {
        id: 1,
        name: 'Mid-Term Mathematics',
        subject: 'Mathematics',
        date: '2024-02-15',
        time: '10:00 AM - 12:00 PM',
        duration: '2 hours',
        totalMarks: 100,
        syllabus: 'Chapters 1-5: Algebra, Geometry',
        location: 'Exam Hall A',
        type: 'written'
      },
      {
        id: 2,
        name: 'Physics Practical',
        subject: 'Physics',
        date: '2024-02-18',
        time: '2:00 PM - 4:00 PM',
        duration: '2 hours',
        totalMarks: 50,
        syllabus: 'Lab Experiments 1-6',
        location: 'Physics Lab',
        type: 'practical'
      },
    ],
    completed: [
      {
        id: 3,
        name: 'Quarterly English',
        subject: 'English',
        date: '2024-01-20',
        obtainedMarks: 85,
        totalMarks: 100,
        percentage: '85%',
        grade: 'A',
        rank: 5,
        status: 'published'
      },
      {
        id: 4,
        name: 'History Test',
        subject: 'History',
        date: '2024-01-15',
        obtainedMarks: 42,
        totalMarks: 50,
        percentage: '84%',
        grade: 'B+',
        rank: 12,
        status: 'published'
      },
    ],
    marksheets: [
      {
        id: 5,
        exam: 'Final Examination 2023',
        date: '2023-12-20',
        totalSubjects: 6,
        totalMarks: 600,
        obtainedMarks: 525,
        percentage: '87.5%',
        grade: 'A+',
        rank: 3,
        downloadUrl: '/marksheets/final-2023.pdf'
      },
    ]
  };

  const overallPerformance = {
    totalExams: 12,
    averageScore: '84.5%',
    bestSubject: 'Mathematics (92%)',
    attendance: '96%',
    rank: 'Top 10%'
  };

  const handleDownloadResult = (examId) => {
    alert(`Downloading result for exam ${examId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Exams & Results</h1>
            <p className="text-gray-600">Track your exam schedule and view results</p>
          </div>
          
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search exams..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
              <FaFilter /> Filter
            </button>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="card p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Performance Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{overallPerformance.totalExams}</div>
              <p className="text-gray-600">Total Exams</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{overallPerformance.averageScore}</div>
              <p className="text-gray-600">Average Score</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{overallPerformance.bestSubject.split(' ')[0]}</div>
              <p className="text-gray-600">Best Subject</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600 mb-2">{overallPerformance.attendance}</div>
              <p className="text-gray-600">Exam Attendance</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">{overallPerformance.rank}</div>
              <p className="text-gray-600">Class Rank</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 overflow-x-auto">
          {['upcoming', 'completed', 'marksheets'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-lg font-medium transition duration-200 whitespace-nowrap ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab === 'upcoming' ? 'Upcoming Exams' :
               tab === 'completed' ? 'Completed Exams' :
               'Mark Sheets'}
            </button>
          ))}
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {exams[activeTab].map(exam => (
            <div key={exam.id} className="card overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                {/* Exam Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{exam.name}</h3>
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                        <FaFileAlt />
                        {exam.subject}
                      </span>
                      <span className="inline-flex items-center gap-2 text-sm text-gray-600">
                        <FaCalendarAlt />
                        {exam.date}
                      </span>
                    </div>
                  </div>
                  {exam.grade && (
                    <div className="text-center">
                      <div className={`text-2xl font-bold ${
                        exam.grade === 'A+' ? 'text-green-600' :
                        exam.grade === 'A' ? 'text-blue-600' :
                        exam.grade === 'B+' ? 'text-yellow-600' :
                        'text-red-600'
                      }`}>
                        {exam.grade}
                      </div>
                      <div className="text-sm text-gray-600">Grade</div>
                    </div>
                  )}
                </div>

                {/* Exam Details */}
                <div className="space-y-3 mb-6">
                  {exam.time && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Time:</span>
                      <span className="font-medium">{exam.time}</span>
                    </div>
                  )}
                  {exam.duration && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium">{exam.duration}</span>
                    </div>
                  )}
                  {exam.totalMarks && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Marks:</span>
                      <span className="font-medium">{exam.totalMarks}</span>
                    </div>
                  )}
                  {exam.obtainedMarks && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Obtained Marks:</span>
                      <span className="font-medium">{exam.obtainedMarks}/{exam.totalMarks}</span>
                    </div>
                  )}
                  {exam.percentage && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Percentage:</span>
                      <span className="font-medium">{exam.percentage}</span>
                    </div>
                  )}
                  {exam.rank && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Rank:</span>
                      <span className="font-medium">{exam.rank}</span>
                    </div>
                  )}
                  {exam.location && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span className="font-medium">{exam.location}</span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {activeTab === 'upcoming' ? (
                    <>
                      <button
                        onClick={() => setSelectedExam(exam)}
                        className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                      >
                        View Details
                      </button>
                      <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200">
                        <FaDownload />
                      </button>
                    </>
                  ) : activeTab === 'completed' ? (
                    <>
                      <button
                        onClick={() => handleDownloadResult(exam.id)}
                        className="flex-1 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 flex items-center justify-center gap-2"
                      >
                        <FaDownload /> Download Result
                      </button>
                      <button className="px-4 py-2 bg-blue-200 rounded-lg hover:bg-blue-300 transition duration-200">
                        <FaPrint />
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => handleDownloadResult(exam.id)}
                        className="flex-1 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200 flex items-center justify-center gap-2"
                      >
                        <FaDownload /> Download Marksheet
                      </button>
                      <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition duration-200">
                        View Details
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View Modal */}
        {selectedExam && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <h2 className="text-2xl font-bold">{selectedExam.name}</h2>
                  <button
                    onClick={() => setSelectedExam(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Subject</p>
                      <p className="font-semibold">{selectedExam.subject}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Type</p>
                      <p className="font-semibold capitalize">{selectedExam.type}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Date</p>
                      <p className="font-semibold">{selectedExam.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Time</p>
                      <p className="font-semibold">{selectedExam.time}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Duration</p>
                      <p className="font-semibold">{selectedExam.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Total Marks</p>
                      <p className="font-semibold">{selectedExam.totalMarks}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-600 mb-2">Syllabus</p>
                    <p className="font-medium">{selectedExam.syllabus}</p>
                  </div>

                  <div>
                    <p className="text-gray-600 mb-2">Instructions</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Carry your student ID card</li>
                      <li>Report 30 minutes before exam time</li>
                      <li>No electronic devices allowed</li>
                      <li>Use blue/black pen only</li>
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button className="flex-1 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                      Download Admit Card
                    </button>
                    <button className="flex-1 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50">
                      Add to Calendar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExamsResults;