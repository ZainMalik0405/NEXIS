import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import LanRoundedIcon from "@mui/icons-material/LanRounded";
import SensorsRoundedIcon from "@mui/icons-material/SensorsRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import { motion } from "framer-motion";

export default function ResearchAreas() {
  const areas = [
    {
      icon: <LanRoundedIcon sx={{ fontSize: 32 }} />,
      title: "Computer Networking",
      text: "Advanced research in network systems, wireless technologies, and secure communication protocols.",
    },
    {
      icon: <SensorsRoundedIcon sx={{ fontSize: 32 }} />,
      title: "Internet of Things (IoT)",
      text: "Innovative IoT solutions for smart environments, sensor networks, and intelligent automation.",
    },
    {
      icon: <BoltRoundedIcon sx={{ fontSize: 32 }} />,
      title: "Smart Energy Systems",
      text: "AI-driven solutions for energy optimization, renewable integration, and grid reliability.",
    },
    {
      icon: <LocalHospitalRoundedIcon sx={{ fontSize: 32 }} />,
      title: "Healthcare Informatics",
      text: "IoT and AI solutions for patient care, predictive analytics, and healthcare management.",
    },
  ];

  return (
    <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }} // 20% visible triggers animation
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#06070b",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Heading */}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 700,
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            color: "#fff",
            mb: 5,
          }}
        >
          Our{" "}
          <Box
            component="span"
            sx={{
              background: "linear-gradient(90deg, #00e5ff, #9b5cff)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Research Areas
          </Box>
        </Typography>

        {/* Horizontal scroll on mobile */}
        <Grid
          container
          spacing={4}
          wrap="nowrap"
          sx={{
            overflowX: { xs: "auto", md: "visible" },
            pb: { xs: 1, md: 0 },
          }}
        >
          {areas.map((area, idx) => (
            <Grid
              item
              key={idx}
              xs="auto"
              sx={{
                flex: "1 1 0",
                minWidth: { xs: 200, md: "auto" },
              }}
            >
              <ResearchCard {...area} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
    </motion.div>
  );
}

function ResearchCard({ icon, title, text }) {
  return (
    <Stack
      spacing={2}
      sx={{
        p: 3,
        borderRadius: 3,
        bgcolor: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "#fff",
        textAlign: "center",
        height: "100%",
        transition: "all 0.4s ease",
        position: "relative",
        overflow: "hidden",
        whiteSpace: "normal",
        wordBreak: "break-word",

        // Gradient overlay
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(145deg, rgba(0,229,255,0.08), rgba(155,92,255,0.08))",
          opacity: 0,
          transition: "opacity 0.4s ease",
          zIndex: 0,
        },

        "&:hover": {
          transform: "translateY(-8px) scale(1.03)",
          borderColor: "rgba(0,229,255,0.5)",
          boxShadow: "0 10px 28px rgba(0, 229, 255, 0.25)",
        },

        "&:hover::before": {
          opacity: 1,
        },
      }}
    >
      <Box
        sx={{
          color: "#00e5ff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.4s ease, color 0.3s ease",
          zIndex: 1,
          "&:hover": {
            transform: "scale(1.15) rotate(5deg)",
            color: "#9b5cff",
          },
        }}
      >
        {icon}
      </Box>

      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          zIndex: 1,
          position: "relative",
          transition: "color 0.3s ease",
          "&:hover": {
            color: "#00e5ff",
          },
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          color: "text.secondary",
          fontSize: "0.95rem",
          lineHeight: 1.5,
          whiteSpace: "normal",
          wordBreak: "break-word",
          zIndex: 1,
          position: "relative",
        }}
      >
        {text}
      </Typography>
    </Stack>
  );
}
