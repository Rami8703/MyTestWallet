import * as React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';

import {BlurView, VibrancyView} from '@react-native-community/blur';

export const BlurComponent = () => {
  const {isLightTheme} = useTheme();
  const styles = createStyles();

  return (
    <View style={styles.wrapper}>
      <VibrancyView
        style={styles.blurView}
        blurType={isLightTheme ? 'light' : 'dark'}
        blurAmount={7}
      />
    </View>
  );
};

const createStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    wrapper: {
      position: 'absolute',
      top: -6, // Negative margins to extend the blur effect slightly beyond edges
      left: -10,
      right: -10,
      bottom: -10,
      zIndex: 0,
      borderRadius: 10, // Adjust for rounded corners
      overflow: 'hidden', // Ensure no overflow outside rounded edges
    },
    blurView: {
      flex: 1, // Fill the wrapper container
    },
  });
