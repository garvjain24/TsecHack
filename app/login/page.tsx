"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

function Card({ children }) {
  return (
    <div className="p-6 bg-white bg-opacity-10 backdrop-blur-lg border border-gray-200 shadow-lg rounded-lg">
      {children}
    </div>
  );
}

function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}

function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
    >
      {children}
    </button>
  );
}

function Input({ type, name, placeholder, value, onChange, required = false }) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
    />
  );
}

export default function Login() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.userEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Submit form data
    console.log("Submitting Login:", formData);
    // Redirect to user dashboard or home page after successful login
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <Card>
        <CardContent>
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              name="userEmail"
              placeholder="Email"
              onChange={handleChange}
              value={formData.userEmail}
              required
            />
            <Input
              type="password"
              name="userPassword"
              placeholder="Password"
              onChange={handleChange}
              value={formData.userPassword}
              required
            />
            <Link href = "/"><Button type="submit">Login</Button></Link>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
