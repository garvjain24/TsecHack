"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

// TypeScript interfaces for component props
interface CardProps {
  children: React.ReactNode;
}

interface CardContentProps {
  children: React.ReactNode;
}

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

interface TextareaProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

// Component definitions
function Card({ children }: CardProps) {
  return (
    <div className="p-6 bg-white bg-opacity-10 backdrop-blur-lg border border-gray-200 shadow-lg rounded-lg">
      {children}
    </div>
  );
}

function CardContent({ children }: CardContentProps) {
  return <div className="p-4">{children}</div>;
}

function Button({ children, onClick, type = "button" }: ButtonProps) {
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

function Input({
  type,
  name,
  placeholder,
  value,
  onChange,
  required = false,
}: InputProps) {
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

function Textarea({
  name,
  placeholder,
  value,
  onChange,
  required = false,
}: TextareaProps) {
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

// Main component
export default function RegisterSighting() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    sightingId: "",
    personId: "",
    reportedByUserId: "",
    photo: null as File | null,
    description: "",
    createdAt: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      photo: file,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.sightingId || !formData.personId || !formData.reportedByUserId || !formData.description || !formData.createdAt) {
      alert("Please fill in all required fields.");
      return;
    }

    // Prepare form data for submission
    const submissionData = new FormData();
    submissionData.append("sightingId", formData.sightingId);
    submissionData.append("personId", formData.personId);
    submissionData.append("reportedByUserId", formData.reportedByUserId);
    if (formData.photo) {
      submissionData.append("photo", formData.photo);
    }
    submissionData.append("description", formData.description);
    submissionData.append("createdAt", formData.createdAt);

    // Submit form data
    console.log("Submitting Sighting:", formData);
    // Implement your form submission logic here (e.g., API call)
    router.push("/register-sighting/success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <Card>
        <CardContent>
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Register a Sighting 👁️
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="text"
              name="sightingId"
              placeholder="Sighting ID"
              onChange={handleChange}
              value={formData.sightingId}
              required
            />
            <Input
              type="text"
              name="personId"
              placeholder="Person ID"
              onChange={handleChange}
              value={formData.personId}
              required
            />
            <Input
              type="text"
              name="reportedByUserId"
              placeholder="Reported By User ID"
              onChange={handleChange}
              value={formData.reportedByUserId}
              required
            />
            <Input
              type="file"
              name="photo"
              placeholder="Upload Photo"
              onChange={handleFileChange}
            />
            <Textarea
              name="description"
              placeholder="Description"
              onChange={handleChange}
              value={formData.description}
              required
            />
            <Input
              type="datetime-local"
              name="createdAt"
              placeholder="Date and Time of Sighting"
              onChange={handleChange}
              value={formData.createdAt}
              required
            />
            <Button type="submit">Submit Sighting</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
