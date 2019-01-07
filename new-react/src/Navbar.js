import React from "react";
import styles from "./styles/Navbar.module.css"


const Navbar = () => (
    <div className={[styles.navbar, styles.aa, "centered"].join(" ")}>
    <a href="#">Home</a>
    <a href="#">Products</a>
    <a href="#">Information</a>
    <a href="#">Contact Us</a>
</div>
)

export default Navbar;