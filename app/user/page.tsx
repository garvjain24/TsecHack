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

export default function RegisterUser() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    userName: "",
    userContact: "",
    userAddress: "",
    userEmail: "",
    userPassword: "",
    userId: "",
    userImage: "",
    languagePreference: "",
    aadhaarId: "",
  });

  const [section, setSection] = useState(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          userImage: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate contact number
    if (!/^[0-9]{10}$/.test(formData.userContact)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    // Validate email
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(formData.userEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate Aadhaar ID
    if (!/^[0-9]{12}$/.test(formData.aadhaarId)) {
      alert("Please enter a valid 12-digit Aadhaar ID.");
      return;
    }

    // Submit form data
    console.log("Submitting User Registration:", formData);
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <Card>
        <CardContent>
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Register as User
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {section === 1 && (
              <>
                <h3 className="text-xl font-semibold text-white mb-4">Personal Details</h3>
                <Input
                  type="text"
                  name="userName"
                  placeholder="Name"
                  onChange={handleChange}
                  value={formData.userName}
                  required
                />
                <Input
                  type="email"
                  name="userEmail"
                  placeholder="Email"
                  onChange={handleChange}
                  value={formData.userEmail}
                  required
                />
                <Input
                  type="tel"
                  name="userContact"
                  placeholder="Contact Number"
                  onChange={handleChange}
                  value={formData.userContact}
                  required
                />
                <Textarea
                  name="userAddress"
                  placeholder="Address"
                  onChange={handleChange}
                  value={formData.userAddress}
                  required
                />
                <Button type="button" onClick={() => setSection(2)}>Next</Button>
              </>
            )}

            {section === 2 && (
              <>
                <h3 className="text-xl font-semibold text-white mb-4">Account Details</h3>
                <Input
                  type="password"
                  name="userPassword"
                  placeholder="Password"
                  onChange={handleChange}
                  value={formData.userPassword}
                  required
                />
                <Input
                  type="text"
                  name="userId"
                  placeholder="User ID"
                  onChange={handleChange}
                  value={formData.userId}
                  required
                />
                <Input
                  type="file"
                  name="userImage"
                  placeholder="User Image"
                  onChange={handleImageChange}
                />
                <Input
                  type="text"
                  name="languagePreference"
                  placeholder="Language Preference"
                  onChange={handleChange}
                  value={formData.languagePreference}
                  required
                />
                <Input
                  type="text"
                  name="aadhaarId"
                  placeholder="Aadhaar ID"
                  onChange={handleChange}
                  value={formData.aadhaarId}
                  required
                />
                <Button type="submit">Submit Registration</Button>
                <Button type="button" onClick={() => setSection(1)}>Back</Button>
              </>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
