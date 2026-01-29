// src/pages/Home.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaCalendarAlt, FaAward } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Home = () => {
  const [announcements] = useState([
    { id: 1, title: 'New Academic Year 2024', date: 'Jan 15, 2024', type: 'academic' },
    { id: 2, title: 'Sports Day Celebration', date: 'Jan 20, 2024', type: 'event' },
    { id: 3, title: 'Admission Open for Grade 11', date: 'Jan 25, 2024', type: 'admission' },
  ]);

  const [highlights] = useState([
    { icon: <FaGraduationCap />, title: 'Expert Faculty', description: '50+ Qualified Teachers', color: 'bg-blue-100 text-blue-600' },
    { icon: <FaBook />, title: 'Courses', description: '120+ Courses Offered', color: 'bg-green-100 text-green-600' },
    { icon: <FaChalkboardTeacher />, title: 'Smart Classes', description: 'Digital Classrooms', color: 'bg-purple-100 text-purple-600' },
    { icon: <FaAward />, title: 'Awards', description: '100+ Awards Won', color: 'bg-yellow-100 text-yellow-600' },
  ]);

  const sliderImages = [
    'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  ];

  return (
    <div>
      {/* Hero Slider */}
      <div className="relative h-[80vh]">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          autoplay={{ delay: 5000 }}
          navigation
          pagination={{ clickable: true }}
          className="h-full"
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img 
                  src={image} 
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center">
                  <div className="container mx-auto px-6 text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-4">
                      Excellence in Education Since 1995
                    </h1>
                    <p className="text-xl mb-8 max-w-2xl">
                      Nurturing young minds with innovative learning approaches and holistic development.
                    </p>
                    <div className="flex gap-4">
                      <Link to="/admissions" className="btn-primary bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg">
                        Apply Now
                      </Link>
                      <Link to="/courses" className="btn-secondary bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold text-lg">
                        View Courses
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Highlights Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Our School?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div key={index} className="card p-8 text-center hover:transform hover:scale-105 transition-transform duration-300">
                <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center text-2xl mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-8">Latest Announcements</h2>
              <div className="space-y-6">
                {announcements.map((announcement) => (
                  <div key={announcement.id} className="card p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg">
                        <FaCalendarAlt className="text-xl" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{announcement.title}</h3>
                        <p className="text-gray-600 mb-2">Date: {announcement.date}</p>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                          {announcement.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold mb-8">Upcoming Events</h2>
              <div className="space-y-6">
                <div className="card p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold mb-2">Science Fair 2024</h3>
                  <p className="text-gray-600 mb-2">February 15, 2024 | 10:00 AM</p>
                  <p>Annual science exhibition showcasing student projects.</p>
                </div>
                
                <div className="card p-6 border-l-4 border-purple-500">
                  <h3 className="text-xl font-semibold mb-2">Parent-Teacher Meeting</h3>
                  <p className="text-gray-600 mb-2">February 20, 2024 | 2:00 PM</p>
                  <p>Quarterly meeting to discuss student progress.</p>
                </div>
                 <div className="card p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-semibold mb-2">Science Fair 2024</h3>
                  <p className="text-gray-600 mb-2">February 15, 2024 | 10:00 AM</p>
                  <p>Annual science exhibition showcasing student projects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of learners and achievers. Admissions are now open for the 2024 academic year.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300">
              Apply for Admission
            </Link>
            <Link to="/contact" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;