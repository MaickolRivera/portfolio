import { lazy, Suspense } from "react";
import Header from "./sections/Header";

const Home = lazy(() => import("./sections/Home"));
const Experience = lazy(() => import("./sections/Experience"));
const Projects = lazy(() => import("./sections/Projects"));
const About = lazy(() => import("./sections/About"));
const Contact = lazy(() => import("./sections/Contact"));

const SectionLoader = () => (
  <div className="w-full h-screen flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);

function App() {

  return (
    <div 
      className="w-screen h-full flex justify-center flex-col overflow-hidden
      bg-background text-main"
    >
      <div className="w-full h-full z-10">
        <Header></Header>
        
        <main>
          <div>
            <Suspense fallback={<SectionLoader />}>
              <Home />
            </Suspense>
          </div>
          
          <div>
            <Suspense>
              <Experience />
            </Suspense>
          </div>
    
          <div>
            <Suspense>
              <Projects />
            </Suspense>
          </div>
          
          <div >
            <Suspense>
              <About />
            </Suspense>
          </div>
          
          <div>
            <Suspense>
              <Contact />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App