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
            
            {/* Patrons & Leadership */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-4xl font-bold text-center mb-16 text-gradient-secondary">
                Patrons & Leadership
              </h3>
              
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
                           Prof. (Dr.) H.S. Ballal
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
                            Prof. (Dr.) Narayana Sabhahit
                          </h3>
                          <p className="text-muted-foreground">
                            Pro Vice Chancellor, Technlogy & Science, MAHE
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
                            Prof. (Dr.) Raghavendra Prabhu
                          </h3>
                          <p className="text-muted-foreground">
                            Additional Registrar & Director Administration, MAHE Bengaluru
                          </p>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-foreground mb-1">
                            Prof. (Dr.) Iven Jose
                          </h3>
                          <p className="text-muted-foreground">
                            Director, MIT Bengaluru, MAHE
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </Enhanced3DMagneticElement>
              </div>
            </div>

            {/* Event Convenor */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-gradient-primary">Event Convenor</h3>
              <div className="flex justify-center">
                <Enhanced3DMagneticElement intensity={0.8} tiltIntensity={0.4}>
                  <div className="tech-card p-8 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-primary/20 hover:border-primary/50 transition-all duration-500 text-center max-w-md">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Prof. (Dr.) Dayananda P
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      Prof & Dean, MIT Bengaluru, MAHE
                    </p>
                  </div>
                </Enhanced3DMagneticElement>
              </div>
            </div>
            
            {/* Faculty & Leadership */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-gradient-secondary">Faculty & Leadership</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Enhanced3DMagneticElement intensity={0.8} tiltIntensity={0.4}>
                  <div className="tech-card p-8 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-500 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">Dr. Shilpa Ankalaki</h3>
                    <p className="text-muted-foreground font-medium">Assistant Professor (Sr-scale)<br/>MIT Bengaluru, MAHE</p>
                  </div>
                </Enhanced3DMagneticElement>
                <Enhanced3DMagneticElement intensity={0.8} tiltIntensity={0.4}>
                  <div className="tech-card p-8 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-accent/20 hover:border-accent/50 transition-all duration-500 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">Dr. Gururaj H L</h3>
                    <p className="text-muted-foreground font-medium">Associate Professor<br/>SoCE, MIT Bengaluru</p>
                  </div>
                </Enhanced3DMagneticElement>
                <Enhanced3DMagneticElement intensity={0.8} tiltIntensity={0.4}>
                  <div className="tech-card p-8 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-500 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">Dr. Geetabai S Hukkeri</h3>
                    <p className="text-muted-foreground font-medium">Assistant Professor<br/>MIT Bengaluru, MAHE</p>
                  </div>
                </Enhanced3DMagneticElement>
                
                <Enhanced3DMagneticElement intensity={0.8} tiltIntensity={0.4}>
                  <div className="tech-card p-8 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-accent/20 hover:border-accent/50 transition-all duration-500 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">Dr. Shreyas J</h3>
                    <p className="text-muted-foreground font-medium">Assistant Professor<br/>SoCE, MIT Bengaluru</p>
                  </div>
                </Enhanced3DMagneticElement>
              </div>
            </div>

            {/* Student Leadership */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-gradient-tech">Student Leadership</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Enhanced3DMagneticElement intensity={0.8} tiltIntensity={0.4}>
                  <div className="tech-card p-8 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-500 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Mr. Induj Gupta
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      President, SDG Club, MIT Bengaluru, MAHE
                    </p>
                  </div>
                </Enhanced3DMagneticElement>

                <Enhanced3DMagneticElement intensity={0.8} tiltIntensity={0.4}>
                  <div className="tech-card p-8 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-accent/20 hover:border-accent/50 transition-all duration-500 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Ms. Akshita Oberoi
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      Vice President, SDG Club, MIT Bengaluru, MAHE
                    </p>
                  </div>
                </Enhanced3DMagneticElement>
              </div>
            </div>
          </div>

          {/* Honeywell Technology Partners Section */}
          <div className="reveal-up mb-20">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Honeywell Technology Solutions Representatives
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-6 max-w-2xl mx-auto">
              <Enhanced3DMagneticElement intensity={0.7} tiltIntensity={0.3}>
                <div className="tech-card p-2 sm:p-3 rounded-lg bg-card/40 backdrop-blur-lg border border-primary/20 hover:border-primary/50 transition-all duration-500">
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">Ms. Meena Prasad</h4>
                      <p className="text-muted-foreground text-xs">University Relations Manager<br />at Honeywell</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">Ms. Alamelu Krishnamani</h4>
                      <p className="text-muted-foreground text-xs">Director Software Engineering<br />at Honeywell Aerospace</p>
                    </div>
                  </div>
                </div>
              </Enhanced3DMagneticElement>
              <Enhanced3DMagneticElement intensity={0.7} tiltIntensity={0.3}>
                <div className="tech-card p-2 sm:p-3 rounded-lg bg-card/40 backdrop-blur-lg border border-secondary/20 hover:border-secondary/50 transition-all duration-500">
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">Mr. Divya Swarup</h4>
                      <p className="text-muted-foreground text-xs">Fellow<br />at Honeywell Aerospace</p>
                    </div>

                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">Mr. Venkateswara Reddy</h4>
                      <p className="text-muted-foreground text-xs">Sr. Engineering Program Manager<br />at Honeywell Industrial Automation</p>
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
