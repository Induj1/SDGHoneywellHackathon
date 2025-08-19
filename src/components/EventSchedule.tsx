import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Users, Trophy, Lightbulb, Code, Presentation, Target, CheckCircle } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

const scheduleData = [
  {
    day: "Day 1",
    date: "25th September 2025",
    color: "primary",
    icon: <Lightbulb className="w-5 h-5" />,
    events: [
      { time: "4:00 PM - 4:15 PM", title: "Welcome address", description: "Opening ceremony and welcome" },
      { time: "4:15 PM - 4:40 PM", title: "Honeywell presentation by Honorary Leaders", description: "Keynote presentation by Honeywell executives" },
      { time: "4:40 PM - 5:40 PM", title: "PROBLEM STATEMENTS Overview by SMEs", description: "Detailed problem statement briefing" },
      { time: "5:40 PM - 7:40 PM", title: "BREAKOUT ROOMS Clarification and mentoring by SMEs", description: "Team formation and initial mentoring" },
      { time: "7:40 PM - 11:00 PM", title: "Commencement of the hack", description: "Start of the hackathon development phase" }
    ]
  },
  {
    day: "Day 2", 
    date: "26th September 2025",
    color: "secondary",
    icon: <Code className="w-5 h-5" />,
    events: [
      { time: "11:00 AM - 1:00 PM", title: "FIRST CHECKPOINT Feedback to the teams ", description: "Mid-point progress review and feedback" },
      { time: "1:00 PM - 5:00 PM", title: "Hackathon resumes", description: "Continued development and coding phase" }
    ]
  },
  {
    day: "Day 3",
    date: "27th September 2025", 
    color: "accent",
    icon: <Presentation className="w-5 h-5" />,
    events: [
      { time: "9:00 AM - 11:00 AM", title: "SECOND CHECKPOINT Evaluation by SMEs", description: "Final checkpoint and evaluation" },
      { time: "11:00 AM - 11:30 AM", title: "Shortlisting top 10 teams (SMEs)", description: "Selection of finalist teams" },
      { time: "11:30 AM - 11:45 AM", title: "Mail regarding top 10 teams (Email)", description: "Notification to selected teams" },
      { time: "11:45 AM - 1:30 PM", title: "Demo preparations by top 10 teams", description: "Preparation time for final presentations" },
      { time: "1:30 PM - 3:30 PM", title: "Demonstration to the judges 10 minutes per team ", description: "Final project presentations" },
      { time: "3:30 PM - 4:30 PM", title: "Final review and shortlisting the winners (SMEs)", description: "Judging and winner selection" },
      { time: "4:30 PM - 5:00 PM", title: "Winner announcement & wrap up", description: "Award ceremony and closing" }
    ]
  }
];

const themes = [
  {
    title: "Artificial Intelligence",
    description: "Machine learning, neural networks, and intelligent automation solutions",
    icon: "🧠",
    tags: ["Machine Learning", "Neural Networks", "AI Automation"]
  },
  {
    title: "Internet of Things",
    description: "Connected devices, smart sensors, and IoT ecosystem development",
    icon: "📡",
    tags: ["Smart Sensors", "Connected Devices", "IoT Platforms"]
  },
  {
    title: "Machine Learning",
    description: "Predictive analytics, data modeling, and intelligent algorithms",
    icon: "🔗",
    tags: ["Predictive Analytics", "Data Science", "Algorithms"]
  },
  {
    title: "Edge Computing & Analytics",
    description: "Real-time processing, distributed computing, and edge intelligence",
    icon: "⚡",
    tags: ["Real-time Processing", "Edge Intelligence", "Distributed Systems"]
  }
];

const rules = [
  "Teams of 2-4 members (college students only)",
  "Original code and ideas only", 

  "Open source technologies preferred",
  "Presentation must be under 5 minutes",
  "Judging based on innovation, technical excellence, and business impact"
];

