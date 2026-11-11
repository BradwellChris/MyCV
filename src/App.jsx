import Navbar from "./layouts/Navbar";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";

function App() {
  return (
    <div className="min-h-screen overflow-x-clip md:grid md:grid-cols-[auto_1fr] md:gap-8">
      <Navbar />

      <main className="min-w-0">
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  )
}

export default App;
