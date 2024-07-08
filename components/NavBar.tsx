"use client";

import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between py-4 px-3 bg-gray-950 text-white relative w-full">
      <div className="font-mono text-2xl text-red-600 flex">
        <img src="/logo.png" alt="Logo" className="w-[30px] mr-2" />
        <a href="/">
        <div>
          Extrovert
        </div>
        </a>
      </div>
      <div>
        <Sheet>
          <SheetTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
              />
            </svg>
          </SheetTrigger>
          <SheetClose asChild>
            <SheetContent side={"left"} className="bg-red-100 ">
              <div className="p-4 text-2xl font-mono text-red-600 ">
              <div className="font-mono text-2xl text-red-600 flex">
        <img src="/logo.png" alt="Logo" className="w-[30px] mr-2" />
        <a href="/">
        <div>
          Extrovert
        </div>
        </a>
      </div>
              </div>
              {navLinks.map((link) => {
                const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`);
                return (
                  <div className="flex flex-col py-3 px-2 w-full" key={link.label}>
                    <div className="flex w-full">
                      <Link
                        href={link.route}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-xl justify-start w-full",
                          {
                            "bg-blue-400": isActive,
                          }
                        )}
                      >
                        <Image
                          src={link.img}
                          alt={link.label}
                          height={24}
                          width={24}
                        />
                        {link.label}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </SheetContent>
          </SheetClose>
        </Sheet>
      </div>
    </nav>
  );
};

export default NavBar;
