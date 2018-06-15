import React from "react";
import "../styles/Header.css";

const styles = {
    headerStyle: {
      background: "blue"
    },
    headingStyle: {
      fontSize: 100
    }
  };
  
  const Header = () => (
    <header style={styles.headerStyle} className="header">
      <h1 style={styles.headingStyle}>Welcome</h1>
    </header>
  );
  
  export default Header;