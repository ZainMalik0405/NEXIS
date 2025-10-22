import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography
} from "@mui/material";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import EmojiObjectsRoundedIcon from "@mui/icons-material/EmojiObjectsRounded";
import { motion } from "framer-motion";

export default function CoreValues() {
  const values = [
    {
      icon: <AutoAwesomeRoundedIcon sx={{ fontSize: 32 }} />,
      title: "Innovation",
      text: "Pushing boundaries with cutting-edge research and revolutionary breakthroughs.",
    },
    {
      icon: <GroupsRoundedIcon sx={{ fontSize: 32 }} />,
      title: "Collaboration",
      text: "Fostering interdisciplinary partnerships to tackle complex global challenges.",
    },
    {
      icon: <VerifiedRoundedIcon sx={{ fontSize: 32 }} />,
      title: "Excellence",
      text: "Maintaining the highest standards in research methodology and scientific integrity.",
    },
    {
      icon: <EmojiObjectsRoundedIcon sx={{ fontSize: 32 }} />,
      title: "Impact",
      text: "Creating meaningful solutions that benefit society and advance human knowledge.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
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
          {/* Heading */}
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
              Core Values
            </Box>
          </Typography>

          {/* Cards Row */}
          <Grid
            container
            spacing={4}
            wrap="nowrap"
            sx={{
              overflowX: { xs: "auto", md: "visible" },
              pb: { xs: 1, md: 0 },
            }}
          >
            {values.map((value, idx) => (
              <Grid
                item
                key={idx}
                xs="auto"
                sx={{
                  flex: "1 1 0",
                  minWidth: { xs: 200, md: "auto" },
                }}
              >
                <ValueCard {...value} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </motion.div>
  );
}

function ValueCard({ icon, title, text }) {
  return (
    <Stack
      spacing={2}
      sx={{
        p: 3,
        borderRadius: 3,
        background:
          "linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.05))",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "#fff",
        textAlign: "center",
        height: "100%",
        transition: "all 0.4s ease",
        position: "relative",
        overflow: "hidden",
        whiteSpace: "normal",
        wordBreak: "break-word",

        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(120deg, rgba(0,229,255,0.15), rgba(155,92,255,0.15))",
          opacity: 0,
          transition: "opacity 0.4s ease",
          zIndex: 0,
        },

        "&:hover": {
          transform: "translateY(-8px) rotateX(4deg)",
          borderColor: "rgba(0,229,255,0.4)",
          boxShadow: "0 12px 28px rgba(0, 229, 255, 0.15)",
        },
        "&:hover::before": {
          opacity: 1,
        },
      }}
    >
      {/* Icon */}
      <Box
        sx={{
          color: "#00e5ff",
          zIndex: 1,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "transform 0.4s ease, color 0.3s ease",
          "&:hover": {
            transform: "scale(1.15) rotate(5deg)",
            color: "#9b5cff",
            filter:
              "drop-shadow(0 0 6px rgba(0,229,255,0.4)) drop-shadow(0 0 12px rgba(155,92,255,0.3))",
          },
        }}
      >
        {icon}
      </Box>

      {/* Title */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          wordBreak: "break-word",
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

      {/* Text */}
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
