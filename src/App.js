import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Skills } from "./components/Skills";
import { Github } from "./components/Github";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { SocialLinks } from "./components/SocialLinks";
import all from ".//styles/Whole.module.css";
import { Tools } from "./components/Tools";
function App() {
  return (
    <div className={all.homeWhole}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Tools />
      <Github />
      <Contact />
    </div>
  );
}

export default App;
