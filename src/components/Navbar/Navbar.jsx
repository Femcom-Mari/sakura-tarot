import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AudioContext } from "../../context/AudioContext";
import styles from "../Navbar/Navbar.module.css";
import refresh from "../../assets/images/refresh-icon.png";
import soundOn from "../../assets/images/sound-on-icon.png"; 
import soundOff from "../../assets/images/sound-off-icon.png"; 
import audioFile from "../../audio/background-music.mp3"; 

export default function Home() {
  const { isPlaying, toggleSound } = useContext(AudioContext);
  
  const handleRefresh = () => {
    window.location.reload();  // Recarga la página actual
  };

  return (
    <div>
      <header>
        <div className={styles.container}>
          <NavLink className={styles.sol} to="/home">
            <h1>Sol Tarot</h1>
          </NavLink>
          <button className={styles.refresh} onClick={handleRefresh}> 
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