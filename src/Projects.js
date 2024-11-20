import React from 'react'
import styles from "./Projects.module.css"
const Projects = () => {
  return (
    <>
      <div className = {styles.box}>
        <div className = {styles.container}>
          <h2 className = {styles.header}>Portfolio Website</h2>
          <p><a href="">View</a> | <a href="https://github.com/khaled-khan-47/Khaled-Khan-Portfolio-Website">Source</a></p>
          <p>Created this website from scratch, learning the basics of HTML, CSS, React.js and web hosting along the way.</p>
          <p>Nov 2024</p>
        </div>
      </div>
    </>
    
  );
}
export default Projects