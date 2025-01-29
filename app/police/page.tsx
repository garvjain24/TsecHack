"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

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
      className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600"
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
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}

function Textarea({ name, placeholder, value, onChange, required = false }) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
}

export default function RegisterPolice() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    policeName: "",
    policeContact: "",
    policeStation: "",
    policeID: "",
    policeRank: "",
    policeDepartment: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate contact number
    if (!/^[0-9]{10}$/.test(formData.policeContact)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    // Validate police ID
    if (!/^[A-Za-z0-9]{6,10}$/.test(formData.policeID)) {
      alert("Please enter a valid police ID (6-10 alphanumeric characters).");
      return;
    }

    // Submit form data
    console.log("Submitting Police Registration:", formData);
    router.push("/register-success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <Card>
        <CardContent>
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Register as Police
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="policeName"
              placeholder="Police Officer Name"
              onChange={handleChange}
              value={formData.policeName}
              required
            />
            <Input
              type="tel"
              name="policeContact"
              placeholder="Contact Number"
              onChange={handleChange}
              value={formData.policeContact}
              required
            />
            <Input
              type="text"
              name="policeStation"
              placeholder="Police Station"
              onChange={handleChange}
              value={formData.policeStation}
              required
            />
            <Input
              type="text"
              name="policeID"
              placeholder="Police ID"
              onChange={handleChange}
              value={formData.policeID}
              required
            />
            <Input
              type="text"
              name="policeRank"
              placeholder="Rank"
              onChange={handleChange}
              value={formData.policeRank}
              required
            />
            <Input
              type="text"
              name="policeDepartment"
              placeholder="Department"
              onChange={handleChange}
              value={formData.policeDepartment}
              required
            />
            <Button type="submit">Submit Registration</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
