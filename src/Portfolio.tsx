import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Award, GraduationCap, Briefcase, User, Home, Code, Contact } from 'lucide-react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', id }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(id || '');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [id]);

  return (
    <div
      id={id}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'Talent Acquisition', level: 95 },
    { name: 'Stakeholder Management', level: 90 },
    { name: 'Candidate Engagement', level: 92 },
    { name: 'Boolean Sourcing', level: 88 },
    { name: 'ATS Tools', level: 85 },
    { name: 'Market Research', level: 80 },
    { name: 'Biometrics Domain', level: 90 },
    { name: 'Full-lifecycle Recruitment', level: 95 }
  ];

  const experiences = [
    {
      title: 'Recruiter - Biometric Requirements',
      company: 'Cytel Statistical Software & Services Pvt. Ltd.',
      period: 'Apr 2020 – Present',
      description: 'Leading recruitment for North America in Biostatistics, Programming, and Clinical Data roles. Expertise in sourcing, screening, engaging, and hiring through innovative recruiting strategies. Key clients include J&J, Novartis, Pfizer, Takeda, BMS, and Gilead.'
    },
    {
      title: 'HR Recruiter',
      company: 'IQVIA (formerly GCE Solutions)',
      period: 'Apr 2019 – Mar 2020',
      description: 'Focused on Biometrics and Clinical positions across major pharmaceutical accounts. Streamlined recruitment process post-acquisition by IQVIA.'
    },
    {
      title: 'Senior Technical Recruiter',
      company: 'Artech Infosystem Pvt. Ltd.',
      period: 'Nov 2017 – Apr 2019',
      description: 'Partnered with pharma clients on mid to senior hiring for Clinical and Biometrics domains. Recognized as "Top Recruiter of Q3 2018" by the President\'s Circle.'
    }
  ];

  const awards = [
    {
      title: 'Recruiter of the Quarter',
      organization: 'Cytel',
      year: '2024'
    },
    {
      title: 'President Circle Recruiter',
      organization: 'Artech',
      year: '2018'
    },
    {
      title: '#1 Vendor Award',
      organization: 'Johnson & Johnson',
      year: '2018'
    },
    {
      title: 'Rookie of the Year',
      organization: 'Artech',
      year: '2018'
    },
    {
      title: 'Elite Club Recruiter',
      organization: 'Artech',
      year: '2018'
    }
  ];

  const education = [
    {
      degree: 'Bachelor\'s Degree in Mechanical Engineering',
      institution: 'Kurukshetra University',
      period: '2011 – 2015',
      gpa: ''
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold text-yellow-400">Portfolio</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'about', label: 'About', icon: User },
                { id: 'experience', label: 'Experience', icon: Briefcase },
                { id: 'skills', label: 'Skills', icon: Code },
                { id: 'contact', label: 'Contact', icon: Contact }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                    activeSection === id
                      ? 'text-yellow-400 bg-yellow-400/10'
                      : 'text-gray-300 hover:text-yellow-400'
                  }`}
                >
                  <Icon size={16} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-yellow-400">Rahul Panchal</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Senior Talent Acquisition Professional | Life Sciences & Biometrics Hiring
              </p>
              <div className="flex space-x-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-yellow-400 shadow-2xl">
                  <img
                    src="/WhatsApp Image 2025-07-13 at 2.23.00 PM (1) copy copy.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AnimatedSection id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            About <span className="text-yellow-400 border-b-2 border-yellow-400">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Tenacious and resourceful Talent Acquisition Professional with over 9 years of experience in the US and Canada,
                specializing in hiring for Pharmaceutical, Biotechnology, and Medical Device industries. Recognized for a proven track
                record in full-lifecycle recruitment and strategic sourcing in the Biometrics domain.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                My expertise spans across North America, working with leading pharmaceutical companies including J&J, Novartis, 
                Pfizer, Takeda, BMS, and Gilead. I excel in sourcing, screening, engaging, and hiring through innovative recruiting strategies.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-yellow-400 font-semibold mb-2">Specialization</h4>
                  <p className="text-gray-300 text-sm">Biostatistics, Programming, Clinical Data</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-yellow-400 font-semibold mb-2">Industries</h4>
                  <p className="text-gray-300 text-sm">Pharmaceutical, Biotechnology, Medical Device</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-96 rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/WhatsApp Image 2025-07-13 at 2.23.00 PM copy copy.jpeg"
                    alt="About me"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-yellow-400/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Experience Section */}
      <AnimatedSection id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Work <span className="text-yellow-400 border-b-2 border-yellow-400">Experience</span>
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400">{exp.title}</h3>
                    <p className="text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Skills Section */}
      <AnimatedSection id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            My <span className="text-yellow-400 border-b-2 border-yellow-400">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-yellow-400">{skill.name}</h3>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Awards Section */}
      <AnimatedSection id="awards" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Awards & <span className="text-yellow-400 border-b-2 border-yellow-400">Recognition</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-yellow-400 mb-2">{award.title}</h3>
                <p className="text-gray-300 mb-2">{award.organization}</p>
                <span className="text-gray-400 text-sm">{award.year}</span>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            <span className="text-yellow-400 border-b-2 border-yellow-400">Education</span>
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-400">{edu.degree}</h3>
                    <p className="text-gray-300">{edu.institution}</p>
                  </div>
                  <div className="text-right mt-2 md:mt-0">
                    <span className="text-gray-400 text-sm block">{edu.period}</span>
                    <span className="text-yellow-400 text-sm">GPA: {edu.gpa}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Get In <span className="text-yellow-400 border-b-2 border-yellow-400">Touch</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Let's Connect</h3>
              <p className="text-gray-300 text-lg mb-8">
                I'm always interested in connecting with talented professionals and exploring new opportunities in the life sciences industry. 
                Feel free to reach out for recruitment needs or career discussions!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-300">rahulpanchal92710@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-300">+1 781-408-8012</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-yellow-400" />
                  <span className="text-gray-300">United States</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition-colors">
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/WhatsApp Image 2025-07-13 at 2.23.00 PM copy copy.jpeg"
                    alt="Contact"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-yellow-400/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Rahul Panchal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;