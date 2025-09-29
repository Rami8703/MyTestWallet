import * as React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {CustomText} from 'components/Text/Text';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';
import {CustomTheme, gradientColor} from 'theme/theme';

export type ButtonCardProps = {
  onPress: () => void;
  disabled?: boolean;
  headerText: string;
  underHeaderText: string;
  Icon?: React.ElementType;
  IconComp?: any;
  IconOpacity?: any;
  isHeaderHide?: boolean;
  isDescriptionHide?: boolean;
  isChecked?: boolean;
};

export const ButtonCardNew = ({
  Icon,
  onPress,
  headerText,
  underHeaderText,
  isChecked,
  IconOpacity,
  disabled,
  IconComp,
}: ButtonCardProps) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);

  return (
    <TouchableWithoutFeedback onPress={onPress} disabled={disabled}>
      <LinearGradient
        colors={
          isChecked
            ? [theme.colors.primary1050, theme.colors.primary1050]
            : gradientColor.gradient2
        }
        style={[styles.container, {borderWidth: isChecked ? 1 : 0}]}>
        {Icon && <Icon />}
        {IconComp}
        <CustomText
          fontS={16}
          fontW={'800'}
          style={styles.headerText}
          color={!isChecked ? '#fff' : theme.colors.primary800}>
          {headerText}
        </CustomText>
        <CustomText
          fontS={12}
          fontW={'500'}
          color={!isChecked ? '#fff' : theme.colors.text50}>
          {underHeaderText}
        </CustomText>
        {IconOpacity && (
          <View style={styles.bottomIconContainer}>{IconOpacity}</View>
        )}
      </LinearGradient>
    </TouchableWithoutFeedback>
  );
};

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      borderColor: theme.colors.primary1000,
      borderRadius: theme.spacing.borderRadius,
      width: '49%',
      paddingHorizontal: theme.spacing.layoutPaddingS,
      paddingBottom: theme.spacing.layoutPaddingS,
      paddingTop: theme.spacing.layoutPaddingS,
      overflow: 'hidden',
    },
    headerText: {
      paddingTop: theme.spacing.containerPaddingV,
      paddingBottom: theme.spacing.layoutPaddingM,
    },
    bottomIconContainer: {
      position: 'absolute',
      opacity: 0.1,
      bottom: 0,
      right: -30,
    },
  });
