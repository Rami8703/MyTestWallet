import React from 'react';
import {CustomTheme, spacing} from 'theme/theme';
import {ActivityIndicator, Pressable, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import {useAnimatedButton} from 'components/Button/useAnimatedButton';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';
import {CustomText} from 'components/Text/Text';

type ButtonProps = {
  onPress: () => void;
  text: string;
  disabled?: boolean;
  loading?: boolean;
};

const ButtonRemove = ({onPress, text, disabled, loading}: ButtonProps) => {
  const {animations, animationsHandlers} = useAnimatedButton({
    disabled,
  });
  const {theme} = useTheme();
  const styles = createStyles(theme);

  return (
    <Animated.View style={[animations.animatedStyledButtonContainerStyle]}>
      <Pressable
        style={styles.container}
        onPress={onPress}
        disabled={disabled}
        onPressIn={animationsHandlers.onPressInAnimationHandler}
        onPressOut={animationsHandlers.onPressOutAnimationHandler}>
        <CustomText fontS={16} fontW="700" color={theme.colors.white}>
          {text}
        </CustomText>
        {loading && <ActivityIndicator size="small" />}
      </Pressable>
    </Animated.View>
  );
};

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.red50,
      padding: spacing.layoutPaddingM,
      borderRadius: spacing.borderRadius,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: theme.spacing.layoutPaddingL,
    },
  });

export default ButtonRemove;
