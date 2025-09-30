import React, {memo, useCallback, useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  cancelAnimation,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {CustomTextNew} from 'components/TextNew/TextNew';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';

const scrollArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const AnimatedNumberScroll = ({
  value,
  enteringAnimation,
  exitingAnimation,
  disableDefaultAnimations,
  textContainerStyle,
  textStyle,
  duration,
  easing,
  textHeight,
}: any) => {
  const {theme} = useThemeNew();
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withTiming(value * textHeight, {duration, easing});
    return () => cancelAnimation(translateY);
  }, [value]);

  const containerStyle = useAnimatedStyle(() => ({
    transform: [{translateY: -translateY.value}],
  }));

  const _renderItem = useCallback(
    (item: number) => (
      <View
        key={`index-row-${item}`}
        style={[textContainerStyle, {height: textHeight}]}>
        <CustomTextNew color={theme.colors['text/primary']} style={textStyle}>
          {item}
        </CustomTextNew>
      </View>
    ),
    [theme, textHeight, textStyle, textContainerStyle],
  );

  return (
    <View style={{height: textHeight, overflow: 'hidden'}}>
      <Animated.View
        style={containerStyle}
        entering={disableDefaultAnimations ? undefined : enteringAnimation}
        exiting={disableDefaultAnimations ? undefined : exitingAnimation}>
        {scrollArr.map(_renderItem)}
      </Animated.View>
    </View>
  );
};

export default memo(AnimatedNumberScroll);
