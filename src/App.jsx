import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MachinesSection from "./components/MachinesSection";
import FeaturedVideos from "./components/FeaturedVideos";
import JobTestUpdates from "./components/JobTestUpdate";
import PlaylistsSection from "./components/PlaylistSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="machines" className="section">
          <MachinesSection />
        </section>

        <section id="featured" className="section section-alt">
          <FeaturedVideos />
        </section>

        <section id="jobs-tests" className="section">
          <JobTestUpdates />
        </section>

        <section id="playlists" className="section section-alt">
          <PlaylistsSection />
        </section>

        <section id="about" className="section">
          <AboutSection />
        </section>

        <section id="contact" className="section section-alt">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
