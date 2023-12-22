'use client';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import { LoginCard } from '@/components/pages/login/LoginCard';

const Login = () => {
  const theme = useTheme();
  const isDownSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Grid
      item
      xs={isDownSmallScreen ? 12 : isDownMediumScreen ? 6 : 4}
      sx={{
        display: 'flex',
        justifyContent: isDownSmallScreen ? 'center' : 'flex-start',
        alignItems: 'flex-start',
        padding: 0,
        order: isDownSmallScreen ? 3 : 2,
        mt: '20px',
      }}
    >
      <LoginCard />
    </Grid>
  );
};
export default Login;
