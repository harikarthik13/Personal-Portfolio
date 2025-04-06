import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <div className="w-full aspect-square rounded-2xl overflow-hidden">
              <img
                src="/hari1.png"
                alt="Placeholder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-2xl" />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-300 mb-6">
              I'm a Full Stack Developer with over 2 years of experience building scalable web applications. 
              I specialize in JavaScript, React.js, Node.js, MongoDB, and SQL Server.
            </p>
            <p className="text-gray-300 mb-6">
              Currently working at G2 TechSoft as a Software Engineer, where I contribute to full-stack projects 
              and client-facing platforms. I'm passionate about creating intuitive and user-friendly interfaces, 
              building secure APIs, and collaborating with teams in Agile environments.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Frontend</h3>
                <p className="text-gray-400">React.js, JavaScript</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Backend</h3>
                <p className="text-gray-400">Node.js, Express, MongoDB</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}