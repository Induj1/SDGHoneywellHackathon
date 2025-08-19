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
  },
  {
    position: "Consolation Prize",
    amount: "₹10,000",
    icon: <Gift className="w-8 h-8" />,
    color: "from-blue-400 to-blue-600",
    textColor: "text-blue-400",
    bgColor: "from-blue-400/20 to-blue-600/20"
  },
  {
    position: "Consolation Prize",
    amount: "₹10,000",
    icon: <Gift className="w-8 h-8" />,
    color: "from-blue-400 to-blue-600",
    textColor: "text-blue-400",
    bgColor: "from-blue-400/20 to-blue-600/20"
  }
];

// ...existing code...

const participantPerks = [
  "Certificate of participation from MIT Bengaluru", 
  "Networking opportunities with industry leaders",
  "Free meals and refreshments throughout the event"
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
            <span className="text-gradient-primary">₹1.75 Lakh</span> Prize Money
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Compete for massive cash prizes, exclusive merchandise, and career opportunities
          </p>
        </div>

// ...existing code...
        // ...existing code...

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
