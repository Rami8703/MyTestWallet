import React, {useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import {CustomNewTheme} from 'theme/theme';
import {
  NonCustodialProps,
  WalletNonCastodialData,
  Wallets,
} from 'store/wallet/types';
import {AppNavigationProp, Routes} from 'routes/navigation.types';
import {useNavigation} from '@react-navigation/native';
import {GetRate} from 'src/utils/balance/balance';
import {ExchangeRateData} from 'store/socket/type';

import {WalletItem} from '../WalletItem/walletItem';

import {Profile} from 'store/profile/types';
import Animated, {
  Easing,
  FadeIn,
  SequencedTransition,
} from 'react-native-reanimated';
import {AppModalNew} from 'components/ModalNew/Modal';
import {ButtonNew} from 'components/ButtonNew/ButtonNew';
import {CustomTextNew} from 'components/TextNew/TextNew';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';
import {getExchangeRate} from 'store/socket/selectors';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {
  formatNumberWithCommas,
  getCurrencySymbol,
} from 'src/utils/numberFormater';
import {setDefiPnl} from 'store/wallet/walletSlice';
import {getShowBalance} from 'store/users/selectors';

type Props = {
  selected?: NonCustodialProps;
  selectWallet: (item: NonCustodialProps) => void;
  data?: WalletNonCastodialData;
  setIsModal: (item: boolean) => void;
  isModal: boolean;
  isCoin?: boolean;
  isManageToken?: boolean;
  profile: Profile | undefined;
  // isNft?: boolean;
  // setIsNft?: (item: boolean) => void;
};

const HEIGHT = Dimensions.get('screen').height;

export const ModalWallet = ({
  selected,
  selectWallet,
  data,
  setIsModal,
  isModal,
  isManageToken,
  profile,
}: // isNft,
// setIsNft,
Props) => {
  const navigation = useNavigation<AppNavigationProp<Routes.TABS>>();
  const {theme} = useThemeNew();
  const styles = createStyles(theme);
  const exchangeRate = useAppSelector(getExchangeRate);
  const dispatch = useAppDispatch();

  const isHideBalance = useAppSelector(getShowBalance);

  const calculateTotalBalanceInUSD = (
    nonCustodialData: WalletNonCastodialData['nonCustodial'],
    exchangeRateData: ExchangeRateData | null,
  ): string => {
    let totalBalanceInUSD = 0;

    nonCustodialData.forEach(nonCustodial => {
      nonCustodial.wallets.forEach(wallet => {
        if (wallet.isActive) {
          const {balance, coin, fiatCurrency, fiatRate} = wallet;
          const symbol = coin.symbol;

          const exchangeRateFilter = Number(
            GetRate(symbol, fiatCurrency, exchangeRateData) || fiatRate,
          );

          const balanceValue = Number(balance);
          const balanceInUSD = balanceValue * exchangeRateFilter;
          totalBalanceInUSD += balanceInUSD;
        }
      });
    });

    return totalBalanceInUSD.toFixed(2);
  };

  const balance = useMemo(() => {
    return calculateTotalBalanceInUSD(
      data?.nonCustodial ?? [],
      exchangeRate ?? null,
    );
  }, [exchangeRate, data?.nonCustodial]);

  const {t} = useTranslation();

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
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = data?.nonCustodial.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const onButtonPress = () => {
    onModalClose(false);

    navigation.navigate(Routes.CHOOSE_WALLET);
  };

  const onModalClose = (isShow: boolean) => {
    setIsModal(isShow);
    setSearchQuery('');
  };

  const onItemPress = (item: NonCustodialProps) => {
    if (selected?.id !== item.id) {
      selectWallet(item);
      dispatch(setDefiPnl(undefined));
      // if (isNft && setIsNft) {
      //   navigation.navigate(Routes.NFT_IMPORT);
      //   setIsNft(false);
      //   onModalClose(false);
      //   return;
      // }
      {
        isManageToken && navigation.navigate(Routes.MANAGE_TOKEN);
      }
    }

    onModalClose(false);
  };

  const totalBalance = isHideBalance
    ? '*****'
    : `${getCurrencySymbol(profile?.currency)}${formatNumberWithCommas(
        balance,
      )}`;

  const renderItem = ({item}: {item: NonCustodialProps}) => (
    <WalletItem
      OnPress={() => {
        onItemPress(item);
      }}
      isMain={profile?.defaultSeedId}
      item={item}
      selected={selected}
      key={item.id}
      id={item.id}
      name={item.name}
      calculateTotalBalance={calculateTotalBalance}
    />
  );
  // eslint-disable-next-line react/no-unstable-nested-components
  const ItemSeparator = () => <View style={styles.seperator} />;

  return (
    <AppModalNew
      setModalVisible={onModalClose}
      isModalVisible={isModal}
      isBottom
      headerTitle={''}>
      <Animated.View
        layout={SequencedTransition.duration(500)}
        entering={FadeIn.duration(200).easing(Easing.ease)}
        style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <CustomTextNew
              fontType={'SubtitleM'}
              color={theme.colors['text/primary']}>
              {t('MODALWALLET.TOTALASSETS')}
            </CustomTextNew>
          </View>
          <View>
            <CustomTextNew
              fontType={'HeadingXL'}
              color={theme.colors['text/primary']}>
              {totalBalance}
            </CustomTextNew>
          </View>
        </View>

        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.listContainer}
          data={filteredData}
          ListFooterComponent={
            <View style={{paddingTop: theme.spacing.layoutPaddingL}}>
              <ButtonNew
                onPress={onButtonPress}
                text={t('MODALWALLET.ADDWALLET')}
                type={'primary'}
              />
            </View>
          }
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={ItemSeparator}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <View style={styles.noResultsContainer}>
              <CustomTextNew color={theme.colors['text/primary']}>
                {t('COMMON.NORESULTS')}
              </CustomTextNew>
            </View>
          }
        />
      </Animated.View>
    </AppModalNew>
  );
};

const createStyles = (theme: CustomNewTheme) =>
  StyleSheet.create({
    container: {
      alignItems: 'center',
      width: '100%',
      maxHeight: HEIGHT * 0.85,
      paddingBottom: theme.spacing.layoutPaddingXL,
      justifyContent: 'space-between',
    },
    flatList: {
      width: '100%',
      maxHeight: '85%',
    },
    seperator: {
      height: theme.spacing.layoutPaddingS,
    },

    headerContainer: {
      width: '100%',
      rowGap: theme.spacing.layoutPaddingS,
      paddingBottom: theme.spacing.layoutPaddingL,
    },
    listContainer: {
      paddingBottom: theme.spacing.layoutPaddingXL,
    },
    text: {
      textAlign: 'center',
    },
    noResultsContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
