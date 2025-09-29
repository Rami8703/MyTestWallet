import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';
import LottieView from 'lottie-react-native';
import * as React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import {CustomTheme} from 'theme/theme';

export type StepperProps = {
  currentPage: number;
  data: StepperData[];
};

type StepperData = {
  number: number;
  text: string;
  iconActive: string;
  iconPrevious?: string;
  IconGray: React.FC<React.SVGProps<SVGSVGElement>>;
  IconGrayLight: React.FC<React.SVGProps<SVGSVGElement>>;
};
export type StepperItemProps = {
  data: StepperData[];
  current: number;
};

const isAndroid = Platform.OS === 'android';

export const Stepper = ({currentPage, data}: StepperProps) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <StepperItem data={data} current={currentPage} />
    </View>
  );
};

export const StepperItem = ({data, current}: StepperItemProps) => {
  const {theme, isLightTheme} = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.containerItem}>
      <View style={styles.stepperContainer}>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <View
                style={[
                  styles.line,

                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    backgroundColor:
                      current > index + 1
                        ? '#29C98D'
                        : current > index
                        ? theme.colors.primary500
                        : theme.colors.primary1650,
                  },
                ]}
              />
            )}
            <View style={styles.circleContainer}>
              <View
                style={[
                  styles.circle,
                  // eslint-disable-next-line react-native/no-inline-styles
                  {
                    backgroundColor:
                      current > index + 1
                        ? '#29C98D'
                        : current > index
                        ? theme.colors.primary500
                        : theme.colors.buttonBackground50,
                    borderWidth: current <= index ? 1 : 0,
                    borderColor:
                      current <= index ? theme.colors.border200 : undefined,
                  },
                ]}>
                {current > index ? (
                  current > index + 1 ? (
                    <LottieView
                      style={styles.animation}
                      source={item.iconPrevious}
                      autoPlay
                      loop={false}
                    />
                  ) : (
                    <LottieView
                      style={styles.animation}
                      source={item.iconActive}
                      autoPlay
                      loop={false}
                    />
                  )
                ) : isLightTheme ? (
                  <item.IconGrayLight />
                ) : (
                  <item.IconGray />
                )}
              </View>
            </View>
          </React.Fragment>
        ))}
      </View>
    </View>
  );
};

const createStyles = (theme: CustomTheme) =>
  StyleSheet.create({
    containerItem: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
    },
    stepperContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    line: {
      flex: 1,
      height: 1,
      marginHorizontal: 2,
      borderRadius: theme.spacing.borderRadius,
    },
    circleContainer: {
      alignItems: 'center',
    },
    circle: {
      width: 40,
      height: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      alignItems: 'center',
      flexDirection: 'row',
      columnGap: theme.spacing.containerPaddingV,
      paddingHorizontal: theme.spacing.paddingHorizontal,
      paddingBottom: theme.spacing.layoutPaddingS,
      paddingTop: isAndroid
        ? theme.spacing.layoutPaddingXL
        : theme.spacing.layoutPaddingM,
    },
    animation: {
      width: 40,
      height: 40,
    },
  });
