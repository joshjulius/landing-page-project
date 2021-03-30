import React from "react";
import styles from "./Reservation.module.css";

const Reservation = () => {
    return (
        <div className={styles.reservation}>
            <div className="content-container">
                <h2>reserve a table</h2>
                <p>We’re open! Accepting reservations and limited walk-ins as availability allows.<br />
                Call us at (204) 888-0028.</p>
            </div>
        </div>
    );
}

export default Reservation;