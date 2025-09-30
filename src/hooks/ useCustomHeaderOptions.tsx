import React, {useEffect, useCallback, ReactNode} from 'react';
import {useTranslation} from 'react-i18next';

import {useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {CustomNewTheme} from 'theme/theme';
import IcArrow_downward from 'components/svg/new/IcArrow_downward';

import {NavigationProp} from '@react-navigation/native';
import {View} from 'react-native';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';
import {CustomTextNew} from 'components/TextNew/TextNew';

interface CustomHeaderOptionsProps {
  color?: string;
  rightComponent?: ReactNode;
  customGoBack?: () => void;
  isLoading?: boolean;
  title?: string | (() => Element);
}

const useCustomHeaderOptions = (props?: CustomHeaderOptionsProps) => {
  const navigation = useNavigation<NavigationProp<any>>();

  const {theme} = useThemeNew();
  const styles = createStyles(theme);

  const {t} = useTranslation();

  const goBack = useCallback(() => {
    if (typeof props?.customGoBack === 'function') {
      props.customGoBack();
    } else {
      navigation.goBack();
    }
  }, [navigation, props]);

  useEffect(() => {
    if (props?.isLoading) {
      navigation.setOptions({headerShown: false});
    } else {
      navigation.setOptions({
        headerShown: true,
        headerLeft: () =>
          props?.isLoading ? (
            <View />
          ) : (
            <TouchableOpacity style={styles.backContainer} onPress={goBack}>
              <IcArrow_downward fill={theme.colors['text/primary']} />

              <CustomTextNew
                fontType="SubtitleM"
                color={theme.colors['text/primary']}>
                {t('COMMON.BACK')}
              </CustomTextNew>
            </TouchableOpacity>
          ),
        headerTitle: props?.title || '',
        headerTitleStyle: styles.headerTitle,
        headerRight: () => props?.rightComponent,
      });
    }
  }, [
    goBack,
    navigation,
    theme,
    props?.rightComponent,
    props?.isLoading,
    props?.title,
    styles.headerTitle,
    styles.backContainer,
    t,
  ]);
};

const createStyles = (theme: CustomNewTheme) =>
  StyleSheet.create({
    backContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      gap: 4,
    },
    headerTitle: {
      fontSize: 14,
      fontWeight: '500',
      fontFamily: 'HarmonyOS_Sans_Medium',
      lineHeight: 20,
      color: theme.colors['text/primary'],
    },
  });

export default useCustomHeaderOptions;
