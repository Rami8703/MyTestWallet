import React, {Dispatch, FC, SetStateAction} from 'react';
import {useTranslation} from 'react-i18next';

import {Modal, Pressable, StyleSheet, View} from 'react-native';

import {CustomNewTheme} from '../theme/theme';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';
import {CustomTextNew} from 'components/TextNew/TextNew';
import IcExclamationMark from 'components/svg/new/IcExclamationMark';

type Props = {
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
};

const ScreenshotWarningModal: FC<Props> = props => {
  const {isVisible, setIsVisible} = props;

  const {theme} = useThemeNew();
  const styles = createStyles(theme);

  return (
    <Modal
      animationType="fade"
      transparent
      visible={isVisible}
      onRequestClose={() => setIsVisible(true)}>
      <Pressable style={styles.container} onPress={() => setIsVisible(false)}>
        <View style={styles.modal}>
          <IcExclamationMark fill={theme.colors['text/primary']} />

          <CustomTextNew
            fontType="SubtitleL"
            color={theme.colors['text/primary']}
            style={styles.text}>
            Please be careful with the screenshot and do not share it with
            anyone.
          </CustomTextNew>
        </View>
      </Pressable>
    </Modal>
  );
};

export default ScreenshotWarningModal;

const createStyles = (theme: CustomNewTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    modal: {
      alignItems: 'center',
      padding: 24,
      gap: 16,
      borderRadius: 16,
      backgroundColor: theme.colors['surface/secondary-solid'],
    },
    text: {
      textAlign: 'center',
    },
  });
};
