"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Home, Building2, NewspaperIcon, UserCircle, Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Building2 className="h-6 w-6" />
          <span className="font-bold text-xl">Weinvest</span>
        </Link>

        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </Button>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <Link href="/" className="flex items-center space-x-1">
                <Home className="h-4 w-4" />
                <span>Accueil</span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/properties" className="flex items-center space-x-1">
                <Building2 className="h-4 w-4" />
                <span>Biens</span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" className="flex items-center space-x-1">
                <NewspaperIcon className="h-4 w-4" />
                <span>Blog</span>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/account" className="flex items-center space-x-1">
                <UserCircle className="h-4 w-4" />
                <span>Mon Compte</span>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-background border-b md:hidden">
            <nav className="container py-4">
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="flex items-center space-x-2">
                    <Home className="h-4 w-4" />
                    <span>Accueil</span>
                  </Link>
                </li>
                <li>
                  <Link href="/properties" className="flex items-center space-x-2">
                    <Building2 className="h-4 w-4" />
                    <span>Biens</span>
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="flex items-center space-x-2">
                    <NewspaperIcon className="h-4 w-4" />
                    <span>Blog</span>
                  </Link>
                </li>
                <li>
                  <Link href="/account" className="flex items-center space-x-2">
                    <UserCircle className="h-4 w-4" />
                    <span>Mon Compte</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}