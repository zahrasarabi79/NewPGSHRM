import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import '@/landing/style/style.css';
import { Thumbs, Keyboard } from 'swiper/modules';
import { Divider, Grid, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ThumbSlide from '@/landing/landing-slider/ThumbSlide';
import Icon from '@/landing/shared/Icon';
import { ISliderImages } from '@/types/component-types';
import { sliderImages } from '@/public/data/landingSliderData';

const LandingSlider: React.FC<{
  activeIndex: number;
  handleSlideClick: (index: number) => void;
  setThumbsSwiper: (swiper: any) => void;
  setActiveIndex: any;
  thumbsSwiper: any;
}> = ({ thumbsSwiper, activeIndex, handleSlideClick, setThumbsSwiper, setActiveIndex }) => {
  useSwiper();
  const theme = useTheme();
  const isDownSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isDownMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const handleNextSlide = () => {
    thumbsSwiper.slideNext();
    setActiveIndex(thumbsSwiper.activeIndex);
  };
  return (
    <Grid
      item
      xs={isDownMediumScreen ? 12 : 6}
      sx={{
        order: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'auto',
        mb: isDownSmallScreen ? '0px' : '300px',
      }}
    >
      <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={'auto'}
        rewind={true}
        speed={1200}
        keyboard={{
          enabled: true,
        }}
        watchSlidesProgress={true}
        modules={[Thumbs, Keyboard]}
        className="mySwiper"
      >
        {sliderImages.map((slide: ISliderImages, index: number) => (
          <SwiperSlide
            key={index}
            style={{
              overflow: 'hidden',
              backgroundImage: `url(${slide.url})`,
              boxShadow: '0px 2.284px 15.986px 0px rgba(174, 233, 255, 0.25)',
              width: '100%',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              borderRadius: '12px',
              ...(index === activeIndex && {
                border: index === 4 ? '2px solid #4CAF50' : '2px solid #aee9ff',
              }),
            }}
            onClick={() => handleSlideClick(index)}
          >
            <ThumbSlide slide={slide} isActive={index === activeIndex} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      {!isDownSmallScreen && (
        <>
          <Divider
            orientation="vertical"
            variant="middle"
            sx={{
              mx: '20px',
              height: isDownMediumScreen ? '120px' : '175px',
              borderColor: '#FDFDFD',
            }}
          />
          <IconButton
            onClick={() => handleNextSlide()}
            className="thumb-box"
            sx={{
              minWidth: 0,
              padding: 0,
              width: '30px',
              height: '30px',
              bgcolor: 'rgba(253, 253, 253, 0.20)',
              borderRadius: '12px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transition: '300ms ease-in',

              '&:hover': {
                bgcolor: 'rgba(253, 253, 253, 0.10)',
                border: '2px solid #AEE9FF',
                boxShadow: ' 0px 5px 35px 0px rgba(174, 233, 255, 0.25);',
                '.Arrow-icon': { backgroundColor: '#AEE9FF' },
              },
              '&:active': {
                bgcolor: '#AEE9FF',
                border: '2px solid #AEE9FF',
                boxShadow: ' 0px 5px 35px 0px rgba(174, 233, 255, 0.25);',
                '.Arrow-icon': { backgroundColor: '#1D1B1C' },
              },
            }}
          >
            <Icon className="Arrow-icon" pathName="../icons/landing-icon/AltArrowRight.svg" size="20px" color="white" />
          </IconButton>
        </>
      )}
    </Grid>
  );
};

export default LandingSlider;
