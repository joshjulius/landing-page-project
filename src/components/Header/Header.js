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

    //smooth media query, add content

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
                            <li className={styles.reservation}><Link to="/reservation" onClick={handleClick}>reservation</Link></li>
                            <li className={styles.instagram}><a href="https://www.instagram.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a></li>
                        </ul>
                    </div>
                    <div className={styles.navWrapperDesktop}>
                        <ul>
                            <li className={styles.menu}><Link to="/menu" onClick={closeMenu}>menu</Link></li>
                            <li className={styles.about}><Link to="/about" onClick={closeMenu}>about</Link></li>
                            <li className={styles.reservation}><Link to="/reservation" onClick={closeMenu}>reservation</Link></li>
                            <li className={styles.instagram}><a href="https://www.instagram.com/" target="_blank" onClick={closeMenu}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            
        </>
    );
    
}

export default Header;