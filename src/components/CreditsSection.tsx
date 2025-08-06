import { Enhanced3DMagneticElement, StaggeredAnimationContainer } from './ScrollAnimations';

export default function CreditsSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background">
        <div className="absolute inset-0 bg-mesh opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <StaggeredAnimationContainer staggerDelay={200}>
          
          {/* Organizer Credits Section */}
          <div className="reveal-up mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-gradient-primary">
              Organizer Credits
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Enhanced3DMagneticElement intensity={0.8} tiltIntensity={0.4}>
                <div className="tech-card p-8 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Prof. (Dr.) Dayananda P
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    Dean, MIT Bengaluru
                  </p>
                </div>
              </Enhanced3DMagneticElement>

              <Enhanced3DMagneticElement intensity={0.8} tiltIntensity={0.4}>
                <div className="tech-card p-8 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-500 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Mr. Induj Gupta
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    President, SDG Club, MIT Bengaluru
                  </p>
                </div>
              </Enhanced3DMagneticElement>

              <Enhanced3DMagneticElement intensity={0.8} tiltIntensity={0.4}>
                <div className="tech-card p-8 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-accent/20 hover:border-accent/50 transition-all duration-500 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Miss. Akshita Oberoi
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    Vice President, SDG Club, MIT Bengaluru
                  </p>
                </div>
              </Enhanced3DMagneticElement>
            </div>
          </div>

          {/* Honeywell Technology Partners Section */}
          <div className="reveal-up mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-gradient-tech">
              Honeywell Technology Partners
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Enhanced3DMagneticElement intensity={0.7} tiltIntensity={0.3}>
                <div className="tech-card p-6 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-primary/20 hover:border-primary/50 transition-all duration-500">
                  <div className="space-y-4">
                    <div className="border-b border-border/30 pb-3">
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        Meena Prasad
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        University Relations Manager at Honeywell Technology
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        Almelu Natarajan
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Advanced Software Engineer @ Honeywell
                      </p>
                    </div>
                  </div>
                </div>
              </Enhanced3DMagneticElement>

              <Enhanced3DMagneticElement intensity={0.7} tiltIntensity={0.3}>
                <div className="tech-card p-6 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-500">
                  <div className="space-y-4">
                    <div className="border-b border-border/30 pb-3">
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        Divya Swarup
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Fellow - Aerospace Technologies at Honeywell
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        Appar Vallikannu
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Building Automation System Analyst
                      </p>
                    </div>
                  </div>
                </div>
              </Enhanced3DMagneticElement>
            </div>
          </div>

          {/* Patrons & Leadership Section */}
          <div className="reveal-up">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-gradient-secondary">
              Patrons & Leadership
            </h2>
            
            <div className="max-w-6xl mx-auto">
              <Enhanced3DMagneticElement intensity={0.6} tiltIntensity={0.3}>
                <div className="tech-card p-8 rounded-xl bg-card/30 backdrop-blur-lg border-2 border-primary/20 hover:border-primary/40 transition-all duration-500">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    
                    {/* Left Column */}
                    <div className="space-y-6">
                      <div className="border-b border-border/30 pb-4">
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          Dr. Ramdas M Pai
                        </h3>
                        <p className="text-muted-foreground">
                          Chancellor, MAHE
                        </p>
                      </div>

                      <div className="border-b border-border/30 pb-4">
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          Dr. H.S. Ballal
                        </h3>
                        <p className="text-muted-foreground">
                          Pro-Chancellor, MAHE
                        </p>
                      </div>

                      <div className="border-b border-border/30 pb-4">
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          Prof. (Dr.) M. Veeraraghavan
                        </h3>
                        <p className="text-muted-foreground">
                          Pro Vice-Chancellor, MAHE Bengaluru
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          Dr. Narayana Sabhahit
                        </h3>
                        <p className="text-muted-foreground">
                          Registrar, MAHE
                        </p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                      <div className="border-b border-border/30 pb-4">
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          Dr. Ranjan R Pai
                        </h3>
                        <p className="text-muted-foreground">
                          President, MAHE
                        </p>
                      </div>

                      <div className="border-b border-border/30 pb-4">
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          Lt. Gen. (Dr.) M.D. Venkatesh
                        </h3>
                        <p className="text-muted-foreground">
                          Vice-Chancellor, MAHE
                        </p>
                      </div>

                      <div className="border-b border-border/30 pb-4">
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          Dr. Raghavendra Prabhu
                        </h3>
                        <p className="text-muted-foreground">
                          Deputy Registrar, MAHE Bengaluru
                        </p>
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-1">
                          Prof. (Dr.) Iven Jose
                        </h3>
                        <p className="text-muted-foreground">
                          Director, MIT Bengaluru
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </Enhanced3DMagneticElement>
            </div>
          </div>

        </StaggeredAnimationContainer>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-primary/20 rounded-full opacity-30" />
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-lg rotate-45 opacity-40" />
    </section>
  );
}
