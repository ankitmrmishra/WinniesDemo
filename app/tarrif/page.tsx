"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bed, Phone, Mail, Globe, Users } from "lucide-react";

interface Package {
  name: string;
  price: string;
  occupancy: string;
  inclusions: string[];
  icon: React.ElementType;
}

const packages: Package[] = [
  {
    name: "Premium Rooms Valley Facing with Jacuzzi",
    price: "₹23,000",
    occupancy: "Double Occupancy",
    inclusions: [
      "Breakfast & Dinner",
      "Welcome Drink",
      "Fruit Basket",
      "Cookies",
    ],
    icon: Bed,
  },
  {
    name: "Super Deluxe Rooms",
    price: "₹21,000",
    occupancy: "Double Occupancy",
    inclusions: [
      "Breakfast & Dinner",
      "Welcome Drink",
      "Fruit Basket",
      "Cookies",
    ],
    icon: Bed,
  },
  {
    name: "Premium Room with Jacuzzi Pool Deck Facing",
    price: "₹23,000",
    occupancy: "Double Occupancy",
    inclusions: [
      "Breakfast & Dinner",
      "Welcome Drink",
      "Fruit Basket",
      "Cookies",
    ],
    icon: Bed,
  },
  {
    name: "Deluxe Rooms",
    price: "₹18,000",
    occupancy: "Double Occupancy",
    inclusions: [
      "Breakfast & Dinner",
      "Welcome Drink",
      "Fruit Basket",
      "Cookies",
    ],
    icon: Bed,
  },
  {
    name: "All Wooden Premium Family Suite (2 Bedrooms)",
    price: "₹48,000",
    occupancy: "4 pax",
    inclusions: [
      "Breakfast & Dinner",
      "Welcome Drink",
      "Fruit Basket",
      "Cookies",
    ],
    icon: Users,
  },
  {
    name: "Family Room (2 Interconnected Bedrooms)",
    price: "₹28,000",
    occupancy: "4 pax",
    inclusions: [
      "Breakfast & Dinner",
      "Welcome Drink",
      "Fruit Basket",
      "Cookies",
    ],
    icon: Users,
  },
  {
    name: "Family Suite (3 Bedrooms)",
    price: "₹54,000",
    occupancy: "6 pax",
    inclusions: [
      "Breakfast & Dinner",
      "Welcome Drink",
      "Fruit Basket",
      "Cookies",
    ],
    icon: Users,
  },
];

const extras = [
  "Children (Below 5 Years) Complimentary without Extra Bed",
  "Children (5-12 Years) @ ₹1500 without bed inclusive breakfast and dinner per night",
  "Children (5-12 Years) @ ₹2250 with bed inclusive breakfast and dinner per night",
  "Above 12 Years @ ₹2500 with bed inclusive breakfast and dinner per night",
  "Anything extra to the above will be chargeable as per consumption.",
  "Taxes Inclusive",
];

export default function TariffPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 font-sans">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <img
            src="/placeholder.svg?height=60&width=200"
            alt="Winnies Logo"
            className="h-12"
          />
          <nav>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              Kasauli
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              Weddings
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2">
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-900 text-center mb-12"
        >
          Tariff & Packages
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-lg shadow-xl p-6 mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Package for 2 Night / 3 Days
          </h2>
          <p className="text-gray-600 mb-2">
            Inclusive all Taxes MAP Plan (Breakfast, Hi-Tea & Dinner)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <pkg.icon className="h-8 w-8 text-blue-500 mr-2" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {pkg.name}
                  </h3>
                </div>
                <p className="text-3xl font-bold text-blue-600 mb-2">
                  {pkg.price}
                </p>
                <p className="text-gray-600 mb-4">{pkg.occupancy}</p>
              </div>

              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-6"
              >
                <h4 className="font-semibold text-gray-700 mb-2">
                  Inclusions:
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  {pkg.inclusions.map((inclusion, idx) => (
                    <li key={idx}>{inclusion}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 bg-white rounded-lg shadow-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Extras</h2>
          <ul className="list-disc list-inside text-gray-600">
            {extras.map((extra, index) => (
              <li key={index} className="mb-2">
                {extra}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 bg-white rounded-lg shadow-xl p-6"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <p className="flex items-center text-gray-600 mb-2">
                <Phone className="mr-2" /> +91-9805633007
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <Mail className="mr-2" /> sales@winniesholidayresort.com
              </p>
              <p className="flex items-center text-gray-600">
                <Globe className="mr-2" /> www.winnies.in
              </p>
            </div>
            <form className="w-full md:w-1/2">
              <input
                type="text"
                placeholder="Name"
                className="w-full mb-2 p-2 border rounded"
                required
              />
              <input
                type="tel"
                placeholder="Phone No."
                className="w-full mb-2 p-2 border rounded"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-2 p-2 border rounded"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </motion.div>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">
                Winnies Holiday Resort & Spa
              </h3>
              <p className="text-sm">
                A peaceful destination away from all the hustle & bustle of city
                life.
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="text-sm">
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Kasauli
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Weddings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Restaurant
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-300">
                    Spa
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p className="text-sm mb-2">Phone: +91-9805633007</p>
              <p className="text-sm mb-2">
                Email: sales@winniesholidayresort.com
              </p>
              <p className="text-sm">Website: www.winnies.in</p>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © Winnies Holiday Resort & Spa 2024. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
