import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventSchedule from '@/components/EventSchedule';
import PrizesSection from '@/components/PrizesSection';
import RegistrationSection from '@/components/RegistrationSection';
import ContactSection from '@/components/ContactSection';
import CreditsSection from '@/components/CreditsSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate-on-scroll');
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      <main>
        <section id="home">
          <HeroSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="schedule">
          <EventSchedule />
        </section>
        
        <section id="prizes">
          <PrizesSection />
        </section>
        
        <section id="register">
          <RegistrationSection />
        </section>
        
        <section id="contact">
          <ContactSection />
        </section>
        
        <section id="credits">
          <CreditsSection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
