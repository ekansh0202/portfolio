import { useState } from "react";
import Navbar from "./components/Navbar";

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
    </main>
  )
}

export default App;