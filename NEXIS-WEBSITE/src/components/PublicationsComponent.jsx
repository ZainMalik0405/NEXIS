import React, { useState, useEffect, useRef } from 'react';
import {
  Typography,
  Box,
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Chip
} from '@mui/material';
import { FilterList, Article, ImportContacts, ExpandMore } from '@mui/icons-material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PublicationsComponent = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [filterYear, setFilterYear] = useState('all');
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [expandedYears, setExpandedYears] = useState({});
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

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

  useEffect(() => {
    if (isVisible && cardsRef.current.length > 0) {
      gsap.to(cardsRef.current, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      });
    }
  }, [isVisible]);

 const publications = [
  {
    id: 1,
    title: "SoC-Based Implementation of 1D Convolutional Neural Network for 3-Channel ECG Arrhythmia Classification via HLS4ML",
    authors: "F. Ahmad, and S. Zafar",
    journal: "IEEE Embedded Systems Letters, 16:4:429-432",
    year: 2024,
    type: "journal",
    abstract: "Implementation of a 1D CNN on System-on-Chip for ECG arrhythmia classification using high-level synthesis for machine learning.",
    link: "#",
    doi: "",
    citations: null,
    impactFactor: 1.7,
    tags: ["AI", "Healthcare", "Hardware Acceleration"]
  },
  {
    id: 2,
    title: "Framework for Efficient Auto-Scaling of Virtual Network Functions in a Cloud Environment",
    authors: "S. Zafar, U. Ayub, H. I. Alkhammash, N. Ullah",
    journal: "Sensors, 22, 7597",
    year: 2022,
    type: "journal",
    abstract: "",
    link: "https://doi.org/10.3390/s22197597",
    doi: "10.3390/s22197597",
    citations: null,
    impactFactor: 3.847,
    tags: ["Cloud Computing", "Networking", "Virtualization"]
  },
  {
    id: 3,
    title: "Implementation of a Distributed Framework for Permissioned Blockchain-Based Secure Automotive Supply Chain Management",
    authors: "S. Zafar, S. F. U. Hassan, A. Mohammad, A. A. Al-Ahmadi, N. Ullah",
    journal: "Sensors, 22, 7367",
    year: 2022,
    type: "journal",
    abstract: "",
    link: "https://doi.org/10.3390/s22197367",
    doi: "10.3390/s22197367",
    citations: null,
    impactFactor: 3.847,
    tags: ["Blockchain", "Supply Chain", "Security"]
  },
  {
    id: 4,
    title: "Integration of Blockchain and Internet of Things: Challenges and Solutions",
    authors: "S. Zafar, K. M. Bhatti, M. Shabbir, F. Hashmat, A. H. Akbar",
    journal: "Annals of Telecommunications, 77:1-2:13-32",
    year: 2022,
    type: "journal",
    abstract: "Comprehensive analysis of challenges and solutions in integrating blockchain with IoT technologies.",
    link: "https://doi.org/10.1007/s12243-021-00858-8",
    doi: "10.1007/s12243-021-00858-8",
    citations: null,
    impactFactor: 1.444,
    tags: ["Blockchain", "IoT", "Security"]
  },
  {
    id: 5,
    title: "Free Space Optical Networks: Applications, Challenges and Research Directions",
    authors: "S. Zafar, H. Khalid",
    journal: "Wireless Personal Communications, 21:1:429-457",
    year: 2021,
    type: "journal",
    abstract: "Exploration of free space optical networks, their applications, challenges, and future research directions.",
    link: "https://doi.org/10.1007/s11277-021-08644-4",
    doi: "10.1007/s11277-021-08644-4",
    citations: null,
    impactFactor: 1.671,
    tags: ["Optical Networks", "Wireless Communication", "Networking"]
  },
  {
    id: 6,
    title: "Internet of things and cloud computing-based energy management system for demand side management in smart grid",
    authors: "S. A. Hashmi, C. F. Ali, S. Zafar",
    journal: "International Journal of Energy Research, 45:1:1007-1022",
    year: 2021,
    type: "journal",
    abstract: "",
    link: "https://doi.org/10.1002/er.6141",
    doi: "10.1002/er.6141",
    citations: null,
    impactFactor: 5.164,
    tags: ["IoT", "Energy Management", "Smart Grid"]
  },
  {
    id: 7,
    title: "Mobility-Aware Hierarchical Clustering in Mobile Wireless Sensor Networks",
    authors: "S. Zafar, A. Bashir, S. A. Chaudhry",
    journal: "IEEE Access, 7:20394-20403",
    year: 2019,
    type: "journal",
    abstract: "",
    link: "https://doi.org/10.1109/ACCESS.2019.2896938",
    doi: "10.1109/ACCESS.2019.2896938",
    citations: null,
    impactFactor: 3.367,
    tags: ["Wireless Sensor Networks", "Clustering", "Mobility"]
  },
  {
    id: 8,
    title: "Adaptive TrimTree: Green data center network through resource consolidation, selective connectedness and energy proportional computing",
    authors: "S. Zafar, S. A. Chaudhry, S. Kiran",
    journal: "Energies, 9(10):797",
    year: 2016,
    type: "journal",
    abstract: "",
    link: "https://doi.org/10.3390/en9100797",
    doi: "10.3390/en9100797",
    citations: null,
    impactFactor: 3.004,
    tags: ["Data Centers", "Energy Efficiency", "Networking"]
  },
  {
    id: 9,
    title: "On implementation of DCTCP on three-tier and fat-tree data center network topologies",
    authors: "S. Zafar, A. Bashir, S. A. Chaudhry",
    journal: "SpringerPlus, 5:766",
    year: 2016,
    type: "journal",
    abstract: "",
    link: "https://doi.org/10.1186/s40064-016-2454-4",
    doi: "10.1186/s40064-016-2454-4",
    citations: null,
    impactFactor: 1.78,
    tags: ["Data Centers", "Networking"]
  },
  {
    id: 10,
    title: "VISTA: Achieving cumulative vision through energy efficient silhouette recognition of mobile targets through collaboration of visual sensor nodes",
    authors: "S. Jabbar, A. H. Akbar, S. Zafar, M. M. Quddoos, M. Hussain",
    journal: "EURASIP Journal on Image and Video Processing, 2014:32",
    year: 2014,
    type: "journal",
    abstract: "",
    link: "https://doi.org/10.1186/1687-5281-2014-32",
    doi: "10.1186/1687-5281-2014-32",
    citations: null,
    impactFactor: 1.789,
    tags: ["Image Processing", "Sensor Networks"]
  },
  {
    id: 11,
    title: "Collaborative routing and data dissemination architecture for commercial wireless sensor networks",
    authors: "B. Hasani, S. Zafar, A. H. Akbar, B. A. Magsi",
    journal: "EURASIP Journal on Wireless Communications and Networking, 2013:54",
    year: 2013,
    type: "journal",
    abstract: "",
    link: "https://doi.org/10.1186/1687-1499-2013-54",
    doi: "10.1186/1687-1499-2013-54",
    citations: null,
    impactFactor: 1.408,
    tags: ["Wireless Sensor Networks", "Networking"]
  },
  {
    id: 12,
    title: "A gating mechanism for border node assisted association of Wireless Personal Area Networks",
    authors: "S. Zafar, A. H. Akbar, S. Jabbar",
    journal: "SpringerPlus, 1:12",
    year: 2012,
    type: "journal",
    abstract: "",
    link: "https://doi.org/10.1186/2193-1801-1-12",
    doi: "10.1186/2193-1801-1-12",
    citations: null,
    impactFactor: 1.78,
    tags: ["WPAN", "Networking"]
  },
  {
    id: 13,
    title: "SET - Session layer-assisted Efficient TCP management architecture for 6LoWPAN with multiple gateways",
    authors: "S. Zafar, A. H. Akbar, S. Jabbar, N. M. Sheikh",
    journal: "EURASIP Journal on Wireless Communications and Networking, 2010, Article ID 936457",
    year: 2010,
    type: "journal",
    abstract: "",
    link: "https://doi.org/10.1155/2010/936457",
    doi: "10.1155/2010/936457",
    citations: null,
    impactFactor: 1.408,
    tags: ["Wireless Sensor Networks", "TCP Management"]
  },
  {
    id: 14,
    title: "Easy-Weigh-Out: Design and Implementation of Internet of Things-based Smart Luggage System",
    authors: "M. H. Farooq, M. Zain, M. B. Khalid, S. Zafar",
    journal: "International Journal of Online and Biomedical Engineering, 17(3):37-48",
    year: 2021,
    type: "journal",
    abstract: "",
    link: "https://online-journals.org/index.php/i-joe/article/view/17165/8809",
    doi: "",
    citations: null,
    impactFactor: null,
    tags: ["IoT", "Smart Devices", "Luggage"]
  },
  {
    id: 15,
    title: "SNAG: Collaborative Routing Architecture for Sensor-based Information at SMS Gateway in Cellular Networks",
    authors: "M. F. Shafeeq, A. H. Akbar, S. Zafar",
    journal: "International Journal of Wireless Information Networks, pp. 1-18",
    year: 2019,
    type: "journal",
    abstract: "",
    link: "https://doi.org/10.1007/s10776-019-00451-w",
    doi: "10.1007/s10776-019-00451-w",
    citations: null,
    impactFactor: null,
    tags: ["Sensor Networks", "Routing", "Mobile Networks"]
  },
  {
    id: 16,
    title: "An IoT based real-time environmental monitoring system using Arduino and cloud service",
    authors: "S. Zafar, G. Miraj, R. Baloch, D. Murtaza, K. Arshad",
    journal: "Engineering, Technology & Applied Science Research, 8(4):3238-3242",
    year: 2018,
    type: "journal",
    abstract: "",
    link: "https://doi.org/10.48084/etasr.2144",
    doi: "10.48084/etasr.2144",
    citations: null,
    impactFactor: null,
    tags: ["IoT", "Environmental Monitoring"]
  },
  {
    id: 17,
    title: "SCTP-aware Link Layer Retransmission Mechanism for Smart-grid Communication Network",
    authors: "S. Zafar, U. Ejaz",
    journal: "Engineering Technology & Applied Science Research, 6(4):1093-1098",
    year: 2016,
    type: "journal",
    abstract: "",
    link: "https://doi.org/10.48084/etasr.685",
    doi: "10.48084/etasr.685",
    citations: null,
    impactFactor: null,
    tags: ["Smart Grid", "SCTP", "Networking"]
  },
  {
    id: 18,
    title: "Remote Heart Beat Monitoring System",
    authors: "S. Shahid, S. Zafar, M. Imam, M. U. Chishtee, H. Ehsan",
    journal: "NFC IEFR Journal of Engineering and Scientific Research, 7(1):5-10",
    year: 2019,
    type: "journal",
    abstract: "",
    link: "http://nijesr.com/ojs/index.php/archive/article/view/247",
    doi: "",
    citations: null,
    impactFactor: null,
    tags: ["Healthcare", "IoT", "Remote Monitoring"]
  },
  {
    id: 19,
    title: "SNS: Architecture for Sensor Network-based Services via Internet Service Provider",
    authors: "Y. Abbas, S. Zafar, A. H. Akbar",
    journal: "Pakistan Journal of Engineering & Applied Sciences, 24:97-109",
    year: 2019,
    type: "journal",
    abstract: "",
    link: "https://journal.uet.edu.pk/ojs_old/index.php/pjeas/article/view/1660/318",
    doi: "",
    citations: null,
    impactFactor: null,
    tags: ["Sensor Networks", "Networking"]
  },
  {
    id: 20,
    title: "Inter-cluster communication in wireless sensor networks",
    authors: "S. Zafar, A. H. Akbar",
    journal: "International Journal of Computer Networks and Communications Security, 5(1):1-6",
    year: 2017,
    type: "journal",
    abstract: "",
    link: "https://www.ijcncs.org/published/volume5/issue1/p1_5-1.pdf",
    doi: "",
    citations: null,
    impactFactor: null,
    tags: ["Wireless Sensor Networks", "Networking"]
  },
  {
    id: 21,
    title: "Comparing AODV and DSR Routing Protocols for Connectivity Restoration in Wireless Sensor Networks",
    authors: "S. Zafar, K. Taj, A. H. Akbar, K. Kim",
    journal: "International Journal of Computer Science and Information Security, 14(9):554-560",
    year: 2016,
    type: "journal",
    abstract: "",
    link: "",
    doi: "",
    citations: null,
    impactFactor: null,
    tags: ["Wireless Sensor Networks", "Routing Protocols"]
  },
  {
    id: 22,
    title: "Internet of Things and machine learning-based Diabetes Management System",
    authors: "M. A. Khan, Z. Nauman, M. Farooq, S. Zafar",
    journal: "2023 International Conference on IT and Industrial Technologies (ICIT 2023), Chinniot-Faisalabad, Pakistan",
    year: 2023,
    type: "conference",
    abstract: "",
    link: "",
    doi: "",
    citations: null,
    impactFactor: null,
    tags: ["IoT", "Machine Learning", "Healthcare"]
  },
  {
    id: 23,
    title: "Blockchain-based Security for Internet of Medical Things Application",
    authors: "T. Ramzan and S. Zafar",
    journal: "2022 International Conference on Cyber Warfare and Security (ICCWS), Islamabad, Pakistan",
    year: 2022,
    type: "conference",
    abstract: "",
    link: "",
    doi: "10.1109/ICCWS56285.2022.9998443",
    citations: null,
    impactFactor: null,
    tags: ["Blockchain", "IoT", "Healthcare"]
  },
  {
    id: 24,
    title: "Propagation Channel Characterization of 28 GHz and 36 GHz Millimeter-Waves for 5G Cellular Networks",
    authors: "S. Zafar and S. Saleem",
    journal: "2022 International Conference on Emerging Trends in Electrical, Control, and Telecommunication Engineering (ETECTE), Lahore, Pakistan",
    year: 2022,
    type: "conference",
    abstract: "",
    link: "",
    doi: "10.1109/ETECTE55893.2022.10007312",
    citations: null,
    impactFactor: null,
    tags: ["5G", "Wireless Communication", "Millimeter Wave"]
  },
  {
    id: 25,
    title: "Internet of Things-based Vehicle Tracking and Monitoring System",
    authors: "S. Jawad, H. Munsif, A. Azam, A. H. Ilahi, S. Zafar",
    journal: "2021 15th International Conference on Open Source Systems and Technologies (ICOSST), Al-Khawarizmi Institute of Computer Science, UET Lahore, Pakistan",
    year: 2021,
    type: "conference",
    abstract: "",
    link: "",
    doi: "10.1109/ICOSST53930.2021.9683883",
    citations: null,
    impactFactor: null,
    tags: ["IoT", "Vehicle Tracking"]
  },
  {
    id: 26,
    title: "SHA-3 Algorithm-based Authentication Scheme for Vehicular Ad-hoc Networks",
    authors: "Iqbal and S. Zafar",
    journal: "2021 2nd Annual International Conference on Cyber Warfare and Security (ICCWS), NCCS, Islamabad, Pakistan",
    year: 2021,
    type: "conference",
    abstract: "",
    link: "",
    doi: "10.1109/ICCWS53234.2021.9703025",
    citations: null,
    impactFactor: null,
    tags: ["SHA-3", "Security", "VANET"]
  },
  {
    id: 27,
    title: "Performance analysis of NarrowBand Internet of Things (NB-IoT) deployment modes",
    authors: "Mahmood, S. Zafar",
    journal: "2019 22nd International Multitopic Conference (INMIC), FAST NU Islamabad, Pakistan",
    year: 2019,
    type: "conference",
    abstract: "",
    link: "https://doi.org/10.1109/INMIC48123.2019.9022748",
    doi: "10.1109/INMIC48123.2019.9022748",
    citations: null,
    impactFactor: null,
    tags: ["NB-IoT", "Wireless Communication"]
  },
  {
    id: 28,
    title: "Performance evaluation of BEEM clustering algorithm in Mobile Wireless Sensor Networks",
    authors: "M. Qasim, S. Zafar",
    journal: "2019 22nd International Multitopic Conference (INMIC), FAST NU Islamabad, Pakistan",
    year: 2019,
    type: "conference",
    abstract: "",
    link: "https://doi.org/10.1109/INMIC48123.2019.9022739",
    doi: "10.1109/INMIC48123.2019.9022739",
    citations: null,
    impactFactor: null,
    tags: ["Clustering", "Wireless Sensor Networks"]
  },
  {
    id: 29,
    title: "BRIDGE: BoRder-node assistance for common Interest-based Diffusion through a Gating mEchanism for collocated WPANs",
    authors: "S. Zafar, A. H. Akbar, M. Amjad, S. Shams, S. A. Chaudhry, J. Seuk, B. Roh, K. H. Kim",
    journal: "Proceedings of 6th International Conference on Emerging Technologies ICET, Islamabad, Pakistan",
    year: 2010,
    type: "conference",
    abstract: "",
    link: "",
    doi: "",
    citations: null,
    impactFactor: null,
    tags: ["WPAN", "Networking", "Diffusion"]
  },
  {
    id: 30,
    title: "Staggered-TCP for parallel split-sessions across multiple proxies in heterogeneous networks",
    authors: "S. Zafar, S. Jabbar, A. H. Akbar, N. M. Sheikh",
    journal: "5th International Conference on Future Information Technology, FutureTech 2010, Busan, South Korea",
    year: 2010,
    type: "conference",
    abstract: "",
    link: "https://doi.org/10.1109/FUTURETECH.2010.5482728",
    doi: "10.1109/FUTURETECH.2010.5482728",
    citations: null,
    impactFactor: null,
    tags: ["TCP", "Networking", "Heterogeneous Networks"]
  },
  {
    id: 31,
    title: "The Compensation of Head Motion Artifacts Using an Infrared Tracking System and an Algorithm in CT (Computerized Tomography) Imaging",
    authors: "S. Zafar, W. Younis, N. M. Sheikh",
    journal: "International Conference on Electrical Engineering, Lahore, Pakistan",
    year: 2007,
    type: "conference",
    abstract: "",
    link: "https://doi.org/10.1109/ICEE.2007.4287347",
    doi: "10.1109/ICEE.2007.4287347",
    citations: null,
    impactFactor: null,
    tags: ["CT Imaging", "Algorithms"]
  },
];

  // Get unique years and types for filters
  const years = ['all', ...Array.from(new Set(publications.map(pub => pub.year)))].sort((a, b) => b - a);
  const types = ['all', ...Array.from(new Set(publications.map(pub => pub.type)))];

  // Filter and sort publications
  const filteredPublications = publications
    .filter(pub => 
      (filterYear === 'all' || pub.year === parseInt(filterYear)) &&
      (filterType === 'all' || pub.type === filterType)
    )
    .sort((a, b) => {
      if (sortBy === 'date') return b.year - a.year || b.citations - a.citations;
      if (sortBy === 'citations') return b.citations - a.citations;
      if (sortBy === 'impact') return (b.impactFactor || 0) - (a.impactFactor || 0);
      return 0;
    });

  // Group publications by year
  const publicationsByYear = filteredPublications.reduce((acc, pub) => {
    if (!acc[pub.year]) {
      acc[pub.year] = [];
    }
    acc[pub.year].push(pub);
    return acc;
  }, {});

  // Get sorted years
  const sortedYears = Object.keys(publicationsByYear).sort((a, b) => b - a);

  // Toggle year expansion
  const toggleYear = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  // Expand all years by default
  useEffect(() => {
    const initiallyExpanded = {};
    sortedYears.forEach(year => {
      initiallyExpanded[year] = true;
    });
    setExpandedYears(initiallyExpanded);
  }, [filterYear, filterType, sortBy]);

  const handlePublicationClick = (link, e) => {
    e.stopPropagation();
    if (link !== "#") {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  const renderPublicationCard = (publication) => {
    return (
      <div 
        key={publication.id} 
        className="publication-card"
        onClick={(e) => handlePublicationClick(publication.link, e)}
      >
        <div className="pub-header">
          <div className="pub-type-badge">
            {publication.type === 'journal' ? 'Journal' : 'Conference'}
          </div>
          <div className="pub-metrics">
            {publication.impactFactor && (
              <span className="impact-factor">
                <i className="fas fa-star"></i>
                IF: {publication.impactFactor}
              </span>
            )}
            <span className="citation-count">
              <i className="fas fa-quote-right"></i>
              {publication.citations}
            </span>
          </div>
        </div>
        
        <h3 className="pub-title">{publication.title}</h3>
        
        <p className="pub-authors">{publication.authors}</p>
        
        <p className="pub-journal">
          <ImportContacts fontSize="small" />
          {publication.journal}
        </p>
        
        <div className="pub-tags">
          {publication.tags.map((tag, index) => (
            <Chip 
              key={index} 
              label={tag} 
              size="small" 
              className="tag-chip"
            />
          ))}
        </div>
        
        <div className="pub-actions">
          <div className="pub-doi">
            
          </div>
          
          {publication.link !== "#" && (
            <button 
              className="pub-link-btn"
              onClick={(e) => handlePublicationClick(publication.link, e)}
            >
              <Article fontSize="small" />
              View Publication
            </button>
          )}
        </div>
        
        <div className="card-glow"></div>
      </div>
    );
  };

  const renderYearSection = (year) => {
    const yearPublications = publicationsByYear[year];
    const isExpanded = expandedYears[year];
    
    return (
      <div key={year} className="year-section">
        <div className="year-header" onClick={() => toggleYear(year)}>
          <h2 className="year-title">{year}</h2>
          <div className="year-stats">
            <span className="pub-count">{yearPublications.length} publication{yearPublications.length !== 1 ? 's' : ''}</span>
            <ExpandMore className={`expand-icon ${isExpanded ? 'expanded' : ''}`} />
          </div>
        </div>
        
        <div className={`year-publications ${isExpanded ? 'expanded' : ''}`}>
          {yearPublications.map(publication => renderPublicationCard(publication))}
        </div>
      </div>
    );
  };

  return (
    <div 
      ref={sectionRef} 
      className={`publications-container ${isVisible ? 'visible' : ''}`}
      id="publications"
    >
      {/* Background Image with Filter */}
      <div className="background-image"></div>
      
      <div className="publications-header">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
          }}
          className="publications-title"
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
            Publications
          </Box>
        </Typography>
        <p className="publications-subtitle">Cutting-edge research contributing to technological advancement</p>
      </div>

      <div className="publications-content">
        <div className="filters-section">
          <div className="filters-header">
            <FilterList />
            <span>Filter Publications</span>
          </div>
          
          <div className="filter-controls">
            <div className="filter-group">
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel id="year-filter-label" sx={{ color: '#9b5cff' }}>Year</InputLabel>
                <Select
                  labelId="year-filter-label"
                  value={filterYear}
                  label="Year"
                  onChange={(e) => setFilterYear(e.target.value)}
                  sx={{
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(155, 92, 255, 0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(0, 229, 255, 0.5)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00e5ff',
                    },
                    '& .MuiSvgIcon-root': {
                      color: '#9b5cff',
                    },
                  }}
                >
                  {years.map(year => (
                    <MenuItem key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="filter-group">
              <FormControl size="small" sx={{ minWidth: 140 }}>
                <InputLabel id="type-filter-label" sx={{ color: '#9b5cff' }}>Type</InputLabel>
                <Select
                  labelId="type-filter-label"
                  value={filterType}
                  label="Type"
                  onChange={(e) => setFilterType(e.target.value)}
                  sx={{
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(155, 92, 255, 0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(0, 229, 255, 0.5)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00e5ff',
                    },
                    '& .MuiSvgIcon-root': {
                      color: '#9b5cff',
                    },
                  }}
                >
                  {types.map(type => (
                    <MenuItem key={type} value={type}>
                      {type === 'all' ? 'All Types' : (type === 'journal' ? 'Journal Articles' : 'Conference Papers')}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div className="filter-group">
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <InputLabel id="sort-filter-label" sx={{ color: '#9b5cff' }}>Sort By</InputLabel>
                <Select
                  labelId="sort-filter-label"
                  value={sortBy}
                  label="Sort By"
                  onChange={(e) => setSortBy(e.target.value)}
                  sx={{
                    color: 'white',
                    '.MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(155, 92, 255, 0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(0, 229, 255, 0.5)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00e5ff',
                    },
                    '& .MuiSvgIcon-root': {
                      color: '#9b5cff',
                    },
                  }}
                >
                  <MenuItem value="date">Date</MenuItem>
                  <MenuItem value="citations">Citations</MenuItem>
                  <MenuItem value="impact">Impact Factor</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>

        <div className="publications-list">
          {sortedYears.length > 0 ? (
            sortedYears.map(year => renderYearSection(year))
          ) : (
            <div className="no-results">
              <i className="fas fa-search"></i>
              <p>No publications found matching your filters</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        /* Publications Component Styles */
        .publications-container {
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
          background-image: url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80');
          background-size: cover;
          background-position: center;
          opacity: 0.1;
          z-index: 0;
          filter: sepia(40%) saturate(500%) hue-rotate(200deg) brightness(70%);
        }
        
        .publications-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 20% 30%, rgba(0, 229, 255, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(155, 92, 255, 0.1) 0%, transparent 40%);
          pointer-events: none;
          z-index: 1;
        }
        
        .publications-container.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .publications-header {
          text-align: center;
          margin-bottom: 4rem;
          position: relative;
          z-index: 2;
          padding-top: 2rem;
        }
        
        .publications-title {
          margin-bottom: 0.5rem;
          position: relative;
          display: inline-block;
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .publications-subtitle {
          font-size: 1.2rem;
          color: #9b5cff;
          margin-top: 1.5rem;
          font-weight: 400;
        }
        
        .publications-content {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        
        .filters-section {
          background: rgba(13, 17, 23, 0.7);
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 3rem;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(155, 92, 255, 0.2);
        }
        
        .filters-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          color: #00e5ff;
          font-weight: 600;
        }
        
        .filter-controls {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }
        
        .filter-group {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .publications-list {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        
        .year-section {
          background: rgba(13, 17, 23, 0.5);
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid rgba(155, 92, 255, 0.2);
        }
        
        .year-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background: rgba(155, 92, 255, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .year-header:hover {
          background: rgba(155, 92, 255, 0.15);
        }
        
        .year-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #00e5ff;
          margin: 0;
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .year-stats {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        
        .pub-count {
          color: #9b5cff;
          font-weight: 600;
        }
        
        .expand-icon {
          color: #00e5ff;
          transition: transform 0.3s ease;
        }
        
        .expand-icon.expanded {
          transform: rotate(180deg);
        }
        
        .year-publications {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
          gap: 1.5rem;
          padding: 1.5rem;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease, padding 0.5s ease;
        }
        
        .year-publications.expanded {
          max-height: 5000px;
          padding: 1.5rem;
        }
        
        .publication-card {
          background: rgba(18, 24, 33, 0.7);
          border-radius: 12px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          border: 1px solid rgba(155, 92, 255, 0.2);
          backdrop-filter: blur(10px);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        
        .publication-card:hover {
          border-color: rgba(0, 229, 255, 0.4);
          background: rgba(18, 24, 33, 0.9);
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
        
        .pub-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        
        .pub-type-badge {
          font-size: 0.75rem;
          font-weight: 700;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          background: linear-gradient(90deg, rgba(0, 229, 255, 0.15), rgba(0, 229, 255, 0.25));
          color: #00e5ff;
          border: 1px solid rgba(0, 229, 255, 0.3);
        }
        
        .pub-metrics {
          display: flex;
          gap: 0.5rem;
        }
        
        .citation-count, .impact-factor {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.2rem 0.6rem;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.1);
        }
        
        .citation-count {
          color: #9b5cff;
        }
        
        .impact-factor {
          color: #00e5ff;
        }
        
        .pub-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 0.8rem 0;
          line-height: 1.4;
          font-family: 'Space Grotesk', sans-serif;
        }
        
        .pub-authors {
          color: #9b5cff;
          font-weight: 500;
          margin-bottom: 0.8rem;
          font-size: 0.9rem;
          line-height: 1.4;
        }
        
        .pub-journal {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #00e5ff;
          font-style: italic;
          margin-bottom: 1rem;
          font-size: 0.9rem;
          font-weight: 500;
        }
        
        .pub-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.2rem;
        }
        
        .tag-chip {
          background: rgba(155, 92, 255, 0.15) !important;
          color: #9b5cff !important;
          font-size: 0.7rem !important;
          height: 22px !important;
        }
        
        .pub-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .pub-doi {
          font-size: 0.8rem;
          color: #888;
          font-family: monospace;
        }
        
        .pub-link-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(90deg, rgba(0, 229, 255, 0.15), rgba(155, 92, 255, 0.15));
          border: 1px solid rgba(155, 92, 255, 0.3);
          border-radius: 8px;
          color: #ffffffff;
          font-weight: 600;
          font-size: 0.8rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .pub-link-btn:hover {
          background: linear-gradient(90deg, rgba(0, 229, 255, 0.25), rgba(155, 92, 255, 0.25));
          color: #00e5ff;
          transform: translateY(-2px);
        }
        
        .card-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          box-shadow: 0 0 0 rgba(0, 229, 255, 0.3);
          opacity: 0;
          transition: all 0.4s ease;
          z-index: -1;
        }
        
        .publication-card:hover .card-glow {
          box-shadow: 0 0 20px rgba(0, 229, 255, 0.2);
          opacity: 1;
        }
        
        .no-results {
          text-align: center;
          padding: 3rem;
          color: #9b5cff;
          font-size: 1.1rem;
          background: rgba(13, 17, 23, 0.7);
          border-radius: 12px;
          border: 1px solid rgba(155, 92, 255, 0.2);
        }
        
        .no-results i {
          font-size: 2rem;
          margin-bottom: 1rem;
          display: block;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .publications-container {
            padding: 5rem 1rem 3rem;
          }
          
          .publications-header {
            margin-bottom: 3rem;
            padding-top: 1rem;
          }
          
          .filter-controls {
            flex-direction: column;
            align-items: stretch;
          }
          
          .year-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .year-publications {
            grid-template-columns: 1fr;
          }
          
          .pub-actions {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
          
          .pub-link-btn {
            align-self: flex-end;
          }
        }
      `}</style>
    </div>
  );
};

export default PublicationsComponent;
