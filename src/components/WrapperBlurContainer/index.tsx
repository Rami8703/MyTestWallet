import React from 'react';
import {View, Platform, TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {scale} from 'react-native-size-matters';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';

const isAndroid = Platform.OS === 'android';

type Props = {
  children: React.ReactNode;
  isHeader?: boolean;
  isBottom?: boolean;
};

const WrapperContainer = ({children, isHeader, isBottom}: Props) => {
  const insets = useSafeAreaInsets();
  const {isLightTheme} = useTheme();

  const paddingBottomAndroid = insets.bottom === 0 ? 30 : insets.bottom;

  return (
    <View style={{backgroundColor: isLightTheme ? '#FFF' : '#101012', flex: 1}}>
      {/* <LinearGradient
        style={{flex: 1}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={
          isLightTheme
            ? ['#d3fafd', '#f5f5fd', '#fcdef7', '#fcdef7']
            : ['#01AEEC33', '#155AC333', '#4F24FC33']
        }>
        <LinearGradient
          style={{flex: 1}}
          colors={
            isLightTheme
              ? ['#00000010', '#00000000', '#00000000']
              : ['#07070733', '#155AC300', '#00000033']
          }>
          <LinearGradient
            style={{flex: 1}}
            colors={
              isLightTheme
                ? ['#00000000', '#00000000']
                : ['#00000066', '#00000000']
            }> */}
      <TouchableWithoutFeedback disabled={true} accessible={false}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            paddingTop:
              insets.top < 30
                ? isHeader
                  ? 30
                  : 60
                : isHeader
                ? insets.top * 1
                : scale(insets.top * 2),
            flex: 1,
            paddingBottom: isBottom
              ? 0
              : insets.bottom === 0
              ? 30
              : isAndroid
              ? paddingBottomAndroid
              : insets.bottom,
          }}>
          {children}
        </View>
      </TouchableWithoutFeedback>
      {/* </LinearGradient>
        </LinearGradient>
      </LinearGradient> */}
    </View>
  );
};

export default WrapperContainer;
