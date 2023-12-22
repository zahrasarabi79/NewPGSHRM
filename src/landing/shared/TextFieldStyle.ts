import TextField from '@mui/material/TextField';
import { styled } from '@mui/material';

export const TextFieldStyle = styled(TextField)({
  input: {
    color: 'rgba(29, 27, 28, 0.30)',
    borderColor: 'rgba(29, 27, 28, 1)',
    m: 1,
  },

  '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & textarea:-webkit-autofill, & textarea:-webkit-autofill:hover, & textarea:-webkit-autofill:focus, & select:-webkit-autofill, & select:-webkit-autofill:hover, & select:-webkit-autofill:focus':
    {
      '-webkit-text-fill-color': '#1D1B1C',
      '-webkit-box-shadow': '0 0 0px 1000px RGB(232 232 232) inset',
      transition: 'background-color 5000s ease-in-out 0s',
    },
  '& .MuiOutlinedInput-notchedOutline': {
    borderWidth: '1px',
    borderColor: 'rgba(29, 27, 28, 0.30) ',
    '&.Mui-focused fieldset': {
      color: '#1D1B1C',
    },
  },
  '& .MuiOutlinedInput-notchedOutline:hover::before': {
    borderColor: '#1D1B1C',
  },
  '& .MuiInputLabel-root': {
    color: 'rgba(29, 27, 28, 0.30)',
    
    '&.Mui-focused fieldset': {
      color: '#1D1B1C',
    },
  },
  '& .MuiFormHelperText-root.Mui-error': {
    marginBottom: '14px',
  },
});
