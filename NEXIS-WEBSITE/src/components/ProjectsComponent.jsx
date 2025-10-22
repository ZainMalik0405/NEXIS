import React, { useState, useEffect, useRef } from 'react';
import { Typography, Box } from '@mui/material';
import hero from '../assets/hero.jpg'; // background video

const ProjectsComponent = () => {
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

  const ongoingProjects = [
    {
      title: "AI-Driven Smart Energy Management System",
      description: "Developing an intelligent system for optimizing energy consumption in smart grids using machine learning algorithms.",
      technologies: ["AI", "Machine Learning", "IoT", "Cloud Computing"],
      status: "Ongoing",
      timeline: "2023 - Present"
    },
    {
      title: "Healthcare Informatics Platform",
      description: "Creating an integrated platform for healthcare data analysis and predictive modeling to improve patient outcomes.",
      technologies: ["Data Analytics", "Python", "TensorFlow", "Electronic Health Records"],
      status: "Ongoing",
      timeline: "2022 - Present"
    },
    {
      title: "Next-Generation IoT Network Infrastructure",
      description: "Designing and implementing a robust IoT network architecture for smart city applications with enhanced security protocols.",
      technologies: ["IoT", "Network Security", "5G", "Edge Computing"],
      status: "Ongoing",
      timeline: "2023 - Present"
    }
  ];

  const completedProjects = [
    {
      title: "Network Traffic Analysis and Optimization",
      description: "Developed algorithms for analyzing network traffic patterns and optimizing data flow in enterprise environments.",
      technologies: ["Network Analysis", "Python", "Data Visualization", "Optimization Algorithms"],
      status: "Completed",
      timeline: "2021 - 2022",
      outcomes: "Published 3 conference papers, reduced network latency by 27%"
    },
    {
      title: "AI-Powered Predictive Maintenance System",
      description: "Created a predictive maintenance solution for industrial equipment using sensor data and machine learning models.",
      technologies: ["Predictive Analytics", "Sensor Networks", "Machine Learning", "Cloud Platform"],
      status: "Completed",
      timeline: "2020 - 2021",
      outcomes: "Implemented in 2 manufacturing facilities, reduced downtime by 35%"
    },
    {
      title: "Secure Communication Protocol for IoT Devices",
      description: "Designed and tested a lightweight encryption protocol specifically for resource-constrained IoT devices.",
      technologies: ["Cryptography", "IoT Security", "Embedded Systems", "Protocol Design"],
      status: "Completed",
      timeline: "2019 - 2020",
      outcomes: "Patent filed, published in IEEE IoT Journal"
    },
    {
      title: "Healthcare Data Integration Framework",
      description: "Developed a framework for integrating heterogeneous healthcare data sources into a unified analytics platform.",
      technologies: ["Data Integration", "Healthcare Standards", "API Development", "Data Governance"],
      status: "Completed",
      timeline: "2018 - 2019",
      outcomes: "Deployed at 3 healthcare facilities, improved data accessibility by 40%"
    },
    {
      title: "Energy Consumption Monitoring System",
      description: "Built a real-time energy monitoring system with predictive capabilities for residential and commercial buildings.",
      technologies: ["Energy Analytics", "Real-time Monitoring", "Web Dashboard", "Predictive Modeling"],
      status: "Completed",
      timeline: "2017 - 2018",
      outcomes: "Implemented in 15 buildings, achieved 15% energy savings on average"
    }
  ];

  const renderProjectCard = (project, index, isOngoing) => {
    return (
      <div 
        key={index} 
        className={`project-card ${isOngoing ? 'ongoing' : 'completed'}`}
        style={{ 
          animationDelay: `${index * 0.15}s`,
          transitionDelay: `${index * 0.1}s`
        }}
      >
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          <div className={`project-status ${project.status.toLowerCase()}`}>
            {project.status}
          </div>
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-timeline">
          <i className="fas fa-calendar-alt"></i>
          <span>{project.timeline}</span>
        </div>
        
        <div className="technologies">
          {project.technologies.map((tech, techIndex) => (
            <span key={techIndex} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        {project.outcomes && (
          <div className="project-outcomes">
            <div className="outcomes-title">Key Outcomes:</div>
            <p>{project.outcomes}</p>
          </div>
        )}
        
        <div className="project-hover-effect"></div>
      </div>
    );
  };

  return (
    <div 
      ref={sectionRef} 
      className={`projects-container ${isVisible ? 'visible' : ''}`}
      id="projects"
    >
      {/* Background Image with Filter */}
      <div className="background-image"></div>
      
      <div className="projects-header">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
          className="projects-title"
        >
          Research{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg, #00e5ff, #9b5cff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Projects
          </Box>
        </Typography>
        <p className="projects-subtitle">Innovative solutions driving technological advancement</p>
      </div>

      <div className="projects-content">
        <div className="projects-section">
          <h2 className="section-title">
            <i className="fas fa-hourglass-half"></i>
            Ongoing Projects
          </h2>
          <div className="projects-grid">
            {ongoingProjects.map((project, index) => 
              renderProjectCard(project, index, true)
            )}
          </div>
        </div>

        <div className="projects-section">
          <h2 className="section-title">
            <i className="fas fa-check-circle"></i>
            Completed Projects
          </h2>
          <div className="projects-grid">
            {completedProjects.map((project, index) => 
              renderProjectCard(project, index, false)
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Projects Component Styles */
        .projects-container {
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
          background-image: url(${hero});
          background-size: cover;
          background-position: center;
          opacity: 0.15;
          z-index: 0;
          filter: brightness(100%);
        }
        
        .projects-container::before {
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
        
        .projects-container.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .projects-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
          padding-top: 2rem;
        }
        
        .projects-title {
          margin-bottom: 0.5rem;
          position: relative;
          display: inline-block;
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .projects-subtitle {
          font-size: 1.2rem;
          color: #9b5cff;
          margin-top: 1.5rem;
          font-weight: 400;
        }
        
        .projects-content {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .projects-section {
          margin-bottom: 4rem;
        }
        
        .section-title {
          font-size: 1.8rem;
          color: #ffffff;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 0.8rem;
          position: relative;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid rgba(155, 92, 255, 0.3);
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .section-title i {
          color: #00e5ff;
        }
        
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }
        
        .project-card {
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
        
        .project-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, #00e5ff, #9b5cff);
          opacity: 0.8;
          transition: width 0.4s ease;
        }
        
        .project-card:hover::before {
          width: 6px;
        }
        
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.7), 0 0 25px rgba(155, 92, 255, 0.4);
          border-color: rgba(0, 229, 255, 0.4);
          background: rgba(18, 24, 33, 0.9);
        }
        
        .project-card.ongoing::after {
          content: '';
          position: absolute;
          top: 15px;
          right: 15px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #00e5ff;
          box-shadow: 0 0 10px #00e5ff;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% { opacity: 0.7; }
          50% { opacity: 1; }
          100% { opacity: 0.7; }
        }
        
        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.2rem;
        }
        
        .project-title {
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
          margin: 0;
          flex: 1;
          line-height: 1.4;
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .project-status {
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          margin-left: 1rem;
          flex-shrink: 0;
        }
        
        .project-status.ongoing {
          background: rgba(0, 229, 255, 0.15);
          color: #00e5ff;
          border: 1px solid rgba(0, 229, 255, 0.3);
        }
        
        .project-status.completed {
          background: rgba(76, 175, 80, 0.15);
          color: #4caf50;
          border: 1px solid rgba(76, 175, 80, 0.3);
        }
        
        .project-description {
          color: #b3b3b3;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }
        
        .project-timeline {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #9b5cff;
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        
        .project-timeline i {
          font-size: 0.9rem;
        }
        
        .technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.5rem;
        }
        
        .tech-tag {
          padding: 0.4rem 0.8rem;
          background: rgba(155, 92, 255, 0.15);
          color: #9b5cff;
          border-radius: 12px;
          font-size: 0.8rem;
          font-weight: 500;
          transition: all 0.3s ease;
          border: 1px solid rgba(155, 92, 255, 0.3);
          cursor: default;
        }
        
        .tech-tag:hover {
          background: rgba(155, 92, 255, 0.25);
          transform: translateY(-2px);
          box-shadow: 0 4px 10px rgba(155, 92, 255, 0.2);
        }
        
        .project-outcomes {
          background: rgba(0, 0, 0, 0.3);
          border-left: 3px solid rgba(0, 229, 255, 0.5);
          padding: 1rem;
          border-radius: 0 6px 6px 0;
          margin-top: 1rem;
        }
        
        .outcomes-title {
          font-weight: 600;
          color: #00e5ff;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
        }
        
        .project-outcomes p {
          color: #cccccc;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
        }
        
        .project-hover-effect {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(155, 92, 255, 0.1));
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: -1;
          border-radius: 12px;
        }
        
        .project-card:hover .project-hover-effect {
          opacity: 1;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .projects-container {
            padding: 5rem 1rem 3rem;
          }
          
          .projects-header {
            margin-bottom: 3rem;
            padding-top: 1rem;
          }
          
          .projects-grid {
            grid-template-columns: 1fr;
          }
          
          .project-header {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .project-status {
            margin: 0.5rem 0 0 0;
          }
          
          .section-title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsComponent;