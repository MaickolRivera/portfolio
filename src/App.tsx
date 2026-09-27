import Header from "./sections/Header";
import Home from "./sections/Home";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {

  return (
    <div
      className="w-screen h-full flex justify-center flex-col overflow-hidden
      bg-background text-main"
    >
      <div className="w-full h-full z-10">
        <Header></Header>

        <main>
          <Home />
          <Experience />
          <Projects />
          <About />
          <Contact />
        </main>
      </div>
    </div>
  )
}

export default App
