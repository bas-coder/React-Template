import React from 'react'

//ICONS
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__icons">
            <TwitterIcon />
            <FacebookIcon/>
            <InstagramIcon />
            <GitHubIcon /> 
        </div>
    </div>
  )
}

export default Footer
