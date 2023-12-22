import React, { FC, useEffect, useState } from 'react';
import { Button, CircularProgress, Grid, useMediaQuery, useTheme, Typography} from '@mui/material';
import { SubmitHandler, useForm } from 'react-hook-form';
import UsernameField from '@/components/forms/login/UsernameField';
import PasswordField from '@/components/forms/login/PasswordField';
import { useLoginMutation } from '@/state-management/apis/authApi';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import Icon from '@/landing/shared/Icon';

export interface LoginFormValues {
  username: string;
  password: string;
}
export interface ILoginFormProps {
  setIsLogin: (arg: boolean) => void;
}
const LoginForm: FC<ILoginFormProps> = ({ setIsLogin }) => {
  const theme = useTheme();
  const router = useRouter();
  const isDownSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [showPassword, setShowPassword] = useState(false);
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    control,
    clearErrors,
  } = useForm<LoginFormValues>({
    mode: 'onChange',
    defaultValues: { username: '', password: '' },
  });

  const [login, { isLoading, isSuccess, error, data }] = useLoginMutation();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = () => {
    clearErrors();
  };
  const handleMouseDownUsername = () => {
    clearErrors();
  };
  useEffect(() => {
    if (isSuccess) router.replace('/workflow-management/dashboard');
  }, [isSuccess, router]);

  const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
    const { username, password } = data;
    await login({ username, password }).unwrap();
  };
  const handleSlide = () => {
    setIsLogin(true);
  };
  useEffect(() => {
    if (!!data?.data?.access_token) {
      Cookies.set('access_token', data.data.access_token);
      Cookies.set('refresh_token', data.data.refresh_token);
    }
  }, [data]);

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Grid container gap={isDownMediumScreen ? 2 : 4}>
        <Grid item xs={12}>
          <UsernameField control={control} errors={errors} reqError={Boolean(error)} watch={watch} register={register} handleMouseDownUsername={handleMouseDownUsername} />
        </Grid>
        <Grid item xs={12}>
          <PasswordField watch={watch} register={register} errors={errors} reqError={Boolean(error)} showPassword={showPassword} handleClickShowPassword={handleClickShowPassword} handleMouseDownPassword={handleMouseDownPassword} />
        </Grid>
        <Grid item xs={12}>
          <Button
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              boxShadow: 'none',
              height: isDownSmallScreen ? '36px' : isDownMediumScreen ? '32px' : '45px',
              bgcolor: '#AEE9FF',
              color: '#1D1B1C',
              '&.Mui-disabled': { bgcolor: '#AEE9FF', color: '#1D1B1C' },
              '&:active': { boxShadow: 'none' },
              '&:hover': {
                bgcolor: '#91c0d2',
                boxShadow: 'none',
                padding: isDownSmallScreen ? '8px 12px ' : isDownMediumScreen ? '8px 6px' : '10px 15px',
              },
            }}
            fullWidth
            onClick={handleSlide}
            color="info"
            variant="contained"
            // type="submit"
            disabled={!watch('password') || !watch('username') || isLoading}
            endIcon={isLoading && <CircularProgress color="info" size={20} />}
          >
            <Icon className="Arrow-icon" pathName="../icons/landing-icon/ArrowLeft.svg" size={isDownSmallScreen ? '8px' : isDownMediumScreen ? '16px' : '24px'} color="#1D1B1C" />
            <Typography sx={{ fontFamily: 'kalamehweb', fontSize: isDownSmallScreen ? '10px' : isDownMediumScreen ? '8px' : '12px', lineHeight: '12px', mr: 1 }}> وارد پنل کاربری خود شوید</Typography>
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
