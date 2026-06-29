import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Progress } from './ui/progress';

export function SkillsPage() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { name: 'JavaScript', level: 92 },
        { name: 'TypeScript', level: 88 },
        { name: 'HTML/CSS', level: 95 },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { name: 'REST API', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'Node.js', level: 80 },
      ],
    },
    {
      name: 'Database',
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'Redis', level: 70 },
        { name: 'Firebase', level: 85 },
      ],
    },
    {
      name: 'DevOps & Tools',
      skills: [
        { name: 'Git / GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'CI/CD', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Vercel', level: 85 },
      ],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-6 text-white text-center">
            My <span className="text-violet-400">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
            >
              <Card className="bg-white/5 border-white/10 p-6 hover:bg-violet-500/5 transition-colors">
                <h3 className="text-2xl text-white mb-6 flex items-center">
                  <span className="text-violet-400 mr-2">//</span>
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1, duration: 0.5 }}
                    >
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-violet-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-violet-500 to-purple-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Card className="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border-violet-400/20 p-8 text-center">
            <h3 className="text-2xl text-white mb-4">Always Learning</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Technology is constantly evolving, and so am I. I'm always exploring
              new frameworks, tools, and best practices to stay at the forefront
              of web development. Currently diving deep into Web3, AI integration,
              and advanced performance optimization techniques.
            </p>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}