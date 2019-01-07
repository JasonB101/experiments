import React from "react";
import Navbar from "./Navbar";
import styles from "./styles/Header.module.css"


const Header = () => (
    <div className={[styles.header, "centered"].join(" ")}>
    <h1>Welcome to my site!</h1>
    <Navbar />
</div>
)

export default Header;