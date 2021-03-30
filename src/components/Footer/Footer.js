import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {

    window.addEventListener('resize', () => {
        
        const topAddress = (window.innerWidth < 1024) ? 80 : 100;
        const bottomAddress = (window.innerWidth < 1024) ? 150 : 290;
        const topHours = (window.innerWidth < 1024) ? 230 : 100;
        const bottomHours = (window.innerWidth < 1024) ? 430 : 290;
    
        const addressOpacity = (top, bottom) => {
                const addressDiv = document.querySelector(".Footer_address__2-E2i");
                let opacity = (window.scrollY - top) / (bottom - top);
                if (window.scrollY < topAddress) {
                    addressDiv.style.opacity = 0;
                } else if (window.scrollY > bottomAddress) {
                    addressDiv.style.opacity = 1;
                } else {
                    addressDiv.style.opacity = opacity;
                }
        }
            
        const hoursOpacity = (top, bottom) => {
                const hoursDiv = document.querySelector(".Footer_hours__16kHc");
                let opacity = (window.scrollY - top) / (bottom - top);
                if (window.scrollY < topHours) {
                    hoursDiv.style.opacity = 0;
                } else if (window.scrollY > bottomHours) {
                    hoursDiv.style.opacity = 1;
                } else {
                    hoursDiv.style.opacity = opacity;
                }
            
        }   
        
        addressOpacity(topAddress, bottomAddress);
        hoursOpacity(topHours, bottomHours);

    });

    window.addEventListener('scroll', () => {
        
        const topAddress = (window.innerWidth < 1024) ? 80 : 100;
        const bottomAddress = (window.innerWidth < 1024) ? 150 : 290;
        const topHours = (window.innerWidth < 1024) ? 230 : 100;
        const bottomHours = (window.innerWidth < 1024) ? 430 : 290;

        const addressOpacity = (top, bottom) => {
            const addressDiv = document.querySelector(".Footer_address__2-E2i");
            let opacity = (window.scrollY - top) / (bottom - top);
            if (window.scrollY < topAddress) {
                addressDiv.style.opacity = 0;
            } else if (window.scrollY > bottomAddress) {
                addressDiv.style.opacity = 1;
            } else {
                addressDiv.style.opacity = opacity;
            }
        }
        
        const hoursOpacity = (top, bottom) => {
            const hoursDiv = document.querySelector(".Footer_hours__16kHc");
            let opacity = (window.scrollY - top) / (bottom - top);
            if (window.scrollY < topHours) {
                hoursDiv.style.opacity = 0;
            } else if (window.scrollY > bottomHours) {
                hoursDiv.style.opacity = 1;
            } else {
                hoursDiv.style.opacity = opacity;
            }
        }   
    
        addressOpacity(topAddress, bottomAddress);
        hoursOpacity(topHours, bottomHours);

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