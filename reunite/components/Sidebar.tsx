"use client"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  CheckSquare,
  Users,
  ChevronLeft,
  ChevronRight,
  PlusCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavItem {
  title: string
  href: string
  icon: React.ReactNode
}

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/",
      icon: <LayoutDashboard size={22} />
    },
    {
      title: "Add Task",
      href: "/addtask",
      icon: <PlusCircle size={22} />
    },
    {
      title: "Log In",
      href: "/login",
      icon: <CheckSquare size={22} />
    },
    {
      title: "Get Started",
      href: "/signup",
      icon: <Users size={22} />
    },
  ]

  return (
    <div
      className={`relative min-h-screen bg-zinc-900 border-r border-zinc-800 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="p-4 border-b border-zinc-900">
        <h1 className={`text-white font-semibold ${isCollapsed ? "hidden" : "block"}`}>
          Productivity Hub
        </h1>
      </div>

      <nav className="p-2 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                ${isActive
                  ? "bg-white/10 text-white"
                  : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
            >
              {item.icon}
              <span className={`text-sm font-medium ${isCollapsed ? "hidden" : "block"}`}>
                {item.title}
              </span>
            </Link>
          )
        })}
      </nav>

      <Button
        variant="ghost"
        size="icon"
        className="absolute -right-4 top-8 text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 rounded-full"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
      </Button>
    </div>
  )
}