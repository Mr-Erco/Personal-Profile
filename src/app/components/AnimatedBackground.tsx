import { motion } from 'motion/react';
import { Code2, Terminal, Braces, Laptop, Database, Cpu, GitBranch, Brackets } from 'lucide-react';
import { useEffect, useState } from 'react';

const codeLines = [
  'const developer = { name: "Coder", passion: "Creating" };',
  'function buildAmazingThings() { return innovation + creativity; }',
  'import React from "react"; // Building the future',
  'while(alive) { eat(); sleep(); code(); repeat(); }',
  'git commit -m "Making dreams come true"',
  'npm install awesome-ideas --save',
  'const skills = [...frontend, ...backend, ...devops];',
  '// TODO: Change the world with code',
  'export default () => <Innovation />;',
  'console.log("Hello, World! 🚀");',
];

const iconComponents = [Code2, Terminal, Braces, Laptop, Database, Cpu, GitBranch, Brackets];

interface FloatingIcon {
  id: number;
  Icon: any;
  x: number;
  y: number;
  duration: number;
  delay: number;
  size: number;
}

export function AnimatedBackground() {
  const [floatingIcons, setFloatingIcons] = useState<FloatingIcon[]>([]);

  useEffect(() => {
    const icons: FloatingIcon[] = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      Icon: iconComponents[Math.floor(Math.random() * iconComponents.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
      size: 24 + Math.random() * 32,
    }));
    setFloatingIcons(icons);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Scrolling code lines */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 8 }).map((_, index) => (
          <motion.div
            key={`line-${index}`}
            className="absolute whitespace-nowrap text-violet-400 font-mono"
            style={{
              top: `${(index * 12.5) + 5}%`,
              fontSize: '14px',
            }}
            initial={{ x: '100%' }}
            animate={{ x: '-100%' }}
            transition={{
              duration: 30 + index * 5,
              repeat: Infinity,
              ease: 'linear',
              delay: index * 2,
            }}
          >
            {codeLines[index % codeLines.length]} &nbsp;&nbsp;&nbsp;&nbsp; {codeLines[(index + 1) % codeLines.length]} &nbsp;&nbsp;&nbsp;&nbsp; {codeLines[(index + 2) % codeLines.length]}
          </motion.div>
        ))}
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 opacity-5">
        {floatingIcons.map((item) => (
          <motion.div
            key={item.id}
            className="absolute text-purple-400"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
            }}
            animate={{
              x: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
              y: [0, Math.random() * 200 - 100, Math.random() * 200 - 100, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: 'linear',
              delay: item.delay,
            }}
          >
            <item.Icon size={item.size} />
          </motion.div>
        ))}
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-purple-500/5" />
    </div>
  );
}