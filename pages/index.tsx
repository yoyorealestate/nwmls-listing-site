// LandingPage.tsx
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold">List Your Home on the NWMLS</h1>
          <p className="mt-2 text-lg">Low Flat Fee. No Agent Commission. Full Exposure.</p>
          <Button className="mt-4 text-blue-600 bg-white hover:bg-blue-100">List Your Property</Button>
        </div>
      </header>

      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-4">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-4">Why Use Us?</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Save thousands on agent fees</li>
                <li>Easy step-by-step process</li>
                <li>Visible on Redfin, Zillow, Realtor.com</li>
                <li>Local support via chat & text</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-4">
            <CardContent>
              <h2 className="text-2xl font-semibold mb-4">Schedule a Call</h2>
              <Calendar />
              <p className="mt-2 text-sm text-gray-600">We'll contact you directly to help you list.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Get Started</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <Input placeholder="Your Name" />
            <Input placeholder="Email Address" />
            <Input placeholder="Phone Number" />
            <Input placeholder="Property Address" />
            <Input type="file" multiple />
            <Button type="submit" className="col-span-1 md:col-span-2 mt-4">Submit Listing</Button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourCompanyName - Flat Fee NWMLS Listing Service
      </footer>
    </div>
  );
}
