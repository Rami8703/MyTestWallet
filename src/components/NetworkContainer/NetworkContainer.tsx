import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {CustomNewTheme} from 'theme/theme';

import CustomImage from 'components/ImageCustom';
import {HIDE_SUB_ICON, NetworkItem} from 'components/NetworkСontainer';
import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';
import {CustomTextNew} from 'components/TextNew/TextNew';
import {CustomSwitch} from 'components/CustomSwitch/CustomSwitch';

export type NetworkProps = {
  name: string;
  image: string;
  network: string;
  symbol: string;
  onToggle: (id?: number) => void;
  onRemove: (id: number) => void;
  id: number;
  state?: boolean;
  disabledBoolean?: boolean;
};

const NetworkContainer = ({
  name,
  image,
  network,
  onToggle,
  onRemove,
  id,
  state,
  disabledBoolean,
  symbol,
}: NetworkProps) => {
  const {theme} = useThemeNew();
  const styles = createStyles(theme);
  const [isActive, setActive] = useState(state);

  const toggleSwitch = () => {
    setActive(!isActive);

    if (!state) {
      onToggle(id);
    } else {
      onRemove(id);
    }
  };
  useEffect(() => {
    setActive(state);
  }, [state]);

  return (
    <View style={styles.container}>
      <View style={styles.leftPartContainer}>
        {image && (
          <View>
            <CustomImage svgSize="32" image={image} />

            {network !== symbol &&
              !Object.values(HIDE_SUB_ICON).includes(name) && (
                <View style={styles.subIcon}>
                  <CustomImage
                    svgSize="16"
                    image={`https://cdn.fintopio.com/${network}.svg`}
                  />
                </View>
              )}
          </View>
        )}
        <View style={{rowGap: theme.spacing.layoutPaddingXS}}>
          <View style={styles.textContainer}>
            <CustomTextNew
              style={{maxWidth: '80%'}}
              rows={1}
              fontType={'SubtitleM'}
              color={theme.colors['text/primary']}>
              {`${symbol}`}
            </CustomTextNew>
            <NetworkItem network={network} />
          </View>

          <CustomTextNew
            rows={1}
            fontType={'SubtitleS'}
            color={theme.colors['text/tertiary']}>
            {`${name}`}
          </CustomTextNew>
        </View>
      </View>

      <CustomSwitch
        disabled={disabledBoolean}
        onValueChange={toggleSwitch}
        value={!!isActive}
      />
    </View>
  );
};

const createStyles = (theme: CustomNewTheme) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing.layoutPaddingM,
      borderRadius: theme.spacing.borderRadius,
    },
    leftPartContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 12,
      width: '70%',
    },
    textContainer: {
      flexDirection: 'row',
      columnGap: theme.spacing.layoutPaddingS,
      alignItems: 'center',
    },
    text: {maxWidth: 130},
    subIcon: {
      position: 'absolute',
      bottom: -5,
      right: -5,
      borderRadius: 10,
    },
  });

export default NetworkContainer;
