import React from 'react'
import "./navbar.css";
import logo2 from "../../assets/logo2.png";
import {Link} from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="navbar">
        <img src={logo2}  className="logo" alt=""/>
        <div className="desktopMenu">
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Home</Link>
            <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">About</Link>
            <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Portfolio</Link>
            <Link to="client" spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Client</Link>
          
        </div>
        <button className="desktopButton">
            <img src="" alt="" className='desktopImg'/>Contact me

        </button>

    </nav>
  )
}
