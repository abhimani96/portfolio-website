import React from 'react'
import bg from "../../assets/image2.jpg";
import {Link} from 'react-scroll';
import './intro.css';

export default function Intro() {
  return (
   <section id="intro">
        <div className="introContent">
            <span className="hello">
                Hello
            </span>

            <span className="introText">I'm <span className="introName">Smith</span><br/>Web designer
            </span>
            <p className="introPara">I'm skillfull web developer.and and also Software developer</p>
            <Link><button className="btn">Hire me</button></Link>
        </div>

        <img src={bg} alt="profile" className="bg"/>


   </section>
  )
}
