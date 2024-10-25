"use client";

import {
  ChevronRight,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import { About } from "@/components/About";
import Rooms from "@/components/Rooms";
import AmenitiesSection from "@/components/Ammenities";
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <div className="h-[200vh]">
        <div className="h-screen sticky top-0">
          <img
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Winnies Resort"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />

          {/* Hero Content */}
          <div className="absolute bottom-20 left-6 md:left-20">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Experience Luxury <br />
              in Kasauli
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover serenity at Winnies Resort
            </p>
            <Button className="bg-white text-black hover:bg-gray-200">
              Book Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <About />
      </div>

      {/* About Section */}

      {/* Room Types */}
      <Rooms />

      {/* Amenities */}
      <div className="md:p-44">
        <AmenitiesSection />
      </div>

      {/* Location */}
      <section className="py-20 px-6 md:px-20 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12 text-center">
            Our Location
          </h2>
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <img
              src="https://maps.googleapis.com/maps/api/staticmap?center=Kasauli,Himachal+Pradesh&zoom=13&size=1000x600&maptype=roadmap&markers=color:white%7CKasauli,Himachal+Pradesh&key=YOUR_API_KEY"
              alt="Winnies Resort Location"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <p className="text-lg mb-4">
              Winnies Resort, Kasauli, Himachal Pradesh, India
            </p>
            <Button className="bg-white text-black hover:bg-gray-200">
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">
            Contact Us
          </h2>
          <div className="space-y-4">
            <p className="flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2" />
              +91 9805633007
            </p>
            <p className="flex items-center justify-center">
              <Mail className="h-5 w-5 mr-2" />
              sales@winniesholidayresort.com
            </p>
          </div>
          <Button className="mt-8 bg-white text-black hover:bg-gray-200">
            Make a Reservation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-6 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-serif font-bold mb-4">
              Winnies Resort
            </h4>
            <p className="text-sm text-gray-400">
              Luxury and serenity in Kasauli
            </p>
          </div>
          <div>
            <h4 className="text-xl font-serif font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Rooms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dining
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Location
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-serif font-bold mb-4">Contact</h4>
            <p className="text-sm text-gray-400">
              Winnies Resort, Kasauli, Himachal Pradesh, India
            </p>
            <p className="text-sm text-gray-400">Phone: +91 9805633007</p>
            <p className="text-sm text-gray-400">
              Email: sales@winniesholidayresort.com
            </p>
          </div>
          <div>
            <h4 className="text-xl font-serif font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; 2023 Winnies Resort. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
