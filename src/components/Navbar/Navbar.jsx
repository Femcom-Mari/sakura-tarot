import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom"; 
import styles from "../Navbar/Navbar.module.css";
import refresh from "../../assets/images/refresh-icon.png";
import soundOn from "../../assets/images/sound-on-icon.png"; 
import soundOff from "../../assets/images/sound-off-icon.png"; 
import audioFile from "../../audio/background-music.mp3"; 

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio(audioFile);
    audioRef.current.loop = true; 
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return; 

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <header>
        <div className={styles.container}>
          <NavLink className={styles.sol} to="/home">
            <h1>Sol Tarot</h1>
          </NavLink>
          <button className={styles.refresh}>
            <img src={refresh} alt="refresh" />
          </button>
          <button className={styles.sound} onClick={toggleSound}>
            <img src={isPlaying ? soundOn : soundOff} alt="sound toggle" />
          </button>
        </div>
      </header>
    </div>
  );
}