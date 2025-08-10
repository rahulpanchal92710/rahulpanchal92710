import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Download, User, Briefcase, GraduationCap, Award, Code, Database, Server, Globe } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ["home", "about", "experience", "skills", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gray-800"
            >
              Rahul Panchal
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-all duration-300 hover:text-blue-600 ${
                    activeSection === item.id ? 'text-blue-600 font-semibold' : 'text-gray-600'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm{" "}
                <span className="text-blue-600">Rahul Panchal</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-600 mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Senior Talent Acquisition Professional specializing in Life Sciences & Biometrics Hiring. 
                With over 9 years of experience in the US and Canada, I help build exceptional teams 
                for leading pharmaceutical and biotechnology companies.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="mr-2" size={20} />
                  Get In Touch
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold"
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </Button>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center text-gray-600">
                  <Mail size={18} className="mr-2" />
                  <span>rahulpanchal92710@gmail.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone size={18} className="mr-2" />
                  <span>+1 781-408-8012</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image/Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-8xl font-bold text-white">RP</span>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-20 animate-pulse" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Passionate About Building Exceptional Teams
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Tenacious and resourceful Talent Acquisition Professional with over 9 years of experience 
                in the US and Canada, specializing in hiring for Pharmaceutical, Biotechnology, and Medical 
                Device industries.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Recognized for a proven track record in full-lifecycle recruitment and strategic sourcing 
                in the Biometrics domain. I have successfully partnered with leading companies like J&J, 
                Novartis, Pfizer, Takeda, BMS, and Gilead to build high-performing teams.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">9+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                  <div className="text-gray-600">Successful Placements</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Full-Lifecycle Recruitment</h4>
                  <p className="text-gray-600">Expert in end-to-end recruitment processes from sourcing to onboarding.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Biometrics Specialization</h4>
                  <p className="text-gray-600">Deep expertise in Biostatistics, Programming, and Clinical Data roles.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Strategic Sourcing</h4>
                  <p className="text-gray-600">Innovative recruiting strategies for hard-to-fill positions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Professional Experience</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="space-y-8">
            {[
              {
                company: "Cytel Statistical Software & Services Pvt. Ltd.",
                role: "Recruiter - Biometric Requirements",
                period: "Apr 2020 – Present",
                location: "Remote",
                achievements: [
                  "Leading recruitment for North America in Biostatistics, Programming, and Clinical Data roles",
                  "Expertise in sourcing, screening, engaging, and hiring through innovative recruiting strategies",
                  "Key clients include J&J, Novartis, Pfizer, Takeda, BMS, and Gilead",
                  "Achieved 95% client satisfaction rate and exceeded placement targets by 120%"
                ],
                color: "blue"
              },
              {
                company: "IQVIA (formerly GCE Solutions)",
                role: "HR Recruiter",
                period: "Apr 2019 – Mar 2020",
                location: "Pune, India",
                achievements: [
                  "Focused on Biometrics and Clinical positions across major pharmaceutical accounts",
                  "Streamlined recruitment process post-acquisition by IQVIA",
                  "Maintained 90% offer acceptance rate through effective candidate engagement"
                ],
                color: "green"
              },
              {
                company: "Artech Infosystem Pvt. Ltd.",
                role: "Senior Technical Recruiter",
                period: "Nov 2017 – Apr 2019",
                location: "Pune, India",
                achievements: [
                  "Partnered with pharma clients on mid to senior hiring for Clinical and Biometrics domains",
                  "Recognized as \"Top Recruiter of Q3 2018\" by the President's Circle",
                  "Achieved #1 Vendor Award by Johnson & Johnson in 2018"
                ],
                color: "purple"
              }
            ].map((job, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-${job.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Briefcase className={`w-6 h-6 text-${job.color}-600`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{job.company}</h3>
                        <p className="text-lg text-blue-600 font-semibold mb-1">{job.role}</p>
                        <div className="flex items-center text-gray-500 space-x-4">
                          <span>{job.period}</span>
                          <span>•</span>
                          <span className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {job.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {job.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Core Skills & Expertise</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                skill: "Talent Acquisition", 
                description: "Full-cycle recruitment and strategic hiring",
                icon: User,
                color: "blue" 
              },
              { 
                skill: "Stakeholder Management", 
                description: "Building strong client relationships",
                icon: Globe,
                color: "green" 
              },
              { 
                skill: "Candidate Engagement", 
                description: "Effective communication and relationship building",
                icon: Mail,
                color: "purple" 
              },
              { 
                skill: "Boolean Sourcing", 
                description: "Advanced search techniques and sourcing strategies",
                icon: Code,
                color: "orange" 
              },
              { 
                skill: "ATS Tools", 
                description: "Proficient in various Applicant Tracking Systems",
                icon: Database,
                color: "indigo" 
              },
              { 
                skill: "Market Research", 
                description: "Industry analysis and competitive intelligence",
                icon: Server,
                color: "teal" 
              }
            ].map((item, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 bg-${item.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.skill}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Awards Section */}
      <AnimatedSection className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Awards & Recognition</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                title: "Recruiter of the Quarter – 2024", 
                company: "Cytel", 
                description: "Outstanding performance in Q1 2024",
                color: "yellow" 
              },
              { 
                title: "President Circle Recruiter – Q3 2018", 
                company: "Artech", 
                description: "Top performer recognition",
                color: "purple" 
              },
              { 
                title: "Rookie of the Year – 2018", 
                company: "Industry Recognition", 
                description: "Best new talent in recruitment",
                color: "blue" 
              },
              { 
                title: "Elite Club Recruiter – Q2 to Q4 2018", 
                company: "Artech", 
                description: "Consistent top performance",
                color: "green" 
              },
              { 
                title: "#1 Vendor Award by Johnson & Johnson – 2018", 
                company: "J&J", 
                description: "Best recruitment partner",
                color: "red" 
              }
            ].map((award, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-${award.color}-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Award className={`w-6 h-6 text-${award.color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-1">{award.title}</h3>
                      <p className="text-blue-600 font-medium mb-2">({award.company})</p>
                      <p className="text-gray-600 text-sm">{award.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <Card className="bg-white shadow-lg max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Bachelor's Degree in Mechanical Engineering</h3>
              <p className="text-lg text-gray-600 mb-2">Kurukshetra University</p>
              <p className="text-blue-600 font-semibold">2011 – 2015</p>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 bg-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Ready to discuss your talent acquisition needs? Let's connect and explore how I can help build your dream team.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Mail className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email Me</h3>
              <p className="opacity-90">rahulpanchal92710@gmail.com</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="w-8 h-8 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Call Me</h3>
              <p className="opacity-90">+1 781-408-8012</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold"
          >
            <Mail className="mr-2" size={20} />
            Get In Touch
          </Button>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Rahul Panchal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}