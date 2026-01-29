import React, { useState } from 'react';
import { FaChalkboardTeacher, FaUserGraduate, FaChartBar, FaComments, FaEdit } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const TeacherDashboard = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Smith', grade: 85, attendance: 92, assignments: 8 },
    { id: 2, name: 'Emma Johnson', grade: 92, attendance: 95, assignments: 10 },
    // More students...
  ]);

  const gradeDistribution = [
    { grade: 'A', count: 15 },
    { grade: 'B', count: 22 },
    { grade: 'C', count: 10 },
    { grade: 'D', count: 3 },
    { grade: 'F', count: 1 }
  ];

  return (
    <div className="container mx-auto p-6">
      {/* Class Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 rounded-lg mr-4">
              <FaUserGraduate className="text-2xl text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">42</div>
              <div className="text-gray-600">Students</div>
            </div>
          </div>
        </div>
        
        {/* More stats cards... */}
      </div>

      {/* Grade Management Table */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Grade Management</h2>
          <button className="btn-primary">
            Export Grades
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-3">Student</th>
                <th className="text-left p-3">Assignments</th>
                <th className="text-left p-3">Midterm</th>
                <th className="text-left p-3">Final</th>
                <th className="text-left p-3">Total Grade</th>
                <th className="text-left p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{student.name}</td>
                  <td className="p-3">
                    <input 
                      type="number" 
                      defaultValue={student.grade}
                      className="w-20 px-2 py-1 border rounded"
                    />
                  </td>
                  <td className="p-3">...</td>
                  <td className="p-3">...</td>
                  <td className="p-3 font-bold">A-</td>
                  <td className="p-3">
                    <button className="text-blue-600 hover:text-blue-800 mr-3">
                      <FaEdit />
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <FaComments />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};