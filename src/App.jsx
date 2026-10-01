import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";


function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main className="min-h-screen pt-16">
        <div className="mx-auto grid min-h-[calc(100vh-4rem)] w-full max-w-[1800px] grid-cols-1 items-center gap-12 px-8 md:grid-cols-2 md:px-12 lg:gap-20 lg:px-20">
          <About />
          <Hero />
        </div>

        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;