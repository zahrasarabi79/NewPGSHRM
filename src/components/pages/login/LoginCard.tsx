import { Box, Card, CardContent,  useMediaQuery, useTheme } from '@mui/material';
import LoginForm from '@/components/forms/login/LoginForm';
import { useState } from 'react';
import LoginProfile from '@/landing/LoginProfile';
import LogoutProfile from '@/landing/LogoutProfile';
import LoginHeader from '@/landing/LoginHeader';

export const LoginCard = () => {
  const [isLogin, setIsLogin] = useState(false);
  const theme = useTheme();
  const isDownSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [isLogout, setIsLogout] = useState(false);

  return (
    <Card
      sx={{
        bgcolor: '#FDFDFD',
        ml: isDownSmallScreen ? 0 : isDownMediumScreen ? 5 : 0,
        p: isLogin ? (isDownSmallScreen ? '12px 24px' : isDownMediumScreen ? '18px 26px' : '31px 45px') : isDownSmallScreen ? '12px 24px' : isDownMediumScreen ? '10px 26px' : '16px 45px',
        width: isDownSmallScreen ? '262px' : isDownMediumScreen ? '270px' : '469px',
        height: isDownSmallScreen ? 'auto' : isDownMediumScreen ? 'auto' : '384px',
       
      }}
    >
      <CardContent sx={{ p: "0px !important" }}>
        <Box
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <LoginHeader isLogout={isLogout} isLogin={isLogin} />
          {!isLogin ? <LoginForm setIsLogin={setIsLogin} /> : !isLogout ? <LoginProfile setIsLogout={setIsLogout} /> : <LogoutProfile setIsLogout={setIsLogout} setIsLogin={setIsLogin} />}
        </Box>
      </CardContent>
    </Card>
  );
};
