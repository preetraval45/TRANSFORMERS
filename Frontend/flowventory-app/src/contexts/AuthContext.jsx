'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { users } from '@/data/users';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('flowventory_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (username, password) => {
    const foundUser = users.find(u => u.username === username && u.password === password);
    if (foundUser) {
      const userSession = {
        id: foundUser.id,
        username: foundUser.username,
        firstName: foundUser.firstName,
        role: foundUser.role,
        status: foundUser.status
      };
      setUser(userSession);
      localStorage.setItem('flowventory_user', JSON.stringify(userSession));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('flowventory_user');
  };

  const resetPassword = (username) => {
    const foundUser = users.find(u => u.username === username);
    if (foundUser) {
      // In a real app, this would send an email
      alert(`Password reset instructions sent to ${username}'s email`);
      return true;
    }
    return false;
  };

  const value = {
    user,
    login,
    logout,
    resetPassword,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};