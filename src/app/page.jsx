import Hero from '@/app/components/sections/Hero';
import About from '@/app/components/sections/About';
import Experience from '@/app/components/sections/Experience';
import Projects from '@/app/components/sections/Projects';
import Skills from '@/app/components/sections/Skills';
import Education from '@/app/components/sections/Education';
import Achievements from '@/app/components/sections/Achievements';
import Contact from '@/app/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Achievements />
      <Contact />
    </>
  );
}