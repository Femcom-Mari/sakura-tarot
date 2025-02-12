import { NavLink } from "react-router";
import styles from "../Navbar/Navbar.module.css";
import refresh from '../../assets/images/refresh-icon.png';
import sound from '../../assets/images/sound-on-icon.png';

export default function Home() {
  return (
    
         <div>
             <header>
             <div className={styles.container}>
             <NavLink className={styles.sol} to="/home">
             <h1>Sol Tarot</h1>
             </NavLink>
             <button className  ={styles.refresh}>
               <img src={refresh} alt="refresh" />
              </button>
              <button className  ={styles.sound}>
               <img src={sound} alt="refresh" />
              </button>
            </div>
                 </header>
             </div>
        
    );
}
