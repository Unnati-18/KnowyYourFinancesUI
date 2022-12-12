import React from 'react';
import familiarizeImage from '../../images/familiarizeImage.png'
import './familiarizePage.css'
import Avatar from '@mui/material/Avatar';


function stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 108, 
        height: 108
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  

const FamiliarizePage = () => {
    
    return (
        <><div>
            <img className="hero-image" src={familiarizeImage} alt="Familiarize"/>
        </div>
        <div className='text-section'>
            <div className="card">
                <div className="card-text">
                    <Avatar {...stringAvatar('Ramit Sethi') } />
                    <p className='para-text-left'>On average, millionaires invest 20% of their household income each year. Their wealth isn't measured by the amount they make each year, but by how they've saved and invested over time. <strong> - Ramit Sethi</strong></p>
                </div>
            </div>
            <div className="card">
                <div className="card-text">
                    <p className='para-text-left'>Now I am just concentrating on the financial plan which I have drafted. I am relaxed. I have no anxieties and am having a peaceful sleep. I am confident that we will be able to maintain our current standard of living after retirement also. <strong> - Istuti Gupta, Noida</strong></p>
                    <Avatar {...stringAvatar('Istuti Gupta') } />
                </div>
            </div>
            <div className="card">
                <div className="card-text">
                    <Avatar {...stringAvatar('Jackson Dcosta') } />
                    <p className='para-text-left'>The idea is to take small yet effective steps towards managing your money wisely. You can reach out to trusted wealth management services that can offer financial tips & help you understand money matters better. Alternatively, you can be self-sufficient & learn how to take charge of your personal finance by making well-informed choices. Once you learn how to save and invest your money judiciously, every penny will work to your advantage <strong> - Jackson Dcosta, Mumbai</strong></p>
                </div>
            </div>
        </div>
        </>
    );
  }

  export default FamiliarizePage;