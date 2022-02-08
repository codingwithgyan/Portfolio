import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';
import Particles from "react-tsparticles";
import config from "./particlesjs-config.json";
import AnimatedCursor from 'react-animated-cursor';

function App() {
  const particlesInit = (main) => {
    console.log(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="App">
        <AnimatedCursor/>
        <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={config} />
        <Home/>
    </div>
  );
}

export default App;
