import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {

    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (window.innerWidth < 1024) {
            if (scrolled > 185) {
                document.querySelector(".Footer_address__2-E2i").classList.add(`${styles.show}`);
            }
            if (scrolled > 350) {
                document.querySelector(".Footer_hours__16kHc").classList.add(`${styles.show}`);
            }
            if (scrolled <= 185) {
                document.querySelector(".Footer_address__2-E2i").classList.remove(`${styles.show}`);
            }
            if (scrolled <= 350) {
                document.querySelector(".Footer_hours__16kHc").classList.remove(`${styles.show}`);
            }
        } else {
            if (scrolled > 160) {
                document.querySelector(".Footer_address__2-E2i").classList.add(`${styles.show}`);
                document.querySelector(".Footer_hours__16kHc").classList.add(`${styles.show}`);
            }
            if (scrolled <= 160) {
                document.querySelector(".Footer_address__2-E2i").classList.remove(`${styles.show}`);
                document.querySelector(".Footer_hours__16kHc").classList.remove(`${styles.show}`);
            }
        }
    });

    

    return (
        <footer>
            <div className={styles.footerContainer}>
                <div className={styles.address}>
                    <h3>winnipeg, manitoba</h3>
                    <p>159 Osborne St.</p>
                    <p>(204) 888-0028</p>
                </div>
                <div className={styles.hours}>
                    <h3>hours</h3>
                    <p>Sunday - Thursday</p>
                    <p>1130am - 930pm</p>
                    <p>Friday - Saturday</p>
                    <p>1130am - 1030pm</p>
                    <p>No service between 3pm and 430pm on weekdays</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;