"use client"

import ProjectCard from '@/components/ProjectCard'
import { Search, Filter, Github, ExternalLink } from 'lucide-react'
import { useState } from 'react'

const allProjects = [
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management, user authentication, and payment integration using Stripe.',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Redux'],
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://demo.example.com',
    category: 'full-stack',
    featured: true
  },
  {
    title: 'AI-Powered Chatbot',
    description: 'Intelligent chatbot using natural language processing and machine learning for customer service automation.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React', 'Docker'],
    githubUrl: 'https://github.com/yourusername/chatbot',
    liveUrl: 'https://chatbot.example.com',
    category: 'ai-ml',
    featured: true
  },
  {
    title: 'Cloud Storage Solution',
    description: 'Secure cloud storage system with file encryption, real-time synchronization, and user management.',
    technologies: ['AWS S3', 'React', 'Node.js', 'Redis', 'WebSocket'],
    githubUrl: 'https://github.com/yourusername/cloud-storage',
    liveUrl: 'https://storage.example.com',
    category: 'cloud',
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management application with drag-and-drop functionality and real-time updates.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/task-manager',
    liveUrl: 'https://tasks.example.com',
    category: 'web',
    featured: false
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather forecasting dashboard with interactive maps and location-based predictions.',
    technologies: ['Vue.js', 'Weather API', 'Chart.js', 'Leaflet'],
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    liveUrl: 'https://weather.example.com',
    category: 'web',
    featured: false
  },
  {
    title: 'Blockchain Voting System',
    description: 'Decentralized voting application built on Ethereum blockchain with smart contracts.',
    technologies: ['Solidity', 'Web3.js', 'React', 'Hardhat'],
    githubUrl: 'https://github.com/yourusername/blockchain-voting',
    liveUrl: 'https://voting.example.com',
    category: 'blockchain',
    featured: false
  }
]

const categories = ['all', 'full-stack', 'web', 'ai-ml', 'cloud', 'blockchain']

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = allProjects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A collection of my work showcasing skills in full-stack development, 
            cloud computing, AI/ML, and modern web technologies.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">{allProjects.length}</div>
            <div className="text-gray-600">Total Projects</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {allProjects.filter(p => p.liveUrl).length}
            </div>
            <div className="text-gray-600">Live Demos</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">
              {new Set(allProjects.flatMap(p => p.technologies)).size}
            </div>
            <div className="text-gray-600">Technologies</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-gray-600">Open Source</div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects by name, tech, or description..."
                className="w-full md:w-96 pl-12 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full capitalize transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {searchQuery && (
            <p className="text-gray-600 mb-4">
              Found {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} matching "{searchQuery}"
            </p>
          )}
        </div>

        {/* Featured Projects */}
        {selectedCategory === 'all' && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <Filter size={24} />
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {allProjects.filter(p => p.featured).map((project, index) => (
                <div key={index} className="relative">
                  <div className="absolute -top-3 -left-3 bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Projects */}
        <div>
          <h2 className="text-2xl font-bold mb-8">
            {selectedCategory === 'all' ? 'All Projects' : selectedCategory.replace('-', ' ') + ' Projects'}
          </h2>
          
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <Github className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          )}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <Github className="h-12 w-12 text-gray-700 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Check out my GitHub profile for more projects, contributions, and open-source work.
          </p>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-black transition-colors"
          >
            <Github size={20} />
            Visit GitHub Profile
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  )
}