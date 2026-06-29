import { motion } from 'motion/react';
import { Code2, Lightbulb, Rocket } from 'lucide-react';
import { Card } from './ui/card';
import mrErco from '../../imports/mr-erco.png';

export function AboutPage() {
  const features = [
    {
      Icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code',
    },
    {
      Icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Finding creative solutions to complex challenges',
    },
    {
      Icon: Rocket,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies',
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
            About <span className="text-violet-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-400 to-purple-400 mx-auto mb-12" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="aspect-square rounded-lg border border-violet-400/20 overflow-hidden">
              <img src={mrErco} alt="Mr. Erco" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-3xl text-white mb-4">
              Hello! I'm <span className="text-violet-400">Mr Erco</span>
            </h3>
            <p className="text-gray-400 mb-4">
              With a passion for creating elegant solutions to complex problems,
              I specialize in building modern web applications that are both
              beautiful and functional.
            </p>
            <p className="text-gray-400 mb-4">
              My journey in web development started several years ago, and since
              then, I've had the privilege of working on diverse projects ranging
              from small business websites to large-scale applications.
            </p>
            <p className="text-gray-400">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-white/5 border-white/10 p-6 h-full hover:bg-violet-500/10 transition-colors">
                <feature.Icon className="text-violet-400 mb-4" size={40} />
                <h4 className="text-xl text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}