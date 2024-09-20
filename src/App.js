
// src\App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import About from './components/About';
import Experiance from './components/Experiance';
import CarouselFadeExample from './ProjectsSection/slider';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About/>
      <Skills />
      <Experiance/>
      <Projects />
      <CarouselFadeExample></CarouselFadeExample>
      <Contact />
      <Footer />
    
    </div>
  );
}

export default App;