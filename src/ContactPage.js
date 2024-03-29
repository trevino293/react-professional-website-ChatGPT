// JavaScript source code
import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';

const ContactPage = () => {
  
  useEffect(() => {
    document.title = "Contact Anthony"; // Change to your desired title
  }, []);

  const imageUrl = "https://storage.googleapis.com/at_professional_objects/IMG_3817%20(1).JPG";
  const skills = ["Product Management","Cloud Architecture","Data Governance","Lean Six Sigma","Executive Leadership", ]
  const tools = ["Python", "Java", "Google Cloud Platform", "Markdown, Confluence, Jira"]

  return (
        <div style={{ width: '1000px', margin: '0 auto' }}>
            <div>
          
                {/* Header with Image, Name, Subtitle & Icons*/}
                <div style={{ display: 'flex', alignItems: 'center', width: '100%', marginTop: '15px'}}>
                    <div style={{marginRight: '0px'}}>
                        <img src={imageUrl} alt="Anthony" style={{ width: '150px', height: '150px', borderRadius: '50%', marginLeft: '125px'}} />
                    </div>
          
                    <div style={{ alignItems: 'right', marginLeft: '50px'}} >  
                    <h1 style={{ marginTop: '0px', marginBottom: '2px'}}>Anthony B. Trevino</h1>
                    <h2 style={{ marginTop: '0px', fontSize: '18px'}}>Information Technology Architecture and Product Leader</h2> 
                    <div style={{ display: 'flex', marginTop: '40px', marginBottom: '0px'}}>
                        {/* Social Media Icons */}
                        <a href="https://storage.googleapis.com/at_professional_objects/Anthony%20Trevino%20Resume.pdf" style={{ margin: '0 10px' }}>
                        <FontAwesomeIcon icon={faFileAlt} size="2x" style={{ color: '#333' }}/>
                        </a>
                        <a href="https://www.linkedin.com/in/anthony-trevinoo/" style={{ margin: '0 10px' }}>
                        <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#333' }} />
                        </a>
                        <a href="https://github.com/trevino293" style={{ margin: '0 10px' }}>
                        <FontAwesomeIcon icon={faGithub} size="2x" style={{ color: '#333' }}/>
                        </a>
                    </div>
                    </div>
              </div>
            </div>

            <div> <hr style={{ width: '100%', height: '1px', border: 'none', backgroundColor: '#800000', marginTop: '10px', marginLeft: '75px', marginLRight: '75px' }} /> </div>
        
        
            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '100px', marginRight: '100px', width: '100%', justifyContent: 'space-between' }}>
  
                {/* Skills Section */}
                <div style={{ width: '20%', textAlign: 'left', marginRight: '15px',}}>
                    <h2 style={{ fontSize: '20px', textAlign: 'center', color: 'maroon'}} >Core Skills</h2>
                    <div style={{ width: '100%' }}>
                        <div>
                        {skills.map(skill => (
                            <div key={skill} className="skill-bubble">
                            {skill}
                            </div>
                        ))}
                        </div>    
                    </div>
                </div>
                {/* About Section */}
                <div style={{ width: '80%', textAlign: 'left'}}>
                    <h2 style={{ marginLeft: '40px'}}> Hello I'm Anthony,</h2>
                    <p  style={{ marginLeft: '45px'}}>
                    Welcome to my website! I'm a information technology professional with over five years experience in infrastructure, governance, product management and solution architecture.
                    </p>
                </div>
            </div>
        
            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '100px', marginRight: '100px', width: '100%', justifyContent: 'space-between' }}>
           
                {/* Tools Section */}
                <div style={{ width: '20%', textAlign: 'left', marginRight: '15px',}}>
                    <h2 style={{ fontSize: '20px', textAlign: 'center', color:'midnightblue'}} >Tools</h2>
                    <div style={{ width: '100%' }}>
                      <div>
                        {tools.map(tool => (
                          <div key={tool} className="tools-bubble">
                            {tool}
                          </div>
                        ))}
                      </div>    
                    </div>
                </div>

                {/* About Section */}
                <div style={{ width: '80%', textAlign: 'left' }}>
                    <h2 style={{ marginLeft: '40px'}} >Experience</h2>
                    <h2 style={{ fontSize: '20px', marginLeft: '45px'}}>Industry Experience</h2>
                    <p style={{ marginLeft: '50px'}}>
                    This is where you can introduce yourself. Talk about your background,
                    experiences, and interests. You might also want to mention your
                    professional goals and what you're passionate about. This section
                    gives visitors a glimpse into who you are beyond your professional
                    skills.
                    </p>  
                    <h2 style={{ fontSize: '20px', marginLeft: '45px'}}>Industry Experience</h2>
                    <p style={{ marginLeft: '50px'}}>
                    This is where you can introduce yourself. Talk about your background,
                    experiences, and interests. You might also want to mention your
                    professional goals and what you're passionate about. This section
                    gives visitors a glimpse into who you are beyond your professional
                    skills.
                    </p>
                    <h2 style={{ fontSize: '20px', marginLeft: '45px'}}>Industry Experience</h2>
                    <p style={{ marginLeft: '50px'}}>
                    This is where you can introduce yourself. Talk about your background,
                    experiences, and interests. You might also want to mention your
                    professional goals and what you're passionate about. This section
                    gives visitors a glimpse into who you are beyond your professional
                    skills.
                    </p>
                </div>
            </div>

            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '100px', marginRight: '100px', width: '100%', justifyContent: 'space-between' }}>
                {/* LEFT Placeholder Section */}
                <div style={{ width: '25%' }}>
                </div>
                {/* About Section */}
                <div style={{ width: '75%', textAlign: 'left' }}>
                    <h2>Education</h2>  
                    <h2 style={{ fontSize: '20px', marginLeft: '10px', marginTop: '2px'}}>Georgia Institute of Technology</h2>
                    <h2 style={{ fontSize: '20px', marginLeft: '10px', marginBottom: '2px'}}>Master of Science, Computer Science</h2>
                    <p style={{ marginLeft: '15px'}}>
                    August 2023 to May 2025
                    Specialization in Artificial Intelligence 
                    </p>
                    <h2 style={{ fontSize: '20px', marginLeft: '10px'}}>Industry Experience</h2>
                    <p style={{ marginLeft: '15px'}}>
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
};

export default ContactPage;