export default function EventSchedule() {
  const [activeDay, setActiveDay] = useState(0);
  const [visibleEvents, setVisibleEvents] = useState<Set<string>>(new Set());
  const timelineRef = useRef<HTMLDivElement>(null);
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const timelineHeight = timelineRef.current.offsetHeight;
      
      // Calculate timeline progress based on scroll position
      const scrollProgress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + timelineHeight)));
      
      // Update active day based on scroll progress
      const newActiveDay = Math.floor(scrollProgress * scheduleData.length);
      setActiveDay(Math.min(newActiveDay, scheduleData.length - 1));

      // Check which events are visible
      const newVisibleEvents = new Set<string>();
      eventRefs.current.forEach((ref, index) => {
        if (ref) {
          const eventRect = ref.getBoundingClientRect();
          if (eventRect.top < viewportHeight && eventRect.bottom > 0) {
            newVisibleEvents.add(`${Math.floor(index / 4)}-${index % 4}`);
          }
        }
      });
      setVisibleEvents(newVisibleEvents);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/50">
            Event Details
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">48 Hours</span> of{' '}
            <span className="text-gradient-secondary">Innovation</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Follow the journey from ideation to execution in our interactive timeline
          </p>
        </div>

        {/* Interactive Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20 hidden lg:block">
            {/* Progress indicator */}
            <div 
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-accent transition-all duration-500 ease-out"
              style={{ 
                height: `${Math.min(100, (activeDay + 1) / scheduleData.length * 100)}%`,
                boxShadow: '0 0 20px rgba(var(--primary), 0.5)'
              }}
            />
          </div>

          {/* Timeline Events */}
          <div className="space-y-32">
            {scheduleData.map((day, dayIndex) => (
              <div key={dayIndex} className="relative">
                {/* Day Header */}
                <div className="flex items-center justify-center mb-16">
                  <div 
                    className={`relative flex items-center gap-6 transition-all duration-700 ${
                      dayIndex <= activeDay ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div 
                        className={`w-16 h-16 rounded-full bg-gradient-to-br transition-all duration-500 flex items-center justify-center ${
                          dayIndex <= activeDay 
                            ? `from-${day.color} to-${day.color}-glow shadow-lg shadow-${day.color}/50` 
                            : 'from-muted to-muted-foreground/20'
                        }`}
                      >
                        {dayIndex <= activeDay ? (
                          day.icon
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-muted-foreground/50" />
                        )}
                      </div>
                    </div>

                    {/* Day Info Card */}
                    <Card 
                      className={`tech-card border-0 transition-all duration-700 ${
                        dayIndex <= activeDay ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
                      }`}
                    >
                      <CardHeader className="text-center">
                        <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br flex items-center justify-center mb-4 transition-all duration-500 ${
                          dayIndex <= activeDay 
                            ? `from-${day.color}/20 to-${day.color}-glow/20 shadow-md` 
                            : 'from-muted/20 to-muted-foreground/10'
                        }`}>
                          {day.icon}
                        </div>
                        <CardTitle className="text-2xl font-bold text-foreground">{day.day}</CardTitle>
                        <p className="text-muted-foreground flex items-center gap-2 justify-center">
                          <Calendar className="w-4 h-4" />
                          {day.date}
                        </p>
                      </CardHeader>
                    </Card>
                  </div>
                </div>

                {/* Events Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {day.events.map((event, eventIndex) => {
                    const globalIndex = dayIndex * 4 + eventIndex;
                    const isVisible = visibleEvents.has(`${dayIndex}-${eventIndex}`);
                    const isLeft = eventIndex % 2 === 0;
                    
                    return (
                      <div
                        key={eventIndex}
                        ref={el => eventRefs.current[globalIndex] = el}
                        className={`relative transition-all duration-700 ${
                          isLeft ? 'lg:pr-16' : 'lg:pl-16'
                        } translate-y-0 opacity-100`}
                        style={{ 
                          transitionDelay: `${eventIndex * 150}ms`,
                          transform: 'translateX(0) translateY(0)'
                        }}
                      >
                        {/* Connection Line to Timeline */}
                        <div className={`hidden lg:block absolute top-1/2 w-16 h-0.5 bg-gradient-to-r transition-all duration-500 ${
                          isLeft ? 'right-0' : 'left-0'
                        } ${
                          isVisible 
                            ? `from-${day.color}/50 to-transparent` 
                            : 'from-muted/30 to-transparent'
                        }`} />

                        <Card className={`tech-card border-0 h-full transition-all duration-500 shadow-lg`}>
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center transition-all duration-500 from-${day.color}/20 to-${day.color}-glow/20 shadow-md`}>
                                <Clock className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-sm font-medium text-foreground bg-muted/50 px-2 py-1 rounded-md">
                                    {event.time}
                                  </span>
                                  {isVisible && (
                                    <CheckCircle className="w-4 h-4 text-green-500 animate-pulse" />
                                  )}
                                </div>
                                <h4 className="text-lg font-semibold text-foreground mb-2">{event.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{event.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="fixed bottom-8 right-8 z-50">
            <Card className="tech-card border-0 p-4">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-xs text-muted-foreground">Progress</p>
                  <p className="text-sm font-semibold text-foreground">
                    Day {activeDay + 1} of {scheduleData.length}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Problem Statement Themes */}
        <div className="mt-32 mb-20 animate-on-scroll">
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Hackathon <span className="text-gradient-tech">Domains</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {themes.map((theme, index) => (
              <Card key={index} className="tech-card border-0 text-center hover:scale-105 transition-transform duration-300">
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