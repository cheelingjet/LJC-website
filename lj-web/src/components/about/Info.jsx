// Info.js
import React, { useState } from 'react';
import Modal from './Modal';

const Info = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleBoxClick = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  const experienceContent = (
    <div>
      <p>I started "coding" at a young age. When I was in middle school, my dad urged me to look into Scratch, the drag-and-drop coding language designed by MIT for kids. This initial exposure to programming sparked my interest and passion for coding.</p>
      <p>&nbsp;</p>
      <p>It wasn't until high school where I took both of the AP Computer Science courses where I learned my first object oriented language: Java. This is when I really pushed my interest in coding, 
        creating small applications to do arithemetic calculations or even implementing very beginner graphics.</p>
      <p>&nbsp;</p>
      <p>From here, I carried my knowledge of Java into my first CS course at Purdue, CS18000, where I created a social media messaging app as my final project. From there, my journey only escalted, moving from course to course learning a new thing every year until today.
        I've participated in several software engineering projects that I am proud of, and I am eager and ready to enter the industry as a blooming software engineer!
      </p>
    </div>
  );

  const courseworkContent = (
    <div>
      <p>Throughout my university education, I have completed over 15 computer science courses, covering a wide range of topics. Here are relevant courses I took in my undergrad at Purdue!</p>
      <p>&nbsp;</p>
      <ul className="course-list">
        <li>CS 18000: Prob Solving & Object Oriented Programming</li>
        <li>CS 18200: Foundations Of Computer Science</li>
        <li>CS 24000: Programming in C</li>
        <li>CS 25000: Computer Architecture</li>
        <li>CS 25100: Data Structures and Algorithms</li>
        <li>CS 25200: Systems Programming</li>
        <li>CS 30700: Software Engineering I</li>
        <li>CS 35400: Operating Systems</li>
        <li>CS 38100: Intro to the Analysis of Algorithms</li>
        <li>CS 40700: Software Engineering Senior Project</li>
        <li>CS 40800: Software Testing</li>
        <li>CS 45600: Programming Languages- Rust and Haskell</li>
        <li>CS 37300: Data Mining and Machine Learning</li>
        <li>CS 47300: Web Info Search and Management</li>
        <li>MA 41600: Probability</li>
        <li>CS 47100: Intro to Artificial Intelligence</li>
      </ul>

    </div>
  );

  return (
    <div>
      <div className="about_info grid">
        <div className="about_box" onClick={() => handleBoxClick(experienceContent)}>
          <i className="bx bx-briefcase-alt about_icon"></i>
          <h3 className="about_title">Experience</h3>
          <span className="about_subtitle">5+ years coding</span>
        </div>

        <div className="about_box" onClick={() => handleBoxClick(courseworkContent)}>
          <i className="bx bx-award about_icon"></i>
          <h3 className="about_title">Coursework</h3>
          <span className="about_subtitle">15+ University CS courses</span>
        </div>
      </div>

      <Modal show={showModal} onClose={() => setShowModal(false)} content={modalContent} />
    </div>
  );
};

export default Info;
