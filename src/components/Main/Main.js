import React from "react";
import { Link } from 'react-router-dom';
import styles from "./Main.module.css";

const Main = () => {
    return (
        <main>
            <h2><a href="https://www.skipthedishes.com/naru-sushi" target="_blank">delivery</a> or <Link to="/contact">dine-in</Link></h2>
        </main>
    );
}

export default Main;