import React from 'react';
import {View} from 'react-native';

import ExchangeIcon from '../../assets/icons/ic-exchange-main-history.svg';
import DealIcon from '../../assets/icons/ic-deal-main.svg';
import TransferIcon from '../../assets/icons/ic-transfer-main-history.svg';
import UniversalIcon from '../../assets/icons/ic-referral-main.svg';
import CherqueIcon from '../../assets/icons/ic-cherque.svg';

import NftSmall from '../../assets/icons/ic-small-nft-icon.svg';
import AnonymousSenderIcon from '../../assets/icons/ic-anonymous.svg';

import HistoryItemIcon from '../HistoryItemIcon';
import IcHistorySmallDeposit from '../svg/new/historyItemIcons/IcHistorySmallDeposit';
import {useThemeNew} from '../ThemeNewProvider/CustomeThemeNewProvider';

type Props = {
  name: string;
  isAnonymous?: boolean;
};

export const IconComponent = ({name, isAnonymous}: Props) => {
  const {theme} = useThemeNew();

  if (isAnonymous === true && name !== 'withdrawal') {
    return <AnonymousSenderIcon stroke={theme.colors['text/primary']} />;
  }
  if (
    name === 'deposit' ||
    name === 'withdrawal' ||
    name === 'purchased' ||
    name === 'sold' ||
    name === 'swap' ||
    name === 'deposit_nft' ||
    name === 'withdrawal_nft' ||
    name === 'burn_nft' ||
    name === 'Fee_return' ||
    name === 'fee_return'
  ) {
    return <HistoryItemIcon type={name} />;
  } else if (name === 'deal') {
    return <DealIcon stroke={theme.colors['text/primary']} />;
  } else if (name === 'exchange') {
    return <ExchangeIcon stroke={theme.colors['text/primary']} />;
  } else if (name === 'transfer') {
    return <TransferIcon stroke={theme.colors['text/primary']} />;
  } else if (name === 'exchange') {
    return <UniversalIcon stroke={theme.colors['text/primary']} />;
  } else if (name === 'cheque') {
    return <CherqueIcon fill={theme.colors['surface/secondary-solid']} />;
  } else if (name === 'referral') {
    return <UniversalIcon stroke={theme.colors['text/primary']} />;
  } else {
    return <View />;
  }
};

export const IconAvatarComponent = ({name}: Props) => {
  const {theme} = useThemeNew();

  if (name === 'deposit') {
    return (
      <View style={{transform: [{rotate: '180deg'}]}}>
        <IcHistorySmallDeposit
          color={theme.colors['text/primary']}
          fill={theme.colors['surface/secondary-solid']}
        />
      </View>
    );
  } else if (name === 'withdrawal') {
    return (
      <View>
        <IcHistorySmallDeposit
          color={theme.colors['text/primary']}
          fill={theme.colors['surface/secondary-solid']}
        />
      </View>
    );
  } else if (name === 'withdrawal_nft') {
    return <NftSmall fill={theme.colors['icon/primary']} />;
  } else {
    return <View />;
  }
};
