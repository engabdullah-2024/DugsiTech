// src/utils/storage.js
export const saveUsers = (users) => {
    localStorage.setItem("users", JSON.stringify(users));
  };
  
  export const getUsers = () => {
    const data = localStorage.getItem("users");
    return data ? JSON.parse(data) : [];
  };
  
  export const saveCurrentUser = (user) => {
    localStorage.setItem("currentUser", JSON.stringify(user));
  };
  
  export const getCurrentUser = () => {
    const data = localStorage.getItem("currentUser");
    return data ? JSON.parse(data) : null;
  };
  
  export const logout = () => {
    localStorage.removeItem("currentUser");
  };
  