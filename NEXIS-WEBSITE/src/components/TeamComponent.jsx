import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box } from '@mui/material';
import hero from '../assets/hero.jpg';

// Core Team Images
import drSaimaZafar from '../assets/73 - Dr. Saima Zafar.JPG';
import drAliHammadAkbar from '../assets/Dr. Ali Hammad Akbar.png';
import drMuhammadAkmal from '../assets/Dr. M. Akmal.JPG';
import drMuhammadNaeem from '../assets/Dr. M. Naeem.jpg';

// Researchers Images
import drShafiqueAhmed from '../assets/Dr. Shafique Ahmed Chaudhry.jfif';
import drNasimUllah from '../assets/Dr. Nasim Ullah.webp';
import khalidIjaz from '../assets/Khalid Ijaz.png';
import abeerBashir from '../assets/Abeer Bashir.png';
import umerAltaf from '../assets/Umer Altaf.JPG';
import saraKiran from '../assets/Sara Kiran.jfif';

// Student Contributors Images
import ferozAhmedMian from '../assets/Feroz Ahmed Mian.png';
import syedFaseeh from '../assets/Syed Faseeh.jpeg';
import chaudhryFahadAli from '../assets/Chaudhry Fahad Ali.jfif';
import khushbakhtMunir from '../assets/Khushbakht Munir.png';
import hiraKhalid from '../assets/Hira Khalid.jfif';

// Developer Images
import zainMalik from '../assets/zain.jpg';
import zainabShahzad from '../assets/zainab.jpg'; 

