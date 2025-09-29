import React from 'react';
import {useTranslation} from 'react-i18next';

import {StyleSheet, TouchableOpacity} from 'react-native';
import {spacing} from 'theme/theme';

import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';
import IcArrow_downward from 'components/svg/new/IcArrow_downward';
import {CustomTextNew} from 'components/TextNew/TextNew';

export const BackButton = ({onPress}: {onPress: () => void}) => {
  const {t} = useTranslation();
  const {theme} = useThemeNew();

  return (
    <TouchableOpacity style={styles.backContainer} onPress={onPress}>
      <IcArrow_downward fill={theme.colors['text/primary']} />
      <CustomTextNew fontType="SubtitleM" color={theme.colors['text/primary']}>
        {t('COMMON.BACK')}
      </CustomTextNew>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backContainer: {
    paddingHorizontal: spacing.paddingHorizontal,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: spacing.layoutPaddingXS,
  },
  text: {paddingBottom: 2, paddingLeft: 2},
});
