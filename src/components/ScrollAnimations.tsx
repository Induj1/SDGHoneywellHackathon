
import { useEffect, useRef, useState } from 'react';

// Enhanced scroll-triggered animations with stagger support
export const useScrollAnimation = (staggerDelay = 0) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * staggerDelay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    const elements = document.querySelectorAll(
      '.reveal-up, .reveal-scale, .reveal-slide-left, .reveal-slide-right, .animate-on-scroll, .stagger-item'
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, [staggerDelay]);

  return ref;
};

// Advanced particle system with mouse interaction
export const InteractiveParticleField = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Mouse-following particles */}
      <div
        className="absolute w-32 h-32 rounded-full bg-gradient-radial from-primary/20 to-transparent transition-all duration-300 ease-out"
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Floating particles with physics */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-particle-float opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            backgroundColor: i % 3 === 0 ? 'hsl(var(--primary))' : 
                            i % 3 === 1 ? 'hsl(var(--secondary))' : 'hsl(var(--accent))',
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 8}s`
          }}
        />
      ))}
      
      {/* Neural network connections */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        {Array.from({ length: 15 }).map((_, i) => (
          <line
            key={i}
            x1={`${Math.random() * 100}%`}
            y1={`${Math.random() * 100}%`}
            x2={`${Math.random() * 100}%`}
            y2={`${Math.random() * 100}%`}
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            opacity="0.3"
            className="animate-pulse"
            style={{
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// Enhanced data stream with more visual impact
export const EnhancedDataStreamEffect = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Vertical streams */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`vertical-${i}`}
          className="absolute w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent animate-data-stream"
          style={{
            left: `${5 + i * 8}%`,
            height: '120px',
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${2 + Math.random()}s`
          }}
        />
      ))}
      
      {/* Horizontal streams */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`horizontal-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent animate-tech-scan"
          style={{
            top: `${10 + i * 12}%`,
            width: '150px',
            left: '-150px',
            animationDelay: `${i * 0.6}s`,
            animationDuration: `${3 + Math.random()}s`
          }}
        />
      ))}
    </div>
  );
};

// Advanced holographic border with animated corners
export const AdvancedHolographicBorder = ({ 
  children, 
  className = "",
  intensity = 1 
}: { 
  children: React.ReactNode; 
  className?: string;
  intensity?: number;
}) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Animated corner indicators */}
      <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary/60 transition-all duration-500 group-hover:border-primary group-hover:scale-110" />
      <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary/60 transition-all duration-500 group-hover:border-primary group-hover:scale-110" />
      <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary/60 transition-all duration-500 group-hover:border-primary group-hover:scale-110" />
      <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary/60 transition-all duration-500 group-hover:border-primary group-hover:scale-110" />
      
      {/* Scanning line effect */}
      <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-y-0 -left-2 w-1 bg-gradient-to-b from-transparent via-primary to-transparent animate-tech-scan" />
      </div>
      
      {/* Content with enhanced backdrop */}
      <div className="relative bg-card/30 backdrop-blur-md border border-border/50 rounded-xl overflow-hidden group-hover:border-primary/30 transition-all duration-500">
        {children}
      </div>
      
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `0 0 ${20 * intensity}px hsl(var(--primary) / 0.3), 0 0 ${40 * intensity}px hsl(var(--primary) / 0.1)`
        }}
      />
    </div>
  );
};

// Enhanced magnetic element with 3D tilt effect
export const Enhanced3DMagneticElement = ({ 
  children, 
  className = "", 
  intensity = 1,
  tiltIntensity = 0.5 
}: { 
  children: React.ReactNode; 
  className?: string; 
  intensity?: number;
  tiltIntensity?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) / rect.width;
      const deltaY = (e.clientY - centerY) / rect.height;
      
      const moveX = deltaX * 15 * intensity;
      const moveY = deltaY * 15 * intensity;
      const rotateX = deltaY * -10 * tiltIntensity;
      const rotateY = deltaX * 10 * tiltIntensity;
      
      element.style.transform = `translate(${moveX}px, ${moveY}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      element.style.transition = 'transform 0.1s ease-out';
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      element.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      element.style.transform = 'translate(0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity, tiltIntensity]);

  return (
    <div 
      ref={ref} 
      className={`magnetic-hover cursor-pointer transform-gpu ${className}`}
      style={{ 
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
    >
      {children}
      {/* Hover glow effect */}
      {isHovered && (
        <div className="absolute inset-0 rounded-xl opacity-50 pointer-events-none animate-pulse-glow" />
      )}
    </div>
  );
};

// Staggered animation container
export const StaggeredAnimationContainer = ({ 
  children, 
  staggerDelay = 100,
  className = "" 
}: { 
  children: React.ReactNode; 
  staggerDelay?: number;
  className?: string;
}) => {
  useScrollAnimation(staggerDelay);

  return (
    <div className={className}>
      {children}
    </div>
  );
};

// Parallax scroll effect
export const ParallaxElement = ({ 
  children, 
  speed = 0.5,
  className = "" 
}: { 
  children: React.ReactNode; 
  speed?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const rate = scrolled * speed;

      if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
        element.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
