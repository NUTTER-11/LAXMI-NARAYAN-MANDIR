import React from 'react';
import './HomePage.css';
import Jyoti_pic from '../pictures/Joyti_pic.jpg'
import Jyoti_1 from '../pictures/Jyoti_1.jpg' 
import Jyoti_2 from '../pictures/Jyoti_2.jpg' 
import diya from'../pictures/diya.png'
import Homepagecard from './Homepagecard';
import IntroDivider from './IntroDivider';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper'
import FixedBottomNavigation from './FixedBottomNavigation'
import AboutUs from './Aboutus';
import { BreakfastDining } from '@mui/icons-material';
import { Divider } from '@mui/material';



// import SimpleSlider from './SimpleSlider';
// import ImageSlider from './ImageSlider';
// import { ImageData } from '../json/JsonData';


const HomePage = () => {
    

    return (
    <>
    <div className="homepage-background">
        <div className="text-container">
            <p className="animated-text" style={{ fontSize: '35px',
                backgroundColor: 'red', // You can use any color you like
                padding: '13px' 
             }} >जय श्री लक्ष्मी नारायण</p>
        </div>
    </div>
    <div className="content-container">
    <div className="img-group-container">
                <div className="img-group">
                    <div className="img-group-inner">
                        <img src={Jyoti_pic} alt="about" />
                        <span></span>
                        <span></span>
                    </div>
                    <img src={Jyoti_2} alt="about" />
                    <img src={Jyoti_1} alt="about" />
                </div>
            </div>
            <div className="article-1">
                <h2>  <img src={diya} alt="Diya" className="diya-image"/>  Jyoti  <img src={diya} alt="Diya" className="diya-image" /></h2>
               
                <p>Diyas are symbolically lit during prayers, rituals, and ceremonies;
                     they are permanent fixtures in homes and temples. The warm, bright glow emitted from a diya is considered auspicious,
                      regarded to represent enlightenment, prosperity, knowledge and wisdom. Diyas represent the triumph of light over dark,
                       good over evil with the most notable example of this being on the day of Diwali. Diwali is celebrated every year to celebrate 
                       the triumph of good over evil as told in the Hindu epic, the Ramayana. Diwali marks the day Rama, Sita, and Lakshmana returned 
                       home to Ayodhya after 14 years in exile, after the defeat of Ravana. According to tradition, to welcome Rama, Sita, and
                        Lakshmana home, the citizens of Ayodhya are said to have lit up the streets with diyas. 
                    They are regarded to be associated with Lakshmi in Hindu iconography and worship
                    </p><p>These lamps are commonly used in the Indian subcontinent and they hold sacred prominence in Hindu, Sikh, Buddhist, and Jain prayers as well as religious rituals, ceremonies and festivals including Diwali.</p>
            </div>

    </div>
    <Homepagecard />
    <div className="content-container-2">
    <div className="article-2">
                <h1>Article Title</h1>
                <p>Ldictum. Fusce faucibus vestibulum odio, eget laoreet tortor molestie vel. Vivamus ultricies, libero id cursus lobortis, velit metus eleifend tellus, nec pharetra enim arcu vitae mauris. Sed elementum enim et risus posuere, nec pulvinar magna volutpat. Sed hendrerit diam at purus posuere, at vestibulum sapien tincidunt. Praesent et mi ac lorem tristique rutrum. Integer nec erat ac eros aliquet facilisis nec eget nibh. Vestibulum nec magna sed lectus aliquet sodales sit amet sed arcu. Nullam congue nisl non nulla vestibulum, a sollicitudin odio fringilla. Ut bibendum vel nisi eu ultricies. Donec nec mauris vitae nisl tempor tempus. Vivamus ac urna felis.</p>
    </div>           
    <IntroDivider></IntroDivider> 
    </div>      


    <AboutUs></AboutUs>
    </>
    );
};
export default HomePage;