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
import {useAnimatedButton} from './useAnimatedButtonNew';
import {spacing, CustomNewTheme} from '../../theme/theme';

import {CustomText} from '../Text/Text';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  textColor?: string;
  disabled?: boolean;
  type: 'primary' | 'secondary' | 'tertiary' | 'danger' | 'outline';
  IconLeft?: React.ElementType;
  IconRight?: React.ElementType;
  loading?: boolean;
  background?: string[];
  fontW?: TextStyle['fontWeight'];
  containerStyles?: StyleProp<ViewStyle>;
};

export const ButtonNew = ({
  onPress,
  text,
  disabled,
  type,
  IconLeft,
  IconRight,
  loading,
  textColor,
  fontW,
  containerStyles,
}: ButtonProps) => {
  const {animations, primaryButton, secondaryButton, animationsHandlers} =
    useAnimatedButton({
      disabled,
    });
  const {theme} = useThemeNew();
  const styles = createStyles(theme);

  if (type === 'primary') {
    return (
      <Animated.View style={animations.animatedStyledButtonContainerStyle}>
        <Pressable
          onPress={onPress}
          disabled={disabled}
          onPressIn={animationsHandlers.onPressInAnimationHandler}
          onPressOut={animationsHandlers.onPressOutAnimationHandler}>
          {({pressed}) => {
            const gradientColors = disabled
              ? primaryButton.disabledGradient
              : pressed
              ? primaryButton.pressedColor
              : primaryButton.gradient;

            const textColorResolved = disabled
              ? primaryButton.disabledText
              : textColor || primaryButton.text;

            return (
              <LinearGradient
                colors={gradientColors}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={[styles.outlined, containerStyles]}>
                {IconLeft && !loading && (
                  <View style={styles.iconLeft}>
                    <IconLeft />
                  </View>
                )}
                {!loading && (
                  <Text
                    style={[styles.textOutlined, {color: textColorResolved}]}
                    allowFontScaling={false}>
                    {text}
                  </Text>
                )}
                {loading && (
                  <ActivityIndicator
                    size="small"
                    color={theme.colors['text/primary']}
                  />
                )}
                {IconRight && !loading && (
                  <View style={styles.iconRight}>
                    <IconRight />
                  </View>
                )}
              </LinearGradient>
            );
          }}
        </Pressable>
      </Animated.View>
    );
  }

  if (type === 'secondary') {
    return (
      <Animated.View style={animations.animatedStyledButtonContainerStyle}>
        <Pressable
          onPress={onPress}
          disabled={disabled}
          onPressIn={animationsHandlers.onPressInAnimationHandler}
          onPressOut={animationsHandlers.onPressOutAnimationHandler}>
          {({pressed}) => {
            const gradientColors = disabled
              ? secondaryButton.disabledGradient
              : pressed
              ? secondaryButton.pressedColor
              : secondaryButton.gradient;

            const textColorResolved = disabled
              ? secondaryButton.disabledText
              : textColor || secondaryButton.text;

            return (
              <LinearGradient
                colors={gradientColors}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={[styles.outlined, containerStyles]}>
                {IconLeft && !loading && (
                  <View style={styles.iconLeft}>
                    <IconLeft />
                  </View>
                )}
                {!loading && (
                  <Text
                    style={[styles.textOutlined, {color: textColorResolved}]}
                    allowFontScaling={false}>
                    {text}
                  </Text>
                )}
                {loading && (
                  <ActivityIndicator
                    size="small"
                    color={secondaryButton.text}
                  />
                )}
                {IconRight && !loading && (
                  <View style={styles.iconRight}>
                    <IconRight />
                  </View>
                )}
              </LinearGradient>
            );
          }}
        </Pressable>
      </Animated.View>
    );
  }

  if (type === 'tertiary') {
    return (
      <Animated.View style={animations.animatedStyledButtonContainerStyle}>
        <Pressable
          onPress={onPress}
          disabled={disabled}
          onPressIn={animationsHandlers.onPressInAnimationHandler}
          onPressOut={animationsHandlers.onPressOutAnimationHandler}>
          {({pressed}) => {
            const gradientColors = disabled
              ? secondaryButton.disabledGradient
              : pressed
              ? secondaryButton.pressedColor
              : secondaryButton.gradient;

            const textColorResolved = disabled
              ? secondaryButton.disabledText
              : textColor || secondaryButton.text;

            return (
              <LinearGradient
                colors={gradientColors}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={[styles.outlined, containerStyles]}>
                {IconLeft && !loading && (
                  <View style={styles.iconLeft}>
                    <IconLeft />
                  </View>
                )}
                {!loading && (
                  <Text
                    style={[styles.textOutlined, {color: textColorResolved}]}
                    allowFontScaling={false}>
                    {text}
                  </Text>
                )}
                {loading && (
                  <ActivityIndicator
                    size="small"
                    color={secondaryButton.text}
                  />
                )}
                {IconRight && !loading && (
                  <View style={styles.iconRight}>
                    <IconRight />
                  </View>
                )}
              </LinearGradient>
            );
          }}
        </Pressable>
      </Animated.View>
    );
  }

  if (type === 'outline') {
    return (
      <Animated.View style={animations.animatedStyledButtonContainerStyle}>
        <Pressable
          onPress={onPress}
          disabled={disabled}
          onPressIn={animationsHandlers.onPressInAnimationHandler}
          onPressOut={animationsHandlers.onPressOutAnimationHandler}>
          {({pressed}) => {
            const gradientColors = disabled
              ? secondaryButton.disabledGradient
              : pressed
              ? secondaryButton.pressedColor
              : secondaryButton.gradient;

            const textColorResolved = disabled
              ? secondaryButton.disabledText
              : textColor || secondaryButton.text;

            return (
              <View style={[styles.outlined, containerStyles]}>
                {IconLeft && !loading && (
                  <View style={styles.iconLeft}>
                    <IconLeft />
                  </View>
                )}
                {!loading && (
                  <Text
                    style={[styles.textOutlined, {color: textColorResolved}]}
                    allowFontScaling={false}>
                    {text}
                  </Text>
                )}
                {loading && (
                  <ActivityIndicator
                    size="small"
                    color={secondaryButton.text}
                  />
                )}
                {IconRight && !loading && (
                  <View style={styles.iconRight}>
                    <IconRight />
                  </View>
                )}
              </View>
            );
          }}
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
          colors={primaryButton.gradient}
          style={[styles.container, containerStyles]}>
          {IconLeft && (
            <View style={styles.iconLeft}>
              <IconLeft />
            </View>
          )}
          <CustomText color={'white'} fontW={fontW || '600'} fontS={16}>
            {text}
          </CustomText>
          {IconRight && (
            <View style={styles.iconRight}>
              <IconRight />
            </View>
          )}
          {loading && (
            <ActivityIndicator
              style={styles.loader}
              size="small"
              color={'white'}
            />
          )}
        </LinearGradient>
      </Pressable>
    </Animated.View>
  );
};

const createStyles = (theme: CustomNewTheme) =>
  StyleSheet.create({
    container: {
      padding: spacing.layoutPaddingM,
      borderRadius: spacing.borderRadius,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      borderWidth: 1,
    },
    outlined: {
      padding: spacing.layoutPaddingM,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    textOutlined: {
      fontFamily: 'HarmonyOS_Sans_Medium',
      fontSize: 16,
      fontWeight: '600',
    },
    iconLeft: {
      marginRight: 10,
      height: 18,
      width: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconRight: {
      marginLeft: 10,
      height: 18,
      width: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loader: {
      marginLeft: 10,
    },
  });
