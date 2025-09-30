import * as React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import TickIcon from '../../assets/icons/ic-tick-white.svg';
import {CustomTheme, gradientColor} from 'theme/theme';
import LinearGradient from 'react-native-linear-gradient';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';

export type CheckBoxProps = {
  onPress: () => void;
  isChecked: boolean;
  hitSlop?: {
    top: number;
    bottom: number;
    right: number;
    left: number;
  };
};

export const CheckBox = ({onPress, isChecked, hitSlop}: CheckBoxProps) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);

  return (
    <Pressable hitSlop={hitSlop} onPress={onPress}>
      {isChecked ? (
        <LinearGradient
          style={styles.checkbox}
          colors={gradientColor.gradient2}>
          <TickIcon />
        </LinearGradient>
      ) : (
        <View style={[styles.checkbox, styles.checkboxBlack]} />
      )}
    </Pressable>
  );
};

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    checkbox: {height: 24, width: 24, borderRadius: 8},
    checkboxBlack: {
      backgroundColor: theme.colors.background100,
      borderWidth: 1,
      borderColor: theme.colors.buttonBackground100,
    },
  });
