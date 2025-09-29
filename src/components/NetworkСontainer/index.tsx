import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomNewTheme} from 'theme/theme';

import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';
import {CustomTextNew} from 'components/TextNew/TextNew';

export type NetworkProps = {
  network: keyof typeof NETWORKS_FULL_NAME | string; // Ensures 'network' is a key from NETWORKS_FULL_NAME
  containerStyles?: any;
  textProps?: any;
};

export const NETWORKS_FULL_NAME: Record<string, string> = {
  BTC: 'Bitcoin',
  LTC: 'Litecoin',
  TON: 'Ton',
  SOL: 'Solana',
  'ERC-20': 'Ethereum',
  'BEP-20': 'Bsc',
  'TRC-20': 'Tron',
};

export const HIDE_SUB_ICON: Record<string, string> = {
  BTC: 'Bitcoin',
  LTC: 'Litecoin',
  TON: 'Ton',
  SOL: 'Solana',
  'ERC-20': 'Ethereum',
  'BEP-20': 'Binance Coin',
  'TRC-20': 'Tron',
};

export const NetworkItem = ({
  network,
  containerStyles,
  textProps,
}: NetworkProps) => {
  const {theme} = useThemeNew();
  const styles = createStyles(theme);

  // The 'network' is guaranteed to be one of the keys from NETWORKS_FULL_NAME
  const displayNetwork = NETWORKS_FULL_NAME[network] || network;

  return (
    <View style={[styles.networkContainer, containerStyles]}>
      <CustomTextNew
        fontType={'SubtitleXS'}
        color={theme.colors['text/tertiary']}
        {...textProps}>{`${displayNetwork}`}</CustomTextNew>
    </View>
  );
};

const createStyles = (theme: CustomNewTheme) =>
  StyleSheet.create({
    networkContainer: {
      borderWidth: 1,
      borderColor: theme.colors['border/primary'],
      paddingVertical: 2,
      paddingHorizontal: theme.spacing.layoutPaddingS,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
