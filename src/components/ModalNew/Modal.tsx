import * as React from 'react';

import {
  StyleSheet,
  View,
  ViewStyle,
  Platform,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Close from 'components/svg/Close';

import {CustomTextNew} from 'components/TextNew/TextNew';
import {CustomNewTheme, spacing} from '../../theme/theme';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';

export type ModalProps = {
  isModalVisible: boolean;
  isTopLine?: boolean;
  isHeader?: boolean;
  isBackdropPressDisabled?: boolean;
  isSwipeDisabled?: boolean;
  stylesCustome?: ViewStyle;
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
  headerTitle?: string;
};

export const AppModalNew = (props: ModalProps) => {
  const {
    isModalVisible,
    isTopLine = true,
    isHeader = true,
    isBackdropPressDisabled = false,
    isSwipeDisabled = false,
    stylesCustome,
    paddingHorizonatalFalse,
    animationInTiming = 300,
    animationOutTiming = 300,
    setModalVisible,
    setModalFunction,
    isBottom,
    indicatorStyles,
    headerTitle,
    children,
  } = props;

  const {theme, isLightTheme} = useThemeNew();
  const styles = createStyles(
    theme,
    isLightTheme,
    isBottom,
    paddingHorizonatalFalse,
  );
  const toggleModal = () => {
    if (setModalVisible) {
      setModalVisible(!isModalVisible);
    } else if (setModalFunction) {
      setModalFunction();
    }
  };

  const onBackdropPress = () => {
    if (!isBackdropPressDisabled) {
      toggleModal();
    }
  };

  return (
    <Modal
      isVisible={isModalVisible}
      useNativeDriverForBackdrop
      propagateSwipe
      swipeDirection={isSwipeDisabled ? undefined : 'down'}
      animationInTiming={animationInTiming}
      animationOutTiming={animationOutTiming}
      onSwipeComplete={toggleModal}
      onBackButtonPress={toggleModal}
      onBackdropPress={onBackdropPress}
      style={styles.modalContainer}>
      <KeyboardAvoidingView
        behavior="padding"
        pointerEvents="box-none"
        style={styles.wrapper}>
        <View style={styles.flexEndContainer}>
          <View style={[styles.modalHeight, styles.containers]}>
            <View style={[styles.container, stylesCustome]}>
              {isTopLine && (
                <View style={[styles.lineContainer, indicatorStyles]}>
                  <View style={styles.lineItem} />
                </View>
              )}
              {isHeader && (
                <View style={styles.headerContainer}>
                  <CustomTextNew
                    color={theme.colors['text/primary']}
                    fontType={'HeadingS'}>
                    {headerTitle}
                  </CustomTextNew>
                  <TouchableOpacity
                    onPress={() => setModalVisible?.(false)}
                    style={styles.closeButton}>
                    <Close stroke={theme.colors['text/primary']} />
                  </TouchableOpacity>
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

const createStyles = (
  theme: CustomNewTheme,
  isLightTheme: boolean | null,
  isBottom?: boolean,
  noPadding?: boolean,
) =>
  StyleSheet.create({
    container: {
      maxHeight: '100%',
      minHeight: '20%',
      borderTopLeftRadius: spacing.borderRadiusXL,
      borderTopRightRadius: spacing.borderRadiusXL,
      paddingVertical: spacing.paddingHorizontal,
      paddingHorizontal: noPadding ? 0 : spacing.paddingHorizontal,
      backgroundColor: isLightTheme
        ? '#FFF'
        : theme.colors['surface/elevation/popup'],
      paddingBottom: isBottom
        ? 0
        : Platform.OS === 'android'
        ? 45
        : spacing.paddingHorizontal * 2,
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
    wrapper: {
      margin: 0,
      flex: 1,
      justifyContent: 'flex-end',
    },
    modalHeight: {
      // maxHeight: '95%',
    },
    flexEndContainer: {
      justifyContent: 'flex-end',
    },
    headerContainer: {
      position: 'relative',
      alignItems: 'center',
      height: 40,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    closeButton: {
      position: 'absolute',
      right: 0,
      padding: 8,
    },
    lineItem: {
      width: 40,
      height: 4,
      backgroundColor: theme.colors['icon/primary'],
      borderRadius: 10,
    },
  });
