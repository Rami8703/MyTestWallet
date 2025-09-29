import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import {Switch} from 'react-native-switch';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';

type CustomSwitchProps = {
  value: boolean;
  onValueChange: (val: boolean) => void;
  disabled?: boolean;
  style?: ViewStyle;
};

export const CustomSwitch = ({
  value,
  onValueChange,
  disabled = false,
  style,
}: CustomSwitchProps) => {
  const {theme} = useThemeNew();
  const styles = createStyles();

  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      disabled={disabled}
      circleSize={16}
      barHeight={20}
      activeText={''}
      inActiveText={''}
      circleBorderWidth={0}
      backgroundActive={theme.colors['surface/success-bold']}
      backgroundInactive={theme.colors['surface/tertiary/solid']}
      circleActiveColor={'white'}
      circleInActiveColor={'white'}
      renderInsideCircle={() => null} // use this if you want to customize the knob
      changeValueImmediately={true}
      innerCircleStyle={styles.innerCircle}
      outerCircleStyle={style}
      switchLeftPx={3}
      switchRightPx={3}
      switchWidthMultiplier={2.2}
    />
  );
};

const createStyles = () =>
  StyleSheet.create({
    innerCircle: {
      elevation: 2,
    },
  });
