"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, CheckSquare, Users, PlusCircle, Search, Globe, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  icon: React.ReactNode;
}

export default function Dashboard() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();
  const [language, setLanguage] = useState("English");

  const [fireflies, setFireflies] = useState([]); 

  // Create random firefly particles with animation styles
  useEffect(() => {
    const fireflyArray = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      animationDuration: `${Math.random() * 3 + 2}s`, // Randomize speed
      animationDelay: `${Math.random() * 3}s`, // Randomize start time
    }));
    setFireflies(fireflyArray);
  }, []);

  const navItems: NavItem[] = [
    { title: "Dashboard", href: "/", icon: <LayoutDashboard size={22} className="text-blue-500" /> },
    { title: "Profile", href: "/addtask", icon: <Users size={22} className="text-blue-500" /> },
    { title: "Log In", href: "/login", icon: <CheckSquare size={22} className="text-blue-500" /> },
    { title: "Get Started", href: "/signup", icon: <PlusCircle size={22} className="text-blue-500" /> },
  ];

  const statistics = {
    solvedCases: 1203,
    ongoingSearches: 347,
    recentReports: 56,
  };

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      {/* Fireflies */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {fireflies.map((firefly, index) => (
          <div
            key={index}
            className="firefly"
            style={{
              left: `${firefly.x}px`,
              top: `${firefly.y}px`,
              animation: `fly ${firefly.animationDuration} linear infinite, flicker 1.5s alternate infinite`,
              animationDelay: firefly.animationDelay,
              position: "absolute",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          />
        ))}
      </div>

      {/* Sidebar */}
      <div
        className={`relative min-h-screen transition-all duration-300 shadow-lg ${isCollapsed ? "w-20" : "w-64"} bg-gradient-to-b from-white to-blue-100 overflow-hidden`}
      >
        <div className="p-4 border-b border-blue-300">
          <h1 className={`text-blue-700 font-semibold ${isCollapsed ? "hidden" : "block"}`}>
            Reunite
          </h1>
        </div>
        <nav className="p-2 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200
                  ${isActive
                    ? "bg-blue-200 text-blue-900 font-semibold"
                    : "text-blue-600 hover:bg-blue-100 hover:text-blue-800"
                  }`}
              >
                {item.icon}
                <span className={`text-sm font-medium ${isCollapsed ? "hidden" : "block"}`}>
                  {item.title}
                </span>
              </Link>
            );
          })}
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="absolute -right-4 top-8 text-blue-500 hover:text-blue-700 bg-white border border-blue-300 rounded-full"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Bringing Loved Ones Back Home – A Unified Effort
        </h1>

        {/* Search Bar */}
        <div className="flex items-center w-full max-w-lg bg-white p-4 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Search by Aadhaar, Name, or Upload Image"
            className="w-full p-2 border-none focus:ring-0 text-center"
          />
          <Search className="text-blue-500" />
        </div>

        {/* Statistics */}
        <div className="mt-6 grid grid-cols-3 gap-4">
          {Object.entries(statistics).map(([key, value]) => (
            <Card key={key} className="p-4 bg-white shadow-md text-center">
              <CardContent>
                <h2 className="text-xl font-semibold text-gray-700">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </h2>
                <p className="text-2xl font-bold text-blue-500">{value}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
            Report Missing Person
          </button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
            Report a Sighting
          </button>
          <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600">
            Search Database
          </button>
        </div>

        {/* Language Selection */}
        <div className="mt-6 flex items-center gap-2">
          <Globe className="text-gray-600" />
          <select
            className="p-2 border rounded-lg"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
            <option>Tamil</option>
            <option>Telugu</option>
          </select>
        </div>

        {/* AI Chatbot */}
        <div className="mt-6 p-4 bg-white shadow-md flex items-center gap-2 rounded-lg cursor-pointer hover:shadow-lg">
          <MessageCircle className="text-blue-500" />
          <span className="text-gray-700">Chat with AI Assistant</span>
        </div>
      </div>
    </div>
  );
}
