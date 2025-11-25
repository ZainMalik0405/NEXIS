import React, { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  TextField,
  Button,
  Alert,
  Snackbar
} from "@mui/material";
import { motion } from "framer-motion";
import video from "../assets/contact.mp4";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [alert, setAlert] = useState({ open: false, message: "", severity: "success" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setAlert({
        open: true,
        message: "Please fill in all fields",
        severity: "error"
      });
      return;
    }

    // Format the message for WhatsApp
    const whatsappMessage = `
*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Message:* ${formData.message}

*Sent via Website Contact Form*
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp URL with phone number and message
    const whatsappUrl = `https://wa.me/923014878079?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    setAlert({
      open: true,
      message: "Opening WhatsApp with your message...",
      severity: "success"
    });

    // Optional: Reset form after submission
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };

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
      {/* Alert Snackbar */}
      <Snackbar 
        open={alert.open} 
        autoHideDuration={6000} 
        onClose={handleCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseAlert} 
          severity={alert.severity}
          sx={{ width: '100%' }}
        >
          {alert.message}
        </Alert>
      </Snackbar>

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
              we'll connect via WhatsApp.
            </Typography>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
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
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                required
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
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                required
                type="email"
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
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
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
                Send via WhatsApp
              </Button>

              {/* WhatsApp Info */}
              <Typography
                variant="body2"
                sx={{
                  color: "rgba(255,255,255,0.6)",
                  textAlign: "center",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  mt: 1,
                }}
              >
                Your message will open in WhatsApp to send to Our Director
              </Typography>
            </Stack>
          </motion.form>
        </Stack>
      </Container>
    </Box>
  );
}
