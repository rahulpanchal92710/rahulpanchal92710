import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, User, Briefcase, GraduationCap, Award, Code, Database, Server, Globe, ExternalLink, Linkedin, Github } from "lucide-react";
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
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
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
                  className={`relative transition-all duration-300 hover:text-blue-600 font-medium ${
                    activeSection === item.id ? 'text-blue-600' : 'text-gray-700'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600"
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="relative inline-block">
                <div className="w-32 h-32 mx-auto mb-8 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full" />
                  <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RP</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.h1 
              className="text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-gray-900">
                Hi, I'm{" "}
              </span>
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Rahul
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Senior Talent Acquisition Professional specializing in{" "}
              <span className="text-orange-500 font-semibold">Life Sciences & Biometrics</span>
            </motion.p>

            <motion.p 
              className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              With over 9 years of experience in the US and Canada, I help build exceptional teams 
              for leading pharmaceutical and biotechnology companies.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </Button>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-gray-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="flex items-center">
                <Mail size={18} className="mr-2 text-blue-500" />
                <span>rahulpanchal92710@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={18} className="mr-2 text-orange-500" />
                <span>+1 781-408-8012</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Passionate About Building{" "}
                <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                  Exceptional Teams
                </span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Tenacious and resourceful Talent Acquisition Professional with over 9 years of experience 
                in the US and Canada, specializing in hiring for Pharmaceutical, Biotechnology, and Medical 
                Device industries.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Recognized for a proven track record in full-lifecycle recruitment and strategic sourcing 
                in the Biometrics domain. I have successfully partnered with leading companies like J&J, 
                Novartis, Pfizer, Takeda, BMS, and Gilead to build high-performing teams.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">9+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl border border-orange-100">
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-2">500+</div>
                  <div className="text-gray-600">Successful Placements</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  icon: User,
                  title: "Full-Lifecycle Recruitment",
                  description: "Expert in end-to-end recruitment processes from sourcing to onboarding.",
                  gradient: "from-blue-500 to-purple-500"
                },
                {
                  icon: Database,
                  title: "Biometrics Specialization",
                  description: "Deep expertise in Biostatistics, Programming, and Clinical Data roles.",
                  gradient: "from-orange-500 to-pink-500"
                },
                {
                  icon: Globe,
                  title: "Strategic Sourcing",
                  description: "Innovative recruiting strategies for hard-to-fill positions.",
                  gradient: "from-purple-500 to-indigo-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-6 p-6 bg-white rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                Professional Experience
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-12">
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
                gradient: "from-blue-500 to-purple-500"
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
                gradient: "from-orange-500 to-pink-500"
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
                gradient: "from-purple-500 to-indigo-500"
              }
            ].map((job, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${job.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.company}</h3>
                      <p className={`text-xl font-semibold mb-2 bg-gradient-to-r ${job.gradient} bg-clip-text text-transparent`}>
                        {job.role}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-500 space-y-2 sm:space-y-0 sm:space-x-6">
                        <span className="font-medium">{job.period}</span>
                        <span className="hidden sm:block">•</span>
                        <span className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="space-y-4">
                  {job.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="flex items-start text-gray-600">
                      <div className={`w-2 h-2 bg-gradient-to-r ${job.gradient} rounded-full mt-2 mr-4 flex-shrink-0`} />
                      <span className="text-lg">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Core Skills & Expertise
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                skill: "Talent Acquisition", 
                description: "Full-cycle recruitment and strategic hiring",
                icon: User,
                gradient: "from-blue-500 to-purple-500"
              },
              { 
                skill: "Stakeholder Management", 
                description: "Building strong client relationships",
                icon: Globe,
                gradient: "from-orange-500 to-pink-500"
              },
              { 
                skill: "Candidate Engagement", 
                description: "Effective communication and relationship building",
                icon: Mail,
                gradient: "from-purple-500 to-indigo-500"
              },
              { 
                skill: "Boolean Sourcing", 
                description: "Advanced search techniques and sourcing strategies",
                icon: Code,
                gradient: "from-yellow-500 to-orange-500"
              },
              { 
                skill: "ATS Tools", 
                description: "Proficient in various Applicant Tracking Systems",
                icon: Database,
                gradient: "from-green-500 to-teal-500"
              },
              { 
                skill: "Market Research", 
                description: "Industry analysis and competitive intelligence",
                icon: Server,
                gradient: "from-pink-500 to-rose-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="group bg-white rounded-3xl p-8 border border-gray-200 text-center shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.skill}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Awards Section */}
      <AnimatedSection className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Awards & Recognition
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { 
                title: "Recruiter of the Quarter – 2024", 
                company: "Cytel", 
                description: "Outstanding performance in Q1 2024",
                gradient: "from-yellow-500 to-orange-500"
              },
              { 
                title: "President Circle Recruiter – Q3 2018", 
                company: "Artech", 
                description: "Top performer recognition",
                gradient: "from-purple-500 to-indigo-500"
              },
              { 
                title: "Rookie of the Year – 2018", 
                company: "Industry Recognition", 
                description: "Best new talent in recruitment",
                gradient: "from-blue-500 to-purple-500"
              },
              { 
                title: "Elite Club Recruiter – Q2 to Q4 2018", 
                company: "Artech", 
                description: "Consistent top performance",
                gradient: "from-green-500 to-teal-500"
              },
              { 
                title: "#1 Vendor Award by Johnson & Johnson – 2018", 
                company: "J&J", 
                description: "Best recruitment partner",
                gradient: "from-pink-500 to-rose-500"
              }
            ].map((award, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${award.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                    <p className={`font-semibold mb-3 bg-gradient-to-r ${award.gradient} bg-clip-text text-transparent`}>
                      {award.company}
                    </p>
                    <p className="text-gray-600">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-teal-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="bg-white rounded-3xl p-12 border border-gray-200 text-center shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bachelor's Degree in Mechanical Engineering</h3>
              <p className="text-xl text-gray-600 mb-4">Kurukshetra University</p>
              <p className="text-lg bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent font-semibold">
                2011 – 2015
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full"></div>
          <p className="text-2xl mb-16 max-w-3xl mx-auto text-gray-600 leading-relaxed">
            Ready to discuss your talent acquisition needs? Let's connect and explore how I can help build your dream team.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            <motion.div
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Me</h3>
              <p className="text-gray-600 text-lg">rahulpanchal92710@gmail.com</p>
            </motion.div>
            <motion.div
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call Me</h3>
              <p className="text-gray-600 text-lg">+1 781-408-8012</p>
            </motion.div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-4 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Mail className="mr-3" size={24} />
            Get In Touch
          </Button>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400 text-lg">
            &copy; {new Date().getFullYear()} Rahul Panchal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}