// PasswordField.tsx
import React from 'react';
import { IconButton, useMediaQuery, useTheme } from '@mui/material';
import { Icon } from '@/components/shared';
import { TextFieldStyle } from '@/landing/shared/TextFieldStyle';

interface PasswordFieldProps {
  watch: any;
  register: any;
  errors: any;
  reqError: boolean;
  showPassword: boolean;
  handleClickShowPassword: () => void;
  handleMouseDownPassword: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = ({ watch, register, errors, reqError, showPassword, handleClickShowPassword, handleMouseDownPassword }) => {
  const theme = useTheme();
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <TextFieldStyle
      fullWidth
      onMouseDown={handleMouseDownPassword}
      value={watch('password')}
      autoComplete="off"
      size={isDownMediumScreen ? 'small' : 'large'}
      dir="rtl"
      id="password"
      label="رمز عبور"
      variant="outlined"
      {...register('password')}
      error={Boolean(errors.password) || reqError}
      helperText={
        !!errors.password
          ? errors.password.message // Display the validation error message
          : reqError && 'نام کاربری یا رمز عبور نادرست است'
      }
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <IconButton onClick={handleClickShowPassword} edge="end" role="icon-button">
            {showPassword ? <Icon pathName="bold/eye-slash.svg" color="#1D1B1C" /> : <Icon pathName="bold/eye.svg" color="#1D1B1C" />}
          </IconButton>
        ),
      }}
    />
  );
};

export default PasswordField;
