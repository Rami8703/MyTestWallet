import * as React from 'react';
import {
  TextInput as TxtInput,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  Pressable,
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

import {spacing, CustomNewTheme} from '../../theme/theme';
import {CustomText} from '../Text/Text';
import {useInput} from './useInput';
import EyeIcon from '../../assets/icons/ic-eye-new.svg';
import EyeClosed from '../../assets/icons/ic-eye-slesh.svg';
import IcSearch from '../svg/new/IcSearch';
import {useFocusEffect} from '@react-navigation/native';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';
import {CustomTextNew} from 'components/TextNew/TextNew';

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
  leftButton?: React.ReactNode;
  leftButtonText?: string;
  LeftTextIcon?: React.ReactNode;
  LeftTextIconPress?: () => void;
  onLeftTextPress?: () => void;
  onLeftIconPress?: () => void;
  placeholder?: string;
  placeholderTextColor?: string;
  heightInput?: number;
  disableRightButton?: boolean;
  containerStyles?: any;
  inputContainerStyles?: any;
  inputStyles?: any;
  iconProps?: any;
  firstLeftButtonText?: string;
  firstLeftButtonTextColor?: string;
  onFirstLeftTextPress?: () => void;
  leftButtonTextColor?: string;
}

export const InputNew = React.forwardRef<TxtInput, CustomInputProps>(
  (props, ref) => {
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
      leftButton,
      leftButtonText,
      onLeftTextPress,
      LeftTextIconPress,
      LeftTextIcon,
      placeholder,
      placeholderTextColor,
      heightInput,
      disableRightButton = false,
      containerStyles,
      inputContainerStyles,
      inputStyles,
      iconProps,
      firstLeftButtonText,
      onFirstLeftTextPress,
      firstLeftButtonTextColor,
      leftButtonTextColor,
      ...restProps
    } = props;

    const [isFocused, setIsFocused] = React.useState(false);
    const [isSecure, setSecure] = React.useState(!!secureTextEntry);
    const {borderColor, wraperColor, backgroundColor} = useInput({
      isFocused,
      isError: !!error,
      isDisabled: !!disabled,
    });

    const {theme} = useThemeNew();
    const styles = createStyles(theme);

    const inputRef = React.useRef<TxtInput>(null);

    React.useImperativeHandle(ref, () => inputRef.current as TxtInput, []);

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

    React.useEffect(() => {
      if (disabled) {
        setIsFocused(false);
        inputRef.current?.blur();
      }
    }, [disabled]);

    const inputOpacity = disabled ? 0.5 : 1;

    return (
      <Pressable
        onPress={handleContainerPress}
        style={styles.mainContainer}
        disabled={disabled}>
        {title && <CustomTextNew fontType={'SubtitleM'}>{title}</CustomTextNew>}
        <View
          style={[
            styles.wraper,
            {
              backgroundColor: wraperColor,
              borderRadius: spacing.layoutPaddingL,
            },
          ]}>
          <View
            style={[
              styles.container,
              {
                opacity: inputOpacity,
                backgroundColor: backgroundColor,
                borderColor: borderColor,
                height: heightInput ?? (isSearch ? 40 : 52),
                borderRadius: spacing.layoutPaddingL,
                ...Platform.select({
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
                  {
                    color: error
                      ? theme.colors['text/error']
                      : theme.colors['text/primary'],
                  },
                ]}>
                {label}
              </Text>
            )}
            <View style={[styles.inputContainer, inputContainerStyles]}>
              {isSearch && <IcSearch {...iconProps} />}
              <TextInput
                ref={inputRef}
                allowFontScaling={false}
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
                placeholder={placeholder}
                placeholderTextColor={
                  placeholderTextColor || theme.colors['text/tertiary']
                }
                style={[
                  styles.input,
                  {
                    height: isSearch ? 40 : 52,
                    paddingVertical: 0,
                    paddingTop: isText ? 14 : 0,
                    textAlignVertical: isAndroid && isText ? 'top' : 'center',
                    paddingBottom: isAndroid && !isSearch ? 3 : 0,
                  },
                  inputStyles,
                ]}
              />
              {isShowEye && (
                <TouchableOpacity
                  onPress={onEyePress}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: label ? -16 : 0,
                  }}>
                  {isSecure ? <EyeClosed /> : <EyeIcon />}
                </TouchableOpacity>
              )}
              {firstLeftButtonText && onFirstLeftTextPress && (
                <TouchableOpacity
                  onPress={onFirstLeftTextPress}
                  disabled={disableRightButton}>
                  <CustomText
                    color={
                      firstLeftButtonTextColor || theme.colors['text/tertiary']
                    }
                    fontW={'700'}>
                    {firstLeftButtonText}
                  </CustomText>
                </TouchableOpacity>
              )}
              {LeftTextIcon && (
                <TouchableOpacity onPress={LeftTextIconPress}>
                  {LeftTextIcon}
                </TouchableOpacity>
              )}
              {leftButton}
              {leftButtonText && onLeftTextPress && (
                <TouchableOpacity
                  onPress={onLeftTextPress}
                  disabled={disableRightButton}
                  style={{opacity: !disabled && disableRightButton ? 0.5 : 1}}>
                  <CustomText
                    color={leftButtonTextColor || theme.colors['text/tertiary']}
                    fontW={'700'}>
                    {leftButtonText}
                  </CustomText>
                </TouchableOpacity>
              )}
              {leftText && (
                <CustomText color={theme.colors['text/tertiary']} fontW={'500'}>
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
  },
);

const createStyles = (theme: CustomNewTheme) =>
  StyleSheet.create({
    input: {
      borderRadius: spacing.layoutPaddingL,
      flex: 1,
      fontWeight: '600',
      fontFamily: 'HarmonyOS_Sans_Medium',
      color: theme.colors['text/primary'],
    },
    mainContainer: {
      rowGap: 8,
    },
    container: {
      borderWidth: 1,
      paddingHorizontal: spacing.layoutPaddingM,
    },
    label: {
      fontWeight: '700',
      fontSize: 12,
      fontFamily: 'HarmonyOS_Sans_Medium',
      paddingLeft: isAndroid ? spacing.layoutPaddingXS : 0,
    },
    wraper: {
      padding: 0,
    },
    errorContainer: {},
    error: {
      color: theme.colors['text/error'],
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      columnGap: spacing.containerPaddingV,
    },
  });
