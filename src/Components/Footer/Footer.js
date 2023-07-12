import React from 'react'
import whatsApp from './whatsapp.png'
import linkedin from './linkedin.png'
import github from './git.png'
import './Footer.css'


const Footer = () => {
  return (
    <div>
      <footer className="ph3 ph4-ns pv4" style={{backgroundColor: "#363F3F"}}>
        <a href="mailto:" className="link f4 dim black-70 lh-solid white">sameeramirihana@gmail.com</a>
        
        <div className="flex center">
            <div className='cntct-zone'>
                <a href='0711111945' rel='noreferrer' target='_blank'>
                    <img src={whatsApp} alt='whatsApp' className='ft-img whatsapp' />
                </a>
            </div>
            <div className='cntct-zone'>
                <a href='https://www.linkedin.com/in/sameera-mirihana-b49276278/' rel='noreferrer' target='_blank'>
                    <img src={linkedin} alt='linkedin' className='ft-img linkedin' />
                </a>
            </div>
            <div className='cntct-zone'>
                <a href='https://github.com/mksameera89' rel='ft-img noreferrer' target='_blank'>
                    <img src={github} alt='github' className='ft-img gitgub' />
                </a>
            </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
