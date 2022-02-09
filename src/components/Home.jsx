import { Navbar } from "./navbar/Navbar";
import "./Home.css"
import { About } from "./about/About";
import { Skills } from "./skills/Skills";
import Particles from "react-tsparticles";
import config from "../particlesjs-config.json";

export function Home()
{
    const particlesInit = (main) => {
        console.log(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
   
    return <div>
                    <Particles id="tsparticles" className="particles_bg" init={particlesInit} loaded={particlesLoaded} options={config} />
                   <div className="Home">
                        <Navbar/>
                        <About/> 
                        <Skills/>
                   </div>
           </div>;
}