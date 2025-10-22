import React from "react";
import { Box, Container, Stack, Typography, TextField, Button } from "@mui/material";
import { motion } from "framer-motion";
import bgImage from "../assets/newsletter.png"; // <-- your image

export default function NewsletterSection() {
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
          py: { xs: 8, md: 10 },
          position: "relative",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // subtle parallax feel
        }}
      >
        {/* Brand color + dark overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: `
              linear-gradient(
                120deg,
                rgba(0, 208, 255, 0.35),
                rgba(125, 75, 204, 0.67)
              ),
              rgba(0,0,0,0.75)
            `,
            backgroundBlendMode: "overlay",
            zIndex: 0,
          }}
        />

        {/* Radial glow accent */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at center, rgba(0,229,255,0.08), transparent 60%)",
            zIndex: 0,
          }}
        />

        <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
          <Stack spacing={3} alignItems="center" textAlign="center">
            {/* Heading */}
            <Typography
              component={motion.h2}
              initial={{ opacity: 0, y: -12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                color: "#fff",
              }}
            >
              Stay{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #00e5ff, #9b5cff)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Connected
              </Box>
            </Typography>

            {/* Subtext */}
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.8)",
                maxWidth: 500,
                lineHeight: 1.6,
              }}
            >
              Join our mailing list to receive the latest research updates, project
              launches, and innovation insights from NEXIS.
            </Typography>

            {/* Form */}
            <Stack
              component="form"
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ width: "100%", mt: 1 }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter your email"
                sx={{
                  input: {
                    color: "#fff",
                    bgcolor: "rgba(255,255,255,0.04)",
                    borderRadius: "8px",
                    px: 2,
                  },
                  fieldset: {
                    borderColor: "rgba(255,255,255,0.15) !important",
                  },
                  "&:hover fieldset": {
                    borderColor: "#00e5ff !important",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#9b5cff !important",
                  },
                }}
              />
              <Button
                variant="contained"
                size="large"
                sx={{
                  px: 4,
                  background: "linear-gradient(90deg, #00e5ffb2, #9b5cff)",
                  fontWeight: 600,
                  textTransform: "none",
                  "&:hover": {
                    background: "linear-gradient(90deg, #00cce5, #8a4fff)",
                  },
                }}
              >
                Subscribe
              </Button>
            </Stack>

            {/* Disclaimer */}
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.55)", mt: 1 }}
            >
              We respect your privacy. Unsubscribe at any time.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </motion.div>
  );
}
