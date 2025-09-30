import React, {useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {CustomNewTheme} from 'theme/theme';
import {StyleSheet, FlatList, View, Animated} from 'react-native';
import {data} from './data';
import SlideItem from './SlideItem';
import {Button} from 'components/Button/Button';
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {
  ProfileNotifyCefiThunk,
  ProfileViewedAnimationThunk,
} from 'store/profile/thunks';
import {getProfileSelector} from 'store/profile/selectors';
import {ButtonNew} from 'components/ButtonNew/ButtonNew';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';

type CeFiDisabledT = {
  onSwitch: (item: number) => void;
};

const CeFiDisabled = ({onSwitch}: CeFiDisabledT) => {
  const {theme} = useThemeNew();
  const styles = createStyles(theme);
  const [index, setIndex] = useState(0);
  const dispatch = useAppDispatch();
  const profile = useAppSelector(getProfileSelector);

  const scrollX = useRef(new Animated.Value(0)).current;

  const {t} = useTranslation();

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewable = useRef(({viewableItems}: any) => {
    setIndex(viewableItems[0].index);
  }).current;

  const viewAbilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const onSkipPress = () => {
    dispatch(ProfileNotifyCefiThunk());
    dispatch(ProfileViewedAnimationThunk());
    onSwitch(0);
  };

  const onUseDefi = () => {
    onSwitch(0);
  };

  const onNotifyMePress = () => {
    dispatch(ProfileNotifyCefiThunk());
    dispatch(ProfileViewedAnimationThunk());
    onSwitch(0);
  };

  const newData = true
    ? profile?.kycAction === 'blocked' && profile?.kycCurrentLevel === null
      ? data.slice(6, 7)
      : profile?.kycAction === 'blocked'
      ? data.slice(5, 6)
      : data.slice(4, 5)
    : data;

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={newData}
          renderItem={({item}) => <SlideItem item={item} />}
          horizontal
          pagingEnabled
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          onScroll={handleOnScroll}
          onViewableItemsChanged={handleOnViewable}
          viewabilityConfig={viewAbilityConfig}
        />
      </View>
      {!profile?.animationViewed && index === 4 && (
        <View style={styles.buttonContainer}>
          <View style={{flex: 1}}>
            <Button
              onPress={onSkipPress}
              text={t('COMMON.SKIP')}
              type="primary"
            />
          </View>
          <View style={{flex: 1}}>
            <Button
              onPress={onNotifyMePress}
              text={t('CEFIDISABLED.BUTTONNOTIFYME')}
              type="link"
            />
          </View>
        </View>
      )}
      {/* {!profile?.animationViewed && (
        <Pagination data={newData} scrollX={scrollX} index={index} />
      )} */}

      <View style={styles.buttonStyles}>
        <ButtonNew
          onPress={onUseDefi}
          text={t('MAIN.USEDEFI')}
          type="secondary"
        />
      </View>
    </View>
  );
};

const createStyles = (theme: CustomNewTheme) =>
  StyleSheet.create({
    container: {
      flex: 0.8,
      rowGap: 50,
    },
    buttonContainer: {
      columnGap: theme.spacing.borderRadiusM,
      flexDirection: 'row',
    },
    buttonStyles: {
      marginHorizontal: theme.spacing.layoutPaddingM,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default CeFiDisabled;
