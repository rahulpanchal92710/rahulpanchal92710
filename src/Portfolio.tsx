import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Calendar, Award, Users, Target, ExternalLink, Download, Briefcase, GraduationCap, Star, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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

const FloatingCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
};

const GradientText = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent ${className}`}>
    {children}
  </span>
);

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              <GradientText>Rahul Panchal</GradientText>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "experience", "skills", "contact"].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-blue-400 ${
                    activeSection === item ? 'text-blue-400' : 'text-gray-300'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="relative">
              <div className="w-40 h-40 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-full mx-auto mb-8 flex items-center justify-center shadow-2xl">
                <motion.span 
                  className="text-5xl font-bold text-white"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  RP
                </motion.span>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30 animate-pulse" />
            </div>
          </motion.div>

          <motion.div
            style={{ y: textY }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <GradientText>Rahul Panchal</GradientText>
            </h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Senior Talent Acquisition Professional specializing in{" "}
              <span className="text-blue-400 font-semibold">Life Sciences & Biometrics</span> Hiring
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.a 
                href="mailto:rahulpanchal92710@gmail.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                <Mail size={20} className="group-hover:animate-bounce" />
                <span>rahulpanchal92710@gmail.com</span>
              </motion.a>
              <div className="hidden sm:block w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <motion.div 
                className="flex items-center space-x-3 text-gray-300"
                whileHover={{ scale: 1.05 }}
              >
                <Phone size={20} />
                <span>+1 781-408-8012</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border-0"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
              >
                <Download className="mr-2" size={20} />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={32} className="text-gray-400" />
        </motion.div>
      </section>

      {/* Stats Section */}
      <AnimatedSection className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Calendar, number: "9+", label: "Years of Experience", color: "from-blue-500 to-cyan-500" },
              { icon: Users, number: "500+", label: "Successful Placements", color: "from-green-500 to-emerald-500" },
              { icon: Target, number: "95%", label: "Client Satisfaction", color: "from-purple-500 to-pink-500" }
            ].map((stat, index) => (
              <FloatingCard key={index} delay={index * 0.2}>
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <stat.icon className="w-10 h-10 text-white" />
                    </div>
                    <motion.h3 
                      className="text-4xl font-bold text-white mb-2"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.5 }}
                    >
                      {stat.number}
                    </motion.h3>
                    <p className="text-gray-300">{stat.label}</p>
                  </CardContent>
                </Card>
              </FloatingCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection id="about" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-bold mb-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              About <GradientText>Me</GradientText>
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FloatingCard>
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300">
                <CardContent className="p-12">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Tenacious and resourceful Talent Acquisition Professional with over{" "}
                        <span className="text-blue-400 font-semibold">9 years of experience</span> in the US and Canada,
                        specializing in hiring for Pharmaceutical, Biotechnology, and Medical Device industries.
                      </p>
                      <p className="text-lg text-gray-300 leading-relaxed">
                        Recognized for a proven track record in full-lifecycle recruitment and strategic sourcing in the{" "}
                        <span className="text-purple-400 font-semibold">Biometrics domain</span>, with expertise in building 
                        high-performing teams for leading pharmaceutical companies.
                      </p>
                    </div>
                    <div className="space-y-4">
                      {[
                        "Full-lifecycle recruitment",
                        "Strategic sourcing",
                        "Biometrics specialization",
                        "Team building expertise"
                      ].map((skill, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          <span className="text-gray-300">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FloatingCard>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-bold mb-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              Professional <GradientText>Experience</GradientText>
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
          </div>
          
          <div className="space-y-8">
            {[
              {
                company: "Cytel Statistical Software & Services Pvt. Ltd.",
                role: "Recruiter - Biometric Requirements",
                period: "Apr 2020 – Present",
                achievements: [
                  "Leading recruitment for North America in Biostatistics, Programming, and Clinical Data roles",
                  "Expertise in sourcing, screening, engaging, and hiring through innovative recruiting strategies",
                  "Key clients include J&J, Novartis, Pfizer, Takeda, BMS, and Gilead"
                ],
                color: "from-blue-500 to-cyan-500"
              },
              {
                company: "IQVIA (formerly GCE Solutions)",
                role: "HR Recruiter",
                period: "Apr 2019 – Mar 2020",
                achievements: [
                  "Focused on Biometrics and Clinical positions across major pharmaceutical accounts",
                  "Streamlined recruitment process post-acquisition by IQVIA"
                ],
                color: "from-green-500 to-emerald-500"
              },
              {
                company: "Artech Infosystem Pvt. Ltd.",
                role: "Senior Technical Recruiter",
                period: "Nov 2017 – Apr 2019",
                achievements: [
                  "Partnered with pharma clients on mid to senior hiring for Clinical and Biometrics domains",
                  "Recognized as \"Top Recruiter of Q3 2018\" by the President's Circle"
                ],
                color: "from-purple-500 to-pink-500"
              }
            ].map((job, index) => (
              <FloatingCard key={index} delay={index * 0.2}>
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${job.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                            {job.company}
                          </h3>
                          <p className="text-lg text-blue-400 font-semibold">{job.role}</p>
                        </div>
                      </div>
                      <div className="text-gray-400 font-medium mt-2 lg:mt-0">{job.period}</div>
                    </div>
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <motion.li 
                          key={achievementIndex}
                          className="flex items-start text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </FloatingCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-bold mb-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              Core <GradientText>Skills</GradientText>
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { skill: "Talent Acquisition", color: "from-blue-500 to-cyan-500" },
              { skill: "Stakeholder Management", color: "from-green-500 to-emerald-500" },
              { skill: "Candidate Engagement", color: "from-purple-500 to-pink-500" },
              { skill: "Boolean Sourcing", color: "from-orange-500 to-red-500" },
              { skill: "ATS Tools", color: "from-indigo-500 to-blue-500" },
              { skill: "Market Research", color: "from-teal-500 to-green-500" }
            ].map((item, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300 group h-full">
                  <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Star className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {item.skill}
                    </h3>
                  </CardContent>
                </Card>
              </FloatingCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Awards Section */}
      <AnimatedSection className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-bold mb-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              Awards & <GradientText>Recognition</GradientText>
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Recruiter of the Quarter – 2024", company: "Cytel", color: "from-yellow-500 to-orange-500" },
              { title: "President Circle Recruiter – Q3 2018", company: "Artech", color: "from-purple-500 to-pink-500" },
              { title: "Rookie of the Year – 2018", company: "", color: "from-blue-500 to-cyan-500" },
              { title: "Elite Club Recruiter – Q2 to Q4 2018", company: "", color: "from-green-500 to-emerald-500" },
              { title: "#1 Vendor Award by Johnson & Johnson – 2018", company: "", color: "from-red-500 to-pink-500" }
            ].map((award, index) => (
              <FloatingCard key={index} delay={index * 0.1}>
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${award.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                          {award.title}
                        </h3>
                        {award.company && (
                          <p className="text-blue-400 font-medium">({award.company})</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FloatingCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl font-bold mb-4"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.6 }}
            >
              <GradientText>Education</GradientText>
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
          </div>
          
          <FloatingCard>
            <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-300 max-w-2xl mx-auto">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Bachelor's Degree in Mechanical Engineering</h3>
                <p className="text-lg text-gray-300 mb-2">Kurukshetra University</p>
                <p className="text-blue-400 font-semibold">2011 – 2015</p>
              </CardContent>
            </Card>
          </FloatingCard>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 
            className="text-5xl font-bold mb-4"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
          >
            Let's <GradientText>Connect</GradientText>
          </motion.h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8" />
          <motion.p 
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to discuss your talent acquisition needs? Let's connect and explore how I can help build your dream team.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-12"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a 
              href="mailto:rahulpanchal92710@gmail.com" 
              className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors group"
              whileHover={{ scale: 1.05 }}
            >
              <Mail size={24} className="group-hover:animate-bounce" />
              <span className="text-lg">rahulpanchal92710@gmail.com</span>
            </motion.a>
            <motion.div 
              className="flex items-center space-x-3 text-gray-300"
              whileHover={{ scale: 1.05 }}
            >
              <Phone size={24} />
              <span className="text-lg">+1 781-408-8012</span>
            </motion.div>
          </motion.div>
          
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border-0"
            >
              <Mail className="mr-2" size={20} />
              Schedule a Call
            </Button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-xl border-t border-white/10 text-gray-400 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.p
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            &copy; {new Date().getFullYear()} Rahul Panchal. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}