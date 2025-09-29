import React from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';

const isAndroid = Platform.OS === 'android';

type Props = {
  children: React.ReactNode;
  isHeader?: boolean;
  isBottom?: boolean;
  lessOpacity?: boolean;
};

const WrapperNewContainer = ({
  children,
  isHeader,
  isBottom,
  lessOpacity,
}: Props) => {
  const insets = useSafeAreaInsets();
  const {isLightTheme} = useThemeNew();

  const backgroundSource = isLightTheme
    ? lessOpacity
      ? require('../../assets/images/white-background-second.png')
      : require('../../assets/images/white-background.png')
    : lessOpacity
    ? require('../../assets/images/black-background-second.jpg')
    : require('../../assets/images/dark-background.png');

  const paddingBottomAndroid = insets.bottom === 0 ? 30 : insets.bottom;

  const paddingTop =
    insets.top < 30
      ? isHeader
        ? 30
        : 60
      : isHeader
      ? insets.top
      : scale(insets.top * 1.8);

  const paddingBottom = isBottom
    ? 0
    : insets.bottom === 0
    ? 30
    : isAndroid
    ? paddingBottomAndroid
    : insets.bottom;

  return (
    <View style={styles.flex}>
      <FastImage
        source={backgroundSource}
        style={StyleSheet.absoluteFillObject}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={[styles.flex, {paddingTop, paddingBottom}]}>{children}</View>
    </View>
  );
};

export default WrapperNewContainer;

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
});
