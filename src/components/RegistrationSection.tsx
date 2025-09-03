import { useState } from 'react';
import HackathonRegistrationForm from './HackathonRegistrationForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { QrCode, Calendar, Clock, Users, Mail, Phone, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export default function RegistrationSection() {
  const [email, setEmail] = useState('');

  const registrationDeadline = "20th September 2025";
  
  const qrCodeData = "https://forms.gle/honeywellhackathon2025"; // Placeholder URL

  const [notifyError, setNotifyError] = useState('');
  const [notifySuccess, setNotifySuccess] = useState(false);

  const handleQuickNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    setNotifyError('');
    setNotifySuccess(false);
    if (!email) return;
    // Store email in Supabase 'notifications' table
    const { error } = await supabase.from('notifications').insert({ email });
    if (error) {
      setNotifyError('Failed to sign up for notifications. Please try again.');
    } else {
      setNotifySuccess(true);
      setEmail('');
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById('registration-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/50">
            Registration
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Secure Your <span className="text-gradient-primary">Spot</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Limited seats available. Register now to be part of this incredible innovation journey.
          </p>
        </div>

        {/* Hackathon Registration Form */}
        <div className="mb-16 animate-on-scroll" id="registration-form">
          <HackathonRegistrationForm />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Registration Info */}
          <div className="animate-on-scroll">
            <Card className="tech-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  Registration Details
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Deadline */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card/30 border border-border/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Registration Deadline</h4>
                    <p className="text-muted-foreground">{registrationDeadline}</p>
                  </div>
                </div>

                {/* Event Duration */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card/30 border border-border/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-secondary-glow/20 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Event Duration</h4>
                    <p className="text-muted-foreground">48 hours of non-stop innovation</p>
                  </div>
                </div>

                {/* Team Size */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card/30 border border-border/30">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-accent-glow/20 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Team Size</h4>
                    <p className="text-muted-foreground">2-4 members per team</p>
                  </div>
                </div>

                {/* What's Included */}
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-6 border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-4">Registration Includes</h4>
                  <ul className="space-y-2">
                    {[
                      "Access to all 3 days of the hackathon",
                      "Free meals and refreshments", 
                      "Mentorship from industry experts",
                      "Access to premium development tools",
                      "Networking opportunities",
                      "Certificate of participation"
                      
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Main Registration Button */}
                <Button className="btn-hero w-full text-lg" onClick={scrollToForm}>
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Register Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-8 animate-on-scroll">
            {/* Quick Notify */}
            <Card className="tech-card border-0">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground">Get Notified</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Receive registration reminders and event updates
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleQuickNotify} className="space-y-4">
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="btn-secondary w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Notify Me
                  </Button>
                  {notifyError && (
                    <div className="text-red-500 text-sm font-semibold text-center mt-2">{notifyError}</div>
                  )}
                  {notifySuccess && (
                    <div className="text-green-500 text-sm font-semibold text-center mt-2">Signed up for notifications!</div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Contact Support */}
            <Card className="tech-card border-0">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  Need Help?
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Email: </span>
                    <span className="text-foreground">induj.mitblr2023@learner.manipal.edu</span>
                  </div>
                  
                  <div>
                    <span className="text-muted-foreground">Phone: </span>
                    <span className="text-foreground">+91 95694 06171</span>
                  </div>
                  
                  <div>
                    <span className="text-muted-foreground">WhatsApp Support: </span>
                    <span className="text-foreground">Available 24/7</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Registration Stats */}
        <div className="mt-16 animate-on-scroll">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Spots Available", value: "500+", color: "primary" },
              { label: "Teams Expected", value: "125+", color: "secondary" },
              { label: "Colleges Participating", value: "50+", color: "accent" },
              { label: "Days to Event", value: "245", color: "primary" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-2xl md:text-3xl font-bold text-gradient-${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}