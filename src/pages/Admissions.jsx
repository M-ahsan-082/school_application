// src/pages/Admissions.jsx
import { useState } from 'react';
import { FaCalendarAlt, FaClock, FaUserGraduate, FaFileAlt, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const Admissions = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    grade: '',
    birthDate: '',
    address: '',
    parentName: '',
    parentEmail: '',
    previousSchool: '',
    message: ''
  });

  const admissionSteps = [
    { step: 1, title: 'Application Form', description: 'Complete online application', icon: <FaFileAlt /> },
    { step: 2, title: 'Document Submission', description: 'Upload required documents', icon: <FaFileAlt /> },
    { step: 3, title: 'Entrance Test', description: 'Schedule and take test', icon: <FaFileAlt /> },
    { step: 4, title: 'Interview', description: 'Parent-student interview', icon: <FaUserGraduate /> },
    { step: 5, title: 'Admission Decision', description: 'Receive admission offer', icon: <FaCheckCircle /> },
  ];

  const grades = [
    { id: 'pre-k', name: 'Pre-Kindergarten', age: '3-4 years' },
    { id: 'kinder', name: 'Kindergarten', age: '4-5 years' },
    { id: 'grade1', name: 'Grade 1', age: '6-7 years' },
    { id: 'grade2', name: 'Grade 2', age: '7-8 years' },
    { id: 'grade3', name: 'Grade 3', age: '8-9 years' },
    { id: 'grade4', name: 'Grade 4', age: '9-10 years' },
    { id: 'grade5', name: 'Grade 5', age: '10-11 years' },
    { id: 'grade6', name: 'Grade 6', age: '11-12 years' },
    { id: 'grade7', name: 'Grade 7', age: '12-13 years' },
    { id: 'grade8', name: 'Grade 8', age: '13-14 years' },
    { id: 'grade9', name: 'Grade 9', age: '14-15 years' },
    { id: 'grade10', name: 'Grade 10', age: '15-16 years' },
    { id: 'grade11', name: 'Grade 11', age: '16-17 years' },
    { id: 'grade12', name: 'Grade 12', age: '17-18 years' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Application submitted successfully! We will contact you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-10">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">Admissions 2024</h1>
          <p className="text-xl max-w-3xl">
            Begin your educational journey with us. Applications are now open for the 2024-25 academic year.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <FaCalendarAlt />
              <div>
                <p className="text-sm">Application Deadline</p>
                <p className="font-semibold">March 31, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
              <FaClock />
              <div>
                <p className="text-sm">Academic Year Starts</p>
                <p className="font-semibold">August 15, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pt-12">
        {/* Admission Process */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-center mb-12">Admission Process</h2>
          <div className="relative">
            {/* Timeline */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-1 bg-blue-200 w-4/5 top-8"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {admissionSteps.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="card p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl">
                      {step.icon}
                    </div>
                    <div className="w-8 h-8 mx-auto mb-4 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Application Form */}
          <div>
            <div className="card p-2">
              <h2 className="text-3xl font-bold mb-6">Application Form</h2>
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grade Applying For *
                  </label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Grade</option>
                    {grades.map(grade => (
                      <option key={grade.id} value={grade.id}>
                        {grade.name} ({grade.age})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      name="birthDate"
                      value={formData.birthDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Previous School
                  </label>
                  <input
                    type="text"
                    name="previousSchool"
                    value={formData.previousSchool}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Any additional information or special requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-lg hover:opacity-90 transition duration-200 flex items-center justify-center gap-2"
                >
                  Submit Application
                  <FaArrowRight />
                </button>
              </form>
            </div>
          </div>

          {/* Information Sidebar */}
          <div className="space-y-8">
            {/* Required Documents */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Required Documents</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span>Birth Certificate (copy)</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span>Previous School Report Card</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span>Transfer Certificate (if applicable)</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span>Passport-sized Photographs (4)</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span>Parent/Guardian ID Proof</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-500 mt-1" />
                  <span>Medical Certificate</span>
                </li>
              </ul>
            </div>

            {/* Fee Structure */}
            <div className="card p-6">
              <h3 className="text-xl font-bold mb-4">Fee Structure 2024-25</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Registration Fee</span>
                  <span className="font-semibold">$100</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Tuition Fee (Annual)</span>
                  <span className="font-semibold">$5,000</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Development Fee</span>
                  <span className="font-semibold">$500</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Transportation (Optional)</span>
                  <span className="font-semibold">$1,200</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-xl text-blue-600">$5,600</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                *Scholarships available for meritorious students
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;