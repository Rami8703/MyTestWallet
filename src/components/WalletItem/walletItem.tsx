import React from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import {CustomNewTheme, spacing} from 'theme/theme';
import {NonCustodialProps, Wallets} from 'store/wallet/types';
import {getExchangeRate} from 'store/socket/selectors';
import {useAppSelector} from 'store/hooks';
import {ExchangeRateData} from 'store/socket/type';
import {getShowBalance} from 'store/users/selectors';
import {
  formatNumberWithCommas,
  getCurrencySymbol,
} from 'src/utils/numberFormater';

import {BlurComponent} from 'components/BlurComponent';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';
import {CustomTextNew} from 'components/TextNew/TextNew';
import TablerCircleCheckFilled from 'components/svg/new/TablerCircleCheckFilled';

const isHideWithNoBlur = true;

type Props = {
  name: string;
  item: NonCustodialProps;
  calculateTotalBalance: (
    wallets: Wallets[] | undefined,
    exchangeRateData: ExchangeRateData | null,
  ) => string | undefined;
  selected: NonCustodialProps | undefined;
  OnPress: () => void;
  id: number;
  isMain?: number;
};

export const WalletItem = ({
  name,
  calculateTotalBalance,
  selected,
  item,
  OnPress,
  id,
  isMain,
}: Props) => {
  const {theme} = useThemeNew();
  const styles = createStyles(theme);
  const {t} = useTranslation();

  const isHideBalance = useAppSelector(getShowBalance);
  const exchangeRate = useAppSelector(getExchangeRate);

  const isSelected = selected?.id === id;
  const balance =
    calculateTotalBalance(item.wallets, exchangeRate ?? null) ?? '';
  const currency = getCurrencySymbol(selected?.wallets[0].fiatCurrency);

  const showBalance =
    isHideWithNoBlur && isHideBalance
      ? '*****'
      : `${formatNumberWithCommas(balance)} ${currency}`;

  return (
    <TouchableOpacity onPress={OnPress}>
      <View
        style={[
          styles.mainContainer,
          isSelected ? styles.selectedBorder : styles.defaultBorder,
        ]}>
        <View style={styles.rowAlign}>
          <View style={styles.container}>
            <View style={styles.nameContainer}>
              <View style={styles.rowName}>
                <CustomTextNew
                  rows={1}
                  style={{maxWidth: isMain === id ? '80%' : '100%'}}
                  fontType="SubtitleM"
                  color={theme.colors['text/primary']}>
                  {name}
                </CustomTextNew>
                {isMain === id && (
                  <View style={styles.mainBadge}>
                    <CustomTextNew
                      fontType="SubtitleS"
                      color={theme.colors['text/brand']}>
                      {t('COMMON.MAIN')}
                    </CustomTextNew>
                  </View>
                )}
              </View>
            </View>

            <View>
              <CustomTextNew
                fontType="BodyM"
                color={theme.colors['text/secondary']}>
                {showBalance}
              </CustomTextNew>
              {!isHideWithNoBlur && isHideBalance && <BlurComponent />}
            </View>
          </View>

          {isSelected ? <TablerCircleCheckFilled /> : <View />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const createStyles = (theme: CustomNewTheme) =>
  StyleSheet.create({
    container: {
      columnGap: theme.spacing.layoutPaddingS,
      flex: 1,
    },
    mainContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: spacing.layoutPaddingM,
      paddingHorizontal: spacing.paddingHorizontal,
      borderWidth: 1,
      borderRadius: spacing.borderRadiusM,
      rowGap: theme.spacing.layoutPaddingXS,
    },
    selectedBorder: {
      borderColor: theme.colors['border/selected'],
    },
    defaultBorder: {
      borderColor: theme.colors['border/primary'],
    },
    nameContainer: {
      rowGap: spacing.layoutPaddingS,
    },
    mainBadge: {
      backgroundColor: theme.colors['surface/brand'],
      paddingHorizontal: theme.spacing.layoutPaddingS,
      paddingVertical: 2,
      borderRadius: 99,
    },
    rowName: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: theme.spacing.layoutPaddingS,
      overflow: 'hidden',
    },
    rowAlign: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    textName: {maxWidth: '80%'},
  });
