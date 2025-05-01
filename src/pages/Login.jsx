import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const users = [
  { username: 'Abdullah', password: '1694', role: 'SuperAdmin' },
  { username: 'Arday', password: '123456789', role: 'Student' },
];

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Test localStorage availability
    try {
      localStorage.setItem("test", "123");
      localStorage.removeItem("test");
    } catch (err) {
      setError("Your browser doesn't support localStorage.");
      return;
    }

    // Find user (case-insensitive username)
    const user = users.find(
      (u) =>
        u.username.toLowerCase() === form.username.toLowerCase() &&
        u.password === form.password
    );

    if (user) {
      localStorage.setItem('auth', JSON.stringify(user));
      navigate('/dashboard');
    } else {
      setError('You are not here ❌');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Login</h2>
        {error && <p className="text-red-500 text-center mb-2">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={form.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
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

        {/* Debug Info for Mobile Testing */}
        <p className="text-xs text-gray-400 text-center mt-4">
          Device Info: {navigator.userAgent}
        </p>
      </div>
    </div>
  );
};

export default Login;
