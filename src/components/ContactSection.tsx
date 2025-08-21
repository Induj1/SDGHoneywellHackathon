import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, MessageCircle, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "induj.mitblr2023@learner.manipal.edu",
    action: "mailto:induj.mitblr2023@learner.manipal.edu",
    color: "primary"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "+91 95694 06171",
    action: "tel:+919569406171",
    color: "secondary"
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "WhatsApp",
    value: "24/7 Support",
    action: "https://wa.me/919569406171",
    color: "accent"
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Venue",
    value: "MIT Bengaluru Campus",
    action: "https://www.google.co.in/maps/place/Manipal+Academy+of+Higher+Education,+Bengaluru/@13.1233221,77.5896137,17z/",
    color: "primary"
  }
];

const socialLinks = [
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6" />,
    handle: "@sdgclub_mit",
    url: "https://www.instagram.com/sdgclub_mitblr/profilecard/?igsh=NDR4b3VoanZsOWpm",
    color: "from-pink-500 to-purple-600",
    description: "Follow for updates and behind-the-scenes content"
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    handle: "SDG Club MIT Bengaluru",
    url: "https://www.linkedin.com/company/sdg-club-mit-blr/",
    color: "from-blue-600 to-blue-800", 
    description: "Professional network and career opportunities"
  },
  {
    name: "WhatsApp Group",
    icon: <MessageCircle className="w-6 h-6" />,
    handle: "SDG Members Group",
    url: "https://chat.whatsapp.com/LOoA6TT5dHPEndwNooNkDE",
    color: "from-green-400 to-green-600",
    description: "Join for real-time updates and member discussions"
  }
];

const faqItems = [
  {
    question: "Who can participate?",
    answer: "College students from any discipline can participate. Teams of 2-4 members are allowed."
  },
  {
    question: "Is there a registration fee?",
    answer: "No, the hackathon is completely free to participate. All meals and resources are provided."
  },
  {
    question: "Do I need a team?",
    answer: "You can register individually or with a team. We'll help solo participants find teammates."
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, and enthusiasm! We'll provide everything else including meals."
  }
];

export default function ContactSection() {
  return (
    <section className="py-20 bg-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-secondary border-secondary/50">
            Get In Touch
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Have <span className="text-gradient-primary">Questions?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our team is here to help you every step of the way. Reach out through any of these channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-6 animate-on-scroll">
              {contactInfo.map((contact, index) => (
                <Card key={index} className="tech-card border-0 hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-${contact.color}/20 to-${contact.color}-glow/20 flex items-center justify-center mb-4 text-${contact.color}`}>
                      {contact.icon}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{contact.title}</h4>
                    <p className="text-muted-foreground mb-4">{contact.value}</p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(contact.action, '_blank')}
                      className="btn-outline"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Follow Us on <span className="text-gradient-tech">Social Media</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {socialLinks.map((social, index) => (
                  <Card key={index} className="tech-card border-0 hover:scale-105 transition-transform duration-300">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-4 text-white`}>
                        {social.icon}
                      </div>
                      <h4 className="font-semibold text-foreground mb-1">{social.name}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{social.handle}</p>
                      <p className="text-xs text-muted-foreground mb-4">{social.description}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(social.url, '_blank')}
                        className="btn-outline"
                      >
                        Follow
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Sidebar */}
          <div className="animate-on-scroll">
            <Card className="tech-card border-0">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground">Quick FAQ</CardTitle>
                <p className="text-muted-foreground">Common questions answered</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {faqItems.map((faq, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold text-foreground text-sm">{faq.question}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{faq.answer}</p>
                    {index < faqItems.length - 1 && <div className="h-px bg-border/50" />}
                  </div>
                ))}
              </CardContent>
            </Card>

           
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 animate-on-scroll">
          <Card className="tech-card border-0 bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Emergency Contact During Event
              </h3>
              <p className="text-muted-foreground mb-6">
                Our 24/7 support team will be available throughout the hackathon for any urgent assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero" onClick={() => window.open('tel:+919569406171', '_blank')}>
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Hotline
                </Button>
                <Button variant="outline" className="btn-outline" onClick={() => window.open('https://wa.me/919569406171', '_blank')}>
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}