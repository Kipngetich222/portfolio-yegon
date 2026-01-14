import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-600 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Let's Connect Section */}
          <div>
            <h3 className="text-3xl font-bold mb-6 gradient-text">Let's Connect</h3>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-xl">
              I'm always open to discussing new opportunities, interesting projects, 
              or just chatting about technology. Feel free to reach out!
            </p>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/Kipngetich222" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-primary rounded-lg hover:bg-dark transition-all duration-300 transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6 text-gray-300 group-hover:text-white" />
              </a>
              <a 
                href="https://linkedin.com/in/victor-yegoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-3 bg-primary rounded-lg hover:bg-dark transition-all duration-300 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-gray-300 group-hover:text-white" />
              </a>
              <a 
                href="mailto:victoryegon222@gmail.com"
                className="group p-3 bg-primary rounded-lg hover:bg-dark transition-all duration-300 transform hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="h-6 w-6 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Contact Section */}
          <div className="md:text-right">
            <h4 className="text-2xl font-bold mb-6">Quick Contact</h4>
            <div className="space-y-4">
              <p className="text-gray-300">victoryegon222@gmail.com</p>
              <p className="text-gray-300">+254 (075) 921-3531</p>
              <p className="text-gray-300">Nairobi, Kenya</p>
            </div>
            
            <a
              href="mailto:victoryegon222@gmail.com"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-secondary transition-all duration-300 hover:shadow-lg mt-8 font-medium"
            >
              <Mail size={18} />
              Send Email
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {currentYear} Victor Yegon. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-gray-400">
              Crafted with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> 
              <span className="gradient-text font-medium">by Yegon</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}