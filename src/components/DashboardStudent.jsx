// src/components/DashboardStudent.jsx
import React, { useEffect, useState } from "react";
import { getUsers, saveUsers } from "../utils/storage";
import { FaUserCircle, FaSave } from "react-icons/fa";

const DashboardStudent = ({ currentUser }) => {
  const [user, setUser] = useState(currentUser);
  const [isEditing, setIsEditing] = useState(false);
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const usersFromStorage = getUsers();
    setAllUsers(usersFromStorage);
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updatedUsers = allUsers.map((u) =>
      u.email === currentUser.email ? user : u
    );
    saveUsers(updatedUsers);
    setAllUsers(updatedUsers);
    setIsEditing(false);
  };

  return (
    <div className="bg-white min-h-screen p-6">
      <h1 className="text-3xl text-pink-600 font-bold mb-6 flex items-center gap-2">
        <FaUserCircle /> Your Profile
      </h1>
      <div className="bg-pink-50 p-6 rounded-lg shadow max-w-md space-y-3">
        <div>
          <label className="block font-semibold">Name:</label>
          <input
            name="name"
            value={user.name}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">School:</label>
          <input
            name="school"
            value={user.school}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Class:</label>
          <input
            name="class"
            value={user.class}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block font-semibold">Email:</label>
          <input
            name="email"
            value={user.email}
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>
        <div>
          <label className="block font-semibold">Role:</label>
          <input
            name="role"
            value={user.role}
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        {isEditing ? (
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded mt-4 flex items-center gap-2"
          >
            <FaSave /> Save Changes
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="bg-pink-600 text-white px-4 py-2 rounded mt-4"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default DashboardStudent;
