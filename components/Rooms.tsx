import React from "react";
import { Button } from "./ui/button";

const Rooms = () => {
  return (
    <div>
      <section className="py-20 px-6 md:px-20 bg-gray-900">
        <h2 className="text-3xl md:text-7xl font-extralight italic mb-12 text-center font-serif">
          Our Accommodations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              name: "Deluxe Room",
              image:
                "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            },
            {
              name: "Premium Suite",
              image:
                "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            },
            {
              name: "Family Cottage",
              image:
                "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            },
            {
              name: "Luxury Villa",
              image:
                "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
            },
          ].map((room, index) => (
            <div
              key={index}
              className="relative h-[400px] group overflow-hidden"
            >
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-serif font-bold mb-2">
                    {room.name}
                  </h3>
                  <Button className="bg-white text-black hover:bg-gray-200">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Rooms;
