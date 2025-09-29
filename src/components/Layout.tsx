import React from 'react';

import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors, gradientColor, spacing} from '../theme/theme';

import {LayoutPropsType} from '../types/components';

const Layout = ({children, style}: LayoutPropsType) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={gradientColor.gradient1}
        style={[
          styles.layout,
          style,
          {
            paddingTop: insets.top,
          },
        ]}>
        <View style={styles.top}>
          <View style={styles.shadow} />
        </View>
        <View style={[styles.contentContainer, {paddingBottom: insets.bottom}]}>
          {children}
        </View>
      </LinearGradient>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: {flex: 1},
  layout: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  top: {
    paddingTop: spacing.layoutPaddingL,
    justifyContent: 'flex-end',
    paddingHorizontal: spacing.layoutPaddingL,
  },
  contentContainer: {
    flex: 1,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    backgroundColor: 'white',
    paddingTop: spacing.layoutPaddingL,
    paddingHorizontal: spacing.paddingHorizontal,
  },
  shadow: {
    backgroundColor: colors.primary50,
    height: 40,
    borderRadius: 100,
    paddingHorizontal: spacing.layoutPaddingL,
    top: 25,
  },
});
