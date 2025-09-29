import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {gradientNewColor} from 'theme/theme';

export function useAnimatedButton({disabled}: {disabled?: boolean}) {
  const size = useSharedValue(1);
  const opacity = useSharedValue(1);
  const {theme} = useThemeNew();

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
  //--------------

  const primaryGradientColors = disabled
    ? // white variant
      // ? [colors.grayDisabledBackground, colors.grayDisabledBackground]
      [
        theme.colors['surface/button/secondary/disable'],
        theme.colors['surface/button/secondary/disable'],
      ]
    : gradientNewColor['gradient/surface'];

  const primaryTextColor = theme.colors['text/white'];

  const primaryPressedColor = ['#186E9D', '#4531A5'];

  const primaryDisabledGradient = [
    theme.colors['surface/button/secondary/disable'],
    theme.colors['surface/button/secondary/disable'],
  ];

  const primaryDisabledText = theme.colors['text/disabled'];
  //--------------

  const secondaryGradientColors = disabled
    ? [
        theme.colors['surface/button/secondary/disable'],
        theme.colors['surface/button/secondary/disable'],
      ]
    : [
        theme.colors['surface/button/secondary/default'],
        theme.colors['surface/button/secondary/default'],
      ];

  const secondaryTextColor = theme.colors['text/primary'];

  const secondaryPressedColor = [
    theme.colors['surface/button/secondary/pressed'],
    theme.colors['surface/button/secondary/pressed'],
  ];

  const secondaryDisabledGradient = [
    theme.colors['surface/button/secondary/disable'],
    theme.colors['surface/button/secondary/disable'],
  ];

  const secondaryDisabledText = theme.colors['text/disabled'];

  const onPressInAnimationHandler = () => {
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
    primaryButton: {
      gradient: primaryGradientColors,
      text: primaryTextColor,
      pressedColor: primaryPressedColor,
      disabledGradient: primaryDisabledGradient,
      disabledText: primaryDisabledText,
    },
    secondaryButton: {
      gradient: secondaryGradientColors,
      text: secondaryTextColor,
      pressedColor: secondaryPressedColor,
      disabledGradient: secondaryDisabledGradient,
      disabledText: secondaryDisabledText,
    },
    animationsHandlers: {
      onPressInAnimationHandler,
      onPressOutAnimationHandler,
    },
  };
}
