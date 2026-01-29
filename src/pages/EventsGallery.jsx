// src/pages/EventsGallery.jsx
import { useState } from 'react';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaImages, FaVideo, FaArrowRight } from 'react-icons/fa';

const EventsGallery = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [selectedImage, setSelectedImage] = useState(null);

  const events = {
    upcoming: [
      {
        id: 1,
        title: 'Annual Sports Day',
        date: '2024-02-15',
        time: '9:00 AM - 4:00 PM',
        location: 'School Ground',
        description: 'Annual sports competition featuring various track and field events.',
        category: 'sports',
        image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        attendees: 500
      },
      {
        id: 2,
        title: 'Science Fair 2024',
        date: '2024-02-20',
        time: '10:00 AM - 3:00 PM',
        location: 'Science Block',
        description: 'Showcasing innovative student projects in science and technology.',
        category: 'academic',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        attendees: 300
      },
      {
        id: 3,
        title: 'Art Exhibition',
        date: '2024-02-25',
        time: '11:00 AM - 6:00 PM',
        location: 'Art Gallery',
        description: 'Display of student artwork from various mediums and styles.',
        category: 'arts',
        image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        attendees: 200
      },
    ],
    past: [
      {
        id: 4,
        title: 'Cultural Fest 2023',
        date: '2023-12-10',
        description: 'Annual cultural festival with performances from different regions.',
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'cultural'
      },
      {
        id: 5,
        title: 'Graduation Ceremony',
        date: '2023-11-30',
        description: 'Graduation ceremony for class of 2023.',
        image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        category: 'academic'
      },
    ]
  };

  const galleryImages = [
    { id: 1, type: 'image', url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'campus' },
    { id: 2, type: 'image', url: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'events' },
    { id: 3, type: 'image', url: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'sports' },
    { id: 4, type: 'image', url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'academic' },
    { id: 5, type: 'image', url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'cultural' },
    { id: 6, type: 'image', url: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'arts' },
    { id: 7, type: 'video', url: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'events' },
    { id: 8, type: 'image', url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', category: 'campus' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-500 to-rose-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Events & Gallery</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Experience the vibrant life at our school through events, activities, and memorable moments.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Events Section */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">School Events</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
                  activeTab === 'upcoming'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-2 rounded-lg font-medium transition duration-200 ${
                  activeTab === 'past'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events[activeTab].map(event => (
              <div key={event.id} className="card overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-600">
                      <FaCalendarAlt />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaClock />
                        <span className="text-sm">{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center gap-2 text-gray-600">
                        <FaMapMarkerAlt />
                        <span className="text-sm">{event.location}</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-6">{event.description}</p>
                  
                  <div className="flex items-center justify-between">
                    {event.attendees && (
                      <div className="text-sm text-gray-500">
                        {event.attendees}+ attendees
                      </div>
                    )}
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                      View Details
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Photo Gallery</h2>
          
          {/* Gallery Categories */}
          <div className="flex flex-wrap gap-3 mb-8">
            {['All', 'Campus', 'Events', 'Sports', 'Academic', 'Cultural', 'Arts'].map(category => (
              <button
                key={category}
                className="px-6 py-2 bg-white rounded-lg shadow hover:shadow-md transition duration-200 font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map(item => (
              <div
                key={item.id}
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.url}
                  alt={`Gallery ${item.id}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {item.type === 'video' ? (
                    <FaVideo className="text-white text-3xl" />
                  ) : (
                    <FaImages className="text-white text-3xl" />
                  )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium">{item.category}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImage && (
            <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
              <div className="relative max-w-4xl max-h-[90vh]">
                <img
                  src={selectedImage.url}
                  alt="Selected"
                  className="max-w-full max-h-[80vh] object-contain"
                />
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition duration-200"
                >
                  ✕
                </button>
              </div>
            </div>
          )}

          {/* Gallery Stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="card p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <p className="text-gray-600">Photos</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
              <p className="text-gray-600">Events</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <p className="text-gray-600">Videos</p>
            </div>
            <div className="card p-8 text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">2020</div>
              <p className="text-gray-600">Memories Since</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EventsGallery;