import React, { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {

    const [toggle, setToggle] = useState(false);
    
    const handleClick = () => {
        const listItems = document.querySelectorAll('nav li');
        
        setToggle(!toggle);
        document.querySelector(".btn").classList.toggle(`${styles.close}`);
        document.querySelector("nav").classList.toggle(`${styles.show}`);
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.toggle(`${styles.animate}`);
        }
    }

    const highlight = () => {
        document.querySelector(".btn").classList.add(`${styles.highlight}`);
    }

    const remHighlight = () => {
        document.querySelector(".btn").classList.remove(`${styles.highlight}`);
    }

    return (
        <>
            <header>
                <h1><a href="#">Naru Sushi</a></h1>
                <button onClick={handleClick}
                        onMouseOver={highlight}
                        onMouseOut={remHighlight}>
                            <div className="btn"></div>
                </button>
            </header>
            <nav className={styles.nav}>
                <ul>
                    <li className={styles.menu}><a href="#menu">menu</a></li>
                    <li className={styles.about}><a href="#about">about</a></li>
                    <li className={styles.hoursAndLocation}><a href="#hours-and-location">hours and location</a></li>
                    <li className={styles.contact}><a href="#contact">contact</a></li>
                </ul>
            </nav>
        </>
    );
    
}

export default Header;