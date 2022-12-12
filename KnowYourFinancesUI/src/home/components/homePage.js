import React from 'react';
import './homePage.css'
import heroImage from '../../images/heroImage.png'
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <><div>
            <img className="hero-image" src={heroImage} alt="HomePage"/>
        </div>
        <div className='second-section'>
            <div className='buttons-section-main linked'>
                <Link to='/learn' className='linked'><button className="button circle"><CastForEducationIcon className="icons"/></button></Link>
                <Link to='/familiarize' className='linked'><button className="button circle"><Diversity2Icon className="icons"/></button></Link>
                <Link to='/play' className='linked'><button className="button circle"><SmartToyIcon className="icons"/></button></Link>
            </div>
            <div className='name-section'>
                <Link to='/learn' className='linked'><p className='text-section-1 text'>Learn</p></Link>
                <Link to='/familiarize' className='linked'><p className='text-section-2 text'>Familiarize</p></Link>
                <Link to='/play' className='linked'> <p className='text-section-3 text'>Play</p></Link>
            </div>
        </div></>
    );
  }
  
  export default HomePage;