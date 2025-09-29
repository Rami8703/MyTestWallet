import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';
import React from 'react';
import {StyleSheet, TouchableOpacity, ViewStyle} from 'react-native';
import {CustomTheme, HIT_SLOP} from 'theme/theme';
import RadioButtonIcon from '../../assets/icons/ic-radio-button.svg';

type RadioButtonProps = {
  isSelected: boolean;
  onPress?: () => void;
  disabled?: boolean;
  size?: number;
};

export const RadioButtonComponent = ({
  isSelected,
  onPress,
  disabled = false,
  size = 20,
}: RadioButtonProps) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);

  return (
    <TouchableOpacity
      onPress={onPress}
      hitSlop={HIT_SLOP}
      disabled={disabled}
      style={[
        styles.radioButtonContainer,
        {
          width: size,
          height: size,
          borderColor:
            disabled || isSelected ? 'transparent' : theme.colors.grey,
        },
      ]}>
      {isSelected && <RadioButtonIcon width={size} height={size} />}
    </TouchableOpacity>
  );
};

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    radioButtonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 20,
    },
  });
