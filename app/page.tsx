import { Button } from "@/components/ui/button"
import { Shield, Users, Building, Clock } from "lucide-react"
import Link from "next/link"

const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

const CardContent = ({ className, children, ...props }) => {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default function Home() {
  const stats = [
    {
      icon: Shield,
      value: "100K+",
      label: "Successful Reunions",
      description: "Families brought back together with our help 🫂"
    },
    {
      icon: Users,
      value: "24/7",
      label: "Support Available",
      description: "Our team is always here for you 💪"
    },
    {
      icon: Building,
      value: "1000+",
      label: "Partner Organizations",
      description: "NGOs and police stations working together 🤝"
    },
    {
      icon: Clock,
      value: "<15 min",
      label: "Response Time",
      description: "Quick action when every second counts ⚡"
    }
  ]

  return (
    <div className="min-h-screen bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-background to-background/20 pointer-events-none" />
      <div className="container relative pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Hero Content */}
          <div className="space-y-8 animate-slide-down">
            <h1 className="text-2xl font-bold tracking-tight sm:text-6xl">
              Bringing Families Together {" "}
              <span className="text-primary">
                One Search at a Time 🏠
              </span>
            </h1>
            <p className="text-muted-foreground text-xl">
              Hey there! 👋 We know how tough it is when someone goes missing. But don't worry—we're here to help! Using Aadhaar tech and working with police & NGOs, we reunite families faster. Available in all Indian languages because every family matters. Together, we make a difference! 💕
            </p>
            <div className="flex gap-4">
            <Link href="/report-missing">
  <Button size="lg" className="text-lg glass-effect hover:bg-primary/20">
    Report Missing Person 🔍
  </Button>
</Link>
             <Link href="/register-sighting"> <Button size="lg" variant="outline" className="text-lg glass-effect">
                Register Sighting 👀
              </Button></Link>
            </div>
          </div>
          

          {/* Right side - Stats Grid */}
          <div className="glass-effect p-8 rounded-2xl animate-fade-in">
            <h2 className="text-2xl font-bold mb-8 animate-slide-down">
              Our Impact So Far ✨
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="glass-effect border-white/10">
                  <CardContent className="p-6 space-y-2">
                    <div className="flex items-center space-x-2">
                      <stat.icon className="w-6 h-6 text-primary" />
                      <span className="text-2xl font-bold">{stat.value}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{stat.label}</h3>
                      <p className="text-sm text-muted-foreground">
                        {stat.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}