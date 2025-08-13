import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, User, Briefcase, GraduationCap, Award, Code, Database, Server, Globe, ExternalLink, Linkedin, Github, Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
const AnimatedSection = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
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
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-yellow-400"
            >
              Rahul Panchal
            </motion.div>
            
            {/* Desktop Navigation */}
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
                  className={`relative transition-all duration-300 hover:text-yellow-400 font-medium ${
                    activeSection === item.id ? 'text-yellow-400' : 'text-white'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400"
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 bg-gray-800 rounded-lg p-4"
            >
              {[
                { id: "home", label: "Home" },
                { id: "about", label: "About" },
                { id: "experience", label: "Experience" },
                { id: "skills", label: "Skills" },
                { id: "contact", label: "Contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left py-2 px-4 rounded transition-colors ${
                    activeSection === item.id ? 'text-yellow-400 bg-gray-700' : 'text-white hover:text-yellow-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-white">Hi, I'm </span>
                <span className="text-yellow-400">Rahul</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8 leading-relaxed"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Senior Talent Acquisition Professional specializing in Life Sciences & Biometrics
              </motion.p>

              <motion.p 
                className="text-lg text-gray-400 mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                With over 9 years of experience in the US and Canada, I help build exceptional teams for leading pharmaceutical and biotechnology companies.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Button 
                  size="lg" 
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold"
                  onClick={() => scrollToSection("contact")}
                >
                  <Mail className="mr-2" size={20} />
                  Get In Touch
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 px-8 py-3 rounded-lg font-semibold"
                >
                  <Download className="mr-2" size={20} />
                  Download CV
                </Button>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-yellow-400" />
                  <span>rahulpanchal92710@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-yellow-400" />
                  <span>+1 781-408-8012</span>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Photo */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl">
                  <img 
                    src="/WhatsApp Image 2025-07-13 at 2.23.00 PM (1) copy copy.jpeg" 
                    alt="Rahul Panchal" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about" className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-yellow-400">About</span> Me
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Passionate About Building Exceptional Teams
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Tenacious and resourceful Talent Acquisition Professional with over 9 years of experience 
                in the US and Canada, specializing in hiring for Pharmaceutical, Biotechnology, and Medical 
                Device industries.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Recognized for a proven track record in full-lifecycle recruitment and strategic sourcing 
                in the Biometrics domain. I have successfully partnered with leading companies like J&J, 
                Novartis, Pfizer, Takeda, BMS, and Gilead to build high-performing teams.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-gray-700 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">9+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gray-700 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">500+</div>
                  <div className="text-gray-300">Successful Placements</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-96 h-96 rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="/WhatsApp Image 2025-07-13 at 2.23.00 PM copy copy.jpeg" 
                    alt="Rahul Panchal Professional" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              My <span className="text-yellow-400">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
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
                ]
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
                ]
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
                ]
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-8 border border-gray-700 hover:border-yellow-400 transition-all duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.company}</h3>
                    <p className="text-xl font-semibold text-yellow-400 mb-2">{job.role}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 space-y-1 sm:space-y-0 sm:space-x-4">
                      <span>{job.period}</span>
                      <span className="hidden sm:block">•</span>
                      <span className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {job.location}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-3">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              My <span className="text-yellow-400">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                skill: "Talent Acquisition", 
                description: "Full-cycle recruitment and strategic hiring",
                icon: User
              },
              { 
                skill: "Stakeholder Management", 
                description: "Building strong client relationships",
                icon: Globe
              },
              { 
                skill: "Candidate Engagement", 
                description: "Effective communication and relationship building",
                icon: Mail
              },
              { 
                skill: "Boolean Sourcing", 
                description: "Advanced search techniques and sourcing strategies",
                icon: Code
              },
              { 
                skill: "ATS Tools", 
                description: "Proficient in various Applicant Tracking Systems",
                icon: Database
              },
              { 
                skill: "Market Research", 
                description: "Industry analysis and competitive intelligence",
                icon: Server
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-lg p-6 text-center hover:bg-gray-600 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-gray-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.skill}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Awards Section */}
      <AnimatedSection id="awards" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Awards & <span className="text-yellow-400">Recognition</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Recruiter of the Quarter – 2024", 
                company: "Cytel", 
                description: "Outstanding performance in Q1 2024"
              },
              { 
                title: "President Circle Recruiter – Q3 2018", 
                company: "Artech", 
                description: "Top performer recognition"
              },
              { 
                title: "Rookie of the Year – 2018", 
                company: "Industry Recognition", 
                description: "Best new talent in recruitment"
              },
              { 
                title: "Elite Club Recruiter – Q2 to Q4 2018", 
                company: "Artech", 
                description: "Consistent top performance"
              },
              { 
                title: "#1 Vendor Award by Johnson & Johnson – 2018", 
                company: "J&J", 
                description: "Best recruitment partner"
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-yellow-400 transition-all duration-300"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-gray-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{award.title}</h3>
                    <p className="text-yellow-400 font-semibold mb-2">{award.company}</p>
                    <p className="text-gray-300">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection id="education" className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              My <span className="text-yellow-400">Education</span>
            </h2>
            <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="bg-gray-700 rounded-lg p-8 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="w-10 h-10 text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Bachelor's Degree in Mechanical Engineering</h3>
              <p className="text-xl text-gray-300 mb-4">Kurukshetra University</p>
              <p className="text-lg text-yellow-400 font-semibold">2011 – 2015</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-yellow-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
            Ready to discuss your talent acquisition needs? Let's connect and explore how I can help build your dream team.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
            <motion.div
              className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Email Me</h3>
              <p className="text-gray-300">rahulpanchal92710@gmail.com</p>
            </motion.div>
            <motion.div
              className="bg-gray-800 rounded-lg p-6 border border-gray-700"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-gray-900" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Call Me</h3>
              <p className="text-gray-300">+1 781-408-8012</p>
            </motion.div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold"
          >
            <Mail className="mr-2" size={20} />
            Send Message
          </Button>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Rahul Panchal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}