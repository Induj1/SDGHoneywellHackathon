import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, Trophy, Lightbulb, Code, Presentation } from 'lucide-react';

const scheduleData = [
  {
    day: "Day 1",
    date: "26th September 2025",
    color: "primary",
    icon: <Lightbulb className="w-5 h-5" />,
    events: [
      { time: "09:00 AM", title: "Registration & Welcome", description: "Check-in and opening ceremony" },
      { time: "10:30 AM", title: "Inauguration", description: "Keynote by Honeywell executives" },
      { time: "12:00 PM", title: "Problem Statement Release", description: "Aerospace & automation challenges revealed" },
      { time: "01:00 PM", title: "Team Formation", description: "Network and form your dream team" },
      { time: "02:30 PM", title: "Lunch Break", description: "Networking lunch with mentors" },
      { time: "04:00 PM", title: "Ideation Session", description: "Brainstorm solutions with mentors" },
      { time: "06:00 PM", title: "Day 1 Wrap-up", description: "Present initial ideas" }
    ]
  },
  {
    day: "Day 2", 
    date: "27th September 2025",
    color: "secondary",
    icon: <Code className="w-5 h-5" />,
    events: [
      { time: "09:00 AM", title: "Hacking Begins", description: "Start building your solutions" },
      { time: "11:00 AM", title: "Technical Workshop", description: "Honeywell tech stack deep dive" },
      { time: "01:00 PM", title: "Lunch & Mentorship", description: "One-on-one mentor sessions" },
      { time: "03:00 PM", title: "Mid-point Check-in", description: "Progress review with judges" },
      { time: "05:00 PM", title: "Technical Support", description: "Expert guidance available" },
      { time: "07:00 PM", title: "Dinner", description: "Fuel up for the final stretch" },
      { time: "10:00 PM", title: "Midnight Coding", description: "24/7 support available" }
    ]
  },
  {
    day: "Day 3",
    date: "28th September 2025", 
    color: "accent",
    icon: <Presentation className="w-5 h-5" />,
    events: [
      { time: "09:00 AM", title: "Final Development", description: "Last chance to polish your solution" },
      { time: "12:00 PM", title: "Submission Deadline", description: "Submit your final projects" },
      { time: "01:00 PM", title: "Lunch Break", description: "Prepare for presentations" },
      { time: "02:30 PM", title: "Project Presentations", description: "Showcase your innovations" },
      { time: "05:00 PM", title: "Judging & Deliberation", description: "Expert panel evaluates projects" },
      { time: "06:30 PM", title: "Award Ceremony", description: "Winners announcement & prizes" },
      { time: "07:30 PM", title: "Closing Ceremony", description: "Networking & celebration" }
    ]
  }
];

const themes = [
  {
    title: "Aerospace Innovations",
    description: "Next-gen flight systems, sustainable aviation, autonomous aircraft",
    icon: "🚁",
    tags: ["Flight Systems", "Autonomous Tech", "Sustainability"]
  },
  {
    title: "Industrial Automation",
    description: "Smart manufacturing, IoT solutions, predictive maintenance",
    icon: "🏭", 
    tags: ["Smart Manufacturing", "IoT", "AI/ML"]
  },
  {
    title: "Sustainable Tech Solutions",
    description: "Green technology, energy efficiency, environmental impact",
    icon: "🌱",
    tags: ["Green Tech", "Energy Efficiency", "Climate"]
  }
];

const rules = [
  "Teams of 2-4 members (college students only)",
  "Original code and ideas only", 
  "Must use at least one Honeywell API/dataset",
  "Open source technologies preferred",
  "Presentation must be under 5 minutes",
  "Judging based on innovation, technical excellence, and business impact"
];

export default function EventSchedule() {
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/50">
            Event Details
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">72 Hours</span> of{' '}
            <span className="text-gradient-secondary">Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive schedule designed to maximize learning, collaboration, and innovation
          </p>
        </div>

        {/* Schedule Timeline */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {scheduleData.map((day, index) => (
            <Card key={index} className="tech-card border-0 animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-${day.color}/20 to-${day.color}-glow/20 flex items-center justify-center mb-4`}>
                  {day.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">{day.day}</CardTitle>
                <p className="text-muted-foreground">{day.date}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {day.events.map((event, i) => (
                    <div key={i} className="flex gap-3 p-3 rounded-lg bg-card/30 border border-border/30">
                      <div className="flex-shrink-0">
                        <Clock className="w-4 h-4 text-primary mt-1" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-medium text-foreground">{event.time}</span>
                          <span className="text-xs text-muted-foreground">•</span>
                          <span className="text-sm font-semibold text-foreground">{event.title}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Problem Statement Themes */}
        <div className="mb-20 animate-on-scroll">
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Problem Statement <span className="text-gradient-tech">Themes</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {themes.map((theme, index) => (
              <Card key={index} className="tech-card border-0 text-center">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{theme.icon}</div>
                  <h4 className="text-xl font-bold mb-3 text-foreground">{theme.title}</h4>
                  <p className="text-muted-foreground mb-6">{theme.description}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {theme.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Rules & Eligibility */}
        <div className="animate-on-scroll">
          <Card className="tech-card border-0">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground">Rules & Eligibility</CardTitle>
              <p className="text-muted-foreground">Guidelines for participation</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Participation Rules
                  </h4>
                  <ul className="space-y-3">
                    {rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-accent" />
                    Judging Criteria
                  </h4>
                  <div className="space-y-3">
                    {["Innovation & Creativity (30%)", "Technical Excellence (25%)", "Business Impact (20%)", "Presentation (15%)", "Team Collaboration (10%)"].map((criteria, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-accent-glow/20 rounded-lg flex items-center justify-center text-accent text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-sm text-muted-foreground">{criteria}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}