/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Award, 
  ExternalLink, 
  Github, 
  GraduationCap, 
  Layout, 
  MessageSquare, 
  Music, 
  Terminal, 
  ArrowUpRight,
  Mail,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
};

export default function App() {
  return (
    <div className="min-h-screen font-sans bg-[#F8F8F8]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 py-8 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-display text-2xl font-bold tracking-tighter"
        >
          GIAN<span className="text-blue-600">.</span>S
        </motion.div>
        <nav className="flex gap-8 text-[11px] font-mono uppercase tracking-[0.2em] text-zinc-400">
          <a href="#work" className="hover:text-blue-600 transition-colors">Work</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="mailto:shrmpsllart@gmail.com" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-8 pt-48 pb-32">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-48">
          <div className="lg:col-span-8 space-y-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[10px] font-mono uppercase tracking-widest mb-6">
                <Sparkles size={12} />
                <span>Available for Projects</span>
              </div>
              <h1 className="text-7xl lg:text-[120px] font-display font-bold leading-[0.9] tracking-tight">
                GIAN <br />
                <span className="text-blue-600">SAMBAS</span>
              </h1>
            </motion.div>
            
            <motion.p 
              {...fadeIn}
              className="text-2xl lg:text-3xl font-medium text-zinc-500 max-w-2xl leading-tight"
            >
              Information Systems student crafting <span className="text-zinc-900">seamless digital experiences</span> through code and strategic design.
            </motion.p>

            <motion.div {...fadeIn} className="flex flex-wrap gap-4 pt-4">
              <a href="#work" className="px-8 py-4 bg-zinc-900 text-white rounded-2xl font-display font-bold hover:bg-blue-600 transition-all flex items-center gap-2 group">
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:shrmpsllart@gmail.com" className="px-8 py-4 bg-white border border-zinc-200 text-zinc-900 rounded-2xl font-display font-bold hover:border-blue-600 transition-all">
                Let's Talk
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-4"
          >
            <div className="aspect-[4/5] rounded-[48px] overflow-hidden border-8 border-white shadow-2xl shadow-zinc-200 relative group">
              <img 
  src="/gianportfolio.jpg" 
  alt="Gian Edward Sambas"
  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
  referrerPolicy="no-referrer"
  onError={(e) => {
    e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";
  }}
/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </motion.div>
        </section>

        {/* Projects Grid */}
        <section id="work" className="mb-48">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="section-label">Selected Projects</span>
              <h2 className="text-5xl font-display font-bold">Featured Work</h2>
            </div>
            <div className="hidden md:block text-zinc-400 font-mono text-xs">
              (03) TOTAL PROJECTS
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "EquipSense", category: "Gym Tracker", icon: <Terminal /> },
              { title: "LibraryPal", category: "Inventory", icon: <Layout /> },
              { title: "SYNCO", category: "Messaging", icon: <MessageSquare /> }
            ].map((project, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="modern-card group"
              >
                <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-blue-600 group-hover:text-white transition-all mb-12">
                  {project.icon}
                </div>
                <h3 className="text-2xl font-display font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">{project.category}</p>
                <div className="mt-8 pt-8 border-t border-zinc-100 flex justify-between items-center">
                  <span className="text-xs font-bold text-zinc-300 group-hover:text-blue-600 transition-colors">EXPLORE</span>
                  <ArrowUpRight size={16} className="text-zinc-200 group-hover:text-blue-600 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Live Experiences */}
        <section className="mb-48">
          <span className="section-label">Live Experiments</span>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <h2 className="text-5xl font-display font-bold leading-tight mb-6">
                Web <br /> Applications
              </h2>
              <p className="text-zinc-500 leading-relaxed">
                Functional prototypes and live web experiences built with modern frameworks and a focus on user interaction.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-4">
              {[
                { title: "ReadyNow", desc: "Disaster Risk Site", url: "https://readynow-is-1.vercel.app/", icon: <Sparkles size={20} /> },
                { title: "PlayIT", desc: "Music Player Web App", url: "https://play-it-liard.vercel.app/app.html", icon: <Music size={20} /> },
                { title: "Landing Page", desc: "Creative Showcase", url: "https://giansambas.github.io/landingpage/#features", icon: <Layout size={20} /> },
                { title: "Machine Problems", desc: "Technical Solutions", url: "https://giansambas.github.io/mp5mp2/", icon: <Terminal size={20} /> }
              ].map((link, i) => (
                <motion.a 
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="flex items-center justify-between p-8 rounded-[32px] bg-white border border-zinc-100 hover:border-blue-500 transition-all group"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {link.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold">{link.title}</h3>
                      <p className="text-xs text-zinc-400 font-mono uppercase tracking-widest mt-1">{link.desc}</p>
                    </div>
                  </div>
                  <ArrowRight size={20} className="text-zinc-200 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition */}
        <section id="achievements">
          <span className="section-label">Recognition</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Graduated with Honors", desc: "High School Academic Excellence", year: "2024" },
              { title: "Battle of the Bands", desc: "2nd Place Musical Performance", year: "2023" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="p-10 rounded-[40px] bg-zinc-900 text-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Award size={80} />
                </div>
                <div className="text-blue-400 font-mono text-xs mb-4">{item.year}</div>
                <h3 className="text-3xl font-display font-bold mb-2">{item.title}</h3>
                <p className="text-zinc-400 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-8 py-24 border-t border-zinc-200 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="space-y-8">
            <h2 className="text-6xl lg:text-8xl font-display font-bold tracking-tighter">
              SAY <span className="text-blue-600">HELLO.</span>
            </h2>
            <div className="flex flex-wrap gap-8 text-sm font-mono uppercase tracking-[0.2em] font-bold">
              <a href="mailto:shrmpsllart@gmail.com" className="hover:text-blue-600 transition-colors">Email</a>
              <a href="https://github.com/giansambas" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/gian-edward-sambas-5632a0324/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
            </div>
          </div>
          <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-[0.4em] lg:text-right">
            © {new Date().getFullYear()} Gian Edward Sambas <br />
            <span className="mt-2 block">Designed for Impact</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
