import React, { useState, useEffect } from 'react';
import Slide from '@mui/material/Slide';
import Card from '@mui/material/Card';
import LinearProgress from '@mui/material/LinearProgress';
import LandingNotificationSlide, { notificationData } from './LandingNotificationSlide'; // Import your notification component
import { useMediaQuery, useTheme } from '@mui/material';

const NotificationComponent = () => {
  const theme = useTheme();
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [checked, setChecked] = useState(true);
  const [progress, setProgress] = useState(0);
  const [notificationIndex, setNotificationIndex] = useState(0);

  useEffect(() => {
    const notificationDuration = 1000;
    const showNextNotification = () => {
      setNotificationIndex((prevIndex) => (prevIndex + 1) % notificationData.length);
      setChecked(true);
      setProgress(0);
      setTimeout(() => {
        setChecked(false);
      }, notificationDuration);
    };
    showNextNotification();
    const timer = setInterval(() => {
      showNextNotification();
    }, notificationDuration + 300);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ position: 'fixed', bottom: 0, right: isDownMediumScreen ? '50%' : 0, direction: 'rtl', transform: isDownMediumScreen ? 'translateX(50%)' : 'translateX(0%)' }}>
      <Slide direction="up" in={checked}>
        <Card sx={{ bgcolor: 'rgba(253, 253, 253, 0.30)', backdropFilter: 'blur(15px)', width: isDownMediumScreen ? '482px' : '559px', minHeight: '159px', borderRadius: isDownMediumScreen ? '12px 12px 0px 0px' : "'0px 12px 0px 0px'", display: 'flex' }}>
          <LandingNotificationSlide notificationData={notificationData[notificationIndex]} />
          <LinearProgress variant="buffer" value={progress} sx={{ position: 'absolute', bottom: '0', left: '0', width: '100%' }} />
        </Card>
      </Slide>
    </div>
  );
};

export default NotificationComponent;
