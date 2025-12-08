import { useEffect, useState, lazy, Suspense } from "react";
import Header from "./sections/Header";
import Moon from "./assets/icons/switch_icons/Moon";
import Sun from "./assets/icons/switch_icons/Sun";
import SwitchOption from "./components/SwitchOption";

const Home = lazy(() => import("./sections/Home"));
const Experience = lazy(() => import("./sections/Experience"));
const Projects = lazy(() => import("./sections/Projects"));
const About = lazy(() => import("./sections/About"));
const Contact = lazy(() => import("./sections/Contact"));

const SectionLoader = () => (
  <div className="w-full h-[100vh] flex items-center justify-center">
    <div className="animate-pulse text-gray-400">Loading...</div>
  </div>
);

function App() {

  type ThemeKey = "light" | "dark";
  const [theme, setTheme] = useState<ThemeKey>("dark");

  const handleThemeChange = (newTheme: ThemeKey) => {
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const storageTheme = localStorage.getItem("theme") || "dark";
    setTheme(storageTheme as ThemeKey);
    document.documentElement.classList.toggle(
      "dark",
      storageTheme === "dark"
    )
  }, [])

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="w-[100vw] h-full flex justify-center flex-col overflow-hidden
      bg-LIGHT-background text-LIGHT-text
      dark:bg-DARK-background dark:text-DARK-text"
    >
      <div className="w-full h-full z-10">
        <Header></Header>
        
        <main>
          <div id="home">
            <Suspense fallback={<SectionLoader />}>
              <Home />
            </Suspense>
          </div>
          
          <div id="experience">
            <Suspense>
              <Experience />
            </Suspense>
          </div>
    
          <div id="projects">
            <Suspense>
              <Projects />
            </Suspense>
          </div>
          
          <div id="about-me">
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

      <div 
        className={`z-10 flex gap-3 flex-row fixed bottom-5 right-5 transition-opacity duration-300 hover:opacity-100 ${isScrolled ? 'opacity-50' : 'opacity-100'}`}
      >
        <SwitchOption
          selectedValue={theme}
          setSelectedValue={handleThemeChange}
          options={[
            <Sun size={14.5} key="light" />,
            <Moon size={14.5} key="dark" />,
          ]}
          values={["light", "dark"]}
        />
      </div>
    </div>
  )
}

export default App