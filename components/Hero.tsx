import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-20 px-4 min-h-[80vh] flex items-center">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="gradient-text text-dark block mb-2">Computer Science</span>
            Graduate & Developer
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 px-4">
            Passionate about building innovative solutions with modern technologies.
            Specializing in full-stack development, cloud computing, and AI/ML.
          </p>
          
    

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
  <a
    href="#projects"
    className="group bg-primary text-white px-8 py-4 rounded-lg hover:bg-secondary transition-all duration-300 flex items-center justify-center gap-2 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
  >
    View My Work
    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
  </a>
  <a
    href="/contact"
    className="group border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 text-lg font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
  >
    Get In Touch
  </a>
</div>

<div className="flex justify-center space-x-8">
  <a 
    href="https://github.com/Kipngetich222" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group relative p-3 bg-gray-100 rounded-full hover:bg-primary transition-all duration-300 transform hover:-translate-y-1"
  >
    <Github className="h-7 w-7 text-gray-600 group-hover:text-white transition-colors" />
    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
      GitHub
    </span>
  </a>
  <a 
    href="https://linkedin.com/in/victor-yegoo" 
    target="_blank" 
    rel="noopener noreferrer"
    className="group relative p-3 bg-gray-100 rounded-full hover:bg-primary transition-all duration-300 transform hover:-translate-y-1"
  >
    <Linkedin className="h-7 w-7 text-gray-600 group-hover:text-white transition-colors" />
    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
      LinkedIn
    </span>
  </a>
  <a 
    href="mailto:victoryegon222@gmail.com"
    className="group relative p-3 bg-gray-100 rounded-full hover:bg-primary transition-all duration-300 transform hover:-translate-y-1"
  >
    <Mail className="h-7 w-7 text-gray-600 group-hover:text-white transition-colors" />
    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
      Email Me
    </span>
  </a>
</div>


        </div>
      </div>
    </section>
  )
}

