import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Plane, Cog, Target, Award, Globe, Users2 } from 'lucide-react';
import aboutAerospace from '@/assets/about-aerospace.jpg';

const aboutData = [
  {
    title: "About Honeywell",
    icon: <Plane className="w-8 h-8 text-primary" />,
    description: "A Fortune 100 technology company that invents and manufactures technologies to address tough challenges linked to global macro trends such as safety, security, and energy.",
    highlights: [
      "Global leader in aerospace technology",
      "Pioneer in industrial automation solutions", 
      "Committed to sustainable innovation",
      "Serving customers in 100+ countries"
    ],
    gradient: "from-primary/20 to-primary-glow/20"
  },
  {
    title: "About SDG Club",
    icon: <Target className="w-8 h-8 text-secondary" />,
    description: "The Sustainable Development Goals Club at MIT Bengaluru, dedicated to creating positive impact through technology and innovation.",
    highlights: [
      "Promoting UN Sustainable Development Goals",
      "Fostering innovation for social good",
      "Building tech solutions for global challenges",
      "Connecting students with industry leaders"
    ],
    gradient: "from-secondary/20 to-secondary-glow/20"
  },
  {
    title: "About MIT Bengaluru",
    icon: <Globe className="w-8 h-8 text-accent" />,
    description: "A premier institution fostering innovation, research, and technological excellence in the heart of India's Silicon Valley.",
    highlights: [
      "Top-tier engineering education",
      "State-of-the-art innovation labs",
      "Strong industry partnerships",
      "Vibrant startup ecosystem"
    ],
    gradient: "from-accent/20 to-accent-glow/20"
  }
];

const participationBenefits = [
  {
    icon: <Cog className="w-6 h-6" />,
    title: "Real-World Challenges",
    description: "Solve cutting-edge problems from Honeywell experts in aerospace and industrial automation"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Massive Prize Pool",
    description: "Win ₹1.5 Lakhs in cash prizes plus exclusive Honeywell merchandise and internship opportunities"
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: "Industry Mentorship",
    description: "Get guidance from Honeywell engineers and MIT faculty throughout the hackathon"
  }
];

export default function AboutSection() {
  return (
    <section className="py-20 bg-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-secondary border-secondary/50">
            About the Event
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Where <span className="text-gradient-primary">Innovation</span> Meets{' '}
            <span className="text-gradient-secondary">Excellence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us for an unprecedented collaboration between industry leaders and emerging talent
          </p>
        </div>

        {/* About Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {aboutData.map((item, index) => (
            <Card key={index} className="tech-card border-0 animate-on-scroll" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6`}>
                  {item.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                
                <ul className="space-y-2">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Participate Section */}
        <div className="mb-16 animate-on-scroll">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold mb-6">
                Why <span className="text-gradient-tech">Participate?</span>
              </h3>
              
              <div className="space-y-6">
                {participationBenefits.map((benefit, index) => (
                  <div key={index} className="flex gap-4 p-4 rounded-xl bg-card/30 border border-border/30">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-lg flex items-center justify-center text-primary">
                      {benefit.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{benefit.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={aboutAerospace} 
                alt="Aerospace Innovation" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-border/50">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}