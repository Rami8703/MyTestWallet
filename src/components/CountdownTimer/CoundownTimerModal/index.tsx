import React, {Dispatch, FC, SetStateAction} from 'react';
import {useTranslation} from 'react-i18next';

import {Pressable, StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';

import {CustomText} from 'components/Text/Text';
import {AppModal} from 'components/Modal/Modal';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';
import {Button} from 'components/Button/Button';
import Tip from 'components/Tip';

import holdAnimation from '../../../assets/animation/hold.json';
import CloseIcon from '../../../assets/icons/ic-close-circle.svg';

import CountdownTimer from './CountdownTimer';

import {horizontalScale} from 'src/utils/scale';

type Props = {
  isModalVisible: boolean;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  onClose: () => void;
};

const CountdownTimerModal: FC<Props> = props => {
  const {isModalVisible, setIsModalVisible, onClose} = props;

  const {theme} = useTheme();
  const styles = createStyles();

  const {t} = useTranslation();

  return (
    <AppModal
      isModalVisible={isModalVisible}
      isTopLine={false}
      isSwipeDisabled
      isBackdropPressDisabled
      setModalVisible={setIsModalVisible}>
      <Pressable
        style={({pressed}) => [
          styles.closeButton,
          {opacity: pressed ? 0.7 : 1},
        ]}
        onPress={onClose}>
        <CloseIcon />
      </Pressable>

      <LottieView
        style={styles.holdAnimation}
        source={holdAnimation}
        autoPlay
        loop={true}
      />

      <CustomText
        color={theme.colors.black900}
        fontS={horizontalScale(20)}
        fontW="700"
        lineH={horizontalScale(28)}
        style={styles.title}>
        {t('COUNTDOWNTIMERMODAL.TITLE')}
      </CustomText>

      <CustomText
        color={theme.colors.grey600}
        fontS={horizontalScale(14)}
        fontW="400"
        lineH={horizontalScale(20)}
        style={styles.description}>
        {t('COUNTDOWNTIMERMODAL.DESCRIPTION1')}

        <CustomText
          color={theme.colors.black900}
          fontS={horizontalScale(14)}
          fontW="400"
          lineH={horizontalScale(20)}>
          Fintopio
        </CustomText>

        {t('COUNTDOWNTIMERMODAL.DESCRIPTION2')}
      </CustomText>

      <CountdownTimer />

      <Tip
        text={t('COUNTDOWNTIMERMODAL.TIP')}
        containerStyles={styles.tipContainer}
      />

      <CustomText
        color={theme.colors.grey600}
        fontS={horizontalScale(14)}
        fontW="400"
        lineH={horizontalScale(20)}
        style={styles.footerText}>
        {t('COUNTDOWNTIMERMODAL.FOOTERTEXT')}
      </CustomText>

      <View style={styles.okButtonContainer}>
        <Button text={t('COMMON.OK')} type="primary" onPress={onClose} />
      </View>
    </AppModal>
  );
};

const createStyles = () => {
  return StyleSheet.create({
    closeButton: {
      alignSelf: 'flex-end',
    },
    holdAnimation: {
      width: horizontalScale(120),
      height: horizontalScale(120),
      marginTop: horizontalScale(16),
      alignSelf: 'center',
    },
    title: {
      marginTop: horizontalScale(16),
      textAlign: 'center',
    },
    description: {
      marginTop: horizontalScale(8),
      textAlign: 'center',
    },
    tipContainer: {
      marginTop: horizontalScale(26),
    },
    footerText: {
      marginTop: horizontalScale(16),
      textAlign: 'center',
    },
    okButtonContainer: {
      marginTop: horizontalScale(16),
    },
  });
};

export default CountdownTimerModal;
