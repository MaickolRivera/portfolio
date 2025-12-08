import Home from "./sections/Home"
import Header from "./sections/Header";
import Moon from "./assets/icons/switch_icons/Moon";
import Sun from "./assets/icons/switch_icons/Sun";
import SwitchOption from "./components/SwitchOption";
import { useEffect, useState } from "react";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";

function App() {

  type ThemeKey = "light" | "dark";
  const [theme, setTheme] = useState<ThemeKey>("dark");

  const handleThemeChange = (newTheme: ThemeKey) => {
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  useEffect( ()=> {
    const storageTheme = localStorage.getItem("theme") || "dark";
    setTheme(storageTheme as ThemeKey);
    document.documentElement.classList.toggle(
      "dark",
      storageTheme === "dark"
    )
  }, [])

  // type Language = "ENG" | "SPN";
  // const [language, setLanguage] = useState<Language>("SPN");

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
            <Home></Home>
          </div>
          
          <div id="experience">
            <Experience></Experience>
          </div>
    
          <div id="projects">
            <Projects></Projects>
          </div>
          
          <div id="about-me">
            <About></About>
          </div>
          
          <div>
            <Contact></Contact>
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

        {/* <SwitchOption
          selectedValue={language}
          setSelectedValue={setLanguage}
          options={[
            <p>ENG</p>,
            <p>SPN</p>,
          ]}
          values={["ENG", "SPN"]}
        /> */}
      </div>
      
    </div>

  )
}

export default App