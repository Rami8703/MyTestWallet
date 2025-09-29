import React, {useMemo, useState, useEffect} from 'react';
import {FlatList, Platform, Pressable, StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {CustomTheme} from 'theme/theme';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';
import CustomImage from 'components/ImageCustom';
import {CustomText} from 'components/Text/Text';
import {calculateTotalBalanceInUSD} from 'src/utils/balance/calculateTotalBalanceInUSD';
import {
  formatNumberWithCommas,
  getCurrencySymbol,
} from 'src/utils/numberFormater';
import {useAppSelector} from 'store/hooks';
import {getExchangeRate} from 'store/socket/selectors';
import {NonCustodialProps, Wallets} from 'store/wallet/types';
import {getShowBalance} from 'store/users/selectors';
import {BlurComponent} from 'components/BlurComponent';
import CoinDeFIItem from './components/CoinDefiItem';

const isHideWithNoBlur = true;

type DeFIWalletItemT = {
  wallet: NonCustodialProps;
  active: boolean;
  onPress: () => void;
  coinPress: (coin: Wallets) => void;
};

const DeFIWalletItem = ({
  wallet,
  active,
  onPress,
  coinPress,
}: DeFIWalletItemT) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);

  const exchangeRate = useAppSelector(getExchangeRate);
  const isHideBalance = useAppSelector(getShowBalance);

  const filteredCoins = wallet.wallets.filter(item => item.isActive);

  const balance = useMemo(() => {
    const calculateBalance = calculateTotalBalanceInUSD(
      filteredCoins,
      exchangeRate ?? null,
    );
    const formattedBalance = formatNumberWithCommas(calculateBalance);
    const symbol = getCurrencySymbol(filteredCoins[0]?.fiatCurrency);

    return `${formattedBalance} ${symbol}`;
  }, [filteredCoins, exchangeRate]);

  const [isActive, setIsActive] = useState(active);

  const contentHeight = useMemo(
    () => filteredCoins.length * 39,
    [filteredCoins],
  );
  const height = useSharedValue(isActive ? contentHeight : 0);

  const animatedStyle = useAnimatedStyle(() => ({
    height: withTiming(height.value, {
      duration: 300,
      easing: Easing.inOut(Easing.ease),
    }),
  }));

  useEffect(() => {
    height.value = isActive ? contentHeight : 0;
    setIsActive(active);
  }, [isActive, contentHeight, active]);

  const toggleAccordion = () => {
    if (!active) {
      setIsActive(!isActive);
      onPress();
    }
  };

  return (
    <Pressable onPress={toggleAccordion} style={styles.container}>
      <View style={styles.row}>
        <CustomText
          rows={1}
          style={styles.walletName}
          fontW="700"
          fontS={16}
          color={theme.colors.primary800}>
          {wallet.name}
        </CustomText>
        <View style={styles.balanceContainer}>
          <CustomText fontW="700" fontS={16} color={theme.colors.primary800}>
            {isHideBalance && isHideWithNoBlur ? '*****' : balance}
          </CustomText>
          {isHideBalance && !isHideWithNoBlur && <BlurComponent />}
        </View>
      </View>
      <Animated.View style={[styles.animatedContainer, animatedStyle]}>
        <FlatList
          scrollEnabled={false}
          initialNumToRender={20}
          data={filteredCoins}
          renderItem={({item}) => (
            <CoinDeFIItem coin={item} onPress={() => coinPress(item)} />
          )}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View style={styles.line} />}
        />
      </Animated.View>
      {!isActive && (
        <View style={styles.iconContainer}>
          {filteredCoins.slice(0, 20).map((item, i) => (
            <View style={{right: i * 6}} key={item.id.toString()}>
              <CustomImage svgSize="16" image={item.coin.image} />
            </View>
          ))}
        </View>
      )}
    </Pressable>
  );
};

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary1050,
      paddingTop: theme.spacing.layoutPaddingS,
      paddingBottom: theme.spacing.layoutPaddingS,
      borderWidth: 1,
      borderColor: theme.colors.primary1000,
      borderRadius: theme.spacing.borderRadiusM,
    },
    iconContainer: {
      flexDirection: 'row',
      overflow: 'hidden',
      paddingHorizontal: theme.spacing.layoutPaddingM,
    },
    walletName: {
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: theme.spacing.layoutPaddingS,
      paddingHorizontal: theme.spacing.layoutPaddingM,
    },
    line: {
      height: 1,
      backgroundColor: theme.colors.primary900,
      opacity: 0.2,
    },
    animatedContainer: {
      overflow: 'hidden',
    },
    balanceContainer: {
      paddingHorizontal: theme.spacing.containerPaddingV,
      paddingVertical: theme.spacing.layoutPaddingXS,
    },
  });

export default DeFIWalletItem;
