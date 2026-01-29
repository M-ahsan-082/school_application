// src/pages/Teachers.jsx
import { useState } from 'react';
import { FaGraduationCap, FaBook, FaStar, FaEnvelope, FaPhone, FaChalkboardTeacher } from 'react-icons/fa';

const Teachers = () => {
  const [teachers] = useState([
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      position: 'Head of Science Department',
      department: 'Science',
      experience: '15 years',
      education: 'PhD in Physics, MIT',
      subjects: ['Physics', 'Advanced Mathematics'],
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah',
      rating: 4.9,
      email: 'sarah.johnson@school.edu',
      phone: '+1 (555) 123-4567'
    },
    {
      id: 2,
      name: 'Mr. John Smith',
      position: 'Mathematics Coordinator',
      department: 'Mathematics',
      experience: '12 years',
      education: 'M.Sc Mathematics, Harvard',
      subjects: ['Algebra', 'Calculus', 'Statistics'],
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
      rating: 4.8,
      email: 'john.smith@school.edu',
      phone: '+1 (555) 234-5678'
    },
    {
      id: 3,
      name: 'Ms. Emily Davis',
      position: 'English Literature Teacher',
      department: 'Languages',
      experience: '10 years',
      education: 'MA English Literature, Oxford',
      subjects: ['English Literature', 'Creative Writing'],
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily',
      rating: 4.7,
      email: 'emily.davis@school.edu',
      phone: '+1 (555) 345-6789'
    },
    {
      id: 4,
      name: 'Prof. Michael Chen',
      position: 'Computer Science Head',
      department: 'Technology',
      experience: '18 years',
      education: 'PhD Computer Science, Stanford',
      subjects: ['Programming', 'AI', 'Data Structures'],
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Michael',
      rating: 4.9,
      email: 'michael.chen@school.edu',
      phone: '+1 (555) 456-7890'
    },
    {
      id: 5,
      name: 'Dr. Robert Wilson',
      position: 'Biology Professor',
      department: 'Science',
      experience: '14 years',
      education: 'PhD in Biology, Cambridge',
      subjects: ['Biology', 'Environmental Science'],
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert',
      rating: 4.6,
      email: 'robert.wilson@school.edu',
      phone: '+1 (555) 567-8901'
    },
    {
      id: 6,
      name: 'Ms. Lisa Anderson',
      position: 'Art Director',
      department: 'Arts',
      experience: '8 years',
      education: 'MFA Fine Arts, RISD',
      subjects: ['Drawing', 'Painting', 'Digital Art'],
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa',
      rating: 4.8,
      email: 'lisa.anderson@school.edu',
      phone: '+1 (555) 678-9012'
    },
  ]);

  const departments = ['All', 'Science', 'Mathematics', 'Languages', 'Technology', 'Arts'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Faculty</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet our dedicated team of educators committed to shaping future leaders through 
            innovative teaching and mentorship.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Department Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {departments.map(dept => (
            <button
              key={dept}
              className="px-6 py-3 bg-white rounded-lg shadow hover:shadow-md transition duration-200 font-medium"
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teachers.map(teacher => (
            <div key={teacher.id} className="card overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="p-6 text-center">
                {/* Teacher Image */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-blue-600 text-white p-2 rounded-full">
                    <FaChalkboardTeacher />
                  </div>
                </div>

                {/* Teacher Info */}
                <h3 className="text-2xl font-bold mb-2">{teacher.name}</h3>
                <p className="text-blue-600 font-semibold mb-1">{teacher.position}</p>
                <p className="text-gray-600 mb-4">{teacher.department} Department</p>

                {/* Rating */}
                <div className="flex items-center justify-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`${
                        i < Math.floor(teacher.rating) 
                          ? 'text-yellow-500' 
                          : 'text-gray-300'
                      }`} 
                    />
                  ))}
                  <span className="ml-2 font-semibold">{teacher.rating}</span>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <FaGraduationCap className="text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Education</p>
                      <p className="font-medium">{teacher.education}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaBook className="text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Experience</p>
                      <p className="font-medium">{teacher.experience}</p>
                    </div>
                  </div>
                </div>

                {/* Subjects */}
                <div className="mb-6">
                  <p className="text-sm text-gray-500 mb-2">Subjects:</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {teacher.subjects.map((subject, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-t pt-6">
                  <div className="flex justify-center gap-4">
                    <a 
                      href={`mailto:${teacher.email}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition duration-200"
                    >
                      <FaEnvelope />
                      <span className="text-sm">Email</span>
                    </a>
                    <a 
                      href={`tel:${teacher.phone}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition duration-200"
                    >
                      <FaPhone />
                      <span className="text-sm">Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Faculty Statistics */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Faculty Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-3">50+</div>
              <p className="text-gray-600">Qualified Teachers</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-3">15+</div>
              <p className="text-gray-600">Average Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-3">95%</div>
              <p className="text-gray-600">Advanced Degrees</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-600 mb-3">4.8</div>
              <p className="text-gray-600">Average Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;