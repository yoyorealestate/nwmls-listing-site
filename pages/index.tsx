import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center mb-4">List Your Home on NWMLS</h1>
        <p className="text-center text-gray-600 mb-8">
          Flat-fee listing service. Save thousands by listing your property on the Northwest MLS yourself.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Property Address</label>
            <input
              type="text"
              className="w-full border border-gray-300 p-2 rounded-lg"
              placeholder="123 Main St, Seattle, WA"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Upload Photos</label>
            <input
              type="file"
              multiple
              className="w-full border border-gray-300 p-2 rounded-lg"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Property Description</label>
            <textarea
              className="w-full border border-gray-300 p-2 rounded-lg"
              rows={4}
              placeholder="Describe your property"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Submit Listing
          </button>
        </form>

        <div className="mt-10 text-center">
          <h2 className="text-xl font-semibold">Need Help?</h2>
          <p className="text-gray-600">Chat with us live or call us directly to book a consultation.</p>
        </div>
      </div>
    </div>
  );
}

