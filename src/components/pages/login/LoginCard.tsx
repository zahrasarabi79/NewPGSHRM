import {
  Card,
  CardContent,
  Divider,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import LoginForm from '@/components/forms/login/LoginForm';
import { useState } from 'react';

export const LoginCard = () => {
  const [isLogin, setIsLogin] = useState(false);
  const theme = useTheme();
  const isDownSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Card
      sx={{
        bgcolor: '#FDFDFD',
        margin: '16px',
        p: '12px 24px',
        width: isDownSmallScreen ? '100%' : isDownMediumScreen ? '270px' : '469px',
        height: 'auto',
      }}
    >
      <CardContent sx={{ p: 0 }}>
        {!isLogin ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
             
            }}
          >
            <Typography
              sx={{
                fontSize: isDownSmallScreen ? '14px' : isDownMediumScreen ? '12px' : '22px',
                textAlign: 'center',
                color: '#1D1B1C',
                pb: '12px',
                fontWeight: '700',
              }}
            >
              خوش آمدید
            </Typography>
            <Divider flexItem sx={{ pb: 2 }}>
              <Typography
                sx={{
                  
                  fontSize: isDownSmallScreen ? '8px' : isDownMediumScreen ? '6px' : '12px',
                  textAlign: 'center',
                  color: '#1D1B1C',
                }}
              >
                وارد پنل کاربری خود شوید
              </Typography>
            </Divider>

            <LoginForm setIsLogin={setIsLogin} />
          </div>
        ) : (
          <Typography variant="body1" color="initial">
            sallam
          </Typography>
        )}
      </CardContent>
      <CardContent sx={{ p: 0 }}></CardContent>
    </Card>
  );
};
