import * as React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CustomNewTheme, spacing} from 'theme/theme';
import {useAppSelector} from 'store/hooks';
import {getExchangeRate} from 'store/socket/selectors';
import {getShowBalance} from 'store/users/selectors';
import CustomImage from 'components/ImageCustom';
import {GetRate} from 'src/utils/balance/balance';
import {useNavigation} from '@react-navigation/native';
import {Routes} from 'routes/navigation.types';
import {p2pProps, Wallets} from 'store/wallet/types';
import {HIDE_SUB_ICON, NetworkItem} from 'components/NetworkСontainer';
import {BlurComponent} from 'components/BlurComponent';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';
import {CustomTextNew} from 'components/TextNew/TextNew';
import {
  formatNumberWithCommas,
  getCurrencySymbol,
} from 'src/utils/numberFormater';

const isHideWithNoBlur = true;

export type NetworkProps = {
  item: p2pProps | Wallets;
  name: string;
  image: string;
  fiatRate: string;
  balance: string;
  currency: string;
  cryptocurrency: string;
  first: boolean;
  symbol: string;
  isCastodial: boolean;
  network: string;
};

export const NetworkAccountItem = ({
  name,
  image,
  fiatRate,
  balance,
  currency,
  cryptocurrency,
  first,
  symbol,
  item,
  network,
  isCastodial,
}: NetworkProps) => {
  const {theme} = useThemeNew();
  const styles = createStyles(theme, first);
  const exchangeRate = useAppSelector(getExchangeRate);
  const isHideBalance = useAppSelector(getShowBalance);
  const navigation = useNavigation<any>();

  const formatNumberToTwoDecimalPlaces = (
    input: string | number | undefined,
  ): string | undefined => {
    if (input) {
      const num = typeof input === 'string' ? parseFloat(input) : input;
      if (isNaN(num)) {
        return undefined;
      }
      const roundedNumber = Math.floor(num * 100) / 100;
      return roundedNumber.toFixed(2);
    }
  };

  const rateFormatted =
    GetRate(cryptocurrency, currency, exchangeRate ?? null) ?? fiatRate;

  const balanceFormatted = formatNumberWithCommas(
    formatNumberToTwoDecimalPlaces(Number(balance) * Number(rateFormatted)) ??
      '0',
  );

  const fiatFormatted = formatNumberWithCommas(
    formatNumberToTwoDecimalPlaces(rateFormatted) ?? '0',
  );

  const goToMainCoin = () => {
    navigation.navigate(Routes.MAIN_COIN, {
      data: item,
      isCastodial: isCastodial,
    });
  };

  const changeRate = (
    cryptocurrencyRate: any,
    currencyRate: any,
    isDirectRate = undefined,
  ) => {
    if (!exchangeRate) {
      return;
    }
    const exchangeRateLocal =
      exchangeRate[currencyRate + '_' + cryptocurrencyRate];
    if (!exchangeRateLocal) return {rate: 0, changed: 0};
    if (isDirectRate === false) {
      return {...exchangeRateLocal, rate: 1 / Number(exchangeRateLocal.rate)};
    }
    return {...exchangeRateLocal};
  };

  const rate24h = changeRate(currency, cryptocurrency)?.changed ?? 0;

  const formattedRate24h = rate24h > 0 ? `+${rate24h}%` : `${rate24h}%`;

  const color =
    rate24h === 0
      ? theme.colors['text/tertiary']
      : rate24h > 0
      ? theme.colors['text/success']
      : theme.colors['text/error'];

  return (
    <TouchableOpacity onPress={goToMainCoin} style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerImage}>
          <CustomImage svgSize="32" image={image} />
          {/* && symbol !== 'USDT' */}
          {network !== symbol &&
            !Object.values(HIDE_SUB_ICON).includes(item.coin.name) && (
              <View style={styles.subIcon}>
                <CustomImage
                  svgSize="12"
                  image={`https://cdn.fintopio.com/${network}.svg`}
                />
              </View>
            )}
        </View>

        <View>
          <View style={styles.networkNameContainer}>
            <CustomTextNew
              fontType={'SubtitleM'}
              color={theme.colors['text/primary']}>
              {symbol}
            </CustomTextNew>
            <NetworkItem network={network} />
          </View>

          <View style={styles.networkMain}>
            <CustomTextNew
              fontType={'SubtitleS'}
              color={theme.colors['text/secondary']}>
              {getCurrencySymbol(currency)}
              {fiatFormatted}
            </CustomTextNew>
            {rate24h !== 0 && (
              <CustomTextNew fontType="SubtitleS" color={color}>
                {`${formattedRate24h}`}
              </CustomTextNew>
            )}
          </View>
        </View>
      </View>

      <View style={styles.containerMain}>
        <View style={styles.containerMainContent}>
          <View style={styles.leftContainer}>
            <CustomTextNew
              fontType="SubtitleM"
              color={theme.colors['text/primary']}>
              {isHideWithNoBlur && isHideBalance
                ? '*****'
                : formatNumberWithCommas(balance)}
            </CustomTextNew>
          </View>
          <View style={styles.leftContainer}>
            <CustomTextNew
              color={theme.colors['text/tertiary']}
              fontType="SubtitleM">
              {isHideWithNoBlur && isHideBalance
                ? '*****'
                : `${getCurrencySymbol(currency)}${balanceFormatted}`}
            </CustomTextNew>
          </View>
          {isHideBalance && !isHideWithNoBlur && <BlurComponent />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const createStyles = (theme: CustomNewTheme, first: boolean) =>
  StyleSheet.create({
    container: {
      justifyContent: 'space-between',
      paddingHorizontal: theme.spacing.layoutPaddingM,
      flexDirection: 'row',
      alignItems: 'center',
      borderTopRightRadius: first ? theme.spacing.borderRadius : 0,
      borderTopLeftRadius: first ? theme.spacing.borderRadius : 0,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: theme.spacing.containerPaddingV,
    },
    headerImage: {
      width: 32,
      height: 32,
      borderRadius: 32,
    },
    containerPadding: {
      rowGap: theme.spacing.layoutPaddingXS,
      alignItems: 'flex-start',
    },
    leftContainer: {
      flexDirection: 'row',
      columnGap: theme.spacing.layoutPaddingXS,
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
    rightContainer: {
      flex: 1,
      alignItems: 'flex-end',
      rowGap: spacing.layoutPaddingS,
    },
    mainContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: spacing.containerPaddingV,
    },
    containerMain: {
      flex: 1,
      alignItems: 'flex-end',
      rowGap: theme.spacing.layoutPaddingXS,
    },
    containerMainContent: {
      padding: theme.spacing.layoutPaddingM,
    },
    networkMain: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: theme.spacing.layoutPaddingS,
      paddingTop: theme.spacing.layoutPaddingXS,
    },
    networkNameContainer: {
      flexDirection: 'row',
      columnGap: theme.spacing.layoutPaddingS,
    },
    nameContainer: {maxWidth: 150},
    subIcon: {
      borderRadius: 20,
      position: 'absolute',
      bottom: 0,
      right: 0,
    },
  });
