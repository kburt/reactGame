import React from "react";
import "../styles/Navbar.css";

const styles = {
    navbarStyle: {
      background: "white"
    },
    anchorStyle: {
      float: "right"
    }
  };
  
  // We use JSX curly braces to evaluate the style object on the JSX tag
  
  const Navbar = () => (
    <nav style={styles.navbarStyle} className="navbar">
      <a style={styles.anchorStyle} href="/">
        Welcome
      </a>
    </nav>
  );
  
  export default Navbar;
  