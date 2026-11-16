import Navbar from "./layouts/Navbar";
import About from "./sections/About";
import Experiences from "./sections/Experiences";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Contacts from "./sections/Contact";
import Footer from "./layouts/Footer";

function App() {
  return (
    <div className="min-h-screen overflow-x-clip md:grid md:grid-cols-[auto_1fr] md:gap-8">
      <Navbar />
      <main className="min-w-0">
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App;
