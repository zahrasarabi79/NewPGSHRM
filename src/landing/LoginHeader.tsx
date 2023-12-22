import { Box, Divider, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
export interface ILoginHeaderProps {
  isLogout: boolean;
  isLogin: boolean;
}
const LoginHeader:FC<ILoginHeaderProps> = ({ isLogout, isLogin }) => {
  const theme = useTheme();
  console.log(isLogout && !isLogin);

  const isDownSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  return isLogout && isLogin ? (
    <Typography sx={{ fontFamily: 'kalamehweb', fontSize: isDownSmallScreen ? '12px' : isDownMediumScreen ? '10px' : '22px', fontWeight: 700, lineHeight: isDownMediumScreen ? '16px' : '28px', color: '#1D1B1C', textAlign: 'center', mt: 2, mb: isDownMediumScreen ? 3 : 5 }}>
      از اکانت خارج میشوید؟
    </Typography>
  ) : (
    <>
      <Typography
        sx={{
          fontSize: isDownSmallScreen ? '14px' : isDownMediumScreen ? '12px' : '22px',
          textAlign: 'center',
          color: '#1D1B1C',

          lineHeight: 'normal',
          fontWeight: '700',
          fontFamily: 'Kalamehweb',
        }}
      >
        خوش آمدید
      </Typography>
      <Divider flexItem sx={{ '&.MuiDivider-root': { px: '10px', pb: isLogin ? (isDownMediumScreen ? '10px' : '30px') : isDownMediumScreen ? '14px' : '30px' } }}>
        <Typography
          sx={{
            fontSize: isDownSmallScreen ? '8px' : isDownMediumScreen ? '6px' : '12px',
            textAlign: 'center',
            color: '#1D1B1C',
            fontFamily: 'Kalamehweb',
          }}
        >
          وارد پنل کاربری خود شوید
        </Typography>
      </Divider>
    </>
  );
};

export default LoginHeader;
