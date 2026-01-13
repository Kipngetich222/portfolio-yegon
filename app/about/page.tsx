import { User, Target, Award, BookOpen } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h1>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Personal Profile</h2>
              </div>
              <p className="text-gray-600 mb-4">
                Recent Computer Science graduate with a passion for creating 
                innovative software solutions. My academic journey has equipped 
                me with strong foundations in algorithms, data structures, and 
                software engineering principles.
              </p>
              <p className="text-gray-600">
                I enjoy tackling complex problems and transforming ideas into 
                functional applications. Currently focused on mastering modern 
                web technologies and cloud computing.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Career Goals</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Contribute to meaningful open-source projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Specialize in cloud-native application development</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Lead development teams on innovative projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Mentor aspiring developers</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Certifications</h2>
              </div>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-bold">AWS Certified Cloud Practitioner</h3>
                  <p className="text-gray-600 text-sm">Amazon Web Services</p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-bold">Google Professional Data Engineer</h3>
                  <p className="text-gray-600 text-sm">Google Cloud</p>
                </div>
                <div className="border-l-4 border-primary pl-4 py-2">
                  <h3 className="font-bold">React Developer Certification</h3>
                  <p className="text-gray-600 text-sm">Meta</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Continuous Learning</h2>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Next.js & React</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">Current</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Machine Learning Engineering</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">Planning</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>DevOps & CI/CD</span>
                  <span className="px-2 py-1 bg-primary/10 text-primary rounded text-sm">In Progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}