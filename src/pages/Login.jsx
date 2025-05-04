import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// List of users with their full name, email, password, role, school, and grade
const users = [
  { name: 'Abdullahi Ali', email: 'abdullah@gmail.com', password: '2025', role: 'SuperAdmin', school: 'Alfurqan School', grade: '12' },
  { name: 'Abdullahi Osman', email: 'abdullahiosman727@gmail.com', password: 'abdullahi727', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Abdi Hassan', email: 'Luqmaan@gmail.com', password: '123456789', role: 'Student', school: 'Al-Imra School', grade: '12' },
  // Other student users
  { name: 'Ahmed Salaad Cali Mohamed', email: 'Ahmettsalaadcali321@gmail.com', password: 'shaakir321', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Balqiis Mohamed Yusuf', email: 'Balqiisamaxamed582@gmail.com', password: '0933', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Ibraahim Isxaq Cali', email: 'Ibraahimisaqcali1213@gmail.com', password: 'ibra77', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Maryan Osman', email: 'Maryanosman531@gmail.com', password: 'maryan531', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Mohamett Ali Adam', email: 'Alimaxamed733@gmail.com', password: 'mohamed733', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Muscab Mohamed Abdulahi', email: 'Muscabmohamedabdullahi99@gmail.com', password: '9988', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Ruweyda Abdi Samatar', email: 'Ruweydaabdi48@gmail.com', password: 'ruwayda20', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Sidik Sheik Hassan', email: 'Cumarxasann77@gmail.com', password: 'omar22', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Yaxye Maxamed Cabdi', email: 'yabsheimoha@gmail.com', password: 'goatyaya', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Hamdi Nuur Apdullahi ', email: 'Hamdinuurapdullahi948@gmail.com', password: '1595', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Mohamed saiid ali ', email: 'mohasaiidali@1gmail.com', password: 'mosaid', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Osman Abdulle Omar ', email: 'herowll649@gmail.com', password: 'osman19', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Abdullahi Mahamed Axmed ', email: 'Maxamedokash1891@gmail.com', password: 'cukash1891', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Ayman c/raxmaan faarax ', email: 'fabdinuur98@gmail.com', password: 'ayman98', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Ayuub Cilmi Geedi ', email: 'Ayuubelmi00@gmail.com', password: 'ayub7', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'C/jabaar Cali Ciise ', email: 'khaalidboy803@gmail.com', password: 'abdijabar803', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Iqra Maxamed C/laahi ', email: 'Iqramohamed427@gmail.com', password: 'iqra427', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Liibaan maxamed cusmaan ', email: 'liibaanm062@gmail.com', password: 'lii8', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Maryama Nuurdiin Adam ', email: 'mariyanuurdiin@gmail.com', password: 'maryan20', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Nimco Nor Cabdi', email: 'Neyruusnorr@gmail.com', password: 'neyruus', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Rahma Geelle', email: 'Rahmagelle79@gmail.com', password: 'rahma79', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Salmo Cabdule Xuseen', email: 'Salmocabdule5@gmail.com', password: 'salmo5', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Xafsa Maxamuud Maxamed', email: 'Xafsamohamud99@gmail.com', password: 'xafsa99', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Zakariye Yaxye Maxamed', email: 'cusmaancali034@gmail.com', password: 'marwaan', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Xamdi Adan', email: 'Hamdaadan568@gmail.com', password: 'hamda568', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Abdullah Said Raage', email: 'Cabdallasacid71@gmail.com', password: 'raage', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Shucayb Maxamed', email: 'Shuceebmaxamed446@gmail.com', password: 'shucayb446', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Jaamac Cali Cabdi', email: 'jaamaccalicabdiaxmad88@gmail.com', password: 'jaamac88', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Adam Cabdullahi', email: 'adanapdalle61@gmail.com', password: 'adam61', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
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
