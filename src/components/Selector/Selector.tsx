import * as React from 'react';

import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {CustomText} from '../Text/Text';
import Chevron from '../../assets/icons/ic-chevron-gray.svg';
import TipIcon from '../../assets/icons/ic-info-circle-blue.svg';

import {CustomTheme} from 'theme/theme';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';
import Tooltip from 'react-native-walkthrough-tooltip';
import CustomImage from 'components/ImageCustom';
import {HIDE_SUB_ICON} from 'components/NetworkСontainer';

const isAndroid = Platform.OS === 'android';

type SelectorProps = {
  label?: string;
  name?: string;
  symbol?: string;
  onPress: () => void;
  image?: string;
  disabled?: boolean;
  network?: string;
  tooltipText?: string;
};

export const Selector = ({
  label,
  onPress,
  image,
  symbol,
  name,
  disabled,
  network,
  tooltipText,
}: SelectorProps) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);
  const [tooltipVisible, setTooltipVisible] = React.useState(false);

  return (
    <View style={styles.container}>
      {label && (
        <View style={styles.headerContainer}>
          <CustomText fontS={12} fontW={'600'} color={theme.colors.primary800}>
            {label}
          </CustomText>
          <TouchableOpacity
            onPress={() => {
              setTooltipVisible(!tooltipVisible);
            }}>
            {tooltipText && (
              <Tooltip
                closeOnBackgroundInteraction
                contentStyle={styles.toolTipContainer}
                isVisible={tooltipVisible} // Set this state to control tooltip visibility
                content={
                  <View>
                    <View>
                      <CustomText fontS={12} fontW={'500'} color={'#fff'}>
                        {tooltipText}
                      </CustomText>
                    </View>
                  </View>
                }
                placement="bottom" // Adjust placement as needed (top, bottom, left, right)
                onClose={() => setTooltipVisible(false)} // Function to close the tooltip
              >
                <TipIcon />
              </Tooltip>
            )}
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity
        style={styles.input}
        onPress={onPress}
        disabled={disabled}>
        <View style={styles.mainContainer}>
          {image && (
            <View>
              <CustomImage svgSize="24" image={image} />

              {network !== symbol &&
                !Object.values(HIDE_SUB_ICON).includes(name || '') && (
                  <View style={styles.subIcon}>
                    <CustomImage
                      svgSize="15"
                      image={`https://cdn.fintopio.com/${network}.svg`}
                    />
                  </View>
                )}
            </View>
          )}
          {name && (
            <CustomText fontW="600" fontS={14} color={theme.colors.primary800}>
              {name}
            </CustomText>
          )}
          {symbol && (
            <CustomText fontW="400" color={theme.colors.primary900}>
              {symbol}
            </CustomText>
          )}
        </View>

        <Chevron />
      </TouchableOpacity>
    </View>
  );
};

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    container: {
      rowGap: theme.spacing.layoutPaddingS,
    },
    input: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: theme.spacing.layoutPaddingM,
      borderRadius: theme.spacing.borderRadius,
      borderWidth: 1,
      borderColor: theme.colors.primary1000,
      backgroundColor: theme.colors.background100,
    },
    mainContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      columnGap: theme.spacing.containerPaddingV,
      alignItems: 'center',
    },
    toolTipContainer: {
      marginLeft: 40,
      marginHorizontal: isAndroid ? '25%' : '25%',
      height: '100%',
      borderRadius: 10,
      backgroundColor: theme.colors.primary500,
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: theme.spacing.layoutPaddingXS,
    },
    subIcon: {
      position: 'absolute',
      bottom: -5,
      right: -5,
      backgroundColor: theme.colors.primary1050,
      borderRadius: 10,
    },
  });
