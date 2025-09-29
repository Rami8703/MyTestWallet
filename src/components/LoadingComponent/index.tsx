import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';
import WrapperNewContainer from '../WrapperNewContainer';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSequence,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import FastImage from 'react-native-fast-image';

const Dot = ({color, isActive}: {color: string; isActive: boolean}) => {
  const scale = useSharedValue(1);

  useEffect(() => {
    if (isActive) {
      scale.value = withSequence(
        withTiming(0.5, {duration: 200, easing: Easing.ease}),
        withTiming(1, {duration: 200, easing: Easing.ease}),
      );
    }
  }, [isActive]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  return (
    <Animated.View
      style={[styles.dot, animatedStyle, {backgroundColor: color}]}
    />
  );
};

export default function LoadingComponent() {
  const {isLightTheme} = useTheme();
  const [activeDot, setActiveDot] = React.useState(0);
  const dotColor = isLightTheme ? 'black' : 'white';

  const image = isLightTheme
    ? require('../../assets/images/ic-logo-gradle-white.png')
    : require('../../assets/images/ic-logo.png');

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDot(prev => (prev + 1) % 3);
    }, 300); // switch dot every 300ms
    return () => clearInterval(interval);
  }, []);

  return (
    <WrapperNewContainer isHeader>
      <View style={styles.container}>
        <View />
        <FastImage source={image} style={styles.animation} />

        <View style={styles.dotRow}>
          {[0, 1, 2].map(i => (
            <Dot key={i} color={dotColor} isActive={activeDot === i} />
          ))}
        </View>
      </View>
    </WrapperNewContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  dot: {
    height: 10,
    width: 10,
    borderRadius: 100,
  },
  dotRow: {
    flexDirection: 'row',
    columnGap: 10,
    marginTop: 20,
  },
  animation: {paddingBottom: 10, height: 100, width: 100},
});
