import { About } from './components/About';
import { Ambient } from './components/Ambient';
import { StackMarquee } from './components/StackMarquee';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Work } from './components/Work';
import { site } from './content';

export default function App() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded focus:bg-electric focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>

      <Ambient />
      <Nav />

      <main id="top">
        <Hero />
        <StackMarquee />
        <Work />
        <Experience />
        <About />
        <Education />
        <Contact />
      </main>

      <footer className="border-t border-line/60 py-8">
        <p className="mx-auto max-w-6xl px-6 font-mono text-xs text-line-bright sm:px-10">
          © {new Date().getFullYear()} {site.name}
        </p>
      </footer>
    </>
  );
}
