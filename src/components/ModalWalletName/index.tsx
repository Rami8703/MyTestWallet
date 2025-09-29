import React from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from 'react-native';

import {CustomText} from 'components/Text/Text';
import {CustomTheme, spacing} from 'theme/theme';

import {AppModal} from 'components/Modal/Modal';
import {setWallet} from 'store/wallet/walletSlice';
import {useAppDispatch} from 'store/hooks';
import {NonCustodialProps} from 'store/wallet/types';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';
import Check from 'components/svg/Check';
import {t} from 'i18next';

type Props = {
  data: NonCustodialProps[];
  setIsModal: (item: boolean) => void;
  isModal: boolean;
  selected: NonCustodialProps;
};

export const ModalWalletName = ({
  data,
  setIsModal,
  isModal,
  selected,
}: Props) => {
  const dispatch = useAppDispatch();
  const {theme} = useTheme();
  const styles = createStyles(theme);

  const selectWallet = (item: NonCustodialProps) => {
    dispatch(setWallet(item));
  };

  const renderItem = ({item}: {item: NonCustodialProps}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          selectWallet(item);
          setIsModal(false);
        }}>
        <View style={styles.itemContainer}>
          <CustomText fontW="400" color={theme.colors.primary800} fontS={16}>
            {item.name}
          </CustomText>
          {selected?.id === item.id && <Check fill={theme.colors.primary800} />}
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <AppModal
      setModalVisible={setIsModal}
      isModalVisible={isModal}
      isBottom
      paddingHorizonatalFalse={true}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.textContainer}>
            <CustomText
              fontS={24}
              fontW={'700'}
              color={theme.colors.primary800}>
              {t('SWAP.MODALSENDFROM')}
            </CustomText>
          </View>
        </View>
        <FlatList
          style={styles.flatList}
          data={data}
          contentContainerStyle={styles.listContainer}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.seperator} />}
        />
      </View>
    </AppModal>
  );
};

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      width: '100%',
    },
    flatList: {
      width: '100%',
      paddingTop: spacing.layoutPaddingM,
    },
    buttonContainer: {
      width: '100%',
      paddingTop: spacing.layoutPaddingXL,
    },
    inputContainer: {
      width: '100%',
      paddingVertical: spacing.layoutPaddingXL,
    },
    headerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    textContainer: {
      flex: 1,
      paddingHorizontal: spacing.paddingHorizontal,
    },
    listContainer: {
      paddingBottom:
        theme.spacing.layoutPaddingXL + theme.spacing.layoutPaddingM,
    },
    itemContainer: {
      paddingVertical: spacing.layoutPaddingM,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: spacing.paddingHorizontal,
    },
    seperator: {
      height: 1,
      backgroundColor: theme.colors.divider100,
      width: '100%',
    },
  });
