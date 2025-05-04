// src/components/Register.jsx
import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { getUsers, saveUsers } from "../utils/storage";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    school: "",
    class: "",
    role: "student",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = getUsers();
    users.push(formData);
    saveUsers(users);
    alert("User registered!");
  };

  return (
    <div className="bg-pink-100 min-h-screen flex items-center justify-center p-6">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center text-pink-500 flex items-center justify-center gap-2">
          <FaUserPlus /> Register User
        </h2>
        {["name", "school", "class", "email", "password"].map((field) => (
          <input
            key={field}
            type={field === "password" ? "password" : "text"}
            name={field}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full border p-2 rounded-md"
            required
          />
        ))}
        <select name="role" onChange={handleChange} className="w-full p-2 rounded-md border">
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
        </select>
        <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-md w-full hover:bg-pink-600">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
