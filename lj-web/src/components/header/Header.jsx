import React, { useState } from 'react'
import "./header.css";

const Header = () => {
    /* Change background header */
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        //when the scroll is higher than 200 viewport height
        if (this.scrollY >= 80) header.classList.add
        ("scroll-header");
        else header.classList.remove("scroll-header");
    });
    /* Toggle Menu */
    const[Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav_logo">Ling-jet</a>

            <div className={Toggle ? "nav_menu show-menu" :
            "nav_menu"}>
                <ul className="nav_list grid">
                    <li className="nav_item">
                        <a href="#home" 
                            onClick={() => setActiveNav('#home')}
                            className={activeNav === "#home" ? 
                            "nav_link active_link" : "nav_link"}>
                            <i className="uil uil-estate nav_icon"></i>
                            Home
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#about" 
                            onClick={() => setActiveNav('#about')}
                            className={activeNav === "#about" ? 
                            "nav_link active_link" : "nav_link"}>
                            <i className="uil uil-user nav_icon"></i>
                            About
                            
                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#projects" 
                            onClick={() => setActiveNav('#projects')}
                            className={activeNav === "#projects" ? 
                            "nav_link active_link" : "nav_link"}>
                            <i className="uil uil-scenery nav_icon"></i>
                            Projects

                        </a>
                    </li>

                    <li className="nav_item">
                        <a href="#contact" 
                            onClick={() => setActiveNav('#contact')}
                            className={activeNav === "#contact" ? 
                            "nav_link active_link" : "nav_link"}>
                            <i className="uil uil-at nav_icon"></i>
                            Contact

                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav_close" onClick={() => 
                showMenu(!Toggle)}></i>
            </div>
            <div className="nav_toggle" onClick={() => showMenu
            (!Toggle)}>
                <i className="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header