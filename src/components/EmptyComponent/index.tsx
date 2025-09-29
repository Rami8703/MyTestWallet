import * as React from 'react';
import {useTranslation} from 'react-i18next';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {CustomNewTheme} from 'theme/theme';
import {scale} from 'react-native-size-matters';
import LottieView from 'lottie-react-native';
import {AppNavigationProp, Routes} from 'routes/navigation.types';
import {useNavigation} from '@react-navigation/native';

import {CustomTextNew} from 'components/TextNew/TextNew';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';
import {ButtonNew} from 'components/ButtonNew/ButtonNew';
import Plus from 'components/svg/new/Plus';
import ImportWalletIcon from 'components/svg/new/ImportWallet';

const width = Dimensions.get('screen').width;

export const EmptyComponent = () => {
  const {theme} = useThemeNew();
  const styles = createStyles(theme);

  const navigation = useNavigation<AppNavigationProp<Routes.TABS>>();
  const {t} = useTranslation();

  const ImportWallet = () => {
    navigation.navigate(Routes.IMPORT_WALLET);
  };

  const CreateNewWallet = () => {
    navigation.navigate(Routes.NEW_CREATE_WALLET);
  };

  const sourseAnimation = require('../../assets/animation/create-wallet.json');

  return (
    <View style={styles.containerEmpty}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <CustomTextNew
            fontType={'HeadingM'}
            color={theme.colors['text/primary']}>
            {t('EMPTYMAINDEFI.HEADERTEXT')}
          </CustomTextNew>
          <View style={styles.topIconContainer}>
            <LottieView
              style={styles.animationSecond}
              source={sourseAnimation}
              autoPlay
              loop={true}
            />
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <ButtonNew
            IconLeft={Plus}
            onPress={CreateNewWallet}
            text={t('EMPTYMAINDEFI.CREATENEWWALLET')}
            type={'primary'}
          />
          <ButtonNew
            // eslint-disable-next-line react/no-unstable-nested-components
            IconLeft={() => (
              <ImportWalletIcon fill={theme.colors['text/primary']} />
            )}
            onPress={ImportWallet}
            text={t('EMPTYMAINDEFI.ADDEXISTINGWALLET')}
            type={'secondary'}
          />
        </View>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
};

const createStyles = (theme: CustomNewTheme) =>
  StyleSheet.create({
    containerEmpty: {
      rowGap: theme.spacing.containerPaddingX,
      paddingHorizontal: theme.spacing.paddingHorizontal,
      width: '100%',
      justifyContent: 'space-between',
      paddingTop: theme.spacing.layoutPaddingXL,
    },
    headerContainer: {
      alignItems: 'center',
      paddingBottom: theme.spacing.layoutPaddingXL,
    },
    topIconContainer: {
      alignItems: 'center',
      paddingVertical: theme.spacing.layoutPaddingXL,
    },
    buttonsContainer: {
      width: '100%',
      rowGap: theme.spacing.layoutPaddingM,
    },
    bottomSpacing: {
      height: scale(80),
    },
    animationSecond: {
      width: width * 0.5,
      height: width * 0.5,
    },
  });
