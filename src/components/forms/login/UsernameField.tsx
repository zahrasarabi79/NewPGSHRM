// UsernameField.tsx
import React from 'react';
import { Control, Controller, UseFormRegister, UseFormWatch } from 'react-hook-form';
import { validateUsername } from '@/components/forms/utils';
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

const UsernameField: React.FC<UsernameFieldProps> = ({
  control,
  errors,
  reqError,
  handleMouseDownUsername,
}) => {
  const theme = useTheme();
  const isDownSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <Controller
      name="username"
      control={control}
      rules={{
        required: 'این فیلد الزامی است',
        validate: (value: string) => validateUsername(value),
      }}
      render={({ field }) => (
        <TextFieldStyle
          onMouseDown={handleMouseDownUsername}
          {...field}
          fullWidth
          dir="rtl"
          size={isDownMediumScreen ? 'small' : 'large'}
          label="نام کاربری"
          autoComplete="off"
          variant="outlined"
          type="text"
          id="username"
          data-testid="username"
          error={errors.username || reqError}
          helperText={
            Boolean(errors.username?.message) ? errors.username?.message : ' ' || reqError
          }
        />
      )}
    />
  );
};

export default UsernameField;
