import {StyleSheet, Animated, View, Dimensions} from 'react-native';
import React from 'react';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';

const {width} = Dimensions.get('screen');

export const Pagination = ({data, scrollX}: any) => {
  const {theme} = useThemeNew();
  return (
    <View style={styles.container}>
      {data.map((_: any, idx: any) => {
        const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 30, 8],
          extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#ccc', theme.colors['icon/brand'], '#ccc'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={idx.toString()}
            style={[styles.dot, {width: dotWidth, backgroundColor}]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 160,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 6,
    marginHorizontal: 3,
  },
});
