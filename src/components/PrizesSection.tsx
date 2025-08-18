import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Medal, Award, Gift } from 'lucide-react';
import sdgLogo from '@/assets/sdg-logo.png';
import mitLogo from '@/assets/mit-logo.png';
import honeywellLogo from '@/assets/honeywell-logo.svg';
import acmLogo from '@/assets/acm-logo.png';

const prizes = [
  {
    position: "1st Place",
    amount: "₹75,000",
    icon: <Trophy className="w-8 h-8" />,
    color: "from-yellow-400 to-yellow-600",
    textColor: "text-yellow-400",
    bgColor: "from-yellow-400/20 to-yellow-600/20"
  },
  {
    position: "2nd Place", 
    amount: "₹50,000",
    icon: <Medal className="w-8 h-8" />,
    color: "from-gray-300 to-gray-500",
    textColor: "text-gray-300",
    bgColor: "from-gray-300/20 to-gray-500/20"
  },
  {
    position: "3rd Place",
    amount: "₹25,000", 
    icon: <Award className="w-8 h-8" />,
    color: "from-amber-600 to-amber-800",
    textColor: "text-amber-600",
    bgColor: "from-amber-600/20 to-amber-800/20"
  }
];

const sponsors = [
  {
    type: "Title Sponsor",
    name: "Honeywell",
    description: "Global technology leader in aerospace and industrial automation",
    logo: honeywellLogo,
    contribution: "₹1.5L Prize Pool"
  },
  {
    type: "Venue Partner",
    name: "MIT Bengaluru",
    description: "Premier engineering institution fostering innovation",
    logo: mitLogo, 
    contribution: "World-class facilities + Faculty support"
  },
  {
    type: "Organizing Partner",
    name: "SDG Club",
    description: "Driving sustainable development through technology",
    logo: sdgLogo,
    contribution: "Event management + Student community"
  },
  {
    type: "Collaborating Partner", 
    name: "ACM MIT Bengaluru",
    description: "Association for Computing Machinery student chapter",
    logo: acmLogo,
    contribution: "Technical expertise + Student engagement"
  }
];

const participantPerks = [
  "Exclusive Honeywell merchandise for all participants",
  "Certificate of participation from MIT Bengaluru", 
  "Access to Honeywell's exclusive tech resources",
  "Networking opportunities with industry leaders",
  "Free meals and refreshments throughout the event",
  "Access to premium cloud credits and development tools"
];

export default function PrizesSection() {
  return (
    <section className="py-20 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-accent border-accent/50">
            Prizes & Sponsors
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">₹1.5 Lakh</span> Prize Pool
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compete for massive cash prizes, exclusive merchandise, and career opportunities
          </p>
        </div>

        {/* Main Prizes */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {prizes.map((prize, index) => (
            <Card key={index} className={`tech-card border-0 text-center animate-on-scroll ${index === 0 ? 'scale-105 border-yellow-400/50' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-8">
                <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${prize.bgColor} flex items-center justify-center mb-6 ${index === 0 ? 'pulse-glow' : ''}`}>
                  <div className={prize.textColor}>
                    {prize.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-foreground">{prize.position}</h3>
                <div className={`text-3xl font-bold bg-gradient-to-r ${prize.color} bg-clip-text text-transparent`}>
                  {prize.amount}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sponsors Section */}
        <div className="mb-20 animate-on-scroll">
          <h3 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Our <span className="text-gradient-tech">Partners</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sponsors.map((sponsor, index) => (
              <Card key={index} className="tech-card border-0">
                <CardContent className="p-8 text-center">
                  <Badge variant="outline" className="mb-4 text-primary border-primary/50">
                    {sponsor.type}
                  </Badge>
                  
                  <div className="mb-4 flex justify-center">
                    {sponsor.name === "Honeywell" ? (
                    <span
                      className="text-white"
                      style={{ fontFamily: "Times New Roman, serif", fontSize: "64px" }}
                    >
                      Honeywell
                    </span>
                    ) : (
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="h-16 w-auto filter brightness-110"
                    />
                    )}
                  </div>
                  
                  <h4 className="text-xl font-bold mb-3 text-foreground">{sponsor.name}</h4>
                  <p className="text-muted-foreground mb-4 text-sm">{sponsor.description}</p>
                  
                  <div className="bg-card/30 rounded-lg p-3 border border-border/30">
                    <p className="text-xs text-muted-foreground font-medium">{sponsor.contribution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Participant Perks */}
        <div className="animate-on-scroll">
          <Card className="tech-card border-0">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  Exclusive <span className="text-gradient-primary">Participant Perks</span>
                </h3>
                <p className="text-muted-foreground">Every participant receives valuable benefits</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {participantPerks.map((perk, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-card/30 border border-border/30">
                    <div className="w-8 h-8 bg-gradient-to-br from-accent/20 to-accent-glow/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Gift className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-sm text-foreground">{perk}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
