import React, { useState, useCallback } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  IconButton,
  Alert,
  CircularProgress,
  Paper
} from '@mui/material';
import {
  Work,
  School,
  LocationOn,
  AccessTime,
  Close,
  Send,
  TrendingUp,
  ContentCopy,
  Email
} from '@mui/icons-material';
import { motion } from 'framer-motion';

// Application Form Component to prevent re-renders
const ApplicationForm = ({ 
  open, 
  onClose, 
  selectedPosition, 
  loading, 
  onSubmit 
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: ''
  });

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleClose = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: ''
    });
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: 'rgba(18, 24, 33, 0.9)',
          border: '1px solid rgba(155, 92, 255, 0.2)',
          backdropFilter: 'blur(10px)'
        }
      }}
    >
      <DialogTitle sx={{ 
        color: '#00e5ff',
        fontWeight: 700,
        fontFamily: "'Space Grotesk', sans-serif",
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        pb: 2
      }}>
        Apply for {selectedPosition?.title}
      </DialogTitle>
      
      <IconButton
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'rgba(255,255,255,0.6)'
        }}
      >
        <Close />
      </IconButton>

      <form onSubmit={handleSubmit}>
        <DialogContent sx={{ pt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                sx={{
                  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'rgba(155, 92, 255, 0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(0, 229, 255, 0.5)' }
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                sx={{
                  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'rgba(155, 92, 255, 0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(0, 229, 255, 0.5)' }
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                sx={{
                  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'rgba(155, 92, 255, 0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(0, 229, 255, 0.5)' }
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth required sx={{ minWidth: 120 }}>
                <InputLabel sx={{ color: 'rgba(255,255,255,0.7)' }}>Experience</InputLabel>
                <Select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(155, 92, 255, 0.3)' },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(0, 229, 255, 0.5)' }
                  }}
                >
                  <MenuItem value="Student">Student</MenuItem>
                  <MenuItem value="Entry Level">Entry Level (0-2 years)</MenuItem>
                  <MenuItem value="Mid Level">Mid Level (2-5 years)</MenuItem>
                  <MenuItem value="Senior Level">Senior Level (5+ years)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Cover Letter"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                sx={{
                  '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'rgba(155, 92, 255, 0.3)' },
                    '&:hover fieldset': { borderColor: 'rgba(0, 229, 255, 0.5)' }
                  }
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>

        <DialogActions sx={{ p: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Button 
            onClick={handleClose} 
            sx={{ color: 'rgba(255,255,255,0.6)' }}
            type="button"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            startIcon={loading ? <CircularProgress size={20} /> : <Send />}
            sx={{
              background: 'linear-gradient(90deg, rgba(0, 229, 255, 0.15), rgba(155, 92, 255, 0.15))',
              color: '#9b5cff',
              fontWeight: 600,
              border: '1px solid rgba(155, 92, 255, 0.3)',
              '&:hover': {
                background: 'linear-gradient(90deg, rgba(0, 229, 255, 0.25), rgba(155, 92, 255, 0.25))',
                color: '#00e5ff'
              }
            }}
          >
            {loading ? 'Preparing...' : 'Send Application'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

const CareersSection = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [emailDialogOpen, setEmailDialogOpen] = useState(false);
  const [emailContent, setEmailContent] = useState('');
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });

  const positions = [
    {
      id: 1,
      title: "Research Intern",
      type: "Internship",
      location: "Remote/On-site",
      duration: "3-6 months",
      description: "Collaborate on advanced research projects under professional supervision.",
      icon: <School />
    },
    {
      id: 2,
      title: "PhD Researcher",
      type: "Full-time",
      location: "On-site",
      duration: "3-5 years",
      description: "Lead team-based research projects and contribute to academic publications.",
      icon: <TrendingUp />
    },
    {
      id: 3,
      title: "AI/ML Engineer",
      type: "Full-time",
      location: "Hybrid",
      duration: "Permanent",
      description: "Design and deploy machine learning models for solving real-world problems.",
      icon: <Work />
    },
    {
      id: 4,
      title: "AI/ML Engineer",
      type: "Full-time",
      location: "Hybrid",
      duration: "Permanent",
      description: "Design and deploy machine learning models for solving real-world problems.",
      icon: <Work />
    }
  ];

  const handleOpenDialog = useCallback((position) => {
    setSelectedPosition(position);
    setOpenDialog(true);
  }, []);

  const handleCloseDialog = useCallback(() => {
    setOpenDialog(false);
    setSelectedPosition(null);
  }, []);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setAlert({
        open: true,
        message: 'Email content copied to clipboard!',
        severity: 'success'
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
      setAlert({
        open: true,
        message: 'Failed to copy to clipboard. Please select and copy manually.',
        severity: 'error'
      });
    }
  };

  const handleFormSubmit = useCallback(async (formData) => {
    setLoading(true);

    try {
      const subject = `Job Application: ${formData.position || selectedPosition?.title}`;
      const body = `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Position: ${formData.position || selectedPosition?.title}
Experience Level: ${formData.experience}

Message:
${formData.message}
      `.trim();

      // Create the full email content for display
      const fullEmailContent = `To: zainmalikk0907@gmail.com
Subject: ${subject}

${body}`;

      // Try to open email client first
      const mailtoLink = `mailto:zainmalikk0907@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = mailtoLink;
      link.style.display = 'none';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Also show the email content dialog as fallback
      setEmailContent(fullEmailContent);
      setEmailDialogOpen(true);

      setAlert({
        open: true,
        message: 'Attempting to open your email client. If it doesn\'t open, use the email content below.',
        severity: 'info'
      });

    } catch (error) {
      console.error('Error:', error);
      setAlert({
        open: true,
        message: 'Could not open email client. Please use the email content provided.',
        severity: 'warning'
      });
    } finally {
      setLoading(false);
      handleCloseDialog();
    }
  }, [selectedPosition, handleCloseDialog]);

  const PositionCard = ({ position }) => (
    <Grid item xs={12} sm={6} md={3}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <Card sx={{
          height: '400px',
          minHeight: '400px',
          maxWidth: '100%',
          background: 'rgba(30, 41, 59, 0.7)',
          border: '1px solid rgba(155, 92, 255, 0.2)',
          borderRadius: '12px',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          '&:hover': {
            borderColor: 'rgba(0, 229, 255, 0.4)',
            background: 'rgba(30, 41, 59, 0.9)',
            transform: 'translateY(-5px)',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)'
          }
        }}>
          <CardContent sx={{ 
            p: 3, 
            height: '100%', 
            display: 'flex', 
            flexDirection: 'column',
            flex: 1,
            '&:last-child': { pb: 3 }
          }}>
            {/* Icon */}
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              mb: 2,
              color: '#00e5ff',
              flexShrink: 0
            }}>
              {position.icon}
            </Box>

            {/* Title */}
            <Box sx={{ flexShrink: 0, mb: 2 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700,
                  color: '#ffffff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  textAlign: 'center',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  lineHeight: 1.3,
                  minHeight: '2.6em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {position.title}
              </Typography>
            </Box>

            {/* Type Chip */}
            <Box sx={{ textAlign: 'center', mb: 2, flexShrink: 0 }}>
              <Chip
                label={position.type}
                size="small"
                sx={{
                  background: 'linear-gradient(90deg, rgba(0, 229, 255, 0.15), rgba(0, 229, 255, 0.25))',
                  color: '#00e5ff',
                  fontWeight: 700,
                  border: '1px solid rgba(0, 229, 255, 0.3)',
                  maxWidth: '100%'
                }}
              />
            </Box>

            {/* Details */}
            <Box sx={{ mb: 2, flexShrink: 0 }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1, 
                mb: 1, 
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <LocationOn sx={{ color: '#9b5cff', fontSize: '1rem', flexShrink: 0 }} />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)',
                    fontFamily: "'Inter', sans-serif",
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    textAlign: 'center',
                    lineHeight: 1.2
                  }}
                >
                  {position.location}
                </Typography>
              </Box>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 1, 
                mb: 1, 
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <AccessTime sx={{ color: '#9b5cff', fontSize: '1rem', flexShrink: 0 }} />
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)',
                    fontFamily: "'Inter', sans-serif",
                    wordBreak: 'break-word',
                    overflowWrap: 'break-word',
                    textAlign: 'center',
                    lineHeight: 1.2
                  }}
                >
                  {position.duration}
                </Typography>
              </Box>
            </Box>

            {/* Description */}
            <Box sx={{ 
              flex: 1, 
              display: 'flex', 
              alignItems: 'center', 
              mb: 2,
              minHeight: '4.8em'
            }}>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: 'rgba(255,255,255,0.7)', 
                  lineHeight: 1.4,
                  fontFamily: "'Inter', sans-serif",
                  textAlign: 'center',
                  width: '100%',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
                {position.description}
              </Typography>
            </Box>

            {/* Apply Button */}
            <Box sx={{ flexShrink: 0, mt: 'auto' }}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleOpenDialog(position)}
                sx={{
                  background: 'linear-gradient(90deg, rgba(0, 229, 255, 0.15), rgba(155, 92, 255, 0.15))',
                  color: '#9b5cff',
                  fontWeight: 600,
                  py: 1.2,
                  border: '1px solid rgba(155, 92, 255, 0.3)',
                  fontSize: '0.9rem',
                  '&:hover': {
                    background: 'linear-gradient(90deg, rgba(0, 229, 255, 0.25), rgba(155, 92, 255, 0.25))',
                    color: '#00e5ff',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Apply Now
              </Button>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Grid>
  );

  return (
    <Box sx={{ 
      background: '#000',
      minHeight: '100vh',
      py: 8,
      px: { xs: 2, md: 4 },
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Image with Filter */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: 'url("https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.1,
        filter: 'sepia(40%) saturate(500%) hue-rotate(200deg) brightness(70%)',
        zIndex: 0
      }} />

      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 30%, rgba(0, 229, 255, 0.1) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(155, 92, 255, 0.1) 0%, transparent 40%)',
        pointerEvents: 'none',
        zIndex: 1
      }} />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        {/* Alert */}
        {alert.open && (
          <Alert 
            severity={alert.severity} 
            onClose={() => setAlert({ ...alert, open: false })}
            sx={{ mb: 4 }}
          >
            {alert.message}
          </Alert>
        )}

        {/* Header */}
        <Box textAlign="center" mb={8} sx={{ mt: 4 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h4"
              sx={{
                fontWeight: 700,
                fontSize: { xs: "1.8rem", md: "2.2rem" },
                mb: 2,
                fontFamily: "'Space Grotesk', sans-serif"
              }}
            >
              Join Our{" "}
              <Box
                component="span"
                sx={{
                  background: "linear-gradient(90deg, #00e5ff, #9b5cff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Team
              </Box>
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#9b5cff',
                maxWidth: '600px', 
                mx: 'auto',
                fontFamily: "'Inter', sans-serif",
                lineHeight: 1.6,
                mt: 1.5
              }}
            >
              Be part of groundbreaking research and innovation. We're looking for passionate individuals to join our mission of shaping the future.
            </Typography>
          </motion.div>
        </Box>

        {/* Positions Grid */}
        <Grid container spacing={3} justifyContent="center">
          {positions.map((position) => (
            <PositionCard key={position.id} position={position} />
          ))}
        </Grid>

        {/* Application Form Dialog */}
        <ApplicationForm
          open={openDialog}
          onClose={handleCloseDialog}
          selectedPosition={selectedPosition}
          loading={loading}
          onSubmit={handleFormSubmit}
        />

        {/* Email Content Dialog */}
        <Dialog 
          open={emailDialogOpen} 
          onClose={() => setEmailDialogOpen(false)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              background: 'rgba(18, 24, 33, 0.95)',
              border: '1px solid rgba(155, 92, 255, 0.3)',
              backdropFilter: 'blur(10px)'
            }
          }}
        >
          <DialogTitle sx={{ 
            color: '#00e5ff',
            fontWeight: 700,
            fontFamily: "'Space Grotesk', sans-serif",
            textAlign: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            pb: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1
          }}>
            <Email /> Email Application Content
          </DialogTitle>
          
          <IconButton
            onClick={() => setEmailDialogOpen(false)}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'rgba(255,255,255,0.6)'
            }}
          >
            <Close />
          </IconButton>

          <DialogContent sx={{ pt: 3 }}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)', mb: 2 }}>
              If your email client didn't open automatically, please:
            </Typography>
            <ol style={{ color: 'rgba(255,255,255,0.7)', marginLeft: '20px', marginBottom: '20px' }}>
              <li>Copy the content below</li>
              <li>Open Gmail manually</li>
              <li>Paste this content into a new email</li>
              <li>Send to: <strong>zainmalikk0907@gmail.com</strong></li>
            </ol>
            
            <Paper 
              sx={{ 
                p: 2, 
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(155, 92, 255, 0.2)',
                borderRadius: '8px',
                position: 'relative'
              }}
            >
              <IconButton
                onClick={() => copyToClipboard(emailContent)}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: '#00e5ff'
                }}
                title="Copy to clipboard"
              >
                <ContentCopy />
              </IconButton>
              <Typography 
                variant="body2" 
                component="pre"
                sx={{ 
                  color: 'rgba(255,255,255,0.9)',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                  lineHeight: 1.4,
                  margin: 0
                }}
              >
                {emailContent}
              </Typography>
            </Paper>
          </DialogContent>

          <DialogActions sx={{ p: 3, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <Button 
              onClick={() => setEmailDialogOpen(false)}
              sx={{ color: 'rgba(255,255,255,0.6)' }}
            >
              Close
            </Button>
            <Button
              onClick={() => copyToClipboard(emailContent)}
              startIcon={<ContentCopy />}
              variant="contained"
              sx={{
                background: 'linear-gradient(90deg, rgba(0, 229, 255, 0.15), rgba(155, 92, 255, 0.15))',
                color: '#9b5cff',
                fontWeight: 600,
                border: '1px solid rgba(155, 92, 255, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(90deg, rgba(0, 229, 255, 0.25), rgba(155, 92, 255, 0.25))',
                  color: '#00e5ff'
                }
              }}
            >
              Copy Content
            </Button>
            <Button
              onClick={() => window.open('https://mail.google.com', '_blank')}
              startIcon={<Email />}
              variant="contained"
              sx={{
                background: 'linear-gradient(90deg, rgba(255, 87, 34, 0.15), rgba(155, 92, 255, 0.15))',
                color: '#ff5722',
                fontWeight: 600,
                border: '1px solid rgba(255, 87, 34, 0.3)',
                '&:hover': {
                  background: 'linear-gradient(90deg, rgba(255, 87, 34, 0.25), rgba(155, 92, 255, 0.25))',
                  color: '#ff8a65'
                }
              }}
            >
              Open Gmail
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default CareersSection;