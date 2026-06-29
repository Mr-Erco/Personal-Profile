import { motion } from 'motion/react';
import { Github, Mail, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <motion.div
        className="text-center max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="text-violet-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi, I'm
        </motion.div>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-violet-300 bg-clip-text text-transparent">
            Mr Erco
          </span>
        </motion.h1>

        <motion.div
          className="text-2xl sm:text-3xl md:text-4xl mb-8 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-violet-400">{'<'}</span>
          Full Stack Developer
          <span className="text-violet-400">{'/>'}</span>
        </motion.div>

        <motion.p
          className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I craft beautiful and functional web experiences.
          Passionate about clean code, innovative solutions, and continuous learning.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Button
            onClick={() => scrollToSection('skills')}
            className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white border-0"
            size="lg"
          >
            View My Skills
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="border-violet-400 text-violet-400 hover:bg-violet-400/10"
            size="lg"
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[
            { Icon: Github, href: 'https://github.com/Mr-Erco' },
            { Icon: Mail, href: 'mailto:offical-erco@outlook.com' },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              className="text-gray-400 hover:text-violet-400 transition-colors"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={28} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="text-violet-400" size={32} />
      </motion.div>
    </div>
  );
}