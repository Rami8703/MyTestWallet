import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {gradientColor} from '../../theme/theme';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';

export function useAnimatedButton({disabled}: {disabled?: boolean}) {
  const size = useSharedValue(1);
  const opacity = useSharedValue(1);
  const {theme} = useTheme();

  const animatedStyledButtonContainerStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(opacity.value),
      transform: [
        {
          scale: withSpring(size.value, {
            stiffness: 70,
            mass: 0.5,
            damping: 1,
          }),
        },
      ],
    };
  });

  const gradientColors = disabled
    ? // white variant
      // ? [colors.grayDisabledBackground, colors.grayDisabledBackground]
      [theme.colors.buttonBackground100, theme.colors.buttonBackground100]
    : gradientColor.gradient2;

  const borderColor = disabled
    ? theme.colors.primary300
    : theme.colors.primary500;

  const textColor = disabled
    ? theme.colors.primary350
    : theme.colors.primary500;

  const backGroundColor = disabled
    ? theme.colors.primary300
    : theme.colors.buttonBackground50;

  const onPressInAnimationHandler = () => {
    opacity.value = 0.8;
    size.value = 0.98;
  };

  const onPressOutAnimationHandler = () => {
    size.value = 1;
    opacity.value = 1;
  };

  return {
    animations: {
      animatedStyledButtonContainerStyle,
    },
    colorsButtons: {
      gradient: gradientColors,
      border: borderColor,
      text: textColor,
      backGroundColor: backGroundColor,
    },
    animationsHandlers: {
      onPressInAnimationHandler,
      onPressOutAnimationHandler,
    },
  };
}
