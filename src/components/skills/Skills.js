import React from 'react'
import './skills.css';
import image3 from "../../assets/image3.webp";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.jpg";

export default function Skills() {
  return (
    <section id="skills">
        <span className="skillsTitle">What I do</span>
        <span className="skillsDesc">
        "I am a versatile professional proficient in web development, graphic design, and software testing. With a keen eye for detail and a passion for creating exceptional user experiences, I excel in crafting visually appealing designs and ensuring seamless functionality across various digital platforms
        </span>
        <div className="skillsBars">
            <div className="skillsBar">
            <img src={image3} alt="" className="skillsBarImg"/>
            <div className="skillBarText">
                <h2>UI Design</h2>
                <p>Ui design is one of the best skills we have in the field</p>
            </div>
            </div>


            <div className="skillsBar">
            <img src={image4} alt="" className='skillsBarImg'/>
            <div className="skillBarText">
                <h2>Software testing</h2>
                <p>Ui design is one of the best skills we have in the field</p>
            </div>
            </div>


            <div className="skillsBar">
            <img src={image5} alt="" className='skillsBarImg'/>
            <div className="skillBarText">
                <h2>Web design</h2>
                <p>Ui design is one of the best skills we have in the field</p>
            </div>
            </div>
        </div>
    </section>
  )
}
