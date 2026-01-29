// src/pages/About.jsx
import { FaGraduationCap, FaUsers, FaTrophy, FaBookOpen, FaHeart, FaGlobeAmericas } from 'react-icons/fa';

const About = () => {
  const stats = [
    { icon: <FaGraduationCap />, value: '1995', label: 'Founded In', color: 'text-blue-600' },
    { icon: <FaUsers />, value: '2000+', label: 'Students', color: 'text-green-600' },
    { icon: <FaTrophy />, value: '100+', label: 'Awards Won', color: 'text-yellow-600' },
    { icon: <FaBookOpen />, value: '50+', label: 'Courses', color: 'text-purple-600' },
    { icon: <FaHeart />, value: '150+', label: 'Faculty Members', color: 'text-red-600' },
    { icon: <FaGlobeAmericas />, value: '95%', label: 'Success Rate', color: 'text-indigo-600' },
  ];

  const values = [
    {
      title: 'Excellence',
      description: 'Striving for the highest standards in education and personal development.',
      icon: '⭐'
    },
    {
      title: 'Integrity',
      description: 'Upholding honesty and strong moral principles in all our actions.',
      icon: '🛡️'
    },
    {
      title: 'Innovation',
      description: 'Embracing creativity and modern teaching methodologies.',
      icon: '💡'
    },
    {
      title: 'Community',
      description: 'Fostering a supportive and inclusive learning environment.',
      icon: '🤝'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">About Our School</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Nurturing minds, building character, and shaping futures since 1995.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="card p-6 text-center">
              <div className={`text-3xl mb-3 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="card p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-2xl mb-6">
              🎯
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To provide a transformative educational experience that empowers students with 
              knowledge, skills, and values to become responsible global citizens and leaders 
              of tomorrow.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Foster academic excellence and critical thinking</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Nurture creativity and innovation</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span>Promote social responsibility and ethical values</span>
              </li>
            </ul>
          </div>

          <div className="card p-8">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 text-2xl mb-6">
              👁️
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be recognized as a premier educational institution that sets the benchmark 
              for holistic education, producing well-rounded individuals who contribute 
              positively to society.
            </p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>Pioneer in innovative teaching methodologies</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>Center for excellence in sports and arts</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                <span>Hub for community engagement and service</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* History Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            
            {[
              { year: '1995', event: 'School Founded', description: 'Established with 50 students and 5 teachers' },
              { year: '2000', event: 'First Expansion', description: 'Added Science and Computer Labs' },
              { year: '2005', event: 'Accreditation', description: 'Received national accreditation' },
              { year: '2010', event: 'Sports Complex', description: 'Built state-of-the-art sports facilities' },
              { year: '2015', event: 'Digital Transformation', description: 'Implemented smart classrooms and LMS' },
              { year: '2020', event: 'Global Recognition', description: 'Ranked among top 100 schools nationally' },
            ].map((milestone, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center mb-12 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                <div className="lg:w-1/2 flex justify-center lg:justify-end lg:pr-12 mb-4 lg:mb-0">
                  <div className="card p-6 max-w-md">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-bold mb-2">{milestone.event}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center lg:w-auto">
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white"></div>
                </div>
                <div className="lg:w-1/2 lg:pl-12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Campus Facilities */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Campus Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Smart Classrooms', description: 'Technology-enabled learning spaces with interactive boards' },
              { name: 'Science Labs', description: 'Fully equipped labs for Physics, Chemistry, and Biology' },
              { name: 'Library', description: 'Digital and physical library with 50,000+ resources' },
              { name: 'Sports Complex', description: 'Indoor and outdoor facilities for various sports' },
              { name: 'Auditorium', description: '500-seat auditorium for events and performances' },
              { name: 'Cafeteria', description: 'Healthy meal options in a hygienic environment' },
            ].map((facility, index) => (
              <div key={index} className="card p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;