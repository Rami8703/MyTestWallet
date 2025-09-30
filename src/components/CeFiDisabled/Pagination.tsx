import React from 'react';
import {StyleSheet, View, Animated, Dimensions} from 'react-native';
import {gradientColor, spacing} from 'theme/theme';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';
import LinearGradient from 'react-native-linear-gradient';
import {SlideT} from 'components/CeFiDisabled/data';

const {width} = Dimensions.get('window');

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

type PaginationT = {
  data: SlideT[];
  scrollX: any;
  index: number;
};
const Pagination = ({data, scrollX, index}: PaginationT) => {
  const {theme} = useTheme();
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [8, 30, 8],
          extrapolate: 'clamp',
        });

        return (
          <AnimatedLinearGradient
            colors={
              i === index
                ? gradientColor.gradient2
                : [theme.colors.primary650, theme.colors.primary650]
            }
            key={i.toString()}
            start={{x: 0.0, y: 0.5}}
            end={{x: 1.0, y: 0.5}}
            style={[styles.dot, {width: dotWidth}]}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.layoutPaddingL,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 8,
    marginHorizontal: 3,
  },
});

export default Pagination;
