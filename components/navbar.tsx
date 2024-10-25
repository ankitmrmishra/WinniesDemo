"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import * as React from "react";

import { cn } from "@/lib/utils";

import { GiHills } from "react-icons/gi";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="">
      <nav className="fixed top-0 left-0 right-0 p-6 flex md:justify-start justify-between gap-20 items-center z-10 text-white bg-primary">
        <a href="#" className="text-2xl font-serif font-bold">
          WINNIES
        </a>
        <div className="hidden md:flex justify-center align-middle items-center space-x-6">
          <a href="#" className="hover:underline">
            Rooms
          </a>
          <a href="#" className="hover:underline">
            <NavigationMenuDemo />
          </a>
          <a href="#" className="hover:underline">
            Dining
          </a>
          <a href="#" className="hover:underline">
            Experiences
          </a>
        </div>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-black text-white"
          >
            <nav className="flex flex-col gap-4">
              <a href="#" className="text-xl hover:underline ">
                Rooms
              </a>
              <a href="#" className="text-xl hover:underline">
                Dining
              </a>
              <a href="#" className="text-xl hover:underline">
                Experiences
              </a>
              <a href="#" className="text-xl hover:underline">
                Location
              </a>
              <a className=" ">Book Now</a>
            </nav>
          </SheetContent>
        </Sheet>
        <Button
          className="absolute right-4 text-black hidden md:block"
          variant={"outline"}
        >
          Book Now
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
// const resortFacilities: { title: string; href: string; description: string }[] =
//   [
//     {
//       title: "Beachfront Events",
//       href: "/facilities/beachfront-events",
//       description:
//         "Organize or join events by the beach, from sunset parties to open-air concerts.",
//     },
//     {
//       title: "Adventure Activities",
//       href: "/facilities/adventure-activities",
//       description:
//         "Experience thrilling activities like jet skiing, parasailing, and rock climbing.",
//     },
//     {
//       title: "Luxury Spa",
//       href: "/facilities/luxury-spa",
//       description:
//         "Relax and rejuvenate with a variety of therapeutic treatments and massages.",
//     },
//     {
//       title: "Kids’ Club",
//       href: "/facilities/kids-club",
//       description:
//         "A safe and fun space with supervised activities designed for young children.",
//     },
//     {
//       title: "Fine Dining",
//       href: "/facilities/fine-dining",
//       description:
//         "Enjoy gourmet meals with a variety of cuisines crafted by expert chefs.",
//     },
//     {
//       title: "Guided Excursions",
//       href: "/facilities/guided-excursions",
//       description:
//         "Explore local landmarks and scenic spots with expert guides leading the way.",
//     },
//     {
//       title: "Golf Course",
//       href: "/facilities/golf-course",
//       description:
//         "Tee off on a beautiful, world-class golf course with stunning resort views.",
//     },
//     {
//       title: "Private Beach",
//       href: "/facilities/private-beach",
//       description:
//         "Relax on an exclusive, serene beach with reserved loungers and private cabanas.",
//     },
//     {
//       title: "Water Sports",
//       href: "/facilities/water-sports",
//       description:
//         "Dive into water activities including snorkeling, diving, and paddleboarding.",
//     },
//   ];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="">
      <NavigationMenuList>
        <NavigationMenuItem className="right-6">
          <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">
            Facilities
          </NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <GiHills className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-bold">
                      Winnies Winter Resort
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Guided nature walks through Kasauli’s lush pine forests
                      and scenic hill trails.Experience thrilling activities
                      like paragliding, mountain biking, and rock climbing.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/docs" title="Adventure Activities">
                Experience thrilling activities like jet skiing, parasailing,
                and rock climbing.
              </ListItem>
              <ListItem href="/docs/installation" title="Guided Excursions">
                Explore local landmarks and scenic spots with expert guides
                leading the way.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Forest Yoga">
                Practice yoga and meditation in serene, forested areas for a
                holistic retreat experience.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
