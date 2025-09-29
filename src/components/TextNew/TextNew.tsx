import React from 'react';
import {Text, TextStyle} from 'react-native';

import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';

export type ProductFontType =
  | 'Heading2XL'
  | 'HeadingXL'
  | 'HeadingL'
  | 'HeadingM'
  | 'HeadingS'
  | 'HeadingXS'
  | 'SubtitleL'
  | 'SubtitleM'
  | 'SubtitleS'
  | 'SubtitleXS'
  | 'BodyL'
  | 'BodyM'
  | 'BodyS';

const fontStyles: Record<
  ProductFontType,
  {fontSize: number; lineHeight: number; fontWeight: TextStyle['fontWeight']}
> = {
  Heading2XL: {fontSize: 32, lineHeight: 40, fontWeight: 'bold'},
  HeadingXL: {fontSize: 28, lineHeight: 36, fontWeight: 'bold'},
  HeadingL: {fontSize: 24, lineHeight: 32, fontWeight: 'bold'},
  HeadingM: {fontSize: 20, lineHeight: 28, fontWeight: 'bold'},
  HeadingS: {fontSize: 16, lineHeight: 24, fontWeight: 'bold'},
  HeadingXS: {fontSize: 14, lineHeight: 20, fontWeight: 'bold'},
  SubtitleL: {fontSize: 16, lineHeight: 24, fontWeight: '500'},
  SubtitleM: {fontSize: 14, lineHeight: 20, fontWeight: '500'},
  SubtitleS: {fontSize: 12, lineHeight: 16, fontWeight: '500'},
  SubtitleXS: {fontSize: 10, lineHeight: 12, fontWeight: '500'},
  BodyL: {fontSize: 16, lineHeight: 24, fontWeight: 'normal'},
  BodyM: {fontSize: 14, lineHeight: 20, fontWeight: 'normal'},
  BodyS: {fontSize: 12, lineHeight: 16, fontWeight: 'normal'},
};

const fontFamilyByWeight = {
  normal: 'HarmonyOS_Sans_Light',
  '500': 'HarmonyOS_Sans_Medium',
  bold: 'HarmonyOS_Sans_Bold',
};

interface CustomTextProps {
  style?: TextStyle;
  children: React.ReactNode;
  fontType?: ProductFontType;
  color?: string;
  rows?: number;
  onPress?: () => void;
  textAlign?: 'left' | 'center' | 'right';
}

export const CustomTextNew: React.FC<CustomTextProps> = ({
  style,
  children,
  fontType = 'BodyM',
  color,
  rows,
  onPress,
  textAlign = 'left',
}) => {
  const {theme} = useThemeNew();
  const {fontSize, lineHeight, fontWeight} = fontStyles[fontType];
  const fontFamily =
    fontFamilyByWeight[fontWeight as keyof typeof fontFamilyByWeight];

  return (
    <Text
      allowFontScaling={false}
      selectable={false}
      numberOfLines={rows}
      onPress={onPress}
      style={[
        {
          fontSize,
          lineHeight,
          fontWeight,
          fontFamily,
          color: color ?? theme.colors['text/primary'],
          textAlign,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
