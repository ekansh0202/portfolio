import { useState } from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Dock from "./components/Dock";
import Terminal from "./windows/Terminal";
import Resume from "./windows/Resume";
import Finder from "./windows/Finder";
import Text from "./windows/Text";
import ImageContent from "./windows/ImageContent";
import Contact from "./windows/Contact";
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
      <Resume />
      <Finder />
      <Text />
      <ImageContent />
      <Contact />
    </main>
  )
}

export default App;