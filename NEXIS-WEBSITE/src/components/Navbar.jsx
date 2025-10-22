import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Stack,
  Button,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import logo from "../assets/image.png";

const NavLink = styled(Button)(({ theme, active }) => ({
  position: "relative",
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: "0.95rem",
  letterSpacing: "0.3px",
  color: theme.palette.text.primary,
  background: "transparent",
  padding: "6px 0",
  textTransform: "none",
  "&::after": {
    content: '""',
    position: "absolute",
    left: 0,
    bottom: 0,
    height: 2,
    width: active ? "100%" : 0,
    background: "linear-gradient(90deg, #00e5ff, #9b5cff)",
    transition: "width 0.3s ease",
  },
  "&:hover::after": {
    width: "100%",
  },
  ...(active && {
    color: "transparent",
    background: "linear-gradient(90deg, #00e5ff, #9b5cff)",
    WebkitBackgroundClip: "text",
  }),
}));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    { label: "About Us", path: "/" },
    { label: "Projects", path: "/projects" },
    { label: "Team", path: "/team" },
    { label: "Publications", path: "/publications" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.08, duration: 0.35 },
    }),
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.6)",
          backdropFilter: "blur(10px)",
          borderBottom: scrolled
            ? "1px solid rgba(0,229,255,0.2)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 2px 16px rgba(0,229,255,0.08)"
            : "none",
          transition: "all 0.3s ease",
          zIndex: 1300,
        }}
      >
        <Container>
          <Toolbar
            disableGutters
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            {/* Logo */}
            <Stack
              direction="row"
              alignItems="center"
              spacing={1.5}
              component={motion.div}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Box
                component="img"
                src={logo}
                alt="NEXIS"
                sx={{ height: 34, width: "auto" }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  background: "linear-gradient(90deg, #00e5ff, #9b5cff)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                NEXIS - Research Lab
              </Typography>
            </Stack>

            {/* Desktop Links */}
            <Stack
              direction="row"
              spacing={3.5}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  component={Link}
                  to={item.path}
                  active={location.pathname === item.path}
                >
                  {item.label}
                </NavLink>
              ))}
            </Stack>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <IconButton
                onClick={() => setMenuOpen(!menuOpen)}
                sx={{ color: "#00e5ff" }}
              >
                {menuOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Modern Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              position: "fixed",
              top: 64,
              left: 0,
              width: "100%",
              background:
                "linear-gradient(160deg, rgba(0,0,0,0.92), rgba(0,0,0,0.85))",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid rgba(0,229,255,0.15)",
              zIndex: 1200,
            }}
          >
            <Stack spacing={2} sx={{ p: 3 }}>
              {menuItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={itemVariants}
                >
                  <Button
                    component={Link}
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    sx={{
                      justifyContent: "flex-start",
                      color:
                        location.pathname === item.path
                          ? "transparent"
                          : "#fff",
                      fontWeight: 600,
                      textTransform: "none",
                      fontSize: "1rem",
                      px: 1,
                      borderRadius: 1,
                      position: "relative",
                      overflow: "hidden",
                      background:
                        location.pathname === item.path
                          ? "linear-gradient(90deg, #00e5ff, #9b5cff)"
                          : "none",
                      WebkitBackgroundClip:
                        location.pathname === item.path
                          ? "text"
                          : "unset",
                      "&:hover": {
                        background: "rgba(0,229,255,0.06)",
                      },
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: 0,
                        bottom: 0,
                        height: 2,
                        width:
                          location.pathname === item.path ? "100%" : 0,
                        background:
                          "linear-gradient(90deg, #00e5ff, #9b5cff)",
                        transition: "width 0.3s ease",
                      },
                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                </motion.div>
              ))}
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
