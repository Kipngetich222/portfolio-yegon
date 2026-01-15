import ExperienceTimeline from '@/components/ExperienceTimeline'
import { Award, BookOpen, Users, Target } from 'lucide-react'

export default function ExperiencePage() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Experience & <span className="gradient-text">Journey</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey, internships, projects, and continuous learning path 
            in the field of computer science and software development.
          </p>
        </div>

        {/* Skills Summary */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Technical Proficiencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">Tailwind</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm">PostgreSQL</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg">Tools & DevOps</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">Git</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">Docker</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">AWS</span>
                <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm">CI/CD</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-amber-100 rounded-lg">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg">Specialized</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm">Machine Learning</span>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm">Cloud Computing</span>
                <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm">Full Stack Applications</span>
                
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
          <ExperienceTimeline />
        </div>

        {/* Education */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Science in Computer Science</h3>
                <p className="text-xl text-primary font-semibold mb-4">Kisii University</p>
                <p className="text-gray-600 mb-4">Graduated: December 2025</p>
                <div className="space-y-3">
                  <h4 className="font-semibold text-lg">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 rounded-full">Data Structures</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">Algorithms</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">Database Systems</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">Computer Networks</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">Machine Learning</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">Software Engineering</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">Web Development</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">Cloud Computing</span>
                    <span className="px-3 py-1 bg-gray-100 rounded-full">Cybersecurity</span>
                  </div>
                </div>
              </div>
              <div className="bg-primary/10 p-6 rounded-xl">
                <h4 className="font-bold text-lg mb-4">Achievements & Engagements</h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Core Team Member - GDSC Kisii University</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Best  Project Award (Final year)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Award className="h-5 w-5 text-primary" />
                    <span>Computer Science Department Recognition</span>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Computer Science', issuer: 'Kisii University', year: '2025' },
              { title: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2024' },
              { title: 'Ajira Digital – Graphic Design', issuer: 'Ministry of ICT', year: '2023' },
              { title: 'Cisco Cybersecurity Essentials', issuer: 'Cisco', year: '2022' },
              

            ].map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-bold text-lg">{cert.title}</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {cert.year}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{cert.issuer}</p>
                <div className="text-sm text-gray-500">
                  <span className="px-2 py-1 bg-gray-100 rounded">Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}