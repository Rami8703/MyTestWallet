import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';

const SmallLoader = (): JSX.Element => {
  const {theme} = useTheme();

  return (
    <View style={styles.center}>
      <ActivityIndicator size="small" color={theme.colors.primary800} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SmallLoader;
