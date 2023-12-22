import Icon from '@/landing/shared/Icon';
import { sliderImages } from '@/public/data/landingSliderData';
import { Box, Card, IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import Image from 'next/image';

const LoginProfile = ({ setIsLogout }) => {
  const theme = useTheme();
  const isDownSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Stack gap={isDownMediumScreen ? 2 : 3}>
      <Card
        dir={'rtl'}
        sx={{
          height: isDownMediumScreen ? '40px' : '70px',
          width: 'auto',
          bgcolor: 'rgba(29, 27, 28, 0.05)',
          boxShadow: 'none',
          padding: '8px 6px',
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
          <Stack>
            <IconButton
              onClick={() => setIsLogout(true)}
              sx={{
                minWidth: 0,
                padding: 0,
                width: isDownMediumScreen ? '24px' : '42px',
                height: isDownMediumScreen ? '24px' : '42px',
                bgcolor: 'rgba(255, 0, 45, 0.10)',
                borderRadius: isDownMediumScreen ? '8px' : '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  bgcolor: 'rgba(255, 0, 45, 0.10)',
                },
              }}
            >
              <Icon className="Arrow-icon" pathName="../icons/landing-icon/logout.svg" size={isDownMediumScreen ? '12px' : '20px'} color="#FF002D" style={{ transform: isDownMediumScreen ? 'translateX(1px)' : 'translateX(3px)' }} />
            </IconButton>
          </Stack>
        </Stack>
      </Card>
      <Card
        dir={'rtl'}
        sx={{
          height: isDownMediumScreen ? '40px' : '70px',
          width: 'auto',
          bgcolor: 'rgba(29, 27, 28, 0.05)',
          boxShadow: 'none',
          padding: isDownMediumScreen ? '8px' : '12px',
          background: `linear-gradient(0deg, rgba(29, 27, 28, 0.2) 0%, rgba(29, 27, 28, 0.20) 100%), url(${sliderImages[0].url}) lightgray 0px -82.085px / 100% 541.429% no-repeat`,
          //   backgroundImage: `url(${sliderImages[0].url})`,
          backgroundSize: 'cover',
          backgroundPosition: ' 100% 25%;',
        }}
      >
        <Stack direction={'row'} sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Stack direction={'row'} sx={{ justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
            <Box
              sx={{
                minWidth: 0,
                padding: 0,
                width: isDownMediumScreen ? '24px' : '45px',
                height: isDownMediumScreen ? '24px' : '45px',
                bgcolor: 'rgba(253, 253, 253, 0.20)',
                borderRadius: isDownMediumScreen ? '8px' : '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Icon className="Arrow-icon" pathName="../icons/landing-icon/UsersGroupTwoRounded.svg" size={isDownMediumScreen ? '16px' : '30px'} />
            </Box>
            <Typography
              sx={{
                fontSize: isDownSmallScreen ? '10px' : isDownMediumScreen ? '8px' : '14px',
                lineHeight: 'normal',
                color: '#FDFDFD',
                fontWeight: '700',
                fontFamily: 'Kalamehweb',
              }}
            >
              ورود به پنل {sliderImages[0].name}
            </Typography>
          </Stack>
          <Stack>
            <IconButton
              sx={{
                minWidth: 0,
                padding: 0,
                width: isDownMediumScreen ? '24px' : '45px',
                height: isDownMediumScreen ? '24px' : '45px',
                bgcolor: 'rgba(253, 253, 253, 0.00)',
                borderRadius: isDownMediumScreen ? '8px' : '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                transition: '300ms ease-in',
                '&:hover': {
                  bgcolor: 'rgba(253, 253, 253, 0.10)',
                  border: '1px solid #AEE9FF',
                  boxShadow: ' 0px 5px 35px 0px rgba(174, 233, 255, 0.25);',
                  '.Arrow-icon': { backgroundColor: '#AEE9FF' },
                },
                '&:active': {
                  bgcolor: '#AEE9FF',
                  border: '1px solid #AEE9FF',
                  boxShadow: ' 0px 5px 35px 0px rgba(174, 233, 255, 0.25);',
                  '.Arrow-icon': { backgroundColor: '#1D1B1C' },
                },
              }}
            >
              <Icon className="Arrow-icon" pathName="../icons/landing-icon/AltArrowLeft.svg" size={isDownMediumScreen ? '16px' : '30px'} color="white" />
            </IconButton>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};

export default LoginProfile;
