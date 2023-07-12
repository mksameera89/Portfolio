import React from 'react'
import "./About.css"
import mypic from './profile.jpg'
import Tilt from 'react-parallax-tilt';


const About = () => {
  return (
      <section className="about fullpage" id="about">
        <div className='about-container'>
            <div className="about-title-wraper">
                <h1 className='b white about-title'>About Me</h1>
            </div>
            <div className='about_content-wraper'>
                <div className='grid about'>
                    <div className='myimg'> 
                       <div className='myimg-wrapper'>                             
                        <Tilt className="parallax-effect shadow-2" >
                            <img src={mypic} alt='profile' className='mypic' />
                        </Tilt>
                       </div>                  
                    </div>
                    <div className='about-me white'>
                        <div className='para-wrapper'>
                            <p className="para">
                                Hello, I'm Sameera Mirihana, a science graduate from the 
                                University of Ruhuna and a passionate web developer. I 
                                specialize in creating dynamic and interactive websites 
                                using HTML, CSS, Bootstrap, JavaScript, NodeJS, and 
                                frameworks like React and ExpressJS. With a strong command 
                                of version control (Git/GitHub) and database management 
                                (MySQL/PostgreSQL), I design visually appealing and 
                                user-friendly web applications. I also have experience 
                                deploying projects and integrating APIs to enhance 
                                functionality and deliver seamless user experiences. 
                                Constantly seeking new challenges, I stay updated with 
                                the latest web development trends and technologies.
                            </p>
                            
                            <p className="para">
                                Outside of work, I love learning and exploring new 
                                technologies. I spend my free time working on personal 
                                coding projects, attending web development meetups, and 
                                engaging in online tutorials to expand my knowledge. My goal 
                                is to grow as a developer and contribute to meaningful 
                                projects that positively impact people's lives. Whether it's 
                                creating intuitive user interfaces or optimizing website 
                                performance, I strive to deliver exceptional user experiences.
                            </p>

                            <p className="para">
                                I'm excited to be part of the ever-evolving web development 
                                landscape and open to new opportunities and collaborations. 
                                Let's connect and embark on this exciting journey together!
                            </p>

                            <p className="para">
                                I am thrilled to be a part of the ever-evolving web development 
                                landscape and I am always open to new opportunities and 
                                collaborations. I am eager to leverage my skills and work alongside 
                                talented individuals and teams to create innovative digital solutions. 
                                Let's connect and embark on this exciting journey together!"
                            </p>
                        </div>
                        <div className='resume-btn'>
                            <a className='resume-link' rel="noreferrer" href={require('./resume.pdf')} target="_blank">View resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
      </section>
  )
}

export default About

