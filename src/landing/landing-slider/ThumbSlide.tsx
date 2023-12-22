import { Box, Grid, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { FC } from 'react';
import Icon from '@/landing/shared/Icon';
import { ISliderImages } from '@/types/component-types';

export interface IThumbSlide {
  slide: ISliderImages;
  isActive: boolean;
  index: number;
}

const ThumbSlide: FC<IThumbSlide> = ({ slide, isActive, index }) => {
  const theme = useTheme();
  const isDownSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Grid
        container
        sx={{
          p: isDownSmallScreen ? 1 : isDownMediumScreen ? '10px' : '15px',
          width: '99%',
          height: '100%',
          transition: '300ms easein',
        }}
      >
        <Grid dir="rtl" item xs={12} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: isDownSmallScreen ? 1 : 4 }}>
          <Typography
            className="thumb-Font-color"
            color={isActive ? (index === 4 ? '#4CAF50' : '#aee9ff') : '#FDFDFD'}
            sx={{
              fontSize: isDownSmallScreen ? '12px' : isDownMediumScreen ? '15px' : '22px',
              fontWeight: '700',
              lineHeight: '125%',
              textAlign: 'left',
              fontFamily: 'kalamehweb',
            }}
          >
            {slide.name}
          </Typography>
          <Box
            className="thumb-box"
            sx={{
              width: isDownMediumScreen ? '30px' : '45px',
              height: isDownMediumScreen ? '30px' : '45px',
              bgcolor: isActive ? (index === 4 ? 'rgba(76, 175, 80, 0.50)' : 'rgba(174, 233, 255,0.20)') : 'rgba(253, 253, 253, 0.20)',
              borderRadius: isDownSmallScreen ? '12px' : isDownMediumScreen ? 1 : '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <Icon className="thumb-icon" pathName={slide.icon} size={isDownMediumScreen ? '20px' : '30px'} color={isActive ? (index === 4 ? 'white' : '#aee9ff') : 'white'} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default ThumbSlide;
