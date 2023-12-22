import Icon from '@/landing/shared/Icon';
import { Button, Card, Grid, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';
import React, { FC } from 'react';
export interface ILogoutProfileProps {
  setIsLogout: (arg: boolean) => void;
  setIsLogin: (arg: boolean) => void;
}
const LogoutProfile: FC<ILogoutProfileProps> = ({ setIsLogout, setIsLogin }) => {
  const theme = useTheme();
  const isDownSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid container spacing={isDownMediumScreen ? 1 : 5}>
      <Grid item xs={12}>
        <Card
          dir={'rtl'}
          sx={{
            height: isDownMediumScreen ? '40px' : '70px',
            width: 'auto',
            bgcolor: 'rgba(29, 27, 28, 0.05)',
            boxShadow: 'none',
            padding: '8px 6px',
            border: '1px solid rgba(29, 27, 28, 0.30)',
          }}
        >
          <Stack
            direction={'row'}
            sx={{
              width: '100%',
              height: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Stack direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center', gap: 1 }}>
              <Image src={'/image/landing-slider-image/profile-image.png'} alt="profile-image" width={isDownMediumScreen ? 24 : 42} height={isDownMediumScreen ? 24 : 42} style={{ borderRadius: isDownMediumScreen ? '8px' : '12px' }} />
              <Stack justifyContent={'center'}>
                <Typography
                  sx={{
                    lineHeight: 'normal',
                    fontSize: isDownSmallScreen ? '8px' : isDownMediumScreen ? '6px' : '10px',
                    color: '#1D1B1C',
                  }}
                >
                  نام کاربری
                </Typography>
                <Typography
                  sx={{
                    fontSize: isDownSmallScreen ? '10px' : isDownMediumScreen ? '8px' : '14px',
                    lineHeight: 'normal',
                    color: '#1D1B1C',
                  }}
                >
                  امیر محمد سوری
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <IconButton
          onClick={() => setIsLogout(false)}
          sx={{
            minWidth: 0,
            padding: isDownMediumScreen ? '8px 12px' : '10px 15px',
            width: ' -webkit-fill-available',
            bgcolor: 'rgba(29, 27, 28, 0.10)',
            borderRadius: isDownMediumScreen ? '8px' : '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
              bgcolor: 'rgba(29, 27, 28, 0.10)',
            },
          }}
        >
          <Typography sx={{ color: '#1D1B1C', fontFamily: 'kalamehweb', fontSize: isDownMediumScreen ? '10px' : '12px', lineHeight: isDownMediumScreen ? '12px' : '20px' }}>انصراف</Typography>
        </IconButton>
      </Grid>
      <Grid item xs={6}>
        <Button
          onClick={() => setIsLogin(false)}
          sx={{
            minWidth: 0,
            padding: isDownMediumScreen ? '8px 12px' : '10px 15px',
            width: ' -webkit-fill-available',
            bgcolor: 'rgba(255, 0, 45, 0.10)',
            borderRadius: isDownMediumScreen ? '8px' : '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid #FF002D',
            '&:hover': {
              bgcolor: 'rgba(255, 0, 45, 0.10)',
            },
          }}
        >
          <Stack direction={'row'} gap={isDownMediumScreen ? 1 : 2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
            <Icon className="Arrow-icon" pathName="../icons/landing-icon/logout.svg" size={isDownMediumScreen ? '12px' : '20px'} color="#FF002D" style={{ transform: isDownMediumScreen ? 'translateX(1px)' : 'translateX(3px)' }} />
            <Typography sx={{ color: '#FF002D', fontFamily: 'kalamehweb', fontSize: isDownMediumScreen ? '10px' : '12px', lineHeight: isDownMediumScreen ? '12px' : '20px', whiteSpace: 'nowrap' }}>خروج از اکانت</Typography>
          </Stack>
        </Button>
      </Grid>
    </Grid>
  );
};

export default LogoutProfile;
