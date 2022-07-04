import React from 'react';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import "./Footer.css";
import { Send } from '@material-ui/icons';


function Footer() {
    return (
        <div className="footer">

            <div className='footer_line1'>
                <h3>Are you a vendor looking to place your products online? </h3>
                <h5>Email us at info@essentiel.com</h5>
            </div>

            <div className='footer_line2'>
                <h4>About Us</h4>
                <h4>Contact</h4>
                <h4>Terms & Conditions</h4>
            </div>

            <div className='footer_line3'>

                <h4>Subscribe to our newsletter</h4>
                <div className='footer_input'>
                  <input placeholder='your@mail.com'></input>  
                  <SendOutlinedIcon />
                </div>
                
            </div>

            <div className='socials'>
                <h3>Socials</h3>

                <div className='socials_icons'>
                    <FacebookIcon />
                    <TwitterIcon />
                    <InstagramIcon />
                    <YouTubeIcon />
                </div>
                    
            </div>

        </div>
    )
}

export default Footer;
