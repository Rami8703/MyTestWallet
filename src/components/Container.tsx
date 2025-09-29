import React from 'react';

import {Platform, StyleSheet, View} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {LayoutPropsType} from '../types/components';

const Container = ({children, style, isHeader}: LayoutPropsType) => {
  const insets = useSafeAreaInsets();

  const isAndroid = Platform.OS === 'android';

  const paddingTopAndroid = insets.top === 0 ? 60 : insets.bottom * 2;
  const paddingBottomAndroid = insets.bottom === 0 ? 30 : insets.bottom;

  return (
    <View
      style={[
        styles.container,
        style,

        {
          paddingTop: isAndroid
            ? paddingTopAndroid
            : isHeader
            ? 0
            : insets.top * 2,
          paddingBottom: isAndroid ? paddingBottomAndroid : insets.bottom,
        },
      ]}>
      {children}
    </View>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
