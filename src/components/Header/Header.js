import React, { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "./Header.module.css";

const Header = () => {

    const [toggle, setToggle] = useState(false);
    
    const hide = [
        { transform: "translateY(0)" },
        { transform: "translateY(-100vh)" }
    ];

    const show = [
        { transform: "translateY(-100vh)" },
        { transform: "translateY(0)" }
    ];

    const dropIn = [
        { opacity: 0, transform: "translateY(-50px)"},
        { opacity: 1, transform: "translateY(0)"}
    ];

    const flyOut = [
        { opacity: 1, transform: "translateY(0)"},
        { opacity: 0, transform: "translateY(-50px)"}
    ];

    const handleClick = () => {

            const listItems = document.querySelectorAll('.Header_navWrapperMobile__2wSZc li');
            
            if (toggle) {
                document.querySelector("nav > div").animate(
                    hide, {
                        duration: 1000,
                        easing: "cubic-bezier(1,.01,0,.98)",
                        delay: 500,
                        fill: "forwards"
                    }
                );
                for (let i = 0; i < listItems.length; i++) {
                    listItems[i].animate(
                        flyOut, {
                            duration: 500,
                            easing: "ease",
                            delay: (400 + (50 * i)),
                            fill: "forwards"
                        }
                    )
                }
            } else {
                document.querySelector("nav > div").animate(
                    show, {
                        duration: 500,
                        easing: "cubic-bezier(1,.02,.26,.98)",
                        delay: 0,
                        fill: "forwards"
                    }
                );
                for (let i = 0; i < listItems.length; i++) {
                    listItems[i].animate(
                        dropIn, {
                            duration: 500,
                            easing: "ease",
                            delay: (400 + (50 * i)),
                            fill: "forwards"
                        }
                    )
                }
            }

            setToggle(!toggle);
            document.querySelector(".btn").classList.toggle(`${styles.close}`);
        
    }

    const closeMenu = () => {
        const listItems = document.querySelectorAll(`.Header_navWrapperMobile__2wSZc li`);
        document.querySelector("nav > div").animate(
            hide, {
                duration: 0,
                fill: "forwards"
            }
        );
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].animate(
                flyOut, {
                    duration: 0,
                    fill: "forwards"
                }
            )
        }
        setToggle(false);
        document.querySelector(".btn").classList.remove(`${styles.close}`);
    }

    const highlight = () => {
        document.querySelector(".btn").classList.add(`${styles.highlight}`);
    }

    const remHighlight = () => {
        document.querySelector(".btn").classList.remove(`${styles.highlight}`);
    }

    // Finish navbar, add fade ins, smooth media query and link transitions, add content

    return (
        <>
            <header>
                <h1><a href="/">Naru Sushi</a></h1>
                <button onClick={handleClick}
                        onMouseOver={highlight}
                        onMouseOut={remHighlight}>
                            <div className="btn"></div>
                </button>
            </header>
            <nav>
                <div className={styles.navWrapperMobile}>
                    <ul>
                        <li className={styles.menu}><Link to="/menu" onClick={handleClick}>menu</Link></li>
                        <li className={styles.about}><Link to="/about" onClick={handleClick}>about</Link></li>
                        <li className={styles.contact}><Link to="/contact" onClick={handleClick}>contact</Link></li>
                        <li className={styles.instagram}><a href="https://www.instagram.com/" target="_blank">instagram</a></li>
                    </ul>
                </div>
                <div className={styles.navWrapperDesktop}>
                    <ul>
                        <li className={styles.menu}><Link to="/menu" onClick={closeMenu}>menu</Link></li>
                        <li className={styles.about}><Link to="/about" onClick={closeMenu}>about</Link></li>
                        <li className={styles.contact}><Link to="/contact" onClick={closeMenu}>contact</Link></li>
                        <li className={styles.instagram}><a href="https://www.instagram.com/" target="_blank" onClick={closeMenu}>instagram</a></li>
                    </ul>
                </div>
            </nav>
        </>
    );
    
}

export default Header;