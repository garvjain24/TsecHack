"use client";
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

const translations = {
  en: {
    title: "User Registration",
    name: "Name",
    number: "Phone Number",
    address: "Address",
    email: "Email",
    password: "Password",
    registerButton: "Register",
  },
  hi: {
    title: "उपयोगकर्ता पंजीकरण",
    name: "नाम",
    number: "फोन नंबर",
    address: "पता",
    email: "ईमेल",
    password: "पासवर्ड",
    registerButton: "पंजीकरण करें",
  },
};

const UserRegistration = () => {
  const [userData, setUserData] = useState({
    name: '',
    number: '',
    address: '',
    email: '',
    password: '',
  });

  const [language, setLanguage] = useState<'en' | 'hi' | null>(null);

  // Set the default language or user-preferred language after the initial render
  useEffect(() => {
    setLanguage('en'); // Set default language
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(userData);
    // Handle form submission logic (e.g., API call)
  };

  const switchLanguage = () => {
    setLanguage(prevLang => (prevLang === 'en' ? 'hi' : 'en'));
  };

  // Ensure the component doesn't render until the language state is set
  if (language === null) return null;

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Sidebar */}
      <div className="relative min-h-screen transition-all duration-300 shadow-lg w-64 bg-gradient-to-b from-white to-blue-100 overflow-hidden">
        <div className="p-4 border-b border-blue-300">
          <h1 className="text-blue-700 font-semibold">{translations[language].title}</h1>
        </div>
        <nav className="p-2 space-y-1">
          {/* Add sidebar navigation items here if needed */}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex justify-end mb-4">
          <Button onClick={switchLanguage} className="bg-blue-500 text-white rounded-lg">
            {language === 'en' ? 'Switch to Hindi' : 'स्विच करें'}
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col">
            <Label htmlFor="name">{translations[language].name}</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="border-2 border-primary rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="number">{translations[language].number}</Label>
            <Input
              type="tel"
              id="number"
              name="number"
              value={userData.number}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="border-2 border-primary rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="address">{translations[language].address}</Label>
            <Input
              type="text"
              id="address"
              name="address"
              value={userData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="border-2 border-primary rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="email">{translations[language].email}</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="border-2 border-primary rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex flex-col">
            <Label htmlFor="password">{translations[language].password}</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="border-2 border-primary rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mt-6">
            <Button type="submit" className="bg-blue-500 text-white rounded-lg w-full p-2">
              {translations[language].registerButton}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
