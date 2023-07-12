import React from 'react'
import './Projects.css'
import Tilt from 'react-parallax-tilt';
import robofriends from './robofriends.jpg'
import smartbrain from './smartbrain.png'

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0.25
        }}
    />
);

const Projects = () => {
  return (
     <section className='proj-section fullpage' id="projects">
        <div className="project-titte">
          <h2 className="f2 b">Projects</h2>
        </div>
        <div className='project-list'>
           <div className='grid-wrapper'>
             <div className='grid proj'>
                <div className='pr-func'>
                    <div className='pr-des' >
                        <h2 className='pr-name'>Robofriends</h2>
                        <p className='para' >
                        This project is a React-based application that displays 
                        a collection of robots along with their names, email 
                        addresses, and profile pictures. It uses npm packages 
                        like Tachyons for streamlined development and incorporates 
                        a gradient background for a visually appealing interface. 
                        Google Fonts are implemented to offer a wide range of 
                        font choices. The project provides an engaging user 
                        experience, allowing users to search for specific robots 
                        by name.
                        </p>
                    </div>
                    <div className='pr-btns flex'>
                        <div className='live-btn'>
                            <a className='live-link' rel="noreferrer" href="https://robofriends-fdxx.onrender.com/" target="_blank">See Live</a>
                        </div>
                        <div className='src-btn'>
                            <a className='src-link' rel="noreferrer" href="https://github.com/mksameera89/robofriends#!" target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>
                <div className='img-wrapper'>
                  <Tilt className="parallax-effect br2 shadow-2" perspective={500}>
                        <img src={robofriends} alt='profile' className='proj-pic'/>
                  </Tilt>
                </div>
             </div>
        </div>
        <ColoredLine color="gray" />
        <div className='grid-wrapper'>
             <div className='grid proj'>
                <div className='pr-func'>
                    <div className='pr-des' >
                        <h2 className='pr-name'>Robofriends</h2>
                        <p className='para' >
                            The "SmartBrain" project is a web application that utilizes 
                            React for the frontend and Node.js/Express.js for the backend. 
                            It offers facial recognition capabilities, allowing users to 
                            upload images or provide image URLs for face detection. The 
                            frontend is built using modern web technologies like React, 
                            HTML, CSS, and JavaScript. Npm packages such as Tachyons are 
                            used for streamlined development and styling. The backend, 
                            developed with Node.js/Express.js, interacts with machine 
                            learning or computer vision APIs to process and identify 
                            faces. The project showcases the integration of frontend and 
                            backend components to create an intuitive and visually 
                            appealing facial recognition application.
                        </p>
                    </div>
                    <div className='pr-btns flex'>
                        <div className='live-btn'>
                            <a className='live-link' rel="noreferrer" href="https://smartbrain-esd7.onrender.com/" target="_blank">See Live</a>
                        </div>
                        <div className='src-btn'>
                            <a className='src-link' rel="noreferrer" href="https://github.com/mksameera89/smartbrain.git" target="_blank">Source Code</a>
                        </div>
                    </div>
                </div>
                <div className='img-wrapper'>
                  <Tilt className="parallax-effect br2 shadow-2" perspective={500}>
                        <img src={smartbrain} alt='profile' className='proj-pic'/>
                  </Tilt>
                </div>
             </div>
        </div>
        </div>
    </section>
  )
}

export default Projects

