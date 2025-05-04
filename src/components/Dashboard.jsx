import React from 'react';
import { FaUserShield, FaSchool, FaGraduationCap, FaEnvelope, FaSignOutAlt, FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('auth'));
  const navigate = useNavigate();

  // List of users for the SuperAdmin to see
  const users = [
    { name: 'Abdullahi Ali', email: 'abdullah@gmail.com', role: 'SuperAdmin', school: 'Alfurqan School', grade: '12' },
    { name: 'Abdullahi Osman', email: 'abdullahiosman727@gmail.com', role: 'Student', school: 'Al-Imra School ', grade: '12' },
    { name: 'Abdi Hassan', email: 'Luqmaan@gmail.com', role: 'Student', school: 'Alfurqan School', grade: '12' },
    { name: 'Ahmed Salaad Cali Mohamed', email: 'Ahmettsalaadcali321@gmail.com', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
    { name: 'Balqiis Mohamed Yusuf', email: 'Balqiisamaxamed582@gmail.com', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
    // Add more users here...
    { name: 'Ibraahim Isxaq Cali', email: 'Ibraahimisaqcali1213@gmail.com', password: 'ibra77', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
    { name: 'Maryan Osman', email: 'Maryanosman531@gmail.com', password: 'password123', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
    { name: 'Mohamett Ali Adam', email: 'Alimaxamed733@gmail.com', password: 'password123', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
    { name: 'Muscab Mohamed Abdulahi', email: 'Muscabmohamedabdullahi99@gmail.com', password: '9988', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
    { name: 'Ruweyda Abdi Samatar', email: 'Ruweydaabdi48@gmail.com', password: 'ruwayda20', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
    { name: 'Sidik Sheik Hassan', email: 'Cumarxasann77@gmail.com', password: 'omar22', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
    { name: 'Yaxye Maxamed Cabdi', email: 'yabsheimoha@gmail.com', password: 'password123', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
    { name: 'Hamdi Nuur Apdullahi ', email: 'Hamdinuurapdullahi948@gmail.com', password: '1595', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
    { name: 'Mohamed saiid ali ', email: 'mohasaiidali@1gmail.com', password: 'mosaid', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
    { name: 'Osman Abdulle Omar ', email: 'herowll649@gmail.com', password: 'osman19', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
    { name: 'Abdullahi Mahamed Axmed ', email: 'Maxamedokash1891@gmail.com', password: 'cukash1891', role: 'Student', school: 'Alfurqan School Ceelasha', grade: '12' },
    

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

          {/* User Management Table for SuperAdmin */}
          {user?.role === 'SuperAdmin' && (
            <div className="bg-pink-100 p-6 rounded-xl shadow-md">
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
                {/* Table for displaying users */}
                <div className="overflow-x-auto">
                  <table className="min-w-full table-auto text-center">
                    <thead className="bg-pink-500 text-white">
                      <tr>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Role</th>
                        <th className="px-4 py-2">School</th>
                        <th className="px-4 py-2">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((u, index) => (
                        <tr key={index} className="border-b">
                          <td className="px-4 py-2">{u.name}</td>
                          <td className="px-4 py-2">{u.email}</td>
                          <td className="px-4 py-2">{u.role}</td>
                          <td className="px-4 py-2">{u.school}</td>
                          <td className="px-4 py-2">{u.grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
