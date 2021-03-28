import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer>
            <div className={styles.footerContainer}>
                <div className="address">
                    <h3>winnipeg, manitoba</h3>
                    <p>159 Osborne St.</p>
                    <p>(204) 888-0028</p>
                </div>
                <div className="hours">
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