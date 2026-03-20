import { useState } from "react";
import Navbar from "./components/Navbar";
import Welcome from "./components/Welcome";
import Dock from "./components/Dock";

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
    </main>
  )
}

export default App;