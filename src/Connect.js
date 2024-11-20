import React from 'react'
import styles from "./Connect.module.css"
import email from "./email.jpg"
import linked_in from "./linked_in.png"
import github from "./github.png"
const Connect = () => {
  return (
    <div className = {styles.container}>
      <a href = "https://www.linkedin.com/in/khaled-khan-brisbane/">
        <div className = {styles.box}>
          <img className = {styles.icon} src = {linked_in}></img>
          <h2 className = {styles.link}>LinkedIn</h2>
        </div>
      </a>
      <a href = "mailto:kkhan@khaledkhan.me">
        <div className = {styles.box}>
          <img className = {styles.icon} src = {email}></img>
          <h2 className = {styles.link}>E-Mail</h2>
        </div>
      </a>
      <a href = "https://github.com/khaled-khan-47">
        <div className = {styles.box}>
          <img className = {styles.icon} src = {github}></img>
          <h2 className = {styles.link}>GitHub</h2>
        </div>
      </a>
    </div>
  );
}
export default Connect