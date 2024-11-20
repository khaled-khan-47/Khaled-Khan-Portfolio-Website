import React from 'react'
import styles from './About.module.css'
const About = () => {
  return (
    <>
      <div className = {styles.box}>
        <div className = {styles.container}>
          <h2 className = {styles.header}>Education</h2>
          <p>I'm currently studying my Masters in Computer Science at the University of Queensland, Australia - graduating at the end of 2026. I'll be taking on coursework related to machine learning, artificial intelligence, information systems, algorithms and more.</p>
          <p>I hold a Bachelors degree in Mathematics, also from the University of Queensland; majoring in Pure Mathematics and double-minoring in Statistics and Computer Science. I maintained a grade point average above the distinction level across discrete mathematics, algebra, mathematical statistics, probability, algorithms, and probability coursework. I also completed electives abroad at Nanyang Technological University (Singapore) in Data Science and Chinese Language.</p>
        </div>
      </div>
      <div className = {styles.box}>
        <div className = {styles.container}>
          <h2 className = {styles.header}>Experience</h2>
          <p>I have over 500+ hours of tutoring experience, working with 100+ students across varied subject areas, with a focus on mathematics. I work to break down high-level concepts in an insightful and accessible way, and help students navigate towards their study goals.</p>
          <p>I have performed as a trombonist in 100+ professional engagements. I have extensive experience as a member of non-profit large ensembles as well as professional contemporary bands. I have performed in concert halls, at festivals, on studio recordings, as part of educational workshops and at local venues in and around Brisbane as a freelance sideman.</p>
        </div>
      </div>
      <div className = {styles.box}>
        <div className = {styles.container}>
          <h2 className = {styles.header}>Skills</h2>
          <p>I'm comfortable in Python, including working with common data science and AI/ML libraries (pandas, PyTorch, SKLearn).</p>
          <p>I'm also familiar with Julia, Java, C, R, SQL, as well as HTML/CSS & JavaScript/React.</p>
          <p>I am knowledgable in discrete maths, algebra, statistics/probability and algorithms.</p>
          <p>I pride myself on being adaptable, team-minded and detail-oriented.</p>
        </div>
      </div>

    </>
  );
}
export default About