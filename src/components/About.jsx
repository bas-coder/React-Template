import React from 'react'

function About({title, content}) {
  return (
    <div className='about'>
        <div className="about__main">
            <h4 className='about__main-title'>{title}</h4>
            <p className='about__main-content'>
                {content}
            </p>
        </div>
    </div>
  )
}

export default About
