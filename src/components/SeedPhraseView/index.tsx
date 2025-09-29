import React, {Dispatch, FC, SetStateAction, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {
  Dimensions,
  FlatList,
  Image,
  PermissionsAndroid,
  Platform,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
// import {addScreenshotListener} from 'react-native-detector';
import {BlurView} from '@react-native-community/blur';

import {CustomNewTheme} from '../../theme/theme';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';
import {CustomTextNew} from 'components/TextNew/TextNew';
import IcEyeClose from 'components/svg/new/IcEyeClose';
import ScreenshotWarningModal from 'components/ScreenshotWarningModal';

type Props = {
  seedData: string;
  isShowSeedPhrase?: boolean;
  setIsShowSeedPhrase?: Dispatch<SetStateAction<boolean>>;
};

const SeedPhraseView: FC<Props> = props => {
  const {seedData, isShowSeedPhrase, setIsShowSeedPhrase} = props;

  const {theme, isLightTheme} = useThemeNew();
  const styles = createStyles(theme);

  const {t} = useTranslation();

  // const [
  //   isShowScreenshotWarningModalVisible,
  //   setIsShowScreenshotWarningModalVisible,
  // ] = useState(false);

  // useEffect(() => {
  //   let unsubscribe: (() => void) | null = null;

  //   (async () => {
  //     if (Platform.OS !== 'android') {
  //       return;
  //     }

  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
  //       {
  //         title: 'Get Read External Storage Access',
  //         message: 'get read external storage access for detecting screenshots',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );

  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       unsubscribe = addScreenshotListener(() => {
  //         setIsShowScreenshotWarningModalVisible(true);
  //       });
  //     }
  //   })();

  //   if (Platform.OS === 'ios') {
  //     unsubscribe = addScreenshotListener(() => {
  //       setIsShowScreenshotWarningModalVisible(true);
  //     });
  //   }

  //   return () => {
  //     if (unsubscribe) {
  //       unsubscribe();
  //     }
  //   };
  // }, []);

  return (
    <Pressable
      style={styles.container}
      onPress={() => setIsShowSeedPhrase?.(true)}>
      {!isShowSeedPhrase && setIsShowSeedPhrase && (
        <View style={styles.blurContainer}>
          {Platform.OS === 'android' ? (
            <Image
              source={
                isLightTheme
                  ? require('../../assets/images/blur-seed-phrase-light.png')
                  : require('../../assets/images/blur-seed-phrase-dark.png')
              }
              style={styles.blurImage}
            />
          ) : (
            <>
              <BlurView blurAmount={9} style={styles.blur} />

              <IcEyeClose fill={theme.colors['text/white']} />

              <CustomTextNew
                fontType="BodyL"
                color={theme.colors['text/white']}
                style={styles.title}>
                {t('SEEDPHRASEVIEW.TITLE')}
              </CustomTextNew>

              <CustomTextNew
                fontType="BodyM"
                color={theme.colors['text/tertiary']}
                style={styles.description}>
                {t('SEEDPHRASEVIEW.DESCRIPTION')}
              </CustomTextNew>
            </>
          )}
        </View>
      )}

      <FlatList
        data={seedData.split(' ')}
        scrollEnabled={false}
        numColumns={2}
        keyExtractor={item => item}
        renderItem={({item, index}) => (
          <View
            style={[
              styles.item,
              {
                borderColor: isShowSeedPhrase
                  ? theme.colors['border/primary']
                  : 'transparent',
              },
            ]}>
            <View style={styles.numberContainer}>
              <CustomTextNew
                fontType="BodyM"
                color={theme.colors['text/tertiary']}>
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </CustomTextNew>
            </View>

            <CustomTextNew
              fontType="HeadingXS"
              color={theme.colors['text/primary']}>
              {item}
            </CustomTextNew>
          </View>
        )}
        contentContainerStyle={styles.contentContainer}
        columnWrapperStyle={styles.columnWrapper}
      />

      {/* <ScreenshotWarningModal
        isVisible={isShowScreenshotWarningModalVisible}
        setIsVisible={setIsShowScreenshotWarningModalVisible}
      /> */}
    </Pressable>
  );
};

export default SeedPhraseView;

const createStyles = (theme: CustomNewTheme) => {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginTop: 32,
    },
    blurContainer: {
      ...StyleSheet.absoluteFillObject,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      borderWidth: 1,
      borderColor: '#FFFFFF1A',
      overflow: 'hidden',
      zIndex: 1,
    },
    blurImage: {
      width: Dimensions.get('window').width - 32,
      height: '100%',
      borderRadius: 16,
    },
    blur: {
      ...StyleSheet.absoluteFillObject,
      borderRadius: 16,
    },
    title: {
      marginTop: 24,
    },
    description: {
      marginTop: 4,
    },
    contentContainer: {
      gap: 16,
    },
    columnWrapper: {
      gap: 16,
    },
    item: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 12,
      borderWidth: 1,
      borderRadius: 8,
      borderColor: theme.colors['border/primary'],
    },
    numberContainer: {
      paddingRight: 8,
      marginRight: 8,
      borderRightWidth: 1,
      borderRightColor: theme.colors['border/primary'],
    },
  });
};
