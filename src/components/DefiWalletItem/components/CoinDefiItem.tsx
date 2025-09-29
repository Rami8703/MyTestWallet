import React from 'react';
import {CustomTheme, HIT_SLOP} from 'theme/theme';
import {Pressable, StyleSheet, TouchableOpacity, View} from 'react-native';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';
import {CustomText} from 'components/Text/Text';
import CustomImage from 'components/ImageCustom';
import CopyIcon from '../../../assets/icons/deposit_icons/copy.svg';
import Clipboard from '@react-native-community/clipboard';
import {Wallets} from 'store/wallet/types';
import {HIDE_SUB_ICON, NetworkItem} from 'components/NetworkСontainer';
import {useAppSelector} from 'store/hooks';
import {getShowBalance} from 'store/users/selectors';
import {BlurComponent} from 'components/BlurComponent';
import toastMessage from 'src/utils/toastMessage';

const isHideWithNoBlur = true;

type CoinDeFIItemT = {
  coin: Wallets;
  onPress: () => void;
};

const CoinDeFIItem = ({coin, onPress}: CoinDeFIItemT) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);
  const isHideBalance = useAppSelector(getShowBalance);

  const copyToClipboard = (address: string) => {
    Clipboard.setString(address);
    toastMessage.show({type: 'success', text1: 'Address copied to clipboard'});
  };

  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={[styles.row, {flex: 1}]}>
        {coin?.coin?.image ? (
          <View>
            <CustomImage svgSize="24" image={coin.coin.image} />

            {coin.network.network !== coin.coin.symbol &&
              !Object.values(HIDE_SUB_ICON).includes(coin.coin.name) && (
                <View style={styles.subIcon}>
                  <CustomImage
                    svgSize="12"
                    image={`https://cdn.fintopio.com/${coin.network.network}.svg`}
                  />
                </View>
              )}
          </View>
        ) : (
          <View style={styles.emptyImage} />
        )}
        <CustomText
          rows={1}
          fontW="700"
          fontS={16}
          color={theme.colors.primary800}>
          {coin.coin.symbol}
        </CustomText>

        <NetworkItem network={coin.network.network} />
      </View>
      <View style={[styles.row, {justifyContent: 'flex-end', flex: 2.5}]}>
        <View style={styles.rowBalance}>
          <CustomText fontS={14} fontW="400" color={theme.colors.primary800}>
            {isHideWithNoBlur && isHideBalance ? '*****' : coin.balance}
          </CustomText>

          <CustomText
            style={styles.text}
            fontS={10}
            fontW="700"
            color={theme.colors.primary650}>
            {coin.coin.symbol}
          </CustomText>

          {isHideBalance && !isHideWithNoBlur && <BlurComponent />}
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          hitSlop={HIT_SLOP}
          onPress={() => copyToClipboard(coin.address)}>
          <CopyIcon />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 38,
      paddingHorizontal: theme.spacing.layoutPaddingM,
      justifyContent: 'space-between',
      gap: theme.spacing.layoutPaddingS,
    },
    emptyImage: {
      backgroundColor: theme.colors.primary600,
      borderRadius: 24,
      width: 24,
      height: 24,
    },
    text: {
      alignSelf: 'center',
    },
    row: {
      flexDirection: 'row',
      gap: theme.spacing.layoutPaddingS,
    },
    subIcon: {
      position: 'absolute',
      bottom: -5,
      right: -5,
      backgroundColor: theme.colors.primary1050,
      borderRadius: 10,
    },
    rowBalance: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.layoutPaddingS,
      paddingHorizontal: theme.spacing.containerPaddingV,
    },
  });

export default CoinDeFIItem;
