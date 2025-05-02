import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// List of users with their full name, email, password, role, school, and grade
const users = [
  { name: 'Abdullahi Ali', email: 'abdullah@gmail.com', password: '2025', role: 'SuperAdmin', school: 'Alfurqan School', grade: '12' },
  { name: 'Abdullahi Osman', email: 'abdullahiosman727@gmail.com', password: '1694', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Abdi Hassan', email: 'Luqmaan@gmail.com', password: '123456789', role: 'Student', school: 'Alfurqan School', grade: '12' },
  // Other student users
  { name: 'Ahmed Salaad Cali Mohamed', email: 'Ahmettsalaadcali321@gmail.com', password: 'password123', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Balqiis Mohamed Yusuf', email: 'Balqiisamaxamed582@gmail.com', password: '0933', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Ibraahim Isxaq Cali', email: 'Ibraahimisaqcali1213@gmail.com', password: 'ibra77', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Maryan Osman', email: 'Maryanosman531@gmail.com', password: 'maryan531', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Mohamett Ali Adam', email: 'Alimaxamed733@gmail.com', password: 'password123', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Muscab Mohamed Abdulahi', email: 'Muscabmohamedabdullahi99@gmail.com', password: '9988', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Ruweyda Abdi Samatar', email: 'Ruweydaabdi48@gmail.com', password: 'ruwayda20', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Sidik Sheik Hassan', email: 'Cumarxasann77@gmail.com', password: 'omar22', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Yaxye Maxamed Cabdi', email: 'yabsheimoha@gmail.com', password: 'password123', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Hamdi Nuur Apdullahi ', email: 'Hamdinuurapdullahi948@gmail.com', password: '1595', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Mohamed saiid ali ', email: 'mohasaiidali@1gmail.com', password: 'mosaid', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Osman Abdulle Omar ', email: 'herowll649@gmail.com', password: 'osman19', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Abdullahi Mahamed Axmed ', email: 'Maxamedokash1891@gmail.com', password: 'cukash1891', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' }
];

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if user exists
    const user = users.find(
      (u) =>
        u.email.toLowerCase() === form.email.toLowerCase() &&
        u.password === form.password
    );

    if (user) {
      // Save user data in localStorage and navigate to the dashboard
      localStorage.setItem('auth', JSON.stringify(user));
      navigate('/dashboard');
    } else {
      setError('Incorrect email or password ❌');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={form.password}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
