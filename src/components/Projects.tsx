import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';

export default function Projects() {
  return (
    <div className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4">PENTAGON</h3>
            <p className="text-gray-300 mb-4">
              A client-focused data management platform with drag-and-drop UI built using Dragula.js and DevExpress for real-time visualization.
            </p>
            <div className="flex gap-4">
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">Dragula.js</span>
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">DevExpress</span>
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors"
          >
            <h3 className="text-2xl font-bold mb-4">Synergy – ERP System</h3>
            <p className="text-gray-300 mb-4">
              A centralized recruitment and resource management tool using jQuery and SQL Server, with rich UI and dynamic modules.
            </p>
            <div className="flex gap-4">
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">jQuery</span>
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">SQL Server</span>
              <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">JavaScript</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}