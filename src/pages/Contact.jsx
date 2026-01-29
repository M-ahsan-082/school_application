// src/pages/Contact.jsx
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['info@school.edu', 'admissions@school.edu', 'support@school.edu'],
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: ['123 Education Street', 'Knowledge City, 12345', 'United States'],
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: <FaClock />,
      title: 'Office Hours',
      details: ['Monday - Friday: 8 AM - 5 PM', 'Saturday: 9 AM - 1 PM', 'Sunday: Closed'],
      color: 'bg-yellow-100 text-yellow-600'
    },
  ];

  const departments = [
    { name: 'Admissions', email: 'admissions@school.edu', phone: 'Ext. 101' },
    { name: 'Academic Office', email: 'academic@school.edu', phone: 'Ext. 102' },
    { name: 'Student Affairs', email: 'studentaffairs@school.edu', phone: 'Ext. 103' },
    { name: 'Finance', email: 'finance@school.edu', phone: 'Ext. 104' },
    { name: 'Transportation', email: 'transport@school.edu', phone: 'Ext. 105' },
    { name: 'IT Support', email: 'itsupport@school.edu', phone: 'Ext. 106' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app, send to backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're here to help! Reach out to us with any questions or concerns.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div key={index} className="card p-6 hover:shadow-xl transition-shadow duration-300">
              <div className={`${info.color} w-12 h-12 rounded-full flex items-center justify-center text-xl mb-4`}>
                {info.icon}
              </div>
              <h3 className="text-lg font-bold mb-3">{info.title}</h3>
              <div className="space-y-2">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="card p-8">
              <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center gap-3">
                  <FaCheckCircle />
                  <span>Thank you! Your message has been sent successfully.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select a subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="academic">Academic Questions</option>
                      <option value="technical">Technical Support</option>
                      <option value="feedback">Feedback/Suggestions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Please write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:opacity-90 transition duration-200 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Details Sidebar */}
          <div className="space-y-8">
            {/* Department Contacts */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Department Contacts</h3>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="p-3 border rounded-lg hover:bg-gray-50 transition duration-200">
                    <p className="font-semibold mb-1">{dept.name}</p>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{dept.email}</span>
                      <span>{dept.phone}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="card p-6 bg-gradient-to-br from-red-50 to-orange-50 border border-red-100">
              <h3 className="text-xl font-bold mb-4 text-red-600">Emergency Contact</h3>
              <div className="space-y-3">
                <p className="font-bold text-lg">+1 (555) 911-HELP</p>
                <p className="text-gray-600">
                  Available 24/7 for emergencies and urgent matters.
                </p>
                <div className="text-sm text-gray-500">
                  <p>• Medical Emergencies</p>
                  <p>• Security Concerns</p>
                  <p>• Immediate Assistance</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Visit Our Campus</h3>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FaMapMarkerAlt className="text-4xl text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-600">Interactive Map</p>
                  <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: 'What are the school hours?',
                a: 'School hours are from 8:00 AM to 3:00 PM, Monday through Friday. Early care starts at 7:00 AM and after-school care is available until 6:00 PM.'
              },
              {
                q: 'How do I apply for admission?',
                a: 'You can apply online through our admissions portal. Visit the Admissions page for detailed instructions and requirements.'
              },
              {
                q: 'What documents are required for admission?',
                a: 'Required documents include birth certificate, previous school records, immunization records, and parent/guardian identification.'
              },
              {
                q: 'Are scholarships available?',
                a: 'Yes, we offer merit-based and need-based scholarships. Please contact the admissions office for more information.'
              },
              {
                q: 'How can I schedule a campus tour?',
                a: 'You can schedule a campus tour through our website or by calling the admissions office at (555) 123-4567.'
              },
              {
                q: 'What is the student-teacher ratio?',
                a: 'Our average student-teacher ratio is 15:1, ensuring personalized attention for every student.'
              },
            ].map((faq, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;