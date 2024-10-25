"use client";

import {
  Dumbbell,
  MonitorSmartphone,
  UtensilsCrossed,
  ShieldCheck,
  Bell,
} from "lucide-react";

type AmenityIcon = React.ComponentType<{ className?: string }>;
type Amenity = {
  name: string;
  icon: AmenityIcon;
};

import { GiRobe } from "react-icons/gi";
import { Separator } from "@/components/ui/separator";

export default function AmenitiesSection() {
  const amenities: Amenity[] = [
    { name: "Spa", icon: GiRobe },
    { name: "Fitness center", icon: Dumbbell },
    { name: "Conference rooms", icon: MonitorSmartphone },
    { name: "Room service", icon: UtensilsCrossed },
    { name: "Security 24/7", icon: ShieldCheck },
    { name: "Reception 24/7", icon: Bell },
  ];

  return (
    <section className="bg-[#6b8d85] text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">
          AMENITIES AND FACILITIES
        </h2>
        <div className="flex flex-wrap md:flex-nowrap relative">
          <div className="w-full md:w-2/3 pr-0 md:pr-12">
            {amenities.map((amenity, index) => (
              <div key={index} className="flex items-center mb-6">
                <amenity.icon className="w-8 h-8 mr-4" />
                <span className="text-xl">{amenity.name}</span>
              </div>
            ))}
          </div>
          <Separator
            orientation="vertical"
            className=" hidden absolute left-1/2"
          />
          <div className="w-full md:w-1/3 mt-12 md:mt-0">
            <div className="relative">
              <div className="text-8xl font-light mb-2">28</div>
              <div className="text-2xl mb-8">rooms</div>
              <div className="text-8xl font-light mb-2">9</div>
              <div className="text-2xl mb-8">amenities</div>
              <div className="text-8xl font-light mb-2">12</div>
              <div className="text-2xl">nature sights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
