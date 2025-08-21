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
         
        </div>

        {/* Prize Breakdown - Card Layout with Details */}
        <div className="mb-8 animate-on-scroll">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1st Prize */}
            <Card className="tech-card border-0 bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 shadow-md hover:scale-102 hover:shadow-lg transition-all duration-200 rounded-xl">
              <CardContent className="flex flex-col items-center justify-center p-5">
                <div className="mb-2 flex items-center justify-center">
                  <span className="inline-block bg-yellow-400/20 rounded-full p-1 shadow">
                    <Trophy className="w-8 h-8 text-yellow-400" />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-yellow-400 mb-1">1st Prize</h3>
                <p className="text-2xl font-bold text-yellow-400 mb-1">₹75,000</p>
              </CardContent>
            </Card>
            {/* 2nd Prize */}
            <Card className="tech-card border-0 bg-gradient-to-br from-gray-300/20 to-gray-500/20 shadow-md hover:scale-102 hover:shadow-lg transition-all duration-200 rounded-xl">
              <CardContent className="flex flex-col items-center justify-center p-5">
                <div className="mb-2 flex items-center justify-center">
                  <span className="inline-block bg-gray-300/20 rounded-full p-1 shadow">
                    <Medal className="w-8 h-8 text-gray-300" />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-300 mb-1">2nd Prize</h3>
                <p className="text-2xl font-bold text-gray-300 mb-1">₹50,000</p>
              </CardContent>
            </Card>
            {/* 3rd Prize */}
            <Card className="tech-card border-0 bg-gradient-to-br from-amber-600/20 to-amber-800/20 shadow-md hover:scale-102 hover:shadow-lg transition-all duration-200 rounded-xl">
              <CardContent className="flex flex-col items-center justify-center p-5">
                <div className="mb-2 flex items-center justify-center">
                  <span className="inline-block bg-amber-600/20 rounded-full p-1 shadow">
                    <Award className="w-8 h-8 text-amber-600" />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-amber-600 mb-1">3rd Prize</h3>
                <p className="text-2xl font-bold text-amber-600 mb-1">₹25,000</p>
              </CardContent>
            </Card>
          </div>
          <div className="w-full flex items-center justify-center my-6">
            <div className="h-0.5 w-1/2 bg-gradient-to-r from-accent/20 via-primary/10 to-secondary/20 rounded-full blur-xs opacity-40"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
            {/* Consolation Prize 1 */}
            <Card className="tech-card border-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 shadow-md hover:scale-102 hover:shadow-lg transition-all duration-200 rounded-xl">
              <CardContent className="flex flex-col items-center justify-center p-5">
                <div className="mb-2 flex items-center justify-center">
                  <span className="inline-block bg-blue-400/20 rounded-full p-1 shadow">
                    <Gift className="w-8 h-8 text-blue-400" />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blue-400 mb-1">Consolation Prize</h3>
                <p className="text-2xl font-bold text-blue-400 mb-1">₹10,000</p>
              </CardContent>
            </Card>
            {/* Consolation Prize 2 */}
            <Card className="tech-card border-0 bg-gradient-to-br from-blue-400/20 to-blue-600/20 shadow-md hover:scale-102 hover:shadow-lg transition-all duration-200 rounded-xl">
              <CardContent className="flex flex-col items-center justify-center p-5">
                <div className="mb-2 flex items-center justify-center">
                  <span className="inline-block bg-blue-400/20 rounded-full p-1 shadow">
                    <Gift className="w-8 h-8 text-blue-400" />
                  </span>
                </div>
                <h3 className="text-lg font-bold text-blue-400 mb-1">Consolation Prize</h3>
                <p className="text-2xl font-bold text-blue-400 mb-1">₹10,000</p>
              </CardContent>
            </Card>
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
