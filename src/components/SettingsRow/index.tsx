import {CustomText} from 'components/Text/Text';
import React, {useCallback, useState} from 'react';
import {StyleSheet, Switch, TouchableOpacity, View} from 'react-native';
import InfoRedIcon from '../../assets/icons/ic-info-circle-red.svg';

import {CustomNewTheme, spacing} from 'theme/theme';

import {useFocusEffect} from '@react-navigation/native';
import Chevron from 'components/svg/new/Chevron';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';
import {CustomTextNew} from 'components/TextNew/TextNew';

type Props = {
  name: string;
  onPress?: () => void;
  onRightPress?: () => void;
  rightText?: string | null;
  Icon?: React.ElementType;
  icon?: any;
  righticon?: any;
  toggle?: boolean;
  toggleSwitch?: () => void;
  isEnabled?: boolean;
  firstItem?: boolean;
  lastItem?: boolean;
  disabled?: boolean;
  rightBlock?: string;
  delayTimeOff?: boolean;
  activeOpacity?: number;
  description?: string;
  verticalPadding?: number;
};

export const SettingItem = ({
  name,
  onPress,
  rightText,
  rightBlock,
  Icon,
  toggle,
  toggleSwitch,
  isEnabled,
  icon,
  firstItem,
  onRightPress,
  lastItem,
  righticon,
  delayTimeOff,
  activeOpacity,
  description,
  verticalPadding,
}: Props) => {
  const {theme} = useThemeNew();
  const styles = createStyles(theme);
  const [isBoolean, setIsBoolean] = useState(isEnabled);
  const [disabled, setDisabled] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setIsBoolean(isEnabled);
      return setIsBoolean(isEnabled);
    }, [isEnabled]),
  );

  const handleValueChange = (boolean: boolean) => {
    if (!delayTimeOff) {
      setDisabled(true);
    }

    setTimeout(() => {
      if (toggleSwitch) {
        toggleSwitch();
      }
    }, 100);

    setIsBoolean(boolean);

    if (!delayTimeOff) {
      setTimeout(() => {
        setDisabled(false);
      }, 2000);
    }
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      style={[
        styles.backGround,
        firstItem && styles.firstItem,
        lastItem && styles.lastItem,
      ]}
      activeOpacity={activeOpacity ?? 0.3}>
      <View
        style={[
          styles.mainContainer,
          toggle && styles.togglePadding,
          {
            paddingTop: firstItem
              ? verticalPadding ?? 22
              : verticalPadding ?? theme.spacing.layoutPaddingM,
            paddingBottom: lastItem
              ? verticalPadding ?? 22
              : verticalPadding ?? theme.spacing.layoutPaddingM,
          },
        ]}>
        <View style={styles.nameContainer}>
          {Icon && <Icon />}
          <>{icon && icon}</>
          <View style={{rowGap: 2}}>
            <CustomTextNew rows={1} fontType="SubtitleM">
              {name}
            </CustomTextNew>
            {description && (
              <CustomTextNew
                color={theme.colors['text/secondary']}
                rows={1}
                fontType="BodyS">
                {description}
              </CustomTextNew>
            )}
          </View>

          {onRightPress && righticon && (
            <TouchableOpacity onPress={onRightPress}>
              {righticon}
            </TouchableOpacity>
          )}
        </View>
        <View
          style={[
            styles.containerDots,
            !onPress && !toggle && styles.noRightPadding,
          ]}>
          {rightText && (
            <CustomTextNew rows={1} style={styles.rightText}>
              {rightText}
            </CustomTextNew>
          )}
          {rightBlock && (
            <View
              style={[
                styles.rightBlock,
                rightBlock === 'verified'
                  ? styles.verifiedBlock
                  : styles.unverifiedBlock,
              ]}>
              {rightBlock !== 'verified' && <InfoRedIcon />}
              <CustomText
                rows={1}
                fontS={14}
                fontW={'500'}
                color={
                  rightBlock === 'verified'
                    ? theme.colors['text/success']
                    : theme.colors['text/error']
                }>
                {rightBlock === 'verified' ? 'Verified' : 'Unverified'}
              </CustomText>
            </View>
          )}
          {onPress && (
            <View style={{transform: [{rotate: '270deg'}]}}>
              <Chevron color={theme.colors['icon/primary']} />
            </View>
          )}
          {toggle && toggleSwitch && (
            <Switch
              disabled={disabled}
              trackColor={{
                false: 'rgba(120, 120, 128, 0.16)',
                true: theme.colors['text/success'],
              }}
              ios_backgroundColor="#78788016"
              thumbColor={'white'}
              onValueChange={handleValueChange}
              value={isBoolean}
            />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const createStyles = (theme: CustomNewTheme) =>
  StyleSheet.create({
    mainContainer: {
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: spacing.paddingHorizontal,
    },
    containerDots: {
      flexGrow: 1,
      flexShrink: 1,
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: spacing.layoutPaddingXS,
      justifyContent: 'flex-end',
    },
    nameContainer: {
      flexShrink: 1,
      rowGap: spacing.layoutPaddingS,
      flexDirection: 'row',
      columnGap: spacing.containerPaddingV,
      alignItems: 'center',
    },
    rightText: {
      marginLeft: spacing.layoutPaddingM,
      textAlign: 'right',
      maxWidth: '70%',
    },
    backGround: {
      backgroundColor: theme.colors['surface/secondary'],
    },
    firstItem: {
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
    },
    lastItem: {
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
    },
    togglePadding: {
      paddingVertical: theme.spacing.layoutPaddingS,
    },
    noRightPadding: {
      paddingRight: spacing.layoutPaddingM,
    },
    rightBlock: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 4,
      borderRadius: 4,
      flexDirection: 'row',
      columnGap: theme.spacing.layoutPaddingXS,
    },
    verifiedBlock: {
      backgroundColor: theme.colors.secondary500,
    },
    unverifiedBlock: {
      backgroundColor: theme.colors.secondary500,
    },
  });
