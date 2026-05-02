/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white scroll-smooth selection:bg-cyan-500/30">
      
      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* ABOUT */}
      <About />

      {/* SKILLS */}
      <Skills />
      {/* Experience */}
      <Experience /> 

      {/* PROJECTS */}
      <Projects />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}