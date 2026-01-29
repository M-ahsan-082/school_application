// src/pages/Courses.jsx
import { useState } from 'react';
import { FaSearch, FaFilter, FaClock, FaUserGraduate, FaBookOpen, FaArrowRight } from 'react-icons/fa';

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [courses] = useState([
    {
      id: 1,
      title: 'Mathematics - Grade 10',
      category: 'science',
      description: 'Comprehensive math course covering algebra, geometry, and trigonometry.',
      duration: '9 months',
      students: 120,
      level: 'Intermediate',
      teacher: 'Mr. John Smith',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Physics Fundamentals',
      category: 'science',
      description: 'Learn the principles of mechanics, thermodynamics, and electromagnetism.',
      duration: '8 months',
      students: 95,
      level: 'Intermediate',
      teacher: 'Dr. Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.9
    },
    {
      id: 3,
      title: 'English Literature',
      category: 'arts',
      description: 'Explore classic and contemporary literature from around the world.',
      duration: '10 months',
      students: 150,
      level: 'Beginner',
      teacher: 'Ms. Emily Davis',
      image: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.7
    },
    {
      id: 4,
      title: 'Computer Science',
      category: 'technology',
      description: 'Introduction to programming, algorithms, and computer systems.',
      duration: '12 months',
      students: 200,
      level: 'Advanced',
      teacher: 'Prof. Michael Chen',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.9
    },
    {
      id: 5,
      title: 'Biology & Life Sciences',
      category: 'science',
      description: 'Study of living organisms and their interactions with the environment.',
      duration: '9 months',
      students: 110,
      level: 'Intermediate',
      teacher: 'Dr. Robert Wilson',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.6
    },
    {
      id: 6,
      title: 'Art & Design',
      category: 'arts',
      description: 'Develop creative skills in drawing, painting, and digital art.',
      duration: '8 months',
      students: 85,
      level: 'Beginner',
      teacher: 'Ms. Lisa Anderson',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      rating: 4.8
    },
  ]);

  const categories = [
    { id: 'all', name: 'All Courses', count: courses.length },
    { id: 'science', name: 'Science', count: courses.filter(c => c.category === 'science').length },
    { id: 'arts', name: 'Arts & Humanities', count: courses.filter(c => c.category === 'arts').length },
    { id: 'technology', name: 'Technology', count: courses.filter(c => c.category === 'technology').length },
    { id: 'mathematics', name: 'Mathematics', count: 4 },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our comprehensive curriculum designed to nurture academic excellence 
            and holistic development.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Search and Filter Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
            <div className="flex-1 w-full lg:w-auto">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full lg:w-96 pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <FaFilter className="text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full transition duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category.name} ({category.count})
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map(course => (
            <div key={course.id} className="card overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="font-semibold text-blue-600">{course.rating} ★</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {course.category.toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaClock />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaUserGraduate />
                    <span className="text-sm">{course.students} Students</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaBookOpen />
                    <span className="text-sm">Level: {course.level}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Instructor</p>
                    <p className="font-semibold">{course.teacher}</p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 group">
                    Enroll Now
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Course Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="card p-8 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <p className="text-gray-600">Courses Offered</p>
          </div>
          <div className="card p-8 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
            <p className="text-gray-600">Success Rate</p>
          </div>
          <div className="card p-8 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">2000+</div>
            <p className="text-gray-600">Students Enrolled</p>
          </div>
          <div className="card p-8 text-center">
            <div className="text-4xl font-bold text-yellow-600 mb-2">50+</div>
            <p className="text-gray-600">Expert Faculty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;