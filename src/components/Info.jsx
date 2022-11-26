import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {imgSrc} from "../static"

function Info() {
  return (
    <div className='info'>
        <div className="info__img">
            <img src={imgSrc.avatar} alt="" />
        </div>
        <div className="info__description">
            <h1>Abbas Alabson</h1>
            <p>Frontend Developer</p>
            <small>Static Website</small>
        </div>
        <div className="info__buttons">
            <div className="info__buttons-btn email">
                <EmailIcon />
                <h4>Email</h4>
            </div>
            <div className="info__buttons-btn linkedin">
                <LinkedInIcon />
                <h4>LinkedIn</h4>
            </div>
        </div>
    </div>
  )
}

export default Info
