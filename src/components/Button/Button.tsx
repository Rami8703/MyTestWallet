import * as React from 'react';
import {
  Text,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  View,
  TextStyle,
  StyleProp,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Animated from 'react-native-reanimated';
import {useAnimatedButton} from './useAnimatedButton';
import {spacing, gradientColor, CustomTheme} from '../../theme/theme';

import {CustomText} from '../Text/Text';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  textColor?: string;
  disabled?: boolean;
  type: 'primary' | 'secondary' | 'link' | 'delete';
  IconLeft?: React.ElementType;
  IconRight?: React.ElementType;
  loading?: boolean;
  background?: string[];
  fontW?: TextStyle['fontWeight'];
  containerStyles?: StyleProp<ViewStyle>;
};

export const Button = ({
  onPress,
  text,
  disabled,
  type,
  IconLeft,
  IconRight,
  loading,
  background,
  textColor,
  fontW,
  containerStyles,
}: ButtonProps) => {
  const {animations, colorsButtons, animationsHandlers} = useAnimatedButton({
    disabled,
  });
  const {theme} = useTheme();
  const styles = createStyles(theme);

  if (type === 'secondary') {
    return (
      <Animated.View style={animations.animatedStyledButtonContainerStyle}>
        <Pressable
          onPress={onPress}
          disabled={disabled}
          onPressIn={animationsHandlers.onPressInAnimationHandler}
          onPressOut={animationsHandlers.onPressOutAnimationHandler}>
          <LinearGradient
            colors={
              background || [
                colorsButtons.backGroundColor,
                colorsButtons.backGroundColor,
              ]
            }
            style={[
              styles.outlined,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                borderColor: colorsButtons.border,
                borderWidth: 2,
              },
              containerStyles,
            ]}>
            {IconLeft && (
              <View style={{marginRight: 10}}>
                <IconLeft />
              </View>
            )}

            <Text
              style={[
                styles.textOutlined,
                {color: textColor || colorsButtons.text},
              ]}
              allowFontScaling={false}>
              {text}
            </Text>

            {IconRight && (
              <View style={{marginLeft: 10}}>
                <IconRight />
              </View>
            )}
          </LinearGradient>
        </Pressable>
      </Animated.View>
    );
  }

  if (type === 'link') {
    if (disabled) {
      return (
        <Animated.View style={animations.animatedStyledButtonContainerStyle}>
          <Pressable
            onPress={onPress}
            disabled={disabled}
            onPressIn={animationsHandlers.onPressInAnimationHandler}
            onPressOut={animationsHandlers.onPressOutAnimationHandler}>
            <View style={styles.disabledContainer}>
              <View>
                <View style={styles.linkText}>
                  <CustomText
                    color={theme.colors.buttonBackground100}
                    fontW="600"
                    fontS={16}>
                    {text}
                  </CustomText>
                </View>
              </View>
            </View>
          </Pressable>
        </Animated.View>
      );
    }
    return (
      <Animated.View style={animations.animatedStyledButtonContainerStyle}>
        <Pressable
          onPress={onPress}
          disabled={disabled}
          onPressIn={animationsHandlers.onPressInAnimationHandler}
          onPressOut={animationsHandlers.onPressOutAnimationHandler}>
          <LinearGradient
            colors={gradientColor.gradient2}
            style={styles.containerLink}>
            <View style={styles.mainLink}>
              <LinearGradient
                style={styles.containerLink}
                colors={background || ['#6E4BFF33', '#18A6FF33']}>
                <View style={styles.linkText}>
                  {IconLeft && <IconLeft />}

                  <CustomText color="#348AFF" fontW="600" fontS={16}>
                    {text}
                  </CustomText>
                </View>
              </LinearGradient>
            </View>
          </LinearGradient>
        </Pressable>
      </Animated.View>
    );
  }

  if (type === 'delete') {
    return (
      <Animated.View style={animations.animatedStyledButtonContainerStyle}>
        <Pressable
          onPress={onPress}
          disabled={disabled}
          onPressIn={animationsHandlers.onPressInAnimationHandler}
          onPressOut={animationsHandlers.onPressOutAnimationHandler}>
          <View style={styles.containerDelete}>
            <View style={styles.deleteText}>
              {IconLeft && <IconLeft />}

              <CustomText color={theme.colors.red} fontW="600" fontS={16}>
                {text}
              </CustomText>
            </View>
          </View>
        </Pressable>
      </Animated.View>
    );
  }

  return (
    <Animated.View style={animations.animatedStyledButtonContainerStyle}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        onPressIn={animationsHandlers.onPressInAnimationHandler}
        onPressOut={animationsHandlers.onPressOutAnimationHandler}>
        <LinearGradient
          colors={colorsButtons.gradient}
          style={[styles.container, containerStyles]}>
          {IconLeft && (
            <View style={{marginRight: 10}}>
              <IconLeft />
            </View>
          )}
          <CustomText color={'white'} fontW={fontW || '600'} fontS={16}>
            {text}
          </CustomText>
          {IconRight && (
            <View style={{marginLeft: 10}}>
              <IconRight />
            </View>
          )}
          {loading && (
            <ActivityIndicator
              style={{marginLeft: 10}}
              size="small"
              color={'white'}
            />
          )}
        </LinearGradient>
      </Pressable>
    </Animated.View>
  );
};

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      padding: spacing.layoutPaddingM,
      borderRadius: spacing.borderRadius,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    outlined: {
      padding: spacing.layoutPaddingM,
      borderRadius: spacing.borderRadius,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: theme.colors.primary500,
      borderWidth: 2,
      flexDirection: 'row',
    },
    textOutlined: {
      color: theme.colors.primary500,
      fontFamily: 'Manrope-Regular',
      fontSize: 16,
      fontWeight: '600',
    },
    textOutlinedDisabled: {
      color: theme.colors.primary200,
    },
    textLink: {
      color: theme.colors.primary500,
    },
    containerLink: {
      borderRadius: 16,
    },
    linkText: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: spacing.paddingHorizontal - 2,
      columnGap: 10,
    },
    deleteText: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: spacing.paddingHorizontal - 2,
    },
    containerDelete: {
      borderWidth: 1,
      borderColor: theme.colors.red,
      borderRadius: 16,
    },
    flex: {
      flex: 1,
      borderRadius: 16,
    },
    mainLink: {
      backgroundColor: theme.colors.buttonBackground50,
      margin: 2,
      borderRadius: 16,
    },
    disabledContainer: {
      borderWidth: 1,
      backgroundColor: theme.colors.buttonBackground150,
      borderColor: theme.colors.buttonBackground100,
      borderRadius: 16,
    },
  });
