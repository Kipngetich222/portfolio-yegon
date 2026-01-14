import Hero from '@/components/Hero'
import SkillCard from '@/components/SkillCard'
import ProjectCard from '@/components/ProjectCard'
import { 
  Code2, 
  Database, 
  Cloud, 
  Brain, 
  Globe, 
  Shield 
} from 'lucide-react'

const skills = [
  {
    icon: <Code2 />,
    title: 'Frontend Development',
    description: 'React, Next.js, TypeScript, Tailwind CSS',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind']
  },
  {
    icon: <Database />,
    title: 'Backend Development',
    description: 'Node.js, Python, REST APIs, Databases',
    technologies: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL']
  },
  {
    icon: <Cloud />,
    title: 'Cloud & DevOps',
    description: 'AWS, Docker, CI/CD, Serverless',
    technologies: ['AWS', 'Docker', 'GitHub Actions']
  },
  {
    icon: <Brain />,
    title: 'AI/ML',
    description: 'TensorFlow, PyTorch, Data Analysis',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn']
  },
  {
    icon: <Globe />,
    title: 'Web Technologies',
    description: 'HTML5, CSS3, JavaScript, Web APIs',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'WebSockets']
  },
  {
    icon: <Shield />,
    title: 'Cybersecurity',
    description: 'Network Security, Cryptography, Ethical Hacking',
    technologies: ['Cryptography', 'Penetration Testing']
  }
]

const featuredProjects = [
  {
    title: 'Banking Application System',
    description: 'Full-stack e-commerce solution with real-time inventory management.',
    technologies: ['Next.js', 'Node.js', 'MySQL', 'Java RMI'],
    githubUrl: 'https://github.com/Kipngetich222/Bank_app',
    // liveUrl: 'https://demo.example.com',
    image: '/images/banking_app.png'
  },
  {
    title: 'Intelligent Infant Care System',
    description: 'A smart monitoring system using simulated sensors and mobile alerts for infant safety and health tracking.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    githubUrl: 'https://github.com/Kipngetich222/Intelligent-Infant-monitoring',
    // liveUrl: 'https://chatbot.example.com',
    image: '/images/infant_monitoring.png'
  },
  {
    title: 'Teacher-Parent Core-Teaching Platform',
    description: 'A communication and resource-sharing platform for teachers and parents.',
    technologies: ['MongoDB', 'React', 'Node.js', 'Redis', 'Deepseeker AI'],
    githubUrl: 'https://github.com/Kipngetich222/4thProject',
    // liveUrl: 'https://storage.example.com',
    image: '/images/teacher-parent.jpg'
  }
]

export default function Home() {
  return (
    <div>
      <Hero />
      
      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary font-semibold text-lg"
            >
              View All Projects
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-4 rounded-lg">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Bachelor of Science in Computer Science</h3>
                <p className="text-gray-600 text-lg mb-2">Kisii University, Graduated 2025</p>
                <p className="text-gray-700">
                  Relevant Coursework: Data Structures, 
                  Algorithms, Machine Learning, Database Systems, Computer Networks, Blockchain, Cloud Computing, Big Data Analytics, Cybersecurity.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Dean's List
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Honors Graduate
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    CS Department Award
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { GraduationCap } from 'lucide-react'
import { ArrowRight } from 'lucide-react'