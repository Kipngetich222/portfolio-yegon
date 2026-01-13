// 'use client'

// import { useState } from 'react'
// import { Menu, X, Code2 } from 'lucide-react'
// import Link from 'next/link'

// const navItems = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Projects', href: '/projects' },
//   { name: 'Experience', href: '/experience' },
//   { name: 'Contact', href: '/contact' },
// ]

// export default function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
//       <nav className="container mx-auto px-4 py-4">
//         <div className="flex items-center justify-between">
//           <Link href="/" className="flex items-center space-x-2">
//             <Code2 className="h-8 w-8 text-primary" />
//             <span className="text-xl font-bold gradient-text">Your Name</span>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-600 hover:text-primary transition-colors font-medium"
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <a
//               href="/resume.pdf"
//               className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               Resume
//             </a>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//           >
//             {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {mobileMenuOpen && (
//           <div className="md:hidden mt-4 pb-4">
//             <div className="flex flex-col space-y-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className="text-gray-600 hover:text-primary transition-colors py-2"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <a
//                 href="/resume.pdf"
//                 className="bg-primary text-white px-4 py-2 rounded-lg text-center"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Download Resume
//               </a>
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   )
// }

'use client'

import { useState } from 'react'
import { Menu, X, Code2, Download } from 'lucide-react'
import Link from 'next/link'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group">
            <Code2 className="h-8 w-8 text-primary group-hover:rotate-12 transition-transform" />
            <span className="text-xl font-bold gradient-text">Victor Yegon</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <a
              href="/resume.pdf"
              className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg hover:bg-secondary transition-all duration-300 hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download size={18} />
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-slide-up">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary hover:bg-gray-50 px-4 py-3 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-lg hover:bg-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}