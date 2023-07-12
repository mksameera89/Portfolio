import React from 'react'
import './Hero.css'
import 'animate.css';
import html from './lan/html.png'
import css from './lan/css.png'
import javascript from './lan/javascript.png'
import boostrap from './lan/boostrap.png'
import react from './lan/react.png'
import njs from './lan/nodejs.png'
import express from './lan/express.png'
import api from './lan/api.png'
import postgresql from './lan/postgresql.png'
import mysql from './lan/mysql.png'
import npm from './lan/npm.png'
import github from './lan/github.png'

const Hero = () => {
  return (
    <section className='hero fullpage' id='hero'>
      <div className='hero-frame'>
        <div className='hero-title-block'>
          <h1 className='hero-title animate__bounceIn'>Hi, my name is <span className="text-color-main">Sameera Mirihana</span>
          <br />
              I'm the Web Developer.
          </h1>
        </div>
        <div className='hero-btn'>
              <a className='hero-link animate__bounceInRight' href='#about'>Know more</a>          
        </div>        
      </div>
      <div className='lan-bar1'>
      <div className='lan-bar-wrapper'>
          <div className='licon'>
            <img src={html} alt='html' className='lan-img' />
          </div>
          <div className='licon'>
            <img src={css} alt='css' className='lan-img' />
          </div>
          <div className='licon'>
            <img src={javascript} alt='javascripi' className='lan-img' />
          </div>
          <div className='licon'>
            <img src={boostrap} alt='boostrap' className='lan-img' />
          </div>
          <div className='licon'>
            <img src={react} alt='react' className='lan-img' />
          </div>
          <div className='licon'>
            <img src={njs} alt='nodejs' className='lan-img' />
          </div>
          <div className='licon'>
            <img src={express} alt='express' className='lan-img' />
          </div>
          <div className='licon'>
            <img src={api} alt='api' className='lan-img' />
          </div>
          <div className='licon'>
            <img src={postgresql} alt='postgresql'className='lan-img' />
          </div>
          <div className='licon '>
            <img src={mysql} alt='mysql' className='lan-img' />
          </div>
          <div className='licon'>
            <img src={npm} alt='npm' className='lan-img' />
          </div>
          <div className='licon'>
            <img src={github} alt='github' className='lan-img' />
          </div>
        </div>
        </div>       
    </section>      
  )
}

export default Hero;


