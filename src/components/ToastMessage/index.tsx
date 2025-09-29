import React from 'react';

import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {BaseToastProps} from 'react-native-toast-message';

import LinearGradient from 'react-native-linear-gradient';

import ErrorIcon from '../../assets/icons/toast/ic-error.svg';
import WarningIcon from '../../assets/icons/toast/ic-warning.svg';
import SuccessIcon from '../../assets/icons/toast/ic-success.svg';
import InfoIcon from '../../assets/icons/toast/ic-info.svg';

import {colors} from 'theme/theme';

interface CustomToastProps extends BaseToastProps {
  type: 'success' | 'error' | 'info' | 'warning';
}

const icons = {
  error: ErrorIcon,
  warning: WarningIcon,
  success: SuccessIcon,
  info: InfoIcon,
};

const textColors = {
  error: colors.red900,
  warning: colors.yellow900,
  success: colors.green800,
  info: colors.blue900,
};

const backgroundColors = {
  error: colors.primary400,
  warning: colors.yellow300,
  success: colors.green400,
  info: colors.blue300,
};

const dropShadowColors = {
  error: '#F755554D',
  warning: '#FFB23D73',
  success: '#57DC9C73',
  info: '#0B6EF973',
};

const innerShadowColors = {
  error: '#FF949433',
  warning: '#FFCEA133',
  success: '#71FB6E33',
  info: '#0B6EF933',
};

const ToastMessage = ({text1, type}: CustomToastProps) => {
  const Icon = icons[type];

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: backgroundColors[type],
          shadowColor: dropShadowColors[type],
        },
      ]}>
      <View style={styles.iconContainer}>
        <Icon />

        <LinearGradient
          colors={[innerShadowColors[type], 'transparent']}
          style={styles.iconShadow}
        />
      </View>

      <Text style={[styles.text, {color: textColors[type]}]}>{text1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 42,
    width: Dimensions.get('screen').width - 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  iconContainer: {
    width: 26,
    height: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: colors.white,
    backgroundColor: colors.white,
    shadowColor: '#F75555',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  iconShadow: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 26,
  },
  text: {
    flexShrink: 1,
    fontSize: 14,
    fontFamily: 'HarmonyOS',
    flexShrink: 1,
  },
});

export default ToastMessage;
