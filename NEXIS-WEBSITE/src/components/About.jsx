import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Chip,
  Divider,
} from "@mui/material";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import HubRoundedIcon from "@mui/icons-material/HubRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }} // 20% visible triggers animation
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
    <Box
      component="section"
      id="about"
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: "#06070b",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 0 } }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
        >
          {/* LEFT: Text */}
          <Box flex={1} minWidth={0}>
            <Stack spacing={3}>
              {/* Intro Tag */}
              <Stack
                direction="row"
                spacing={1.5}
                alignItems="center"
                flexWrap="wrap"
              >
                <Chip
                  label="About NEXIS"
                  sx={{
                    bgcolor: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#d7f9ff",
                    fontWeight: 600,
                    letterSpacing: "0.2px",
                    backdropFilter: "blur(6px)",
                  }}
                />
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: 14,
                    letterSpacing: "0.2px",
                    flexShrink: 1,
                    wordBreak: "break-word",
                  }}
                >
                  Powering Innovation. Connecting the Future.
                </Typography>
              </Stack>

              {/* Heading */}
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: "1.9rem", sm: "2.2rem", md: "2.6rem" },
                  lineHeight: 1.15,
                  background: "linear-gradient(90deg, #00e5ff, #9b5cff)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textShadow: "0 2px 8px rgba(0,0,0,0.5)",
                  wordBreak: "break-word",
                }}
              >
                Transforming Networks, Energy & Healthcare Systems
              </Typography>

              {/* Paragraph */}
              <Typography
                sx={{
                  color: "text.secondary",
                  fontSize: "1.05rem",
                  lineHeight: 1.65,
                  wordBreak: "break-word",
                }}
              >
                NEXIS, founded in 2012 by Dr. Saima Zafar as the Smart Networking Research Group,
                has grown into a leading research group in networking, IoT, AI-driven energy systems,
                and healthcare informatics. Its work focuses on secure communication, smart automation,
                energy optimization, and AI-powered healthcare solutions for improved care and management.
              </Typography>

              {/* Core domains */}
              <Stack spacing={2} pt={1}>
                <Domain
                  icon={<HubRoundedIcon />}
                  title="Advanced Networking"
                  text="IoT, SDN, and edge orchestration built for reliability."
                />
                <Domain
                  icon={<BoltRoundedIcon />}
                  title="Smart Energy"
                  text="Forecasting, optimization, and real-time control loops."
                />
                <Domain
                  icon={<HealthAndSafetyRoundedIcon />}
                  title="Healthcare Informatics"
                  text="Privacy-preserving pipelines and secure data exchange."
                />
              </Stack>

              {/* Stats with animated counters - Fixed for very small screens */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 2, sm: 3 }}
                flexWrap="wrap"
                divider={
                  <Divider
                    orientation="vertical"
                    flexItem
                    sx={{
                      display: { xs: "none", sm: "block" },
                      borderColor: "rgba(255,255,255,0.12)",
                    }}
                  />
                }
                pt={2}
              >
                <Stat number={12} suffix="+" label="Active Projects" />
                <Stat number={8} suffix="+" label="Industry Partners" />
                <Stat number={30} suffix="+" label="Publications" />
              </Stack>
            </Stack>
          </Box>

          {/* RIGHT: Image */}
          <Box
            flex={1}
            minWidth={0}
            sx={{
              width: "100%",
              minHeight: 240,
              height: "100%",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: "0 0 40px rgba(72, 173, 206, 0.51)",
              flexShrink: 0,
            }}
          >
            <img
              src="https://cdn.pixabay.com/photo/2023/11/16/09/45/quantum-8392053_1280.jpg"
              alt="Dark Mode Network Diagram"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "inherit",
                display: "block",
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
    </motion.div>
  );
}

function Domain({ icon, title, text }) {
  return (
    <Stack direction="row" spacing={1.5} alignItems="flex-start">
      {icon}
      <Stack spacing={0.3}>
        <Typography sx={{ fontWeight: 700, color: "#fff", wordBreak: "break-word" }}>
          {title}
        </Typography>
        <Typography sx={{ color: "text.secondary", wordBreak: "break-word" }}>
          {text}
        </Typography>
      </Stack>
    </Stack>
  );
}

function Stat({ number, suffix, label }) {
  return (
    <Stack 
      spacing={0.2} 
      minWidth={100}
      sx={{
        // Fix for very small screens
        minWidth: { xs: '80px', sm: '100px' },
        textAlign: { xs: 'center', sm: 'left' }
      }}
    >
      <Typography
        sx={{
          fontFamily: "Space Grotesk, sans-serif",
          fontSize: { xs: "1.4rem", sm: "1.6rem" },
          fontWeight: 700,
          background: "linear-gradient(90deg, #00e5ff, #9b5cff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          wordBreak: "break-word",
        }}
      >
        <CountUp
          start={0}
          end={number}
          duration={2}
          suffix={suffix}
          enableScrollSpy
          scrollSpyOnce
        />
      </Typography>
      <Typography sx={{ 
        color: "text.secondary", 
        fontSize: { xs: 12, sm: 14 },
        wordBreak: "break-word" 
      }}>
        {label}
      </Typography>
    </Stack>
  );
}