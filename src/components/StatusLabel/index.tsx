import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useThemeNew} from '../ThemeNewProvider/CustomeThemeNewProvider';
import {CustomTextNew} from '../TextNew/TextNew';
import {CustomNewTheme} from '../../theme/theme';

export type StatusLabelType =
  | 'pending'
  | 'success'
  | 'failed'
  | 'error'
  | 'reject'
  | 'broadcasting'
  | 'unapproved'
  | 'approved'
  | 'finished'
  | 'swapping';

const StatusLabel = ({status}: {status: StatusLabelType}) => {
  const {theme} = useThemeNew();
  const styles = createStyles(theme);

  const statusLabelDictionary = {
    pending: {
      text: 'Pending',
      textColor: theme.colors['text/warning'],
      backgroundColor: theme.colors['surface/warning'],
    },
    success: {
      text: 'Completed',
      textColor: theme.colors['text/success'],
      backgroundColor: theme.colors['surface/success'],
    },
    failed: {
      text: 'Failed',
      textColor: theme.colors['text/error'],
      backgroundColor: theme.colors['surface/error'],
    },
    error: {
      text: 'Failed',
      textColor: theme.colors['text/error'],
      backgroundColor: theme.colors['surface/error'],
    },
    reject: {
      text: 'Rejected',
      textColor: theme.colors['text/error'],
      backgroundColor: theme.colors['surface/error'],
    },
    broadcasting: {
      text: 'Pending',
      textColor: theme.colors['text/warning'],
      backgroundColor: theme.colors['surface/warning'],
    },
    swapping: {
      text: 'Pending',
      textColor: theme.colors['text/warning'],
      backgroundColor: theme.colors['surface/warning'],
    },
    unapproved: {
      text: 'Failed',
      textColor: theme.colors['text/error'],
      backgroundColor: theme.colors['surface/error'],
    },
    approved: {
      text: 'Completed',
      textColor: theme.colors['text/success'],
      backgroundColor: theme.colors['surface/success'],
    },
    finished: {
      text: 'Completed',
      textColor: theme.colors['text/success'],
      backgroundColor: theme.colors['surface/success'],
    },
  };

  const activeContent =
    statusLabelDictionary[status] || statusLabelDictionary.pending;
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: activeContent.backgroundColor},
      ]}>
      <CustomTextNew fontType="SubtitleM" color={activeContent.textColor}>
        {activeContent.text}
      </CustomTextNew>
    </View>
  );
};

export default StatusLabel;

const createStyles = (theme: CustomNewTheme) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: theme.spacing.layoutPaddingS,
      paddingVertical: theme.spacing.layoutPaddingXS,
      borderRadius: 4,
    },
  });
