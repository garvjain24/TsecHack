"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FaUser, FaHandsHelping, FaBuilding } from "react-icons/fa";
import Link from 'next/link';

const translations = {
  en: {
    title: "🚨 Mahakumbh Lost & Found 🚨",
    description: "Arey! Kumbh mein kho gaye ho kya? Tension mat lo, hum madad karenge! 😎",
    registerUser: "Register as User",
    registerNGO: "Register as NGO",
    registerPolice: "Register as Police Station",
    lostPeopleList: "👀 Lost People List 👀",
    addLostPerson: "😢 Add Lost Person 😢",
    name: "Name:",
    details: "Details:",
    addPerson: "Add Person"
  },
  hi: {
    title: "🚨 महाकुंभ खोया-पाया 🚨",
    description: "अरे! कुंभ में खो गए हो क्या? टेंशन मत लो, हम मदद करेंगे! 😎",
    registerUser: "उपयोगकर्ता के रूप में पंजीकरण करें",
    registerNGO: "एनजीओ के रूप में पंजीकरण करें",
    registerPolice: "पुलिस स्टेशन के रूप में पंजीकरण करें",
    lostPeopleList: "👀 खोए हुए लोगों की सूची 👀",
    addLostPerson: "😢 खोया हुआ व्यक्ति जोड़ें 😢",
    name: "नाम:",
    details: "विवरण:",
    addPerson: "व्यक्ति जोड़ें"
  }
};

export default function MahakumbhLostFound() {
  const [language, setLanguage] = useState("en");
  const [lostPeople, setLostPeople] = useState([
    { name: "Bittu Sharma", details: "Wearing yellow kurta, last seen near Ganga Ghat." },
    { name: "Raju Bhaiya", details: "Lost near tea stall, wearing blue jeans." }
  ]);
  const [newPerson, setNewPerson] = useState({ name: "", details: "" });

  useEffect(() => {
    const createPetal = () => {
      const petal = document.createElement("div");
      petal.className = "petal";
      petal.style.left = `${Math.random() * 100}vw`;
      petal.style.animationDuration = `${Math.random() * 3 + 2}s`;
      document.body.appendChild(petal);
      setTimeout(() => petal.remove(), 5000);
    };
    const petalInterval = setInterval(createPetal, 300);
    return () => clearInterval(petalInterval);
  }, []);

  const handleAddPerson = () => {
    if (newPerson.name && newPerson.details) {
      setLostPeople([...lostPeople, newPerson]);
      setNewPerson({ name: "", details: "" });
    }
  };

  return (
    <div className="relative container text-center py-10 overflow-hidden">
      <div className="flex justify-end mb-4">
        <select onChange={(e) => setLanguage(e.target.value)} className="p-2 border rounded">
          <option value="en">English</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>
      <h1 className="text-4xl font-bold text-primary">{translations[language].title}</h1>
      <p className="mt-2 text-lg">{translations[language].description}</p>
      
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-2 justify-center items-center">
        <Link href="/register/user">
          <Button className="bg-primary bg-opacity-40 backdrop-blur-md text-white flex items-center gap-2 border border-white/30 rounded-lg p-4 shadow-lg">
            <FaUser /> {translations[language].registerUser}
          </Button>
        </Link>
        <Link href="/register/ngo">
          <Button className="bg-green-500 bg-opacity-40 backdrop-blur-md text-white flex items-center gap-2 border border-white/30 rounded-lg p-4 shadow-lg">
            <FaHandsHelping /> {translations[language].registerNGO}
          </Button>
        </Link>
        <Link href="/register/police">
          <Button className="bg-red-500 bg-opacity-40 backdrop-blur-md text-white flex items-center gap-2 border border-white/30 rounded-lg p-4 shadow-lg">
            <FaBuilding /> {translations[language].registerPolice}
          </Button>
        </Link>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold">{translations[language].lostPeopleList}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {lostPeople.map((person, index) => (
            <Card key={index} className="p-4 shadow-lg">
              <CardContent>
                <h3 className="text-xl font-semibold">{person.name}</h3>
                <p className="text-sm text-muted-foreground">{person.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <div className="mt-10">
        <h2 className="text-2xl font-bold">{translations[language].addLostPerson}</h2>
        <div className="max-w-md mx-auto mt-4">
          <Label>{translations[language].name}</Label>
          <Input value={newPerson.name} onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })} />
          <Label>{translations[language].details}</Label>
          <Textarea value={newPerson.details} onChange={(e) => setNewPerson({ ...newPerson, details: e.target.value })} />
          <Button className="mt-4 bg-primary text-white w-full" onClick={handleAddPerson}>{translations[language].addPerson}</Button>
        </div>
      </div>
    </div>
  );
}
