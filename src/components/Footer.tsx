import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronUp, Mail, Phone, MapPin, Instagram, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const footerLinks = {
  event: [
    { name: 'About Hackathon', href: '#about' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Rules & Guidelines', href: '#schedule' },
    { name: 'Prize Details', href: '#prizes' }
  ],
  organizers: [
    { name: 'Honeywell', href: 'https://honeywell.com' },
    { name: 'MIT Bengaluru', href: 'https://manipal.edu' },
    { name: 'SDG Club', href: '#contact' },
    { name: 'About Organizers', href: '#about' }
  ],
  support: [
    { name: 'Registration Help', href: '#register' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'WhatsApp Support', href: 'https://wa.me/919876543210' },
    { name: 'Emergency Contact', href: 'tel:+919876543210' }
  ]
};

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/sdgclub_mit' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/sdgclub-mit' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/sdgclubmit' }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-mesh opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Back to Top */}
        <div className="flex justify-center py-8">
          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="btn-outline"
          >
            <ChevronUp className="w-4 h-4 mr-2" />
            Back to Top
          </Button>
        </div>

        <Separator className="mb-12" />

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Event Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <div className="font-bold text-lg text-foreground">Honeywell Hackathon</div>
                <div className="text-sm text-muted-foreground">2025</div>
              </div>
            </div>
            
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Aerospace & Industrial Automation hackathon bringing together the brightest minds to solve real-world challenges.
            </p>
            
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                MIT Bengaluru Campus
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                induj.mitblr2023@learner.manipal.edu
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +91 95694 06171
              </div>
            </div>
          </div>

          {/* Event Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Event</h4>
            <ul className="space-y-2">
              {footerLinks.event.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Organizers */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Organizers</h4>
            <ul className="space-y-2">
              {footerLinks.organizers.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm flex items-center gap-1"
                  >
                    {link.name}
                    {!link.href.startsWith('#') && <ExternalLink className="w-3 h-3" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm flex items-center gap-1"
                  >
                    {link.name}
                    {!link.href.startsWith('#') && <ExternalLink className="w-3 h-3" />}
                  </button>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h5 className="font-medium text-foreground mb-3 text-sm">Follow Us</h5>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="outline"
                    size="sm"
                    onClick={() => window.open(social.href, '_blank')}
                    className="w-8 h-8 p-0"
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pb-8 gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © 2025 Honeywell Hackathon. Organized by SDG Club, MIT Bengaluru in collaboration with Honeywell.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Terms & Conditions
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              Code of Conduct
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}