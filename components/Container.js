import React from "react";
import "../styles/Section.css";

const styles = {
    sectionStyles: {
      background: "orange"
    }
  };
  
  // We use JSX curly braces to evaluate the style object on the JSX tag
  
  const Section = () => (
    <section style={styles.sectionStyles} className="section">
      <h2>Lorem Ipsum Dolor Sit Amet</h2>
      </section>

export default Container;