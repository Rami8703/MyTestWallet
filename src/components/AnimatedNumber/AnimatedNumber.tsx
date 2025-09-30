import React, {useCallback, useMemo} from 'react';
import {View} from 'react-native';
import AnimatedNumberScroll from './AnimatedNumberScroll';
import Animated, {Easing, FadeIn, FadeOut} from 'react-native-reanimated';
import {CustomTextNew} from 'components/TextNew/TextNew';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';

const DEFAULT_HEIGHT = 25;
const AnimatedNumber = ({
  number,
  enteringAnimation,
  exitingAnimation,
  textStyle,
  containerStyle,
  disableDefaultAnimations,
  textContainerStyle,
  duration,
  easing,
  textHeight = DEFAULT_HEIGHT,
}: any) => {
  const {theme} = useThemeNew();
  const currentNumber = useMemo(() => number.split(''), [number]);

  const _renderNumber = useCallback(
    (item: string, index: number) => {
      if (['.', ','].includes(item)) {
        return (
          <Animated.View
            key={`index-column-${index}`}
            style={textContainerStyle}
            entering={disableDefaultAnimations ? undefined : enteringAnimation}
            exiting={disableDefaultAnimations ? undefined : exitingAnimation}>
            <CustomTextNew
              color={theme.colors['text/primary']}
              style={textStyle}
              fontType={'Heading2XL'}>
              {item}
            </CustomTextNew>
          </Animated.View>
        );
      }

      return (
        <AnimatedNumberScroll
          enteringAnimation={
            disableDefaultAnimations ? undefined : enteringAnimation
          }
          exitingAnimation={
            disableDefaultAnimations ? undefined : exitingAnimation
          }
          disableDefaultAnimations={disableDefaultAnimations}
          textContainerStyle={textContainerStyle}
          textStyle={textStyle}
          key={`index-column-${index}`}
          value={+item}
          duration={duration}
          easing={easing}
          textHeight={textHeight}
        />
      );
    },
    [theme],
  );

  return (
    <View style={[containerStyle, {height: textHeight}]}>
      {currentNumber.map(_renderNumber)}
    </View>
  );
};

AnimatedNumber.defaultProps = {
  number: 0,
  enteringAnimation: FadeIn.duration(400),
  exitingAnimation: FadeOut.duration(400),
  textStyle: {
    fontSize: DEFAULT_HEIGHT,
    lineHeight: DEFAULT_HEIGHT,
    color: '#fff',
  },
  containerStyle: {
    flexDirection: 'row',
    height: DEFAULT_HEIGHT,
    overflow: 'hidden',
  },
  disableDefaultAnimations: false,
  textContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  duration: 1000,
  easing: Easing.inOut(Easing.ease),
  textHeight: DEFAULT_HEIGHT,
};

export default AnimatedNumber;
