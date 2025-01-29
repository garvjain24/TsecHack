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
export default function ReportMissing() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    missingPersonName: "",
    complainantContact: "",
    complainantAddress: "",
    incidentDate: "",
    trackingLocation: "",
    currentStatus: "Missing",
    age: "",
    gender: "",
    birthMark: "",
    height: "",
    specs: "No",
    aadharId: "",
    spottedByUsers: [],
    spottedLocations: [],
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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate contact number
    if (!/^[0-9]{10}$/.test(formData.complainantContact)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    // Validate Aadhaar ID if provided
    if (formData.aadharId && !/^[0-9]{12}$/.test(formData.aadharId)) {
      alert("Please enter a valid 12-digit Aadhaar ID or leave it blank.");
      return;
    }

    // Submit form data
    console.log("Submitting Report:", formData);
    router.push("/report-missing/success");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <Card>
        <CardContent>
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Report a Missing Person 🔍
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-4">
              <Input
                type="text"
                name="missingPersonName"
                placeholder="Missing Person's Name"
                onChange={handleChange}
                value={formData.missingPersonName}
                required
              />
              <Input
                type="number"
                name="age"
                placeholder="Age"
                onChange={handleChange}
                value={formData.age}
                required
              />
              <Input
                type="text"
                name="gender"
                placeholder="Gender"
                onChange={handleChange}
                value={formData.gender}
                required
              />
              <Input
                type="text"
                name="birthMark"
                placeholder="Birth Mark (if any)"
                onChange={handleChange}
                value={formData.birthMark}
              />
              <Input
                type="text"
                name="height"
                placeholder="Height (e.g., 5'7\)"
                onChange={handleChange}
                value={formData.height}
              />
              <Input
                type="text"
                name="specs"
                placeholder="Wears Glasses? (Yes/No)"
                onChange={handleChange}
                value={formData.specs}
              />
            </div>
            <div className="space-y-4">
              <Input
                type="tel"
                name="complainantContact"
                placeholder="Your Contact Number"
                onChange={handleChange}
                value={formData.complainantContact}
                required
              />
              <Textarea
                name="complainantAddress"
                placeholder="Your Address"
                onChange={handleChange}
                value={formData.complainantAddress}
                required
              />
              <Input
                type="date"
                name="incidentDate"
                placeholder="Incident Date"
                onChange={handleChange}
                value={formData.incidentDate}
                required
              />
              <Input
                type="text"
                name="trackingLocation"
                placeholder="Last Known Location"
                onChange={handleChange}
                value={formData.trackingLocation}
                required
              />
              <Input
                type="text"
                name="currentStatus"
                placeholder="Current Status (e.g., Missing, Found)"
                onChange={handleChange}
                value={formData.currentStatus}
              />
              <Input
                type="text"
                name="aadharId"
                placeholder="Aadhaar ID (Optional)"
                onChange={handleChange}
                value={formData.aadharId}
              />
            </div>
            <div className="col-span-1 md:col-span-2">
              <Button type="submit">Submit Report</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

// CSS for .animate-shine class
const styles = `
.animate-shine {
  background-size: 200% auto;
  animation: shine 3s linear infinite;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 255, 255, 0.1) 40%,
    rgba(255, 255, 255, 0.1) 100%
  );
}

.dark .animate-shine {
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.8) 20%,
    rgba(255, 255, 255, 0.1) 40%,
    rgba(255, 255, 255, 0.1) 100%
  );
}
`;

export { styles };


