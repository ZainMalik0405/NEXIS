import React, { useEffect } from 'react';
import {
  Box,
  Grid,
  Stack,
  Typography,
  Link as MuiLink,
  useTheme,
  IconButton
} from "@mui/material";
import { LinkedIn, Email } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import footerBg from "../assets/footer.jpg";
import { motion } from "framer-motion";

// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function FooterHeading({ children }) {
  return (
    <Typography
      variant="h6"
      sx={{
        fontWeight: 700,
        mb: 2,
        position: "relative",
        display: "inline-block",
        color: "white",
        fontFamily: "'Space Grotesk', sans-serif",
        "&::after": {
          content: '""',
          position: "absolute",
          left: 0,
          bottom: -6,
          width: "100%",
          height: "3px",
          background: "linear-gradient(90deg, #00e5ff, #8a5cff)",
          borderRadius: "2px",
        },
      }}
    >
      {children}
    </Typography>
  );
}

function FooterLink({ text, to = "#" }) {
  const handleClick = () => {
    // Scroll to top immediately when link is clicked
    window.scrollTo(0, 0);
  };

  return (
    <MuiLink
      component={Link}
      to={to}
      onClick={handleClick}
      underline="none"
      sx={{
        color: "rgba(255,255,255,0.75)",
        fontSize: "0.95rem",
        letterSpacing: "0.2px",
        transition: "all 0.3s ease",
        fontFamily: "'Inter', sans-serif",
        "&:hover": {
          background: "linear-gradient(90deg, #00e5ff, #8a5cff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transform: "translateX(5px)",
        },
      }}
    >
      {text}
    </MuiLink>
  );
}

function FooterColumn({ title, links, isPlain = false, md = 2.5, linkPaths = [] }) {
  return (
    <Grid item xs={12} sm={6} md={md} textAlign={{ xs: "center", md: "left" }}>
      <FooterHeading>{title}</FooterHeading>
      <Stack spacing={1.6} alignItems={{ xs: "center", md: "flex-start" }}>
        {links.map((item, i) =>
          isPlain ? (
            <Typography
              key={i}
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.75)",
                transition: "all 0.3s ease",
                fontFamily: "'Inter', sans-serif",
                "&:hover": {
                  background: "linear-gradient(90deg, #00e5ff, #8a5cff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                },
              }}
            >
              {item}
            </Typography>
          ) : (
            <FooterLink key={i} text={item} to={linkPaths[i] || "#"} />
          )
        )}
      </Stack>
    </Grid>
  );
}

export default function Footer() {
  const theme = useTheme();

  const quickLinks = [
    { text: "Home", path: "/" },
    { text: "Our Projects", path: "/projects" },
    { text: "Our Team", path: "/team" },
    { text: "Publications", path: "/publications" },
    { text: "Career Opportunities", path: "/careers" },
    { text: "Contact Us", path: "/contact" }
  ];

  const researchAreas = [
    "Quantum Computing",
    "Neural Interfaces",
    "Sustainable Energy",
    "AI Ethics",
    "Nanotechnology",
    "Climate Modeling"
  ];

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/saima-zafar-6b8b1016', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:saima.zafar@nu.edu.pk';
  };

  return (
    <>
      <ScrollToTop />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Box
          component="footer"
          sx={{
            position: "relative",
            backgroundImage: `url(${footerBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            color: "white",
            pt: { xs: 6, md: 10 },
            pb: { xs: 4, md: 6 },
            px: { xs: 3, md: 6, lg: 10 },
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              background: `
                linear-gradient(
                  120deg,
                  rgba(0, 177, 247, 0.53),
                  rgba(131, 70, 229, 0.63)
                ),
                rgba(0,0,0,0.7)
              `,
              backgroundBlendMode: "overlay",
              zIndex: 0,
            },
            "& > *": {
              position: "relative",
              zIndex: 1,
            },
          }}
        >
          <Grid
            container
            spacing={{ xs: 4, sm: 6, md: 8 }}
            justifyContent="space-between"
            sx={{
              maxWidth: "1000px",
              mx: "auto",
            }}
          >
            {/* Brand / Description */}
            <Grid item xs={12} md={3} textAlign={{ xs: "center", md: "left" }}>
              <Typography 
                variant="h5" 
                fontWeight={800} 
                mb={2}
                fontFamily="'Space Grotesk', sans-serif"
              >
                NEXIS
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.75)",
                  maxWidth: "340px",
                  mx: { xs: "auto", md: 0 },
                  lineHeight: 1.7,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Driving discoveries that shape the future in networking, energy, and
                healthcare informatics since 2012.
              </Typography>
            </Grid>

            {/* Quick Links */}
            <FooterColumn
              title="Quick Links"
              links={quickLinks.map(link => link.text)}
              linkPaths={quickLinks.map(link => link.path)}
              md={2.5}
            />

            {/* Research Areas */}
            <FooterColumn
              title="Research Areas"
              links={researchAreas}
              isPlain
              md={3}
            />

            {/* Connect */}
            <Grid item xs={12} sm={6} md={2.5} textAlign={{ xs: "center", md: "left" }}>
              <FooterHeading>Connect</FooterHeading>
              <Stack 
                direction="row" 
                spacing={2} 
                justifyContent={{ xs: "center", md: "flex-start" }}
              >
                <IconButton
                  onClick={handleLinkedInClick}
                  sx={{
                    color: "rgba(255,255,255,0.75)",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(135deg, #0077b5, #00a0dc)",
                      color: "white",
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 25px rgba(0, 119, 181, 0.3)",
                    },
                  }}
                >
                  <LinkedIn />
                </IconButton>
                <IconButton
                  onClick={handleEmailClick}
                  sx={{
                    color: "rgba(255,255,255,0.75)",
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      background: "linear-gradient(135deg, #ea4335, #d93025)",
                      color: "white",
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 25px rgba(234, 67, 53, 0.3)",
                    },
                  }}
                >
                  <Email />
                </IconButton>
              </Stack>
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.6)",
                  mt: 2,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                }}
              >
                Get in touch with us
              </Typography>
            </Grid>
          </Grid>

          {/* Bottom Bar */}
          <Box
            sx={{
              borderTop: `1px solid rgba(255,255,255,0.2)`,
              mt: 6,
              pt: 3,
              textAlign: "center",
            }}
          >
            <Typography 
              variant="caption" 
              sx={{ 
                color: "rgba(255,255,255,0.6)",
                fontFamily: "'Inter', sans-serif",
              }}
            >
              © {new Date().getFullYear()} NEXIS Research Lab. All rights reserved.
            </Typography>
          </Box>
        </Box>
      </motion.div>
    </>
  );
}