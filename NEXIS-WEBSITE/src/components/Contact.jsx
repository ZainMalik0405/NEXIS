import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import video from "../assets/contact.mp4";

export default function Contact() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        position: "relative",
        overflow: "hidden",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Video Background */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        playsInline
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          filter: "brightness(0.4) saturate(1.2) sepia(30%) hue-rotate(200deg)",
        }}
      >
        <source src={video} type="video/mp4" />
      </Box>

      {/* Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(10,15,25,0.9) 100%)",
          zIndex: 1,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 2 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Get in{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #00e5ff, #9b5cff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Touch
              </Box>
            </Typography>
            <Typography
              sx={{
                color: "#9b5cff",
                maxWidth: 600,
                mt: 2,
                fontSize: "1.2rem",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
              }}
            >
              Have a question or want to collaborate? Fill out the form below and
              we'll get back to you shortly.
            </Typography>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              width: "100%",
              background: "rgba(13, 17, 23, 0.85)",
              border: "1px solid rgba(155, 92, 255, 0.2)",
              borderRadius: "12px",
              padding: "2.5rem",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6)",
            }}
          >
            <Stack spacing={3}>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  style: { 
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "'Inter', sans-serif",
                  },
                }}
                sx={{
                  input: { 
                    color: "#fff",
                    fontFamily: "'Inter', sans-serif",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#9b5cff",
                      boxShadow: "0 0 10px rgba(155, 92, 255, 0.3)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00e5ff",
                      boxShadow: "0 0 15px rgba(0, 229, 255, 0.4)",
                    },
                  },
                }}
              />
              <TextField
                label="Email Address"
                variant="outlined"
                fullWidth
                InputLabelProps={{
                  style: { 
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "'Inter', sans-serif",
                  },
                }}
                sx={{
                  input: { 
                    color: "#fff",
                    fontFamily: "'Inter', sans-serif",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#9b5cff",
                      boxShadow: "0 0 10px rgba(155, 92, 255, 0.3)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00e5ff",
                      boxShadow: "0 0 15px rgba(0, 229, 255, 0.4)",
                    },
                  },
                }}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                InputLabelProps={{
                  style: { 
                    color: "rgba(255,255,255,0.7)",
                    fontFamily: "'Inter', sans-serif",
                  },
                }}
                sx={{
                  textarea: { 
                    color: "#fff",
                    fontFamily: "'Inter', sans-serif",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "rgba(255,255,255,0.1)",
                      borderRadius: "8px",
                    },
                    "&:hover fieldset": {
                      borderColor: "#9b5cff",
                      boxShadow: "0 0 10px rgba(155, 92, 255, 0.3)",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#00e5ff",
                      boxShadow: "0 0 15px rgba(0, 229, 255, 0.4)",
                    },
                  },
                }}
              />

              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  alignSelf: "flex-start",
                  px: 4,
                  py: 1.2,
                  fontWeight: 700,
                  textTransform: "none",
                  fontFamily: "'Inter', sans-serif",
                  background: "linear-gradient(90deg, #00e5ff, #9b5cff)",
                  color: "#000",
                  borderRadius: "8px",
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.5)",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  position: "relative",
                  overflow: "hidden",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-100%",
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                    transition: "left 0.6s ease",
                  },
                  "&:hover": {
                    background: "linear-gradient(90deg, #9b5cff, #00e5ff)",
                    boxShadow: "0 8px 20px rgba(155, 92, 255, 0.6)",
                    transform: "translateY(-3px)",
                    "&::before": {
                      left: "100%",
                    },
                  },
                }}
              >
                Send Message
              </Button>
            </Stack>
          </motion.form>
        </Stack>
      </Container>
    </Box>
  );
}