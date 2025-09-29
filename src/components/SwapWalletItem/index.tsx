import {StyleSheet, View} from 'react-native';
import React from 'react';
import {CustomText} from '../Text/Text';
import {useTheme} from '../ThemeProvider/CustomeThemeProvider';
import {formatAmount} from '../../utils/sliceAddress';
import IcCopy from '../../assets/icons/ic-copy-history.svg';
import AnimatedPress from '../AnimatedPress';
import {getCurrencySymbol} from '../../utils/numberFormater';
import {CustomTheme} from '../../theme/theme';
import CustomImage from '../ImageCustom';
import {copyText} from '../../utils/copyUtils';

type PartialWallets = {
  walletName: string;
  fiatRate: string;
  fiatCurrency: string;
  coinName: string;
  coinImg: string;
  networkName: string;
  cryptoAmount: number;
  walletAddress: string;
  onItemPress: () => void;
};

const SwapWalletItem = ({
  walletName,
  fiatRate,
  fiatCurrency,
  coinName,
  coinImg,
  networkName,
  cryptoAmount,
  walletAddress,
  onItemPress,
}: PartialWallets) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);

  return (
    <AnimatedPress onPress={onItemPress} style={styles.itemContainer}>
      <View style={styles.topBottomContainer}>
        {/* top part */}
        <View>
          <CustomText fontS={16} fontW="500" color={theme.colors.black900}>
            {walletName}
          </CustomText>
        </View>
        <View>
          <CustomText fontS={16} fontW="500" color={theme.colors.black900}>
            {formatAmount(fiatRate, 2)} {getCurrencySymbol(fiatCurrency)}
          </CustomText>
        </View>
      </View>
      <View style={styles.topBottomContainer}>
        {/* bottom part */}
        <View style={styles.sideBottomPartContainer}>
          {/* left bottom part */}
          {coinImg && <CustomImage image={coinImg} svgSize={'24'} />}
          <View style={styles.coinDataContainer}>
            <CustomText fontS={14} fontW="500" color={theme.colors.black900}>
              {coinName}
            </CustomText>
            <View style={styles.networkDataContainer}>
              <CustomText fontS={14} fontW="500" color={theme.colors.black900}>
                {networkName}
              </CustomText>
            </View>
          </View>
        </View>
        <View style={styles.sideBottomPartContainer}>
          {/* right bottom part */}
          <View style={styles.amountContent}>
            <CustomText fontS={16} fontW="500" color={theme.colors.black900}>
              {formatAmount(cryptoAmount, 2)} ▽
            </CustomText>
          </View>
          <AnimatedPress
            onPress={() => {
              copyText(walletAddress);
            }}>
            <IcCopy />
          </AnimatedPress>
        </View>
      </View>
    </AnimatedPress>
  );
};

export default SwapWalletItem;

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    itemContainer: {
      paddingVertical: 12,
      paddingHorizontal: theme.spacing.layoutPaddingXM,
      borderWidth: theme.spacing.layoutPadding1,
      borderRadius: 14,
      borderColor: theme.colors.secondary900,
      rowGap: 18,
      backgroundColor: theme.colors.secondary300,
    },
    topBottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    sideBottomPartContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: theme.spacing.layoutPaddingM,
    },
    imageContainer: {
      width: 24,
      height: 24,
      borderRadius: theme.spacing.borderRadiusXL,
      borderWidth: theme.spacing.layoutPadding1,
    },
    coinDataContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: theme.spacing.containerPaddingV,
    },
    networkDataContainer: {
      paddingVertical: 6,
      paddingHorizontal: theme.spacing.containerPaddingV,
      backgroundColor: theme.colors.secondary500,
      borderRadius: 4,
    },
    amountContent: {flexDirection: 'row', alignItems: 'center', columnGap: 5},
  });
