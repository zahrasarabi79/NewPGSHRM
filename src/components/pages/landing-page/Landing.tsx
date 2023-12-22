'use client';
import React, { useState } from 'react';
import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';
import LandingNavbar from '../../../landing/LandingNavbar';
import LandingIntroduction from '@/landing/LandingIntroduction';
import Login from '@/components/pages/login/Login';
import { sliderImages } from '@/public/data/landingSliderData';
import LandingSlider from '@/landing/landing-slider/LandingSlider';
import LandingNotificationSlider from '@/landing/landing-notification/LandingNotificaionSLider';

const Landing = () => {
  const theme = useTheme();
  const isDownSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideClick = (index: number) => {
    if (thumbsSwiper) {
      if (sliderImages.length - 1 === index) {
        thumbsSwiper.slideTo(0);
        setActiveIndex(0);
      } else {
        thumbsSwiper.slideTo(index);
        setActiveIndex(index);
      }
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${sliderImages[activeIndex].url})`,
          transition: '500ms ease-in',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: isDownSmallScreen ? '600px' : isDownMediumScreen ? '604px' : '1820px', padding: isDownSmallScreen ? 'auto' : '0px !important' }} dir="ltr">
          <Grid container sx={{ height: '100vh' }}>
            <LandingNavbar />
            <LandingIntroduction />
            <Login />
            <LandingSlider thumbsSwiper={thumbsSwiper} activeIndex={activeIndex} handleSlideClick={handleSlideClick} setThumbsSwiper={setThumbsSwiper} setActiveIndex={setActiveIndex} />
            {!isDownSmallScreen && <LandingNotificationSlider />}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Landing;
