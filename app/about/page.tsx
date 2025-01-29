"use client"
import { useRouter } from "next/navigation";
import { Shield, Users, Building, Clock, Info, Heart } from "lucide-react";

function Card({ children, className }) {
  return (
    <div className={`p-6 bg-white bg-opacity-10 backdrop-blur-lg border border-gray-200 shadow-lg rounded-lg ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

function IconCard({ icon: Icon, title, description, className }) {
  return (
    <Card className={`flex items-center space-x-4 ${className}`}>
      <Icon className="w-12 h-12 text-primary" />
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p>{description}</p>
      </div>
    </Card>
  );
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

export default function DetailsAndAbout() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-6 space-y-8">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <IconCard
          icon={Shield}
          title="Mission"
          description="Our mission is to reunite families with missing members using Aadhaar tech, police & NGO collaboration."
          className="bg-gradient-to-r from-green-400 to-blue-500"
        />
        <IconCard
          icon={Users}
          title="Community"
          description="We believe in the power of community and provide 24/7 support to families in need."
          className="bg-gradient-to-r from-purple-400 to-pink-500"
        />
        <IconCard
          icon={Building}
          title="Partners"
          description="We partner with NGOs and police stations to ensure the safety and quick recovery of missing persons."
          className="bg-gradient-to-r from-yellow-400 to-red-500"
        />
        <IconCard
          icon={Clock}
          title="Response Time"
          description="Quick action when every second counts. Our team responds within 15 minutes."
          className="bg-gradient-to-r from-orange-400 to-pink-500"
        />
        <IconCard
          icon={Info}
          title="Transparency"
          description="We maintain transparency in all our operations to build trust with the community."
          className="bg-gradient-to-r from-teal-400 to-green-500"
        />
        <IconCard
          icon={Heart}
          title="Dedication"
          description="Dedicated to the cause with love and care to make a difference in the lives of families."
          className="bg-gradient-to-r from-pink-400 to-purple-500"
        />
      </div>
      <div className="w-full max-w-4xl mt-12">
        <Card>
          <CardContent className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Our Story</h2>
            <p className="text-gray-300">
              We started as a small team of passionate individuals determined to make a difference in the lives of families who have lost their loved ones. With the support of technology and collaboration with law enforcement and NGOs, we have successfully reunited thousands of families and continue to work tirelessly towards our mission.
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="w-full max-w-4xl mt-8">
        <Card>
          <CardContent className="flex justify-center">
            <Button onClick={() => router.push("/")}>Back</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
