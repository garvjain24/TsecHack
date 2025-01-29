export default function SuccessPage() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-green-100">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-green-600">Report Submitted Successfully! ✅</h2>
          <p className="text-gray-600 mt-2">Our team will review the details and take action immediately.</p>
          <a href="/" className="mt-4 inline-block text-primary underline">Go Back Home</a>
        </div>
      </div>
    )
  }
  