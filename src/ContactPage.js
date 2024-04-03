// JavaScript source code
import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import antimageUrl from './images/IMG_3817.JPG';


const ContactPage = () => {
  
  useEffect(() => {
    document.title = "Contact Anthony"; // Change to your desired title
  }, []);

  return (
        <div style={{ width: '1000px', margin: '0 auto' }}>
                {/* Header with Image, Name, Subtitle & Icons*/}
                <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '15px'}}>
                    
                    <div style={{marginRight: '0px'}}>
                        <img src={antimageUrl} alt="Anthony" style={{ width: '150px', height: '150px', borderRadius: '50%', marginLeft: '125px'}} />
                    </div>
          
                    <div style={{ alignItems: 'right', marginLeft: '50px'}} >  
                        <h1 style={{ marginTop: '0px', marginBottom: '2px'}}>Anthony Trevino</h1>
                        <h2 style={{ marginTop: '0px', fontSize: '18px', marginBottom: '2px'}}>Information Technology Architecture and Product Leader</h2> 
                        <h2 style={{ marginLeft: '10px', marginTop: '10px', fontSize: '12px', marginBottom: '0px', color: 'darkred', fontStyle: 'italic' }}>I strive to define reponsible data pipelines and robust AI implementations.</h2> 
                        <div style={{ display: 'flex', marginTop: '15px', marginBottom: '0px'}}>
                            {/* Social Media Icons */}
                            <div>
                                <div>
                                <a href="https://storage.googleapis.com/professional-objects/Anthony%20Trevino%20Resume.pdf" style={{ margin: '0 15px' }}>
                                <FontAwesomeIcon icon={faFileAlt} size="2x" style={{ color: '#333' }}/>
                                </a>
                                </div>
                                Resume
                            </div>                        
                            <a href="https://www.linkedin.com/in/anthony-trevinoo/" style={{ margin: '0 15px' }}>
                            <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#333' }} />
                            </a>
                            <a href="https://github.com/trevino293" style={{ margin: '0 15px' }}>
                            <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333' }}/>
                            </a>
                        </div>
                    </div>
                </div>

            <div> <hr style={{ width: '100%', height: '1px', border: 'none', backgroundColor: '#800000', marginTop: '10px', marginLeft: '75px', marginLRight: '75px' }} /> </div>  

            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '100px', marginRight: '100px', width: '100%', justifyContent: 'space-between' , marginBottom: '0px' }}>
                <p  style={{ marginLeft: '100px',  marginRight: '100px', marginBottom: '0px' }}>
                Thank you for the interest in contacting me, I will try my best to respond to all queries.
                </p>
            </div>
            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '100px', marginRight: '100px', width: '100%', justifyContent: 'space-between', marginBottom: '0px' }}>
                <p  style={{ marginLeft: '110px',  marginRight: '100px', marginBottom: '0px' }}>
                Email: trevino293@gmail.com
                </p>
            </div>
            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '100px', marginRight: '100px', width: '100%', justifyContent: 'space-between' }}>
                <p  style={{ marginLeft: '110px',  marginRight: '100px'}}>
                Phone: 480-313-0514
                </p>
            </div>

          </div>
  );
};

export default ContactPage;