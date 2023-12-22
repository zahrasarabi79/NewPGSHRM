import Icon from '@/landing/shared/Icon';
import { CardContent, Typography, Button, Stack, TextField, styled, TextFieldProps, OutlinedInputProps, alpha, InputAdornment } from '@mui/material';
import React from 'react';
export const notificationDescriptionStyle = { fontFamily: 'kalamehweb', fontSize: '12px', lineHeight: '28px', color: '#FDFDFD', textAlign: 'left' };
export const notificationData = [
  {
    title: 'جلسات مدیریت هفتگی',
    description: <Typography sx={notificationDescriptionStyle}>&quot;جلسه مدیریت هفتگی روز یکشنبه ساعت 10 صبح در سالن کنفرانس برگزار خواهد شد.&quot;</Typography>,
  },
  {
    title: 'تعطیلات نوروز',
    description: <Typography sx={notificationDescriptionStyle}>&quot;تعطیلات نوروز از تاریخ ۱ تا ۶ فروردین خواهد بود. برنامه‌های خود را مطابق با تقویم تعطیلات تنظیم کنید.&quot;</Typography>,
  },
  {
    title: 'ارزیابی سالانه',
    description: (
      <>
        <Typography sx={{ ...notificationDescriptionStyle, mb: '15px' }}>&quot;ارزیابی سالانه عملکرد در حال آغاز است. لطفا فرم ها را در سامانه HRM تکمیل کنید.&quot;</Typography>
        <Button sx={{ height: '35px', bgcolor: '#AEE9FF', p: '5px 10px', color: '#1D1B1C', boxShadow: 'none' }}>
          <Typography sx={{ fontFamily: 'kalamehweb', fontSize: '12px', lineHeight: '20px', color: '#1D1B1C', textAlign: 'right' }}>تکمیل فرم</Typography>
          <Icon pathName="../icons/landing-icon/ArrowLeft.svg" color="#1D1B1C" />
        </Button>
      </>
    ),
  },

  {
    title: 'کد تخفیف',
    description: (
      <>
        <Typography sx={{ ...notificationDescriptionStyle, mb: '15px' }}>&quot;به مناسبت تولد شرکت، ۱۰٪ تخفیف ویژه؛ برای همه کارکنان در فروشگاه پویاشاپ لحاظ شده است.&quot;</Typography>
        <TextField
          sx={{ '& .MuiInputBase-root.MuiOutlinedInput-root': { paddingRight: '5px', bgcolor: '#FDFDFD', color: '#1D1B1C' } }}
          placeholder="pouyashop"
          variant="outlined"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button sx={{ height: '45px', bgcolor: '#AEE9FF', p: '10px 15px', color: '#1D1B1C', boxShadow: 'none' }}>
                  <Typography sx={{ fontFamily: 'kalamehweb', fontSize: '12px', lineHeight: '20px', color: '#1D1B1C', textAlign: 'right', mr: 1 }}>کپی کردن</Typography>
                  <Icon pathName="../icons/landing-icon/Copy.svg" color="#1D1B1C" />
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </>
    ),
  },
];
const LandingNotificationSlide = ({ notificationData }) => {
  return (
    <CardContent sx={{ width: '100%', p: '12px 30px 32px 30px' }}>
      <Typography sx={{ fontFamily: 'kalamehweb', fontSize: '12px', lineHeight: '28px', color: '#FDFDFD', pb: '5px' }}>اعلان های سازمان</Typography>
      <Typography sx={{ fontFamily: 'kalamehweb', fontSize: '22px', fontWeight: '700', lineHeight: '28px', color: '#FDFDFD', pb: '10px' }}>{notificationData?.title}</Typography>
      <Stack sx={{ bgcolor: 'rgba(174, 233, 255, 0.10)', borderRadius: '12px', p: '5px 10px 10px 10px', justifyContent: 'center', alignItems: 'flex-start' }}>{notificationData?.description}</Stack>
    </CardContent>
  );
};

export default LandingNotificationSlide;
