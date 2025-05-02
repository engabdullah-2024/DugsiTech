import React from 'react';
import { FaUserShield, FaSchool, FaGraduationCap, FaEnvelope, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('auth'));
  const navigate = useNavigate();

  // List of users for the SuperAdmin to see
  const users = [
    { name: 'Abdullahi Ali', email: 'abdullah@admin.com', role: 'SuperAdmin' },
    { name: 'Abdullahi Osman', email: 'abdullahiosman727@gmail.com', role: 'Student' },
    { name: 'Abdi Hassan', email: 'Luqmaan@gmail.com', role: 'Student' },
    { name: 'Ahmed Salaad Cali Mohamed', email: 'Ahmettsalaadcali321@gmail.com', password: 'password123', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Balqiis Mohamed Yusuf', email: 'Balqiisamaxamed582@gmail.com', password: 'password123', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Ibraahim Isxaq Cali', email: 'Ibraahimisaqcali1213@gmail.com', password: 'ibra77', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Maryan Osman', email: 'Maryanosman531@gmail.com', password: 'password123', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Mohamett Ali Adam', email: 'Alimaxamed733@gmail.com', password: 'password123', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Muscab Mohamed Abdulahi', email: 'Muscabmohamedabdullahi99@gmail.com', password: '9988', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Ruweyda Abdi Samatar', email: 'Ruweydaabdi48@gmail.com', password: 'ruwayda20', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Sidik Sheik Hassan', email: 'Cumarxasann77@gmail.com', password: 'omar22', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Yaxye Maxamed Cabdi', email: 'yabsheimoha@gmail.com', password: 'password123', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Hamdi Nuur Apdullahi ', email: 'Hamdinuurapdullahi948@gmail.com', password: 'hamdi', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Mohamed saiid ali ', email: 'mohasaiidali@1gmail.com', password: 'mosaid', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Osman Abdulle Omar ', email: 'herowll649@gmail.com', password: 'osman19', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
  { name: 'Abdullahi Mahamed Axmed ', email: 'Maxamedokash1891@gmail.com', password: 'cukash1891', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' }
    // Other users...
  ];

  const logout = () => {
    localStorage.removeItem('auth');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-pink-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 mt-32">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-pink-600">
            Welcome, {user?.name}
          </h2>
          <button
            onClick={logout}
            className="flex items-center gap-2 text-red-600 hover:underline"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Info Section */}
          <div className="bg-pink-100 p-6 rounded-xl text-center shadow-md space-y-4">
            <div className="flex items-center justify-start space-x-4">
              <FaUserShield className="text-4xl text-pink-500" />
              <div className="text-left">
                <h3 className="text-xl font-semibold">Role</h3>
                <p>{user?.role}</p>
              </div>
            </div>

            <div className="flex items-center justify-start space-x-4">
              <FaSchool className="text-4xl text-pink-500" />
              <div className="text-left">
                <h3 className="text-xl font-semibold">School</h3>
                <p>{user?.school}</p>
              </div>
            </div>

            <div className="flex items-center justify-start space-x-4">
              <FaGraduationCap className="text-4xl text-pink-500" />
              <div className="text-left">
                <h3 className="text-xl font-semibold">Grade</h3>
                <p>{user?.grade}</p>
              </div>
            </div>

            <div className="flex items-center justify-start space-x-4">
              <FaEnvelope className="text-4xl text-pink-500" />
              <div className="text-left">
                <h3 className="text-xl font-semibold">Email</h3>
                <p>{user?.email}</p>
              </div>
            </div>
          </div>

          {/* Dashboard Info Section */}
          {user?.role === 'SuperAdmin' && (
            <div className="bg-pink-100 p-6 rounded-xl text-center shadow-md">
              <h3 className="text-xl font-semibold">Manage Users</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-start space-x-4">
                  <FaUsers className="text-4xl text-pink-500" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold">Total Users</h3>
                    <p>{users.length}</p>
                  </div>
                </div>
                <h4 className="font-semibold">User List:</h4>
                <ul className="list-disc pl-6">
                  {users.map((u, index) => (
                    <li key={index}>
                      {u.name} ({u.email})
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
