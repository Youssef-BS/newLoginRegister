import React, { useState, useEffect } from 'react';
import { useScrollTrigger, Zoom, Fab, createTheme, ThemeProvider } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// Create a custom theme with black as primary color
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // Black color
    },
  },
});

const ScrollToTop = ({ showBelow }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: showBelow,
  });

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          transition: '0.3s ease-out',
        }}
      >
        <Fab color="primary" aria-label="scroll-to-top">
          <ArrowUpwardIcon />
        </Fab>
      </div>
    </Zoom>
  );
};

const ScrollTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop showBelow={300} />
    </ThemeProvider>
  );
};

export default ScrollTopButton;
