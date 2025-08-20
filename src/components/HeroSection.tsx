
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Trophy, ArrowRight, Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import sdgLogo from '@/assets/sdg-logo.png';
import mitLogo from '@/assets/mit-logo.png';
import acmLogo from '@/assets/acm-logo.png';
import { 
  InteractiveParticleField, 
  EnhancedDataStreamEffect, 
  Enhanced3DMagneticElement, 
  useScrollAnimation,
  StaggeredAnimationContainer,
  ParallaxElement
} from './ScrollAnimations';

interface CountdownProps {
  targetDate: Date;
}

const Countdown = ({ targetDate }: CountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000)
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value], index) => (
        <Enhanced3DMagneticElement key={unit} intensity={0.8} tiltIntensity={0.3}>
          <div className="tech-card text-center min-w-[80px] p-4 bg-card/40 backdrop-blur-lg border-2 border-primary/20 rounded-xl hover:border-primary/50 transition-all duration-500">
            <div className="text-2xl md:text-4xl font-bold text-gradient-primary mb-1">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
              {unit}
            </div>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </Enhanced3DMagneticElement>
      ))}
    </div>
  );
};

export default function HeroSection() {
  const hackathonDate = new Date('2025-09-25T16:00:00');
  const [isLoaded, setIsLoaded] = useState(false);
  useScrollAnimation();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Dynamic Background with Parallax */}
      <ParallaxElement speed={-0.3} className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background/90" />
          <div className="absolute inset-0 bg-mesh opacity-40" />
        </div>
      </ParallaxElement>
      {/* Interactive Particle System */}
      <InteractiveParticleField />
      <EnhancedDataStreamEffect />
      {/* Floating Tech Elements with 3D Effects */}
      <Enhanced3DMagneticElement 
        className="absolute top-20 left-20 opacity-30" 
        intensity={1.5}
        tiltIntensity={1}
      >
        <div className="w-24 h-24 border-2 border-primary/40 rounded-full bg-gradient-to-br from-primary/20 to-secondary/10 backdrop-blur-sm flex items-center justify-center">
          <Sparkles className="w-8 h-8 text-primary animate-pulse" />
        </div>
      </Enhanced3DMagneticElement>
      <Enhanced3DMagneticElement 
        className="absolute bottom-32 right-32 opacity-25" 
        intensity={1.2}
      >
        <div className="w-20 h-20 bg-gradient-to-br from-secondary/30 to-accent/20 rotate-45 rounded-lg backdrop-blur-sm border border-secondary/30" />
      </Enhanced3DMagneticElement>
      <Enhanced3DMagneticElement 
        className="absolute top-1/3 right-20 opacity-30"
        intensity={1}
      >
        <div className="w-16 h-16 border-2 border-accent/50 rounded-xl bg-accent/10 backdrop-blur-sm rotate-12 flex items-center justify-center">
          <div className="w-6 h-6 bg-accent rounded-full animate-pulse" />
        </div>
      </Enhanced3DMagneticElement>
      {/* Main Content with Staggered Animations */}
      <div className="relative z-10 container mx-auto px-2 sm:px-4 pt-16 sm:pt-24 text-center">
        <StaggeredAnimationContainer staggerDelay={200}>
          <div className={`reveal-up transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Partner Logos */}
            <div className="reveal-up mb-12">
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 mb-4 sm:mb-6">
                <Enhanced3DMagneticElement intensity={0.6} tiltIntensity={0.3}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300">
                    <img 
                      src={sdgLogo} 
                      alt="SDG Club MIT Bengaluru" 
                      className="h-12 sm:h-16 md:h-20 w-auto filter brightness-110"
                    />
                  </div> 
                </Enhanced3DMagneticElement>
                <div className="text-white/60 text-2xl font-light">×</div>
                <Enhanced3DMagneticElement intensity={0.6} tiltIntensity={0.3}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300">
                    <img 
                      src={mitLogo} 
                      alt="Manipal Institute of Technology Bengaluru" 
                      className="h-10 sm:h-14 md:h-16 w-auto filter brightness-110"
                    />
                  </div>
                </Enhanced3DMagneticElement>
                <div className="text-white/60 text-2xl font-light">×</div>
                <Enhanced3DMagneticElement intensity={0.6} tiltIntensity={0.3}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:border-white/40 transition-all duration-300">
                    <img 
                      src={acmLogo} 
                      alt="ACM MIT Bengaluru" 
                      className="h-10 sm:h-14 md:h-16 w-auto filter brightness-110"
                    />
                  </div>
                </Enhanced3DMagneticElement>
                <div className="text-white/60 text-2xl font-light">×</div>
                <Enhanced3DMagneticElement intensity={0.6} tiltIntensity={0.3}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center justify-center min-w-[60px] min-h-[40px]">
                    <span className="text-xs sm:text-sm md:text-base font-bold text-white">Honeywell Technology Solutions</span>
                  </div>
                </Enhanced3DMagneticElement>
              </div>
            </div>
            <div className="reveal-scale mb-8">
              <h1 className="font-bold mb-4 sm:mb-6 leading-tight text-center text-3xl sm:text-5xl md:text-6xl">
                <div className="flex justify-center items-center mb-2 sm:mb-4">
                  <span
                    className="text-white text-4xl sm:text-6xl md:text-[5rem]"
                    style={{ fontFamily: "Times New Roman, serif" }}
                  >
                    HackSpace
                  </span>
                </div>
                <span
                  className="text-foreground block my-1 sm:my-2 text-3xl sm:text-5xl md:text-[5rem] font-bold"
                >
                  Hackathon
                </span>
              <span className="text-gradient-secondary block"></span>
              </h1>
            </div>
            <div className="reveal-up mb-6">
              <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold text-gradient-tech mb-2 sm:mb-4">
                Aerospace & Industrial Automation
              </h2>
            </div>
            <div className="reveal-up mb-12">
              <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-2xl sm:max-w-4xl mx-auto leading-relaxed">
                Organized by: <span className="text-secondary font-bold bg-secondary/10 px-2 py-1 rounded-lg">School of Computer Engineering, MIT, MAHE Bengaluru</span>
                <br className="hidden md:block" />
                & <span className="text-primary font-bold bg-primary/10 px-2 py-1 rounded-lg">SDG MITBLR</span>
              </p>
            </div>
            {/* Enhanced Event Details with 3D Cards */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-16 reveal-up">
              <Enhanced3DMagneticElement intensity={1} tiltIntensity={0.5}>
                <div className="flex items-center gap-2 sm:gap-3 tech-card p-3 sm:p-6 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-primary/20 hover:border-primary/50 min-w-[120px] sm:min-w-[200px]">
                  <MapPin className="w-6 h-6 text-primary" />
                  <span className="font-medium">MIT Bengaluru Campus</span>
                </div>
              </Enhanced3DMagneticElement>
              <Enhanced3DMagneticElement intensity={1} tiltIntensity={0.5}>
                <div className="flex items-center gap-2 sm:gap-3 tech-card p-3 sm:p-6 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-secondary/20 hover:border-secondary/50 min-w-[120px] sm:min-w-[200px]">
                  <Users className="w-6 h-6 text-secondary" />
                  <span className="font-medium">500+ Participants</span>
                </div>
              </Enhanced3DMagneticElement>
              <Enhanced3DMagneticElement intensity={1} tiltIntensity={0.5}>
                <div className="flex items-center gap-2 sm:gap-3 tech-card p-3 sm:p-6 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-accent/20 hover:border-accent/50 min-w-[120px] sm:min-w-[200px]">
                  <Trophy className="w-6 h-6 text-accent" />
                  <span className="font-medium">₹1.75 Prize Pool</span>
                </div>
              </Enhanced3DMagneticElement>
            </div>
            {/* Enhanced Countdown Timer */}
            <div className="mb-8 sm:mb-16 reveal-scale">
              <h3 className="text-lg sm:text-2xl font-bold mb-4 sm:mb-8 text-foreground flex items-center justify-center gap-2 sm:gap-3">
                <Sparkles className="w-6 h-6 text-primary" />
                Event Starts In
                <Sparkles className="w-6 h-6 text-primary" />
              </h3>
              <Countdown targetDate={hackathonDate} />
            </div>
            {/* Enhanced Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center reveal-up">
              <Enhanced3DMagneticElement intensity={1.2} tiltIntensity={0.8}>
                <Button className="btn-hero text-lg px-10 py-6 rounded-xl bg-gradient-to-r from-primary via-primary-glow to-primary hover:from-primary-glow hover:to-primary group">
                  <Sparkles className="w-5 h-5 mr-3 group-hover:animate-spin" />
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Enhanced3DMagneticElement>
              <Enhanced3DMagneticElement intensity={1} tiltIntensity={0.6}>
                <Button variant="outline" className="btn-outline text-lg px-10 py-6 rounded-xl border-2 border-primary/50 hover:border-primary hover:bg-primary/10 group">
                  Download Brochure
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Enhanced3DMagneticElement>
            </div>
          </div>
        </StaggeredAnimationContainer>
      </div>
      {/* Enhanced Tech Effects with Multiple Layers */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent animate-tech-scan opacity-60" />
      <div className="absolute top-0 right-0 w-2 h-full bg-gradient-to-b from-transparent via-secondary/50 to-transparent animate-tech-scan opacity-40" style={{ animationDelay: '1s', animationDirection: 'reverse' }} />
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-transparent via-accent/60 to-transparent animate-tech-scan opacity-50" style={{ animationDelay: '2s' }} />
    </section>
  );
}

// ...existing code...
