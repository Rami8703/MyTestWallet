import * as React from 'react';
import { useTranslation } from 'react-i18next';

import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {CustomText} from '../Text/Text';
import Close from 'components/svg/Close';
import IconWallet from '../../assets/icons/ic-wallet-new.svg';

import {CustomTheme} from 'theme/theme';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';

import {AppModal} from 'components/Modal/Modal';
import {Button} from 'components/Button/Button';

type SendModalProps = {
  onModalClose: () => void;
  dataModal:
    | {
        amount: number;
        userName: string;
        coinName: string;
      }
    | undefined;
  showModal: boolean;
  transfer: boolean;
};

export const SendModal = ({
  showModal,
  onModalClose,
  dataModal,
  transfer,
}: SendModalProps) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);
    
  const { t } = useTranslation();

  return (
    <AppModal isModalVisible={showModal} setModalFunction={onModalClose}>
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={onModalClose} style={styles.buttonClose}>
          <Close stroke={theme.colors.primary800} />
        </TouchableOpacity>
        <IconWallet />
        <View style={styles.headerModalText}>
          <CustomText fontS={24} fontW={'800'} color={theme.colors.primary800}>
            {dataModal?.amount} {dataModal?.coinName}{' '}
            {t(transfer ? 'COMMON.TRANSFERED' : 'COMMON.SEND')}
          </CustomText>
          <CustomText
            color={theme.colors.primary850}
            style={styles.underHeaderText}
          >
            {t('SEND.MADEREQUEST')}
          </CustomText>
        </View>

        <View style={styles.textContainer}>
          <CustomText color={theme.colors.primary850} fontS={12}>
            {dataModal?.amount} {dataModal?.coinName} {t('SEND.HAVEBEENSENTTO')}
          </CustomText>
          <CustomText fontS={16} fontW={'600'} color={theme.colors.primary800}>
            {dataModal?.userName}
          </CustomText>
        </View>
      </View>
      <Button onPress={onModalClose} text={t('COMMON.OK')} type={'primary'} />
    </AppModal>
  );
};

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    modalContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      rowGap: theme.spacing.layoutPaddingM,
      paddingVertical: theme.spacing.layoutPaddingL,
    },
    textContainer: {
      borderColor: theme.colors.primary1000,
      backgroundColor: theme.colors.primary1050,
      borderWidth: 1,
      width: '100%',
      alignItems: 'center',
      padding: theme.spacing.layoutPaddingM,
      borderRadius: theme.spacing.borderRadiusM,
    },
    buttonClose: {position: 'absolute', top: 0, right: 4},
    headerModalText: {
      alignItems: 'center',
    },
    underHeaderText: {
      textAlign: 'center',
    },
  });
