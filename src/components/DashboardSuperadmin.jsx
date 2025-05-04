// src/components/DashboardSuperadmin.jsx
import React, { useState, useEffect } from "react";
import { getUsers, saveUsers } from "../utils/storage";
import { FaUsers, FaEdit, FaTrash, FaSave } from "react-icons/fa";

const DashboardSuperadmin = () => {
  const [users, setUsers] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      const newUsers = [...users];
      newUsers.splice(index, 1);
      setUsers(newUsers);
      saveUsers(newUsers);
    }
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedUser(users[index]);
  };

  const handleSave = () => {
    const updatedUsers = [...users];
    updatedUsers[editingIndex] = editedUser;
    setUsers(updatedUsers);
    saveUsers(updatedUsers);
    setEditingIndex(null);
    setEditedUser({});
  };

  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white min-h-screen p-6">
      <h1 className="text-3xl text-pink-600 font-bold mb-4 flex items-center gap-2">
        <FaUsers /> Superadmin Dashboard
      </h1>
      <div className="grid md:grid-cols-2 gap-4">
        {users.map((user, index) => (
          <div key={index} className="bg-pink-50 p-4 rounded-lg shadow space-y-2">
            {editingIndex === index ? (
              <>
                <input
                  name="name"
                  value={editedUser.name}
                  onChange={handleChange}
                  className="w-full p-1 border rounded"
                />
                <input
                  name="school"
                  value={editedUser.school}
                  onChange={handleChange}
                  className="w-full p-1 border rounded"
                />
                <input
                  name="class"
                  value={editedUser.class}
                  onChange={handleChange}
                  className="w-full p-1 border rounded"
                />
                <input
                  name="email"
                  value={editedUser.email}
                  onChange={handleChange}
                  className="w-full p-1 border rounded"
                />
                <select
                  name="role"
                  value={editedUser.role}
                  onChange={handleChange}
                  className="w-full p-1 border rounded"
                >
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                </select>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 flex items-center gap-1"
                  >
                    <FaSave /> Save
                  </button>
                </div>
              </>
            ) : (
              <>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>School:</strong> {user.school}</p>
                <p><strong>Class:</strong> {user.class}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Role:</strong> {user.role}</p>
                <div className="flex gap-2 mt-2">
                  <button
                    onClick={() => handleEdit(index)}
                    className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500 flex items-center gap-1"
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 flex items-center gap-1"
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSuperadmin;
