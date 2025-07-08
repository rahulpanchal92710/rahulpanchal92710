import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="p-6 md:p-12 max-w-4xl mx-auto space-y-8">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Rahul Panchal</h1>
        <p className="text-lg text-gray-600 mt-2">Senior Talent Acquisition Professional | Life Sciences & Biometrics Hiring</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="mailto:rahulpanchal92710@gmail.com" className="flex items-center space-x-2">
            <Mail size={18} /> <span>rahulpanchal92710@gmail.com</span>
          </a>
          <span className="text-gray-500">|</span>
          <span className="flex items-center space-x-2">
            <Phone size={18} /> <span>+1 781-408-8012</span>
          </span>
        </div>
      </header>

      <section>
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">
          Tenacious and resourceful Talent Acquisition Professional with over 9 years of experience in the US and Canada,
          specializing in hiring for Pharmaceutical, Biotechnology, and Medical Device industries. Recognized for a proven track
          record in full-lifecycle recruitment and strategic sourcing in the Biometrics domain.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">Cytel Statistical Software & Services Pvt. Ltd.</h3>
            <p className="text-sm text-gray-500">Apr 2020 – Present | Recruiter - Biometric Requirements</p>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>Leading recruitment for North America in Biostatistics, Programming, and Clinical Data roles.</li>
              <li>Expertise in sourcing, screening, engaging, and hiring through innovative recruiting strategies.</li>
              <li>Key clients include J&J, Novartis, Pfizer, Takeda, BMS, and Gilead.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">IQVIA (formerly GCE Solutions)</h3>
            <p className="text-sm text-gray-500">Apr 2019 – Mar 2020 | HR Recruiter</p>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>Focused on Biometrics and Clinical positions across major pharmaceutical accounts.</li>
              <li>Streamlined recruitment process post-acquisition by IQVIA.</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mt-4">
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold">Artech Infosystem Pvt. Ltd.</h3>
            <p className="text-sm text-gray-500">Nov 2017 – Apr 2019 | Senior Technical Recruiter</p>
            <ul className="list-disc ml-5 mt-2 text-gray-700">
              <li>Partnered with pharma clients on mid to senior hiring for Clinical and Biometrics domains.</li>
              <li>Recognized as "Top Recruiter of Q3 2018" by the President’s Circle.</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <p className="text-gray-700">Bachelor’s Degree in Mechanical Engineering, Kurukshetra University (2011 – 2015)</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Awards & Recognition</h2>
        <ul className="list-disc ml-5 text-gray-700">
          <li>Recruiter of the Quarter – 2024 (Cytel)</li>
          <li>President Circle Recruiter – Q3 2018 (Artech)</li>
          <li>Rookie of the Year – 2018</li>
          <li>Elite Club Recruiter – Q2 to Q4 2018</li>
          <li>#1 Vendor Award by Johnson & Johnson – 2018</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <p className="text-gray-700">
          Talent Acquisition | Stakeholder Management | Candidate Engagement | Boolean Sourcing | ATS Tools | Market Research
        </p>
      </section>

      <footer className="text-center mt-12 text-gray-500">
        <p>&copy; {new Date().getFullYear()} Rahul Panchal. All rights reserved.</p>
      </footer>
    </div>
  );
}