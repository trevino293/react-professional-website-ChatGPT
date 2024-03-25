import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';



//npm install --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome

function App() {

  const imageUrl = "https://storage.googleapis.com/at_professional_objects/IMG_3817%20(1).JPG";

  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
       
        {/* Header with Image, Name, Subtitle & Icons*/}
        <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '15px'}}>
           <div style={{marginRight: '0px'}}>
            <img src={imageUrl} alt="Anthony" style={{ width: '170px', height: '170px', borderRadius: '50%', marginLeft: '125px'}} />
           </div>
          
           <div style={{ alignItems: 'right', marginLeft: '50px'}} >  
            <h1 style={{ marginTop: '0px', marginBottom: '2px'}}>Anthony B. Trevino</h1>
            <h2 style={{ marginTop: '0px', fontSize: '18px'}}>Information Technology Architecture and Product Leader</h2> 
            <div style={{ display: 'flex', marginTop: '0px'}}>
                {/* Social Media Icons */}
                <a href="https://storage.googleapis.com/at_professional_objects/Anthony%20Trevino%20Resume.pdf" style={{ margin: '0 10px' }}>
                <FontAwesomeIcon icon={faFileAlt} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/anthony-trevinoo/" style={{ margin: '0 10px' }}>
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com/trevino293" style={{ margin: '0 10px' }}>
                <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
            </div>
           </div>
        </div>

        <div> <hr style={{ width: '100%', height: '1px', border: 'none', backgroundColor: '#800000', marginTop: '15px' }} /> </div>

        <div style={{ display: 'flex', marginTop: '50px', marginLeft: '100px', width: '100%', justifyContent: 'space-between' }}>
            {/* Skills Section */}
            <div style={{ width: '25%' }}>
                <h2>Skills</h2>
                <ul>
                <li>Skill 1</li>
                <li>Skill 2</li>
                <li>Skill 3</li>
                </ul>
            </div>
            {/* About Section */}
            <div style={{ width: '75%', textAlign: 'center' }}>
                <h2>Introduction</h2>
                <p>
                This is where you can introduce yourself. Talk about your background,
                experiences, and interests. You might also want to mention your
                professional goals and what you're passionate about. This section
                gives visitors a glimpse into who you are beyond your professional
                skills.
                </p>
            </div>
        </div>
        <div style={{ display: 'flex', marginTop: '50px', marginLeft: '100px', width: '100%', justifyContent: 'space-between' }}>
            {/* Skills Section */}
            <div style={{ width: '25%' }}>
            </div>
            {/* About Section */}
            <div style={{ width: '75%', textAlign: 'center' }}>
                <h2>Industry Experience</h2>
                <p>
                This is where you can introduce yourself. Talk about your background,
                experiences, and interests. You might also want to mention your
                professional goals and what you're passionate about. This section
                gives visitors a glimpse into who you are beyond your professional
                skills.
                </p>
            </div>
        </div>
    </div>
  );
}

export default App;