import React from 'react';
import { useTranslation } from 'react-i18next';

import {StyleSheet, View} from 'react-native';

import {CustomText} from '../Text/Text';
import {useTheme} from '../ThemeProvider/CustomeThemeProvider';
import DoneIcon from '../../assets/icons/ic-done.svg';
import AvoidIcon from '../../assets/icons/ic-avoid.svg';

interface InstructionsSectionProps {
  type: 'recommend' | 'avoid';
}

export const InstructionsSection = ({type}: InstructionsSectionProps) => {
  const {theme} = useTheme();
  
  const { t } = useTranslation();

  const contentDictionary = {
    recommend: {
      title: `${t('COMMON.RECOMMEND')}:`,
      description: t('CREATESTEPFOUR.UNDERRECOMMEND'),
      icon: <DoneIcon />,
    },
    avoid: {
      title: `${t('COMMON.AVOID')}:`,
      description: [
        t('CREATESTEPFOUR.AVOIDFIRST'),
        t('CREATESTEPFOUR.AVOIDSECOND'),
        t('CREATESTEPFOUR.AVOIDTHIRD'),
      ],
      icon: <AvoidIcon />,
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        {contentDictionary[type]?.icon}
        <CustomText fontS={13} fontW={'500'} color={theme.colors.primary800}>
          {contentDictionary[type]?.title}
        </CustomText>
      </View>
      <View>
        {Array.isArray(contentDictionary[type]?.description) ? (
          contentDictionary[type]?.description.map((desc, index) => (
            <CustomText
              key={index}
              fontS={12}
              fontW={'500'}
              color={theme.colors.grey}>
              • {desc}
            </CustomText>
          ))
        ) : (
          <CustomText fontS={12} fontW={'500'} color={theme.colors.grey}>
            • {contentDictionary[type]?.description}
          </CustomText>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {gap: 10},
  titleContainer: {flexDirection: 'row', gap: 8, alignItems: 'center'},
});
