import React from 'react'
import styles from './Home.module.css'
import profile_photo from "./profile_photo.jpeg"

const Home = () => {
  return (
    <div className = {styles.box}>
        <img className = {styles.photo} src = {profile_photo} />
        
        <div className = {styles.content}>
          <h1 className = {styles.header}>Khaled Khan</h1>
          <p className = {styles.text}>Hi! I'm Khaled. Among other things, I am really interested in machine learning & data science and their applications in supporting the human learning journey. Currently completing my Masters in Computer Science at the University of Queensland, Australia. Outside of my studies, I work as a tutor, moonlight as a musician, and am working on some personal coding projects, which I'll be uploading here. </p>
        </div>
      </div>
  );
}
export default Home