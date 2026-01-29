// src/services/mockDataService.js
export const mockDataService = {
  // Authentication
  users: [
    {
      id: 1,
      email: 'student@school.edu',
      password: 'password123',
      role: 'student',
      name: 'John Student',
      avatar: 'https://i.pravatar.cc/150?img=1',
      class: '12th Grade',
      rollNumber: '2024001'
    },
    // Add more users...
  ],

  // Courses
  courses: [
    {
      id: 1,
      title: 'Advanced Mathematics',
      code: 'MATH401',
      teacher: 'Dr. Sarah Johnson',
      description: 'Advanced concepts in calculus and linear algebra',
      schedule: 'Mon, Wed, Fri 10:00-11:30',
      students: 45,
      color: 'blue',
      progress: 65
    },
    // Add 20+ courses...
  ],

  // Assignments
  assignments: [
    {
      id: 1,
      title: 'Calculus Project',
      courseId: 1,
      courseName: 'Advanced Mathematics',
      dueDate: '2024-01-25T23:59:59',
      description: 'Complete problems from chapters 5-8',
      maxScore: 100,
      status: 'pending',
      submission: null,
      grade: null,
      attachments: ['project_guidelines.pdf']
    },
    // Add assignments...
  ],

  // Events
  events: [
    {
      id: 1,
      title: 'Annual Science Fair',
      date: '2024-02-15',
      time: '09:00-16:00',
      location: 'School Auditorium',
      type: 'academic',
      description: 'Showcase of student science projects',
      participants: 150
    },
    // Add events...
  ],

  // Methods
  async login(email, password) {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (!user) throw new Error('Invalid credentials');
    return { ...user, token: 'mock-jwt-token' };
  },

  async getCourses(userId) {
    return this.courses;
  },

  async getAssignments(userId) {
    return this.assignments.filter(a => 
      this.courses.some(c => c.id === a.courseId)
    );
  },

  async submitAssignment(assignmentId, file) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          success: true,
          submissionId: Date.now(),
          timestamp: new Date().toISOString()
        });
      }, 1000);
    });
  }
};