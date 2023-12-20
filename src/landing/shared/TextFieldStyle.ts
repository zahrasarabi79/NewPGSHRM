import TextField from '@mui/material/TextField';
import { styled } from '@mui/material';

export const TextFieldStyle = styled(TextField)({
  input: {
    color: 'rgba(29, 27, 28, 0.30)',
    borderColor: 'rgba(29, 27, 28, 1)',
    m: 1,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgba(29, 27, 28, 0.30)',
  },

  '& .MuiInputLabel-root': {
    color: 'rgba(29, 27, 28, 0.30)',
  },
  '& .MuiFormHelperText-root.Mui-error': {
    marginBottom: '14px',
  },
});
