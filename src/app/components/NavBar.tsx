"use client"

import { cn } from "@/lib/utils"
import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/app/components/ui/navigation-menu"

const menuItems = [
  { href: "/", title: "home" },
  { href: "/about", title: "about" },
  { href: "/projects", title: "projects" },
  { href: "/experience", title: "experience" },
  { href: "/playground", title: "playground" },
];

export function NavMenu() {
  return (
    <div className="flex justify-center mt-3">
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={`${navigationMenuTriggerStyle()} px-3 md:px-6 py-2`}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
