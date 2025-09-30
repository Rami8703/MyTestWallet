import React, {useCallback, useRef} from 'react';
import {
  Pressable,
  Animated,
  ActivityIndicator,
  StyleSheet,
  LayoutChangeEvent,
} from 'react-native';

const PRESS_DURATION = 100;
const DEFAULT_SCALE = 0.98;

export type AnimatedPressProp = {
  disabled?: boolean;
  hitSlop?: number;
  onPress?: () => void;
  children: React.ReactNode;
  onLayout?: (l: LayoutChangeEvent) => void;
  style?: object;
  containerStyle?: object;
  isLoading?: boolean;
};

const AnimatedPress = ({
  children,
  style,
  containerStyle,
  disabled,
  hitSlop,
  isLoading,
  onLayout,
  onPress,
}: AnimatedPressProp) => {
  const animScale = useRef(new Animated.Value(1)).current;

  const pressIn = useCallback(() => {
    Animated.timing(animScale, {
      useNativeDriver: false,
      toValue: DEFAULT_SCALE,
      duration: PRESS_DURATION,
    }).start();
  }, [animScale]);

  const pressOut = useCallback(() => {
    Animated.timing(animScale, {
      useNativeDriver: false,
      toValue: 1,
      duration: PRESS_DURATION,
    }).start();
  }, [animScale]);

  return (
    <Pressable
      disabled={disabled || isLoading}
      hitSlop={hitSlop}
      style={containerStyle}
      onPress={onPress}
      onPressIn={pressIn}
      onPressOut={pressOut}>
      <Animated.View
        onLayout={onLayout}
        style={[
          style,
          isLoading && styles.loadingProcess,
          {transform: [{scale: animScale}]},
        ]}>
        {isLoading ? <ActivityIndicator /> : children}
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  loadingProcess: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default React.memo(AnimatedPress);
