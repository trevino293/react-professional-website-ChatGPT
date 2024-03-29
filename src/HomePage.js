// JavaScript source code
import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  
  useEffect(() => {
    document.title = "Anthony Trevino"; // Change to your desired title
  }, []);

  const antimageUrl = "https://storage.googleapis.com/at_professional_objects/IMG_3817%20(1).JPG";
  const ameximageUrl = "https://storage.googleapis.com/at_professional_objects/American_Express_logo_(2018).svg.png";
  const NBCimageUrl = "https://storage.googleapis.com/at_professional_objects/NBC_logo_2022.svg.png";
  const GTimageUrl = "https://storage.googleapis.com/at_professional_objects/georgia-tech-yellow-jackets-logo-png-transparent.png";
  const ASUimageUrl = "https://storage.googleapis.com/at_professional_objects/asu-seeklogo.svg";

  const skills = ["Product Management","Cloud Architecture","Data Governance","Lean Six Sigma","Executive Leadership", ]
  const tools = ["Python", "Java", "Google Cloud Platform", "Markdown, Confluence, Jira"]
  const certs = ["Google Cloud Architect", "Lean Six Sigma Greenbelt", "SAFe POPM"]

  const itemsAmex = ["Strategy and solution architect driving 6 year program roadmap to modernization on-premise hadoop/spark infrastructure to google hosted private cloud", 
                        "Migration of 300 user-facing data decisioning deployments alongside a 2000+ analytical user community", 
                        "Manged team of two consultants and three senior staff engineers to define the platform solution architecture."
                        ];
  const itemsNBC = ["Product leader managing the internal finance and legal rights management system for linear and video on-demand content", 
                    "Managed three development teams to deliver product enhancements", 
                    "Production support lead for the platform, resolving access requests and issues"
                    ];

  return (
        <div style={{ width: '1000px', margin: '0 auto' }}> {/*Website Container = Max Width*/}
            
            <div>
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
                                <a href="https://storage.googleapis.com/at_professional_objects/Anthony%20Trevino%20Resume.pdf" style={{ margin: '0 15px' }}>
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
                    <h2 style={{fontSize: '20px', marginLeft: '30px'}}> Hello I'm Anthony, </h2>
                    <p  style={{ marginLeft: '45px'}}>
                    Welcome to my website! I'm a information technology professional with over five years of experience in infrastructure, governance, product management and solution architecture.
                    This is a place to share my work experience, skills and projects.  
                    </p>
                    
                    <p  style={{ marginLeft: '45px'}}>
                    Additionally documentation of relevant and interesting architectures I define such as building this website will be stored here under <Link to="/Sample-Architecture">Sample Architecture</Link>.
                    </p>

                    <p  style={{ marginLeft: '45px'}}>
                    Thanks for stopping by!
                    </p>
                    <div> <hr style={{ width: '90%', height: '.25px', border: 'none', marginTop: '10px', marginBottom: '0px',  backgroundColor: '#800000' }} /> </div>
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
                {/* Certs Section */}   
                      <h2 style={{ fontSize: '20px', textAlign: 'center', color:'forestgreen', marginTop: '50px'}} >Certifications</h2>
                      <div>
                        {certs.map(cert => (
                          <div key={cert} className="certs-bubble">
                            {cert}
                          </div>
                        ))}
                      </div>  
                    </div>
                </div>


                {/* About Section */}
                <div style={{ width: '80%', textAlign: 'left' }}>                  
                    <h2 style={{fontSize: '20px', marginLeft: '30px'}} >Experience</h2>
                    <div style={{display: 'flex', width: '100%', textAlign: 'left' }}>
                        <div style={{width: '25%', marginRight: '0px', marginTop: '25px'}}>
                            <img src={ameximageUrl} alt="AMEX Logo" style={{ width: '75px', height: '75px', marginLeft: '75px'}} />
                        </div>
                        <div style={{width: '75%', marginRight: '0px'}}>
                            <h2 style={{ fontSize: '18px', marginLeft: '0px', marginBottom:'2px'}}>Senior Associate, Enterprise Data Platforms and Governance</h2>
                            <h2 style={{ fontSize: '18px', marginLeft: '0px', marginTop: '0px', marginBottom:'5px'}}>American Express</h2>
                            <h2 style={{ fontSize: '15px', marginLeft: '5px', marginTop: '0px', marginBottom:'2px'}}>2022 - Current</h2>
                            <h2 style={{ fontSize: '15px', marginLeft: '5px', marginTop: '0px', marginBottom:'2px'}}>Phoenix, Arizona</h2>
                            <p style={{ marginLeft: '5px'}}>
                            <ul>
                              {itemsAmex.map((itemsAmex, index) => (
                                <li key={index}>{itemsAmex}</li>
                              ))}
                            </ul>
                            </p>  
                        </div>
                    </div>
                    <div style={{display: 'flex', width: '100%', textAlign: 'left' }}>
                        <div style={{width: '25%', marginRight: '0px', marginTop: '45px'}}>
                            <img src={NBCimageUrl} alt="NBC Logo" style={{ marginLeft: '50px', width: '107.1px', height: '26.46px'}} />
                        </div>
                        <div style={{width: '75%', marginRight: '0px'}}>
                            <h2 style={{ fontSize: '18px', marginLeft: '0px', marginBottom:'2px'}}>Product Owner, Peacock</h2>
                            <h2 style={{ fontSize: '18px', marginLeft: '0px', marginTop: '0px', marginBottom:'5px'}}>NBC Universal</h2>
                            <h2 style={{ fontSize: '15px', marginLeft: '5px', marginTop: '0px', marginBottom:'2px'}}>2021</h2>
                            <h2 style={{ fontSize: '15px', marginLeft: '5px', marginTop: '0px', marginBottom:'2px'}}>Los Angeles, California</h2>
                            <p style={{ marginLeft: '5px'}}>
                            <ul>
                              {itemsNBC.map((itemsNBC, index) => (
                                <li key={index}>{itemsNBC}</li>
                              ))}
                            </ul>
                            </p>  
                        </div>
                    </div>
                   <div style={{display: 'flex', width: '100%', textAlign: 'left' }}>
                        <div style={{width: '25%', marginRight: '0px', marginTop: '25px'}}>
                            <img src={ameximageUrl} alt="AMEX Logo" style={{ width: '75px', height: '75px', marginLeft: '75px'}} />
                        </div>
                        <div style={{width: '75%', marginRight: '0px'}}>
                            <h2 style={{ fontSize: '18px', marginLeft: '0px', marginBottom:'2px'}}>Product Analyst, Merchant Servicing Portal</h2>
                            <h2 style={{ fontSize: '18px', marginLeft: '0px', marginTop: '0px', marginBottom:'5px'}}>American Express</h2>
                            <h2 style={{ fontSize: '15px', marginLeft: '5px', marginTop: '0px', marginBottom:'2px'}}>2019 - 2020</h2>
                            <h2 style={{ fontSize: '15px', marginLeft: '5px', marginTop: '0px', marginBottom:'2px'}}>Phoenix, Arizona</h2>                            
                        </div>
                    </div>
                    <div> <hr style={{ width: '90%', height: '.25px', border: 'none', marginTop: '50px', marginBottom: '0px', backgroundColor: '#800000' }} /> </div>
                </div>
            </div>

            <div style={{ display: 'flex', marginTop: '5px', marginLeft: '100px', marginRight: '100px', width: '100%', justifyContent: 'space-between' }}>
                {/* LEFT Placeholder Section */}
                <div style={{ width: '20%' }}>
                </div>
                {/* About Section */}
                <div style={{ width: '80%', textAlign: 'left' }}>
                    <h2 style={{fontSize: '20px', marginLeft: '30px'}}> Education</h2>  
                    <div style={{display: 'flex', width: '100%', textAlign: 'left' }}>
                        <div style={{width: '25%', marginRight: '0px', marginTop: '15px'}}>
                            <img src={GTimageUrl} alt="GT Logo" style={{ width: '100px', height: '100px', marginLeft: '75px'}} />
                        </div>
                        <div style={{width: '75%', marginRight: '0px'}}>
                            <h2 style={{ fontSize: '18px', marginLeft: '0px', marginTop: '2px', marginBottom: '2px'}}>Georgia Institute of Technology</h2>
                            <h2 style={{ fontSize: '18px', marginLeft: '0px', marginBottom: '2px', marginTop: '2px'}}>Master of Science in Computer Science</h2>
                            <p style={{ marginLeft: '15px', marginTop: '0px', marginBottom: '0px',}}>
                            2023  - 2025
                            </p> 
                            <p style={{ marginLeft: '15px', marginTop: '0px', marginBottom: '0px',}}>
                            Specialization in Artificial Intelligence 
                            </p>    
                        </div>
                    </div>

                    <div style={{display: 'flex', width: '100%', textAlign: 'left', marginTop: '15px' }}>
                        <div style={{width: '25%', marginRight: '0px', marginTop: '15px'}}>
                            <img src={ASUimageUrl} alt="ASU Logo" style={{ width: '75px', height: '75px', marginLeft: '75px'}} />
                        </div>
                        <div style={{width: '75%', marginRight: '0px'}}>
                            <h2 style={{ fontSize: '18px', marginLeft: '0px', marginTop: '2px', marginBottom: '2px'}}>Arizona State University</h2>
                            <h2 style={{ fontSize: '18px', marginLeft: '0px', marginBottom: '2px', marginTop: '2px'}}>Bachelor of Science in Engineering Management</h2>
                            <p style={{ marginLeft: '15px', marginTop: '0px', marginBottom: '0px',}}>
                            2015  - 2019
                            </p> 
                            <p style={{ marginLeft: '15px', marginTop: '0px', marginBottom: '0px',}}>
                            Statistics Minor
                            </p>    

                        </div>
                    </div>
                </div>
            </div>
        <div> <hr style={{ width: '100%', height: '1px', border: 'none', backgroundColor: '#800000', marginTop: '50px', marginBottom: '0px', marginLeft: '75px', marginLRight: '75px' }} /> </div> 
        <p style={{ marginLeft: '500px', marginTop: '20px', marginBottom: '15px'}}>
         <Link to="/Sample-Architecture">Powered by ChatGPT 3.5  </Link> 🤖
        </p> 
        </div>
  );
};

export default HomePage;