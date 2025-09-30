import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import {CustomNewTheme} from 'theme/theme';
import {SlideT} from 'components/CeFiDisabled/data';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';
import {CustomTextNew} from 'components/TextNew/TextNew';

const {width, height} = Dimensions.get('window');

const SlideItem = ({item}: {item: SlideT}) => {
  const {theme} = useThemeNew();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <LottieView
        style={styles.animation}
        source={item.image}
        autoPlay
        loop={true}
      />
      <View style={styles.content}>
        <CustomTextNew
          color={theme.colors['text/primary']}
          fontType="HeadingM"
          style={styles.title}>
          {item.title}
        </CustomTextNew>
        <CustomTextNew
          color={theme.colors['text/secondary']}
          fontType="BodyM"
          style={styles.description}>
          {item.description}
        </CustomTextNew>
      </View>
    </View>
  );
};

const createStyles = (theme: CustomNewTheme) =>
  StyleSheet.create({
    container: {
      width,
      alignItems: 'center',
      paddingHorizontal: theme.spacing.layoutPaddingM,
    },
    title: {
      textAlign: 'center',
    },
    content: {
      alignItems: 'center',
      gap: theme.spacing.layoutPaddingM,
    },
    description: {
      textAlign: 'center',
    },
    animation: {
      width: height * 0.4,
      height: height * 0.4,
    },
  });

export default SlideItem;
