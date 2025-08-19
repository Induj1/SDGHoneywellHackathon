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
                      Dean, MIT Bengaluru, MAHE
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
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Dr. Shilpa Ankalaki
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      Assistant Professor - Senior Scale<br/>MIT Bengaluru, MAHE
                    </p>
                  </div>
                </Enhanced3DMagneticElement>

                <Enhanced3DMagneticElement intensity={0.8} tiltIntensity={0.4}>
                  <div className="tech-card p-8 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-accent/20 hover:border-accent/50 transition-all duration-500 text-center">
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Dr. Geetabai S Hukkeri
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      Assistant Professor<br/>MIT Bengaluru, MAHE
                    </p>
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
<<<<<<< HEAD
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 text-gradient-tech">
              Honeywell Technology Partners
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              <Enhanced3DMagneticElement intensity={0.7} tiltIntensity={0.3}>
                <div className="tech-card p-6 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-primary/20 hover:border-primary/50 transition-all duration-500">
                  <div className="space-y-4">
                    <div className="border-b border-border/30 pb-3">
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        Ms. Meena Prasad
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        University Relations Manager at Honeywell 
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        Mr. Almelu Natarajan
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Advanced Software Engineer at Honeywell
                      </p>
=======
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 text-white">
              Honeywell Technology Partners
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
                      <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">Mr. Almelu Natarajan</h4>
                      <p className="text-muted-foreground text-xs">Advanced Software Engineer<br />at Honeywell Technology<br />at Honeywell</p>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">Ms. Alamelu Krishnamani</h4>
                      <p className="text-muted-foreground text-xs">Director Software Engineering<br />at Honeywell Aerospace</p>
>>>>>>> 0d2023c (push)
                    </div>
                  </div>
                </div>
              </Enhanced3DMagneticElement>

              <Enhanced3DMagneticElement intensity={0.7} tiltIntensity={0.3}>
<<<<<<< HEAD
                <div className="tech-card p-6 rounded-xl bg-card/40 backdrop-blur-lg border-2 border-secondary/20 hover:border-secondary/50 transition-all duration-500">
                  <div className="space-y-4">
                    <div className="border-b border-border/30 pb-3">
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        Mr. Divya Swarup
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Fellow - Aerospace Technologies at Honeywell
                      </p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">
                       Mr. Appar Vallikannu
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Building Automation System Analyst at Honeywell
                      </p>
=======
                <div className="tech-card p-2 sm:p-3 rounded-lg bg-card/40 backdrop-blur-lg border border-secondary/20 hover:border-secondary/50 transition-all duration-500">
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">Mr. Divya Swarup</h4>
                      <p className="text-muted-foreground text-xs">Fellow<br />at Honeywell Aerospace</p>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">Mr. Appar Vallikannu</h4>
                      <p className="text-muted-foreground text-xs">Building Automation<br />System Analyst at Honeywell</p>
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-foreground mb-1">Mr. Venkateswara Reddy</h4>
                      <p className="text-muted-foreground text-xs">Sr. Engineering Program Manager<br />at Honeywell Industrial Automation</p>
>>>>>>> 0d2023c (push)
                    </div>
                  </div>
                </div>
              </Enhanced3DMagneticElement>
<<<<<<< HEAD
            </div>
          </div>

=======

            </div>
          </div>

        {/* Event Timeline Section */}
        <div className="reveal-up mb-20">
          <div className="bg-gradient-to-r from-primary/80 via-background/80 to-secondary/80 rounded-xl py-4 px-6 mb-8 border border-primary/30">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient-tech text-center">Event Timeline</h2>
          </div>
          <div className="bg-card/60 rounded-xl p-6 max-w-xl mx-auto border border-border/30 backdrop-blur-lg">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-secondary inline-block shadow-md" />
                <span className="text-primary font-semibold italic text-base sm:text-lg">September 14<sup>th</sup> to 20<sup>th</sup></span>
                <span className="ml-2 font-bold text-foreground">ONLINE REGISTRATIONS</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-secondary inline-block shadow-md" />
                <span className="text-primary font-semibold italic text-base sm:text-lg">September 20<sup>th</sup> - 25<sup>th</sup></span>
                <span className="ml-2 font-bold text-foreground">ANNOUNCEMENT OF SHORTLISTED TEAMS</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="w-3 h-3 rounded-full bg-gradient-to-br from-primary to-secondary inline-block shadow-md" />
                <span className="text-primary font-semibold italic text-base sm:text-lg">September 25<sup>th</sup> - 27<sup>th</sup></span>
                <span className="ml-2 font-bold text-foreground">EVENT !!</span>
              </div>
            </div>
          </div>
        </div>
>>>>>>> 0d2023c (push)
        </StaggeredAnimationContainer>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 border border-primary/20 rounded-full opacity-30" />
      <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-gradient-to-br from-secondary/20 to-accent/10 rounded-lg rotate-45 opacity-40" />
    </section>
  );
}
