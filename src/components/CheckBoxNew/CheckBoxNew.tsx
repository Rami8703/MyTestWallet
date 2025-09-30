import * as React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {CustomNewTheme} from 'theme/theme';

import CheckBoxIcon from 'components/svg/new/CheckBoxIcon';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';

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

export const CheckBoxNew = ({onPress, isChecked, hitSlop}: CheckBoxProps) => {
  const {theme} = useThemeNew();
  const styles = createStyles(theme);

  return (
    <Pressable hitSlop={hitSlop} onPress={onPress}>
      {isChecked ? (
        <CheckBoxIcon />
      ) : (
        <View style={[styles.checkbox, styles.checkboxBlack]} />
      )}
    </Pressable>
  );
};

const createStyles = (theme: CustomNewTheme) =>
  StyleSheet.create({
    checkbox: {height: 20, width: 20, borderRadius: 4},
    checkboxBlack: {
      borderWidth: 1,
      borderColor: theme.colors['icon/disabled'],
    },
  });
