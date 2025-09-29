import * as React from 'react';
import {
  TextInput as TxtInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Pressable,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import {spacing, CustomTheme} from '../../theme/theme';
import {CustomText} from '../Text/Text';
import {useInput} from './useInput';
import EyeIcon from '../../assets/icons/ic-eye-new.svg';
import EyeClosed from '../../assets/icons/ic-eye-slesh.svg';

import SearchIcon from '../../components/svg/SearchIcon';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';
import {useFocusEffect} from '@react-navigation/native';

const isAndroid = Platform.OS === 'android';

interface CustomInputProps extends TextInputProps {
  label?: string;
  title?: string;
  error?: string;
  disabled?: boolean;
  isText?: boolean;
  secureTextEntry?: boolean;
  isShowEye?: boolean;
  isSearch?: boolean;
  LeftIcon?: React.ReactNode;
  leftText?: string;
  leftButtonText?: string;
  LeftTextIcon?: React.ReactNode;
  LeftTextIconPress?: () => void;
  onLeftTextPress?: () => void;
  onLeftIconPress?: () => void;
  placeholderTextColor?: string;
  heightInput?: number;
  disableRightButton?: boolean;
  containerStyles?: any;
  inputContainerStyles?: any;
  inputStyles?: any;
  iconProps?: any;
  noBorder?: boolean;
  colorText?: string;
}

export const Input = (props: CustomInputProps) => {
  const {
    label,
    disabled,
    isShowEye,
    isSearch,
    title,
    error,
    isText,
    secureTextEntry,
    LeftIcon,
    onLeftIconPress,
    leftText,
    leftButtonText,
    onLeftTextPress,
    LeftTextIconPress,
    LeftTextIcon,
    placeholderTextColor,
    heightInput,
    disableRightButton = false,
    containerStyles,
    inputContainerStyles,
    inputStyles,
    iconProps,
    noBorder,
    colorText,
    ...restProps
  } = props;
  const [isFocused, setIsFocused] = React.useState(false);
  const [isSecure, setSecure] = React.useState(!!secureTextEntry);
  const {borderColor, wraperColor, backgroundColor} = useInput({
    isFocused,
    isError: !!error,
    isDisabled: !!disabled,
  });

  const {theme} = useTheme();
  const styles = createStyles(theme);

  const inputRef = React.useRef<TxtInput>(null);

  const handleContainerPress = () => {
    if (inputRef.current && !disabled) {
      inputRef.current.focus();
    }
  };

  const onEyePress = () => {
    setSecure(!isSecure);
  };

  useFocusEffect(
    React.useCallback(() => {
      setIsFocused(false);
    }, []),
  );

  return (
    <Pressable onPress={handleContainerPress} style={styles.mainContainer}>
      {title && (
        <CustomText color={theme.colors.primary800} fontW={'600'} fontS={14}>
          {title}
        </CustomText>
      )}
      <View
        style={[
          styles.wraper,
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: wraperColor,
            borderRadius: spacing.borderRadiusM,
          },
        ]}>
        <View
          style={[
            styles.container,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              backgroundColor: backgroundColor,
              borderColor: borderColor,
              borderWidth: noBorder ? 0 : 1,
              borderRadius: isSearch
                ? spacing.borderRadius
                : spacing.borderRadiusM,
              ...Platform.select({
                ios: {
                  paddingVertical:
                    label || isSearch
                      ? spacing.layoutPaddingS
                      : spacing.layoutPaddingM,
                },
                android: {
                  paddingTop: label ? spacing.layoutPaddingXS : 0,
                },
              }),
            },
            containerStyles,
          ]}>
          {label && (
            <Text
              allowFontScaling={false}
              style={[
                styles.label,
                {color: error ? theme.colors.red100 : theme.colors.primary500},
              ]}>
              {label}
            </Text>
          )}
          <View style={[styles.inputContainer, inputContainerStyles]}>
            {isSearch && <SearchIcon {...iconProps} />}
            <TextInput
              focusable={false}
              allowFontScaling={false}
              ref={inputRef}
              autoCapitalize="none"
              editable={!disabled}
              autoCorrect={false}
              secureTextEntry={isSecure}
              onBlur={(
                event: NativeSyntheticEvent<TextInputFocusEventData>,
              ) => {
                props.onBlur?.(event);
                setIsFocused(false);
              }}
              onFocus={(
                event: NativeSyntheticEvent<TextInputFocusEventData>,
              ) => {
                setIsFocused(true);
                props.onFocus?.(event);
              }}
              {...restProps}
              placeholderTextColor={placeholderTextColor || theme.colors.grey}
              style={[
                styles.input,

                // eslint-disable-next-line react-native/no-inline-styles
                {
                  color: colorText ? colorText : theme.colors.primary800,
                  height: isAndroid
                    ? isText
                      ? heightInput ?? 60
                      : undefined
                    : isText
                    ? heightInput ?? 60
                    : spacing.layoutPaddingL,
                  paddingVertical: isAndroid
                    ? label || isSearch
                      ? spacing.layoutPaddingS
                      : spacing.layoutPaddingM
                    : undefined,
                  textAlignVertical: isAndroid && isText ? 'top' : 'auto',
                },
                inputStyles,
              ]}
            />
            {isShowEye && (
              <View>
                <TouchableOpacity
                  onPress={onEyePress}
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: label ? -16 : 0,
                  }}>
                  {isSecure ? <EyeClosed /> : <EyeIcon />}
                </TouchableOpacity>
              </View>
            )}
            {LeftTextIcon && (
              <TouchableOpacity onPress={LeftTextIconPress}>
                {LeftTextIcon}
              </TouchableOpacity>
            )}
            {leftButtonText && onLeftTextPress && (
              <TouchableOpacity
                onPress={onLeftTextPress}
                disabled={disableRightButton}>
                <CustomText
                  color={
                    disableRightButton
                      ? theme.colors.primary650
                      : theme.colors.primary500
                  }
                  fontW={'700'}>
                  {leftButtonText}
                </CustomText>
              </TouchableOpacity>
            )}
            {leftText && (
              <CustomText color={theme.colors.primary250} fontW={'500'}>
                {leftText}
              </CustomText>
            )}
            {LeftIcon && (
              <TouchableOpacity
                onPress={onLeftIconPress ? onLeftIconPress : onEyePress}>
                {LeftIcon}
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.error} allowFontScaling={false}>
            {error}
          </Text>
        </View>
      )}
    </Pressable>
  );
};

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    input: {
      borderRadius: spacing.borderRadiusM,
      flex: 1,
      fontWeight: '600',
      fontFamily: 'HarmonyOS',
    },
    mainContainer: {
      rowGap: 8,
    },
    container: {
      borderColor: theme.colors.primary500,
      borderWidth: 1,
      paddingHorizontal: spacing.layoutPaddingM,
    },
    label: {
      fontWeight: '700',
      fontSize: 12,
      fontFamily: 'HarmonyOS',
      paddingLeft: isAndroid ? spacing.layoutPaddingXS : 0,
    },
    wraper: {
      padding: 0,
    },
    errorContainer: {},
    error: {
      color: theme.colors.red100,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      columnGap: spacing.containerPaddingV,
    },
  });
