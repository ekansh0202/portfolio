import { useState } from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Dock from "./components/Dock";
import Terminal from "./windows/Terminal";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const App = () => {

  const [wallpaper, setWallpaper] = useState("/images/wallpaper3.png");

  const backgroundStyle = {
    backgroundImage: `url(${wallpaper})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    width: '100vw'
  };

  return(
    <main style={backgroundStyle}>
      <Navbar onWallpaperChange={setWallpaper} />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  )
}

export default App;