const TeamComponent = () => {
  const [activeTab, setActiveTab] = useState('core');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

 // --- UPDATED CORE TEAM ---
  const coreTeam = [
    {
      name: "Dr. Saima Zafar",
      role: "Director and Principal Investigator (PI)",
      expertise: "Leading research in Internet of Things, Healthcare Informatics, & Energy Informatics",
      img: drSaimaZafar,
    },
    {
      name: "Dr. Ali Hammad Akbar",
      role: "Collaborator and Co PI",
      expertise: "Wireless Sensor Networks, Emergency Management, Urban Sprawl",
      img: drAliHammadAkbar,
    },
    {
      name: "Dr. Muhammad Akmal",
      role: "Co-PI",
      expertise: "Biomedical applications of Artificial Intelligence and Machine Learning, Healthcare Informatics",
      img: drMuhammadAkmal,
    },
    {
      name: "Dr. Muhammad Naeem",
      role: "Co-PI",
      expertise: "Renewable Energy Systems, Energy Informatics",
      img: drMuhammadNaeem,
    },
  ];

  // --- UPDATED RESEARCHERS ---
  const researchers = [
    {
      name: "Dr. Shafique Ahmed Chaudhry",
      role: "Research Collaborator",
      expertise:
        "Associate Professor, Clarkson University, USA | Internet of Things, Machine Learning, Cyber Physical Systems",
      img: drShafiqueAhmed,
    },
    {
      name: "Dr. Nasim Ullah",
      role: "Research Collaborator",
      expertise:
        "Renewable Energy Harvesting, Smart Grids, Hybrid Intelligent Transformers",
      img: drNasimUllah,
    },
    {
      name: "Mr. Khalid Ijaz",
      role: "Researcher",
      expertise: "Artificial Intelligence, Machine Learning, Computer Vision",
      img: khalidIjaz,
    },
    {
      name: "Ms. Amna Ehsan",
      role: "PhD Student",
      expertise: "Energy Informatics",
      img: "", // No picture, use first letter 'A'
    },
    {
      name: "Ms. Abeer Bashir",
      role: "PhD Student",
      expertise: "Healthcare Informatics",
      img: abeerBashir,
    },
    {
      name: "Mr. Umer Altaf",
      role: "PhD Student",
      expertise: "Machine Learning for Embedded Systems",
      img: umerAltaf,
    },
    {
      name: "Ms. Sara Kiran",
      role: "PhD Student",
      expertise: "",
      img: saraKiran,
    },
  ];

  // --- UPDATED STUDENT CONTRIBUTORS ---
  const students = [
    {
      name: "Feroz Ahmed Mian",
      role: "PhD Student, UMass Amherst",
      expertise: "SoC-based implementation of Machine Learning algorithms",
      img: ferozAhmedMian,
    },
    {
      name: "Syed Faseeh Ul Hasan",
      role: "Web Developer & SEO specialist, CBS Automotive, Cambridge, UK",
      expertise: "Blockchain",
      img: syedFaseeh,
    },
    {
      name: "Chaudhry Fahad Ali",
      role: "PCP National Coordinator UNIDO",
      expertise: "Energy Management Systems",
      img: chaudhryFahadAli,
    },
    {
      name: "Khushbakht Munir",
      role: "Co-Chair, Women in Energy Pakistan",
      expertise: "Blockchain and Internet of Things",
      img: khushbakhtMunir,
    },
    {
      name: "Hira Khalid",
      role: "Research Assistant, Sultan Qaboos University",
      expertise: "Free Space Optical Networks",
      img: hiraKhalid,
    },
    {
      name: "Usman Ayub",
      role: "Research Student",
      expertise: "Virtual Network Functions in Cloud Environment",
      img: "", // No picture, use first letter 'U'
    },
  ];

  // --- IMAGE LOGIC ---
  const renderImage = (img, name, size) => {
    if (img) {
      return (
        <img src={img} alt={name} className="member-image" />
      );
    }
    const letter = name[0];
    return (
      <div
        className="member-image placeholder"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: '#2c2c2c',
          color: '#9b5cff',
          fontWeight: 900,
          fontSize: `${size / 2}px`,
          border: '3px solid #9b5cff',
        }}
      >
        {letter}
      </div>
    );
  };

  const renderTeamMembers = (team) => {
    return team.map((member, index) => (
      <div 
        key={index} 
        className="team-member-card"
        style={{ 
          animationDelay: `${index * 0.1}s`,
          transitionDelay: `${index * 0.1}s`
        }}
      >
        <div className="member-content">
          <div className="member-image-container">
            <img src={member.img} alt={member.name} className="member-image" />
          </div>
          <div className="member-info">
            <h3 className="member-name">{member.name}</h3>
            <p className="member-role">{member.role}</p>
            <p className="member-expertise">{member.expertise}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div 
      ref={sectionRef} 
      className={`team-container ${isVisible ? 'visible' : ''}`}
    >
      {/* Background Image with Filter */}
      <div className="background-image"></div>
      
      <div className="team-header">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
          className="team-title"
        >
          Our{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg, #00e5ff, #9b5cff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Team
          </Box>
        </Typography>
        <p className="team-subtitle">Dedicated professionals driving innovation</p>
      </div>

      <div className="team-tabs">
        <button 
          className={`tab-button ${activeTab === 'core' ? 'active' : ''}`}
          onClick={() => setActiveTab('core')}
        >
          <span className="tab-text">Core Team</span>
        </button>
        <button 
          className={`tab-button ${activeTab === 'researchers' ? 'active' : ''}`}
          onClick={() => setActiveTab('researchers')}
        >
          <span className="tab-text">Researchers</span>
        </button>
        <button 
          className={`tab-button ${activeTab === 'students' ? 'active' : ''}`}
          onClick={() => setActiveTab('students')}
        >
          <span className="tab-text">Student Contributors</span>
        </button>
        <button 
          className={`tab-button ${activeTab === 'developer' ? 'active' : ''}`}
          onClick={() => setActiveTab('developer')}
        >
          <span className="tab-text">Website Developer</span>
        </button>
      </div>

      <div className="team-content">
        {activeTab === 'core' && (
          <div className="team-grid">
            {renderTeamMembers(coreTeam)}
          </div>
        )}
        
        {activeTab === 'researchers' && (
          <div className="team-grid">
            {renderTeamMembers(researchers)}
          </div>
        )}
        
        {activeTab === 'students' && (
          <div className="team-grid">
            {renderTeamMembers(students)}
          </div>
        )}
        
        {activeTab === 'developer' && (
          <div className="developer-section">
            <div className="developers-grid">
              {/* Zain Malik */}
              <div className="developer-card">
                <div className="developer-content">
                  <div className="developer-image-container">
                    <img 
                      src={zainMalik} 
                      alt="Zain Malik" 
                      className="developer-image" 
                    />
                  </div>
                  <div className="developer-info">
                    <h3 className="developer-name">Muhammad Zain Malik</h3>
                    <p className="developer-role">Full Stack Developer</p>
                    <p className="developer-desc">Backend architecture, frontend development, and system design</p>
                    <div className="skills">
                      <span className="skill-tag">MERN</span>
                      <span className="skill-tag">FastAPI</span>
                      <span className="skill-tag">Website Development</span>
                      <span className="skill-tag">Mobile Apps</span>
                    </div>
                    <a 
                      href="https://www.linkedin.com/in/muhammad-zain-malik-4a5079266?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="linkedin-button"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>

              {/* Zainab Shahzad */}
              <div className="developer-card">
                <div className="developer-content">
                  <div className="developer-image-container">
                    <img 
                      src={zainabShahzad} 
                      alt="Zainab Shahzad" 
                      className="developer-image" 
                    />
                  </div>
                  <div className="developer-info">
                    <h3 className="developer-name">Zainab Shahzad</h3>
                    <p className="developer-role">Frontend Developer</p>
                    <p className="developer-desc">UI/UX design implementation and responsive frontend development</p>
                    <div className="skills">
                      <span className="skill-tag">React JS</span>
                      <span className="skill-tag">Figma</span>
                      <span className="skill-tag">UI & UX Engineer</span>
                      <span className="skill-tag">Design and HCI</span>
                    </div>
                    <a 
                      href="https://www.linkedin.com/in/zainab-shahzad-308451282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="linkedin-button"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        /* Team Component Styles */
        .team-container {
          padding: 6rem 2rem 4rem;
          background: #000;
          color: #e0e0e0;
          font-family: 'Inter', sans-serif;
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 1s ease, transform 1s ease;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }
        
        .background-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url(https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg);
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          z-index: 0;
          filter: brightness(200%);
        }
        
        .team-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            linear-gradient(90deg, rgba(0, 157, 255, 0.04),  rgba(126, 46, 255, 0.08));
          pointer-events: none;
          z-index: 1;
        }
        
        .team-container.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .team-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
          padding-top: 2rem;
        }
        
        .team-title {
          margin-bottom: 0.5rem;
          position: relative;
          display: inline-block;
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .team-subtitle {
          font-size: 1.2rem;
          color: #9b5cff;
          margin-top: 1.5rem;
          font-weight: 400;
        }
        
        .team-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 3rem;
          position: relative;
          z-index: 2;
        }
        
        .tab-button {
          padding: 1rem 2rem;
          background: rgba(0, 0, 0, 0.7);
          border: 1px solid rgba(155, 92, 255, 0.3);
          border-radius: 12px;
          color: #9b5cff;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          min-width: 180px;
        }
        
        .tab-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(0, 229, 255, 0.2), transparent);
          transition: left 0.6s ease;
        }
        
        .tab-button:hover::before {
          left: 100%;
        }
        
        .tab-button:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(155, 92, 255, 0.4);
          color: #00e5ff;
          border-color: rgba(0, 229, 255, 0.5);
          background: rgba(0, 0, 0, 0.9);
        }
        
        .tab-button.active {
          background: linear-gradient(90deg, #00e5ff, #9b5cff);
          color: black;
          box-shadow: 0 8px 20px rgba(155, 92, 255, 0.6);
          border: none;
          transform: translateY(-3px);
        }
        
        .tab-text {
          text-align: center;
          width: 100%;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
          gap: 2.5rem;
          margin: 0 auto;
          max-width: 1200px;
          position: relative;
          z-index: 2;
        }
        
        .team-member-card {
          background: rgba(13, 17, 23, 0.85);
          border-radius: 12px;
          padding: 1.8rem;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s forwards;
          border: 1px solid rgba(155, 92, 255, 0.2);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .team-member-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7), 0 0 25px rgba(155, 92, 255, 0.4);
          border-color: rgba(0, 229, 255, 0.4);
          background: rgba(18, 24, 33, 0.9);
        }
        
        .member-content {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .member-image-container {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 3px solid rgba(0, 229, 255, 0.3);
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.2);
          transition: all 0.4s ease;
        }
        
        .team-member-card:hover .member-image-container {
          border-color: rgba(155, 92, 255, 0.5);
          box-shadow: 0 0 25px rgba(155, 92, 255, 0.4);
          transform: scale(1.05);
        }
        
        .member-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .team-member-card:hover .member-image {
          transform: scale(1.1);
        }
        
        .member-info {
          text-align: left;
          flex: 1;
        }
        
        .member-name {
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .member-role {
          color: #9b5cff;
          font-weight: 500;
          margin-bottom: 0.8rem;
          font-size: 1rem;
        }
        
        .member-expertise {
          color: #b3b3b3;
          font-size: 0.95rem;
          line-height: 1.5;
          font-style: italic;
        }
        
        .developer-section {
          display: flex;
          justify-content: center;
          padding: 2rem 0;
          position: relative;
          z-index: 2;
        }
        
        .developers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
          gap: 2.5rem;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        }
        
        .developer-card {
          background: rgba(13, 17, 23, 0.85);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          border: 1px solid rgba(0, 229, 255, 0.3);
          padding: 2rem;
          backdrop-filter: blur(10px);
        }
        
        .developer-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 229, 255, 0.5);
        }
        
        .developer-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.5rem;
          text-align: center;
        }
        
        .developer-image-container {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 4px solid rgba(0, 229, 255, 0.4);
          box-shadow: 0 0 30px rgba(0, 229, 255, 0.4);
          transition: all 0.4s ease;
        }
        
        .developer-card:hover .developer-image-container {
          border-color: rgba(155, 92, 255, 0.6);
          box-shadow: 0 0 35px rgba(155, 92, 255, 0.5);
          transform: scale(1.05);
        }
        
        .developer-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .developer-card:hover .developer-image {
          transform: scale(1.1);
        }
        
        .developer-info {
          text-align: center;
          flex: 1;
          width: 100%;
        }
        
        .developer-name {
          font-size: 1.5rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .developer-role {
          color: #9b5cff;
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .developer-desc {
          color: #cccccc;
          margin-bottom: 1.5rem;
          line-height: 1.6;
          font-style: italic;
          min-height: 48px;
        }
        
        .linkedin-button {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1.5rem;
          margin-top: 1rem;
          background: linear-gradient(135deg, #0077b5, #005582);
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 119, 181, 0.3);
          border: 1px solid rgba(0, 119, 181, 0.5);
        }
        
        .linkedin-button:hover {
          background: linear-gradient(135deg, #005582, #003d5c);
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 119, 181, 0.5);
        }
        
        .linkedin-button svg {
          transition: transform 0.3s ease;
        }
        
        .linkedin-button:hover svg {
          transform: scale(1.1);
        }
        
        .skills {
          display: flex;
          justify-content: flex-start;
          flex-wrap: wrap;
          gap: 0.8rem;
        }
        
        .skill-tag {
          padding: 0.5rem 1rem;
          background: rgba(0, 229, 255, 0.15);
          color: #00e5ff;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid rgba(0, 229, 255, 0.3);
          cursor: pointer;
        }
        
        .skill-tag:hover {
          background: rgba(0, 229, 255, 0.25);
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 229, 255, 0.2);
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .team-container {
            padding: 5rem 1rem 3rem;
          }
          
          .team-header {
            margin-bottom: 3rem;
            padding-top: 1rem;
          }
          
          .team-tabs {
            flex-direction: column;
            align-items: center;
          }
          
          .tab-button {
            width: 100%;
            margin-bottom: 0.8rem;
          }
          
          .team-grid {
            grid-template-columns: 1fr;
          }
          
          .member-content {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }
          
          .member-info {
            text-align: center;
          }
          
          .developers-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          
          .developer-content {
            flex-direction: column;
            text-align: center;
            gap: 1.5rem;
          }
          
          .developer-info {
            text-align: center;
          }
          
          .skills {
            justify-content: center;
          }
          
          .linkedin-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default TeamComponent;
