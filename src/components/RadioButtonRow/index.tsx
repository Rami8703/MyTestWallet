import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {RadioButtonComponent} from 'components/RadioButton/RadioButton';
import {CustomText} from 'components/Text/Text';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';

type RadioButtonRowProps = {
  label: string;
  isSelected: boolean;
  onPress: () => void;
  withSeparator?: boolean;
};

export const RadioButtonRowComponent: React.FC<RadioButtonRowProps> = ({
  label,
  isSelected,
  onPress,
  withSeparator = false, // Default to `false` for optional prop
}) => {
  const {theme} = useTheme(); // Use theme context for dynamic theming
  const styles = createStyles(theme);

  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.rowRadioButton}>
        <CustomText
          color={theme.colors.primary800}
          style={styles.text}
          fontS={14}
          fontW="400">
          {label}
        </CustomText>
        <RadioButtonComponent isSelected={isSelected} onPress={onPress} />
      </TouchableOpacity>
      {withSeparator && <View style={styles.separator} />}
    </View>
  );
};

const createStyles = (theme: any) =>
  StyleSheet.create({
    rowRadioButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacing.layoutPaddingM,
      paddingVertical: theme.spacing.layoutPaddingS,
      alignItems: 'center',
    },
    separator: {
      height: 1,
      backgroundColor: theme.colors.secondary900,
      marginHorizontal: theme.spacing.layoutPaddingXS,
    },
    text: {
      width: '80%',
    },
  });
