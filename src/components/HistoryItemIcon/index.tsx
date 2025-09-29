import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useThemeNew} from '../ThemeNewProvider/CustomeThemeNewProvider';
import IcVector from '../svg/new/historyItemIcons/IcVector';
import {CustomNewTheme} from '../../theme/theme';
import IcSwapped from '../svg/new/historyItemIcons/IcSwapped';
import IcPurchased from '../svg/new/historyItemIcons/IcPurchased';
import IcSold from '../svg/new/historyItemIcons/IcSold';
import IcDepositNft from '../svg/new/historyItemIcons/IcDepositNft';

type Props = {
  type:
    | 'withdrawal'
    | 'deposit'
    | 'swap'
    | 'purchased'
    | 'sold'
    | 'deposit_nft'
    | 'withdrawal_nft'
    | 'burn_nft'
    | 'fee_return'
    | 'Fee_return';
};

const HistoryItemIcon = ({type}: Props) => {
  const {theme} = useThemeNew();
  const styles = createStyles(theme);

  const iconDictionary = {
    withdrawal: (
      <View>
        <IcVector color={theme.colors['text/primary']} />
      </View>
    ),
    deposit: (
      <View style={{transform: [{rotate: '180deg'}]}}>
        <IcVector color={theme.colors['text/primary']} />
      </View>
    ),
    swap: <IcSwapped />,
    purchased: <IcPurchased />,
    sold: <IcSold />,
    deposit_nft: <IcDepositNft />,
    withdrawal_nft: <IcDepositNft />,
    burn_nft: <IcDepositNft />,
    fee_return: <IcDepositNft />,
    Fee_return: <IcDepositNft />,
  };

  const selectedIcon = iconDictionary[type] || <View />;

  return (
    <View style={styles.container}>
      <View>{selectedIcon}</View>
    </View>
  );
};

export default HistoryItemIcon;

const createStyles = (theme: CustomNewTheme) =>
  StyleSheet.create({
    container: {
      width: 32,
      height: 32,
      borderRadius: 32,
      backgroundColor: theme.colors['surface/secondary-solid'],
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
