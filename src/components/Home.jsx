import { Navbar } from "./navbar/Navbar";
import "./Home.css"
import { About } from "./about/About";

export function Home()
{
   
    return <div className="Home">
                   <Navbar/>
                   <About/> 
           </div>;
}