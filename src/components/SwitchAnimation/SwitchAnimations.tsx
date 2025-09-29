import React, {useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {StyleSheet, View, TouchableWithoutFeedback} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient';
import {CustomNewTheme} from 'theme/theme';
import {useAppDispatch} from '../../store/hooks';
import {setIsMainScreenCefiSelected} from '../../store/wallet/walletSlice';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';
import {CustomTextNew} from 'components/TextNew/TextNew';
import {useFocusEffect} from '@react-navigation/native';

interface TransportMethodProps {
  selected: number;
  onSwitch: (currentNum: number) => void;
  onPress?: () => void; // external press handler
  freezeToggle?: boolean; // skip toggle & animation if true
}

const componentWidth = 157;
const componentHeight = 42;
const buttonHeight = 32;

const SwitchAnimation: React.FC<TransportMethodProps> = ({
  selected,
  onSwitch,
  onPress,
  freezeToggle = false,
}) => {
  const {theme} = useThemeNew();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const {t} = useTranslation();

  const [activeIndex, setActiveIndex] = useState(selected);
  const translateX = useSharedValue(0);
  const [isPressDisabled, setPressDisabled] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setPressDisabled(true);
      setTimeout(() => {
        setPressDisabled(false);
      }, 500);
    }, []),
  );

  const slideRight = () => {
    translateX.value = withTiming(componentWidth / 2 - 7, {duration: 500});
  };

  const slideLeft = () => {
    translateX.value = withTiming(2, {duration: 500});
  };

  const toggleIndex = (index: number) => {
    if (isPressDisabled) return;

    index === 0 ? slideRight() : slideLeft();
    setActiveIndex(1 - index);
    onSwitch(1 - index);
    setPressDisabled(true);

    index === 0
      ? dispatch(setIsMainScreenCefiSelected(true))
      : dispatch(setIsMainScreenCefiSelected(false));

    setTimeout(() => {
      setPressDisabled(false);
    }, 500);
  };

  useEffect(() => {
    toggleIndex(selected === 0 ? 1 : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
      width: activeIndex ? componentWidth / 2 - 3.5 : '49%',
    };
  });

  useEffect(() => {
    toggleIndex(1 - activeIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TouchableWithoutFeedback
      disabled={isPressDisabled}
      onPress={() => {
        if (onPress) {
          onPress();
        }
        if (freezeToggle) return;
        toggleIndex(activeIndex);
      }}>
      <View style={styles.backgroundSwitch}>
        <Animated.View style={[animatedStyle]}>
          <LinearGradient
            colors={[
              theme.colors['surface/primary'],
              theme.colors['surface/primary'],
            ]}
            start={{x: 0.0, y: 0.5}}
            end={{x: 1.0, y: 0.5}}
            style={styles.buttonSwitch}
          />
        </Animated.View>
        <View style={styles.textContainer}>
          <CustomTextNew
            color={
              activeIndex === 0
                ? theme.colors['text/primary']
                : theme.colors['text/tertiary']
            }
            fontType="HeadingXS"
            style={styles.textOptionLeft}>
            {t('COMMON.DEFI')}
          </CustomTextNew>
          <CustomTextNew
            color={
              activeIndex === 1
                ? theme.colors['text/primary']
                : theme.colors['text/tertiary']
            }
            fontType="HeadingXS"
            style={styles.textOptionRight}>
            {t('COMMON.CEFI')}
          </CustomTextNew>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const createStyles = (theme: CustomNewTheme) =>
  StyleSheet.create({
    backgroundSwitch: {
      backgroundColor: theme.colors['surface/tertiary'],
      height: componentHeight,
      width: componentWidth,
      borderRadius: 70,
      justifyContent: 'center',
    },
    textOptionRight: {
      width: '50%',
      textAlign: 'center',
      paddingRight: 8,
    },
    textOptionLeft: {
      width: '50%',
      textAlign: 'center',
      paddingLeft: 8,
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
    },
    buttonSwitch: {
      height: buttonHeight,
      borderRadius: 70,
      left: 4,
      right: 4,
    },
  });

export default SwitchAnimation;
