import React from 'react';
import { useTranslation } from 'react-i18next';

import {CustomText} from 'components/Text/Text';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';
import LottieView from 'lottie-react-native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CustomTheme} from 'theme/theme';
import ArrowRight from '../../../assets/icons/ic-arrow-right.svg';

export const ImportWallet = ({onPress}: {onPress: () => void}) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);
  
  const { t } = useTranslation();

  return (
    <TouchableOpacity onPress={onPress} style={styles.importContainer}>
      <LottieView
        style={{height: 90, width: 90}}
        source={require('../../../assets/animation/import-wallet.json')}
        autoPlay
        loop={true}
      />
      <View style={styles.rowContainer}>
        <CustomText fontS={16} color={theme.colors.primary800} fontW={'600'}>
          {t('WALLETMODAL.IMPORTWALLETTITLE')}
        </CustomText>
        <CustomText
          fontS={12}
          color={theme.colors.primary800}
          fontW={'400'}
          style={{lineHeight: 20}}>
          {t('WALLETMODAL.IMPORTWALLETDESCRIPTION')}
        </CustomText>
      </View>
      <ArrowRight />
    </TouchableOpacity>
  );
};

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    importContainer: {
      flexDirection: 'row',
      borderWidth: 1,
      borderColor: theme.colors.secondary200,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
      columnGap: theme.spacing.layoutPaddingS,
      paddingVertical: theme.spacing.layoutPaddingS,
      backgroundColor: theme.colors.secondary300,
    },

    rowContainer: {
      rowGap: theme.spacing.layoutPaddingS,
      justifyContent: 'center',
      width: '60%',
    },
  });
