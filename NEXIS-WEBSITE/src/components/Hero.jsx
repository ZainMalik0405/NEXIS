import React from "react";
import { Box, Container, Typography, Button, Stack } from "@mui/material";
import heroVisual from "../assets/3.mp4"; // background video
import logo from "../assets/nexis.png"; // logo file
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#000",
          overflow: "hidden",
        }}
      >
        {/* BACKGROUND VIDEO */}
        <Box sx={{ position: "absolute", inset: 0, zIndex: 0 }}>
  <video
    autoPlay
    muted
    loop
    playsInline
    src={heroVisual}
    style={{
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      filter: "brightness(1) saturate(1)",
    }}
  />
  {/* Gradient overlay */}
  <Box
    sx={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(120deg, rgba(0,229,255,0.35), rgba(155,92,255,0.35))",
      mixBlendMode: "soft-light", // try 'soft-light' or 'screen' for different effects
      pointerEvents: "none",
    }}
  />
</Box>


        {/* OVERLAY GRADIENT */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 40%, transparent 100%)",
            zIndex: 1,
          }}
        />

        {/* CONTENT */}
<Container
  sx={{
    position: "relative",
    zIndex: 2,
    maxWidth: "lg",
    color: "#fff",
  }}
>
  <Stack
    direction="column" // always column so it centers nicely
    alignItems="center"
    justifyContent="center"
    spacing={3}
    sx={{ textAlign: "center", minHeight: "100vh" }} // full height center
  >
    <Typography
      variant="h1"
      sx={{
        fontWeight: 900,
        fontSize: { xs: "2.4rem", md: "3.5rem" },
        lineHeight: 1.1,
        background: "linear-gradient(90deg, #00e5ffba, #9b5cff)",
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      NEXIS - Networks, Energy & Healthcare Informatics Systems
    </Typography>

    <Typography sx={{ fontSize: "1.1rem", color: "#ccc", maxWidth: 800 }}>
      Founded on the principles of scientific excellence and innovation,
      Nexis Research Lab stands at the forefront of technological
      advancement, driving discoveries that shape our future. Advancing
      research in computer networks, IoT, AI-driven smart energy systems,
      and healthcare informatics since 2012.
    </Typography>

    <Stack direction="row" spacing={2} justifyContent="center">
      <Button
      variant="contained"
      onClick={() => navigate("/projects")}
      sx={{
        px: 3,
        py: 1.2,
        fontWeight: 700,
        borderRadius: 2,
        background: "linear-gradient(90deg, cyan, purple)",
        color: "#000",
        "&:hover": {
          background: "linear-gradient(90deg, rgba(0, 191, 255, 1), #b07cff)",
          boxShadow: "0 0 20px rgba(0,229,255,0.5)",
        },
      }}
    >
      Explore Projects
    </Button>

      <Button
        variant="outlined"
        onClick={() => navigate("/contact")}
        sx={{
          px: 3,
          py: 1.2,
          fontWeight: 700,
          borderRadius: 2,
          color: "cyan",
          borderColor: "rgba(0,229,255,0.7)",
          "&:hover": {
            bgcolor: "rgba(0,229,255,0.1)",
            borderColor: "cyan",
            color: "#fff",
          },
        }}
      >
        Contact Us
      </Button>
    </Stack>
  </Stack>
</Container>

      </Box>
    </motion.div>
  );
}
