import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box } from '@mui/material';
import hero from '../assets/hero.jpg'; 

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
      img: require('../assets/Dr. Saima Zafar.png'),
    },
    {
      name: "Dr. Ali Hammad Akbar",
      role: "Collaborator and Co PI",
      expertise: "Wireless Sensor Networks, Emergency Management, Urban Sprawl",
      img: require('../assets/Dr. Ali Hammad Akbar.png'),
    },
    {
      name: "Dr. Muhammad Akmal",
      role: "Co-PI",
      expertise: "Biomedical applications of Artificial Intelligence and Machine Learning, Healthcare Informatics",
      img: require('../assets/Dr. Muhammad Akmal.png'),
    },
    {
      name: "Dr. Muhammad Naeem",
      role: "Co-PI",
      expertise: "Renewable Energy Systems, Energy Informatics",
      img: require('../assets/Dr. Muhammad Naeem.png'),
    },
  ];

  // --- UPDATED RESEARCHERS ---
  const researchers = [
    {
      name: "Dr. Shafique Ahmed Chaudhry",
      role: "Research Collaborator",
      expertise:
        "Associate Professor, Clarkson University, USA | Internet of Things, Machine Learning, Cyber Physical Systems",
      img: require('../assets/Shafique Ahmed Chaudhry.png'),
    },
    {
      name: "Dr. Nasim Ullah",
      role: "Research Collaborator",
      expertise:
        "Renewable Energy Harvesting, Smart Grids, Hybrid Intelligent Transformers",
      img: require('../assets/Nasim Ullah.png'),
    },
    {
      name: "Mr. Khalid Ijaz",
      role: "Researcher",
      expertise: "Artificial Intelligence, Machine Learning, Computer Vision",
      img: require('../assets/Khalid Ijaz.png'),
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
      img: require('../assets/Abeer Bashir.png'),
    },
    {
      name: "Mr. Umer Altaf",
      role: "PhD Student",
      expertise: "Machine Learning for Embedded Systems",
      img: require('../assets/Umer Altaf.png'),
    },
    {
      name: "Ms. Sara Kiran",
      role: "PhD Student",
      expertise: "",
      img: require('../assets/Sara Kiran.png'),
    },
  ];

  // --- UPDATED STUDENT CONTRIBUTORS ---
  const students = [
    {
      name: "Feroz Ahmed Mian",
      role: "PhD Student, UMass Amherst",
      expertise: "SoC-based implementation of Machine Learning algorithms",
      img: require('../assets/Feroz Ahmed Mian.png'),
    },
    {
      name: "Syed Faseeh Ul Hasan",
      role: "Web Developer & SEO specialist, CBS Automotive, Cambridge, UK",
      expertise: "Blockchain",
      img: require('../assets/Syed Faseeh Ul Hasan.png'),
    },
    {
      name: "Chaudhry Fahad Ali",
      role: "PCP National Coordinator UNIDO",
      expertise: "Energy Management Systems",
      img: require('../assets/Chaudhry Fahad Ali.png'),
    },
    {
      name: "Khushbakht Munir",
      role: "Co-Chair, Women in Energy Pakistan",
      expertise: "Blockchain and Internet of Things",
      img: require('../assets/Khushbakht Munir.png'),
    },
    {
      name: "Hira Khalid",
      role: "Research Assistant, Sultan Qaboos University",
      expertise: "Free Space Optical Networks",
      img: require('../assets/Hira Khalid.png'),
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
        <img src={typeof img === 'string' ? img : img.default} alt={name} className="member-image" />
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
            <div className="developer-card">
              <div className="developer-content">
                <div className="developer-image-container">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" 
                    alt="Zain Malik" 
                    className="developer-image" 
                  />
                </div>
                <div className="developer-info">
                  <h3 className="developer-name">Zain Malik</h3>
                  <p className="developer-role">Website Developer</p>
                  <p className="developer-desc">Crafted with React, passion, and attention to detail</p>
                  <div className="skills">
                    <span className="skill-tag">React</span>
                    <span className="skill-tag">JavaScript</span>
                    <span className="skill-tag">CSS3</span>
                    <span className="skill-tag">UI/UX</span>
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
        
        .developer-card {
          background: rgba(13, 17, 23, 0.85);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
          max-width: 500px;
          width: 100%;
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
          align-items: center;
          gap: 2rem;
        }
        
        .developer-image-container {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 3px solid rgba(0, 229, 255, 0.3);
          box-shadow: 0 0 25px rgba(0, 229, 255, 0.3);
        }
        
        .developer-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .developer-info {
          text-align: left;
          flex: 1;
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
        }
      `}</style>
    </div>
  );
};

export default TeamComponent;
