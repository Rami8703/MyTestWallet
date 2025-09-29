import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CustomText} from 'components/Text/Text';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';
import {CustomTheme} from 'theme/theme';

type StepItemProps = {
  stepNumber: number;
  title: string;
  duration: string;
  Icon?: React.ElementType;
};

export const StepItem: React.FC<StepItemProps> = ({
  stepNumber,
  title,
  duration,
  Icon,
}) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);
  return (
    <View style={styles.container}>
      {Icon && (
        <View style={styles.iconContainer}>
          <Icon />
        </View>
      )}

      <View style={styles.content}>
        <CustomText
          color={theme.colors.grey}>{`Step ${stepNumber}`}</CustomText>
        <View style={styles.textContainer}>
          <CustomText color={theme.colors.primary800}>{title}</CustomText>
          <CustomText color={theme.colors.grey}>{duration}</CustomText>
        </View>
      </View>
    </View>
  );
};

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: theme.spacing.containerPaddingX,
    },
    iconContainer: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.secondary900,
      borderRadius: 25,
    },
    content: {
      flex: 1,
      paddingLeft: theme.spacing.layoutPaddingM,
      rowGap: theme.spacing.layoutPaddingXS,
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
