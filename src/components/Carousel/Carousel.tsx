import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {CustomTheme} from 'theme/theme';
import {CustomText} from 'components/Text/Text';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {getWallet} from 'store/wallet/selectors';
import {NonCustodialProps, Wallets} from 'store/wallet/types';
import {ExchangeRateData} from 'store/socket/type';
import {GetRate} from 'src/utils/balance/balance';
import {getExchangeRate} from 'store/socket/selectors';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';
import CustomImage from 'components/ImageCustom';
import {setWallet} from 'store/wallet/walletSlice';

import {getCurrencySymbol} from 'src/utils/numberFormater';
import {getShowBalance} from 'store/users/selectors';
import {useNavigation} from '@react-navigation/native';
import {AppNavigationProp, Routes} from 'routes/navigation.types';
import {ModalWallet} from 'components/WalletModal';
import {getProfileSelector} from 'store/profile/selectors';
import Animated, {Easing, FadeIn} from 'react-native-reanimated';
import {BlurComponent} from 'components/BlurComponent';

const isHideWithNoBlur = true;

export default function CarouselMain() {
  const {theme} = useTheme();
  const styles = createStyles(theme);

  const data = useAppSelector(getWallet);
  const profile = useAppSelector(getProfileSelector);

  const dispatch = useAppDispatch();
  const exchangeRate = useAppSelector(getExchangeRate);
  const selectedDefiWallet = data?.nonCustodial[0];
  const [isWalletModal, setIsWalletModal] = useState(false);
  const isHideBalance = useAppSelector(getShowBalance);

  const navigation = useNavigation<AppNavigationProp<Routes.TABS>>();

  const calculateTotalBalance = (
    wallets: Wallets[] | undefined,
    exchangeRateData: ExchangeRateData | null,
  ): string => {
    if (!wallets) {
      return '0.00';
    }

    const activeWallets = wallets.filter(wallet => wallet.isActive);

    let totalBalanceInUSD = 0;

    activeWallets.forEach(wallet => {
      const {balance, coin, fiatCurrency, fiatRate} = wallet;
      const symbol = coin.symbol;

      const exchangeRateFilter = Number(
        GetRate(symbol, fiatCurrency, exchangeRateData) || fiatRate,
      );

      const balanceValue = Number(balance);
      const balanceInUSD = balanceValue * exchangeRateFilter;
      totalBalanceInUSD += balanceInUSD;
    });

    return totalBalanceInUSD.toFixed(2);
  };

  const filteredWallets = selectedDefiWallet?.wallets.filter(
    wallet => wallet.coin.isBasic && wallet.isActive,
  );
  const selectWallet = (item: NonCustodialProps) => {
    dispatch(setWallet(item));
  };

  return (
    <Animated.View
      style={styles.container}
      entering={FadeIn.duration(500).easing(Easing.ease)}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setIsWalletModal(true);
        }}
        style={styles.mainContainer}>
        <View style={styles.nameContainer}>
          <CustomText
            rows={1}
            fontS={16}
            fontW={'700'}
            color={theme.colors.primary800}>
            {selectedDefiWallet?.name}
          </CustomText>

          <View style={styles.coinContainer}>
            {filteredWallets?.map((itemImage, index) => (
              <View style={{marginRight: -5}} key={index}>
                <CustomImage svgSize="16" image={itemImage.coin.image} />
              </View>
            ))}
          </View>
        </View>

        <View
          style={
            (styles.balanceContainer,
            {padding: isHideWithNoBlur && isHideBalance ? 10 : 0})
          }>
          <CustomText fontS={16} fontW={'700'} color={theme.colors.primary800}>
            {isHideWithNoBlur && isHideBalance
              ? '*****'
              : `${calculateTotalBalance(
                  selectedDefiWallet?.wallets,
                  exchangeRate ?? null,
                )} ${getCurrencySymbol(profile?.currency)}`}
          </CustomText>

          {isHideBalance && !isHideWithNoBlur && <BlurComponent />}
        </View>
      </TouchableOpacity>
      <ModalWallet
        profile={profile}
        selected={selectedDefiWallet}
        selectWallet={selectWallet}
        data={data}
        setIsModal={setIsWalletModal}
        isModal={isWalletModal}
      />
      <View style={styles.shadowContainer} />
    </Animated.View>
  );
}

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacing.layoutPaddingM,
      paddingTop: theme.spacing.layoutPaddingM,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingBottom: theme.spacing.layoutPaddingS,
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: theme.spacing.layoutPaddingS,
    },
    mainContainer: {
      backgroundColor: theme.colors.primary1050,
      zIndex: 1,
      padding: theme.spacing.layoutPaddingM,
      borderWidth: 1,
      borderColor: theme.colors.border50,
      borderRadius: theme.spacing.borderRadiusM,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    coinContainer: {
      flexDirection: 'row',
      paddingTop: theme.spacing.layoutPaddingS,
    },
    shadowContainer: {
      height: 30,
      top: -22,
      backgroundColor: theme.colors.secondary400,
      borderRadius: 16,
      marginHorizontal: theme.spacing.paddingHorizontal,
    },
    balanceContainer: {
      minWidth: 50,
    },
    nameContainer: {
      flex: 1,
    },
  });
