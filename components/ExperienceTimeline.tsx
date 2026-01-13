'use client'

import { useState } from 'react'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

interface TimelineItem {
  id: number
  title: string
  company: string
  location: string
  period: string
  description: string
  technologies: string[]
  type: 'internship' | 'full-time' | 'freelance' | 'academic'
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: 'Software Development Intern',
    company: 'Tech Solutions Inc.',
    location: 'San Francisco, CA',
    period: 'Summer 2023',
    description: 'Developed and maintained web applications using React and Node.js. Collaborated with senior developers on implementing new features and optimizing performance.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    type: 'internship'
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    company: 'University Project - E-Learning Platform',
    location: 'Remote',
    period: 'Jan 2023 - May 2023',
    description: 'Led a team of 4 students to develop an e-learning platform with real-time chat and video capabilities. Implemented user authentication and course management features.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Socket.io'],
    type: 'academic'
  },
  {
    id: 3,
    title: 'Freelance Web Developer',
    company: 'Freelance',
    location: 'Remote',
    period: '2022 - Present',
    description: 'Built responsive websites and web applications for small businesses and startups. Focused on creating user-friendly interfaces and optimizing for performance.',
    technologies: ['React', 'Tailwind CSS', 'Firebase', 'Figma'],
    type: 'freelance'
  },
  {
    id: 4,
    title: 'Research Assistant',
    company: 'University AI Lab',
    location: 'University Campus',
    period: 'Sep 2022 - Dec 2022',
    description: 'Assisted in machine learning research projects focusing on natural language processing. Developed data preprocessing pipelines and visualization tools.',
    technologies: ['Python', 'TensorFlow', 'Pandas', 'Matplotlib'],
    type: 'academic'
  }
]

const typeColors = {
  'internship': 'bg-blue-100 text-blue-800',
  'full-time': 'bg-green-100 text-green-800',
  'freelance': 'bg-purple-100 text-purple-800',
  'academic': 'bg-amber-100 text-amber-800'
}

export default function ExperienceTimeline() {
  const [activeId, setActiveId] = useState<number>(1)

  const activeItem = timelineData.find(item => item.id === activeId) || timelineData[0]

  return (
    <div className="py-8">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Timeline Navigation */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-4">
            <h3 className="text-2xl font-bold mb-6">Experience Timeline</h3>
            {timelineData.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                  activeId === item.id 
                    ? 'bg-white shadow-lg border-l-4 border-primary' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.company}</p>
                  </div>
                  {activeId === item.id && (
                    <ChevronRight className="h-5 w-5 text-primary" />
                  )}
                </div>
                <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {item.period}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs ${typeColors[item.type]}`}>
                    {item.type}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active Experience Details */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">{activeItem.title}</h2>
                <h3 className="text-xl text-primary font-semibold mb-2">{activeItem.company}</h3>
                <div className="flex items-center gap-4 text-gray-600">
                  <span className="flex items-center gap-2">
                    <MapPin size={18} />
                    {activeItem.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Calendar size={18} />
                    {activeItem.period}
                  </span>
                </div>
              </div>
              <Briefcase className="h-12 w-12 text-primary/20" />
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3">Description</h4>
              <p className="text-gray-700 leading-relaxed">{activeItem.description}</p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-3">
                {activeItem.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Briefcase size={20} />
                Key Responsibilities
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Developed and maintained scalable web applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Collaborated with cross-functional teams to deliver features</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Optimized application performance and implemented best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Participated in code reviews and technical discussions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}