// components/navbar.tsx

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50">
      <div className="glass-effect mx-4 mt-4 rounded-full">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center space-x-2 animate-fade-in group">
            <h1 className="text-2xl font-extrabold relative">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white/80 to-white animate-shine">
                REUNITE
              </span>
              <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-1000 h-full bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 blur-sm" />
            </h1>
          </Link>
          
          <div className="flex items-center space-x-8">
          <Link href="/ngo" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Register as NGO
            </Link>
            <Link href="/user" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              Register as User 
            </Link>
            <Link href="/police" className="text-sm font-medium hover:text-primary transition-colors duration-200">
            Register as Police
            </Link>
            
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors duration-200">
              About
            </Link>
            <Link href="/contact">
              
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}