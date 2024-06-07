import React from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Ling-jet</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#projects" className="footer_link">Projects</a>
                </li>

                <li>
                    <a href="#home" className="footer_link">Home</a>
                </li>
            </ul>

            <div className="footer_social">
                <a 
                    href="https://www.instagram.com/lingjet.c/" 
                    className="footer_social-link" 
                    target="_blank"
                >
                    <i class="bx bxl-instagram"></i>
                </a>


                <a 
                    href="https://github.com/cheelingjet" 
                    className="footer_social-link" 
                    target="_blank"
                >
                    <i class="bx bxl-github"></i>
                </a>

                <a 
                    href="https://facebook.com/" 
                    className="footer_social-link" 
                    target="_blank"
                >
                    <i class="bx bxl-facebook"></i>
                </a>
            </div>

            <span className="footer_copy">
                &#169; Ling-jet Chee. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer