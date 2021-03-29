import React, { useState, useEffect } from "react";
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

    const slideRight = [
        { transform: "translateX(0)" },
        { transform: "translateX(100vw)" }
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
            console.log(document.querySelector('footer').scrollTop);
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

    const h1CloseMenu = () => {
        
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
            setToggle(false);
            document.querySelector(".btn").classList.remove(`${styles.close}`);
        }
        
    }

    const highlight = () => {
        document.querySelector(".btn").classList.add(`${styles.highlight}`);
    }

    const remHighlight = () => {
        document.querySelector(".btn").classList.remove(`${styles.highlight}`);
    }

    useEffect(() => {
        const listItems = document.querySelectorAll('.Header_navWrapperDesktop__3DvIR li');

        document.querySelector("header h1").classList.add(`${styles.show}`);
        document.querySelector("button").classList.add(`${styles.show}`);
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].classList.add(`${styles.show}`);
        }
    }, []);

    window.addEventListener('load', () => {
        document.querySelector(".Header_preload__3B_-j").animate(
            hide, {
                duration: 1000,
                easing: "cubic-bezier(1,.01,0,.98)",
                delay: 500,
                fill: "forwards"
            }
        );
    });

    // Finish navbar, add fade ins, preloader, smooth scrolling, smooth media query and link transitions, add content

    return (
        <>
            <div className={styles.preload}>
                <h1>hi, nice to see you!</h1>
            </div>
            <header>
                <h1><Link to="/" onClick={h1CloseMenu}>Naru Sushi</Link></h1>
                <button onClick={handleClick}
                        onMouseOver={highlight}
                        onMouseOut={remHighlight}>
                            <div className="btn"></div>
                </button>
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
            </header>
            
        </>
    );
    
}

export default Header;