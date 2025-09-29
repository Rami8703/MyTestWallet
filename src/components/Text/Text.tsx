import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import {CustomTheme} from '../../theme/theme';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';

interface CustomTextProps {
  style?: TextStyle; // Custom style for the text
  children: React.ReactNode; // Text content
  fontW?: TextStyle['fontWeight'];
  fontS?: number;
  lineH?: number;
  color?: string;
  rows?: number;
  onPress?: () => void;
}

export const CustomText: React.FC<CustomTextProps> = ({
  style,
  children,
  fontW,
  fontS,
  lineH,
  color,
  rows,
  onPress,
}) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);

  return (
    <Text
      allowFontScaling={false}
      selectable={false}
      numberOfLines={rows}
      style={[
        styles.defaultFont,
        style,
        {fontWeight: fontW, fontSize: fontS, lineHeight: lineH, color: color},
      ]}
      onPress={onPress}>
      {children}
    </Text>
  );
};

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    defaultFont: {
      fontFamily: 'HarmonyOS',
      color: theme.colors.primary550,
    },
  });
