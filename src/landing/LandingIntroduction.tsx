import { Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
const LandingIntroduction = () => {
  const theme = useTheme();
  const isDownSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid item sx={{ direction: 'rtl', mt: '5px', order: isDownSmallScreen ? 2 : 3, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: isDownSmallScreen ? 'left' : 'flex-start' }} xs={isDownSmallScreen ? 12 : isDownMediumScreen ? 6 : 8}>
      <Typography
        sx={{
          direction: 'ltr',
          fontSize: isDownSmallScreen ? '30px' : isDownMediumScreen ? '42px' : '98px',
          fontWeight: '700',
          margin: '0  0  0  auto',
          lineHeight: isDownSmallScreen ? '50px' : isDownMediumScreen ? '60px' : '125px',
          color: '#FDFDFD',
          textAlign: 'left',
          fontFamily: 'kalamehweb',
          whiteSpace: isDownMediumScreen ? 'normal' : 'nowrap',
          pb: isDownSmallScreen ? '10px' : isDownMediumScreen ? '14px' : '30px',
        }}
      >
        سیستم مدیریت
        <br />
        فرایند کسب و‌ کار <span style={{ color: '#AEE9FF' }}>پویاگران </span>
      </Typography>
      <Typography
        sx={{
          direction: 'ltr',
          fontSize: isDownMediumScreen ? '12px' : '14px',
          fontWeight: '400',
          lineHeight: isDownMediumScreen ? '20px' : '25px',
          color: '#FDFDFD',
          textAlign: 'justify',
          maxWidth: '600px',
          margin: '0  0  0  auto', // Center the content horizontally
          fontFamily: 'kalamehweb',
        }}
      >
        پیشبرد سازمانی و افزایش سطح هوشمندی با ماژول‌های؛ مدیریت منابع انسانی، مدیریت زنجیره تامین، مدیریت ارتباط با مشتریان، مدیریت مالی و حسابداری، در یک نگاه با بهبود کارایی و افزایش توانمندی‌های سازمانی، تبدیل به محوری جهت ارتقاء عملکرد و بهره‌وری گردیده است.
      </Typography>
    </Grid>
  );
};

export default LandingIntroduction;
