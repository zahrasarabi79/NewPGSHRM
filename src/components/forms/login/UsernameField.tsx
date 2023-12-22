// UsernameField.tsx
import React from 'react';
import { Control, Controller, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { TextFieldStyle } from '@/landing/shared/TextFieldStyle';
import { useMediaQuery, useTheme } from '@mui/material';

interface UsernameFieldProps {
  control: Control<any>;
  errors: any;
  reqError: boolean;
  watch: UseFormWatch<any>;
  register: UseFormRegister<any>;
  handleMouseDownUsername: () => void;
}

const UsernameField: React.FC<UsernameFieldProps> = ({ control, errors, reqError, handleMouseDownUsername }) => {
  const theme = useTheme();
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Controller
      name="username"
      control={control}
      rules={{
        required: 'این فیلد الزامی است',
      }}
      render={({ field }) => (
        <TextFieldStyle
          onMouseDown={handleMouseDownUsername}
          {...field}
          fullWidth
          dir="rtl"
          size={isDownMediumScreen ? 'small' : 'medium'}
          label="نام کاربری"
          autoComplete="off"
          variant="outlined"
          type="text"
          id="username"
          data-testid="username"
          error={errors.username || reqError}
          helperText={Boolean(errors.username?.message) ? errors.username?.message :  reqError}
        />
      )}
    />
  );
};

export default UsernameField;
