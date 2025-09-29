import * as React from 'react';

import {
  StyleSheet,
  View,
  ViewStyle,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Modal from 'react-native-modal';

import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';
import ModalIndicatorIcon from '../../components/svg/ModalIndicatorIcon';

import {CustomTheme, spacing} from '../../theme/theme';

import {horizontalScale} from 'src/utils/scale';

const isAndroid = Platform.OS === 'android';

export type ModalProps = {
  isModalVisible: boolean;
  isTopLine?: boolean;
  isBackdropPressDisabled?: boolean;
  isSwipeDisabled?: boolean;
  stylesCustome?: ViewStyle | ViewStyle[];
  paddingHorizonatalFalse?: boolean;
  animationInTiming?: number;
  animationOutTiming?: number;
  setModalVisible?: (item: boolean) => void;
  setModalFunction?: () => void;
  children: React.ReactNode;
  avoidKeyboard?: boolean;
  isBottom?: boolean;
  indicatorColor?: string;
  indicatorStyles?: ViewStyle;
  onDismiss?: () => void;
};

export const AppModal = (props: ModalProps) => {
  const {
    isModalVisible,
    isTopLine = true,
    isBackdropPressDisabled = false,
    isSwipeDisabled = false,
    stylesCustome,
    paddingHorizonatalFalse,
    animationInTiming = 300,
    animationOutTiming = 300,
    setModalVisible,
    setModalFunction,
    isBottom,
    indicatorColor,
    indicatorStyles,
    onDismiss,
    children,
  } = props;

  const {theme, isLightTheme} = useTheme();
  const styles = createStyles(theme);
  const insets = useSafeAreaInsets();

  const toggleModal = () => {
    if (setModalVisible) {
      setModalVisible(!isModalVisible);
    } else if (setModalFunction) {
      setModalFunction();
    }
  };

  const onBackdropPress = () => {
    if (isBackdropPressDisabled) {
      return;
    }

    setModalVisible?.(false);
  };

  return (
    <Modal
      isVisible={isModalVisible}
      //   statusBarTranslucent={true}
      useNativeDriverForBackdrop={true}
      propagateSwipe={true}
      swipeDirection={isSwipeDisabled ? undefined : 'down'}
      animationInTiming={animationInTiming}
      animationOutTiming={animationOutTiming}
      onSwipeComplete={toggleModal}
      onBackButtonPress={toggleModal}
      onBackdropPress={onBackdropPress}
      onDismiss={onDismiss}
      style={styles.modalContainer}>
      <KeyboardAvoidingView
        behavior="position"
        pointerEvents="box-none"
        style={styles.wrapper}>
        <View style={styles.flexEndContainer}>
          <View style={[styles.modalHeight, styles.containers]}>
            <View
              style={[
                styles.container,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  backgroundColor: isLightTheme ? '#FFF' : '#101012',

                  paddingBottom: isBottom
                    ? 0
                    : insets.bottom === 0
                    ? 60
                    : isAndroid
                    ? 45
                    : insets.bottom * 2,
                  paddingHorizontal: paddingHorizonatalFalse
                    ? 0
                    : spacing.paddingHorizontal,
                },
                stylesCustome,
              ]}>
              {isTopLine && (
                <View style={[styles.lineContainer, indicatorStyles]}>
                  <ModalIndicatorIcon
                    height={horizontalScale(4)}
                    width={horizontalScale(39)}
                    fill={indicatorColor}
                  />
                </View>
              )}

              {children}
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      maxHeight: '100%',
      minHeight: '20%',
      borderTopLeftRadius: spacing.borderRadiusXL,
      borderTopRightRadius: spacing.borderRadiusXL,
      paddingVertical: spacing.paddingHorizontal,
    },
    containers: {
      borderTopLeftRadius: spacing.borderRadiusXL,
      borderTopRightRadius: spacing.borderRadiusXL,
    },
    lineContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: spacing.layoutPaddingM,
    },
    modalContainer: {
      justifyContent: 'flex-end',
      margin: 0,
    },
    wrapper: {margin: 0, flex: 1, justifyContent: 'flex-end'},
    modalHeight: {
      backgroundColor: theme.colors.buttonBackground50,
      // maxHeight: '95%',
    },
    flexEndContainer: {
      justifyContent: 'flex-end',
    },
  });
