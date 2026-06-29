import { AnimatedBackground } from './components/AnimatedBackground';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { SkillsPage } from './components/SkillsPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      <main className="relative z-10">
        <section id="home">
          <HomePage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="skills">
          <SkillsPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </main>
    </div>
  );
}
