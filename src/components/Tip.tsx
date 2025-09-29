import React, { FC, memo } from 'react';

import { StyleSheet, StyleProp, View, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

import { CustomTheme, gradientColor } from 'theme/theme';

import { CustomText } from 'components/Text/Text';
import { useTheme } from 'components/ThemeProvider/CustomeThemeProvider';

import { horizontalScale } from 'src/utils/scale';

type Props = {
	text: string;
	containerStyles?: StyleProp<ViewStyle>;
};

const Tip: FC<Props> = (props) => {
	const { text, containerStyles } = props;

	const { theme, isLightTheme } = useTheme();
	const styles = createStyles(theme);

	return (
		<LinearGradient
			colors={gradientColor.gradient7}
			start={{ x: 0.0, y: 0.5 }}
			end={{ x: 1.0, y: 0.5 }}
			style={[styles.container, containerStyles]}
		>
			<View style={styles.tip}>
				<View style={styles.icon}>
					<CustomText
						color={theme.colors.white900}
						fontS={horizontalScale(14)}
						fontW="400"
						lineH={horizontalScale(20)}
					>
						💡
					</CustomText>
				</View>

				<MaskedView
					maskElement={
						<CustomText
							color={theme.colors.white900}
							fontS={horizontalScale(14)}
							fontW="400"
							lineH={horizontalScale(20)}
							style={styles.mask}
						>
							{`      ${text}`}
						</CustomText>
					}
				>
					<LinearGradient
						colors={gradientColor.gradient7}
						start={{ x: 0.0, y: 0.5 }}
						end={{ x: 1.0, y: 0.5 }}
						style={styles.textGradient}
					>
						<CustomText
							color={theme.colors.white900}
							fontS={horizontalScale(14)}
							fontW="400"
							lineH={horizontalScale(20)}
							style={styles.text}
						>
							<CustomText
								color={theme.colors.white900}
								fontS={horizontalScale(14)}
								fontW="400"
								lineH={horizontalScale(20)}
								style={styles.text}
							>
								{`      ${text}`}
							</CustomText>
						</CustomText>
					</LinearGradient>
				</MaskedView>
			</View>
		</LinearGradient>
	);
};

const createStyles = (theme: CustomTheme) => {
	return StyleSheet.create({
		container: {
			marginTop: horizontalScale(26),
			padding: horizontalScale(1),
			borderRadius: horizontalScale(8),
		},
		tip: {
			padding: horizontalScale(10),
			borderRadius: horizontalScale(7),
			backgroundColor: theme.colors.background,
		},
		icon: {
			position: 'absolute',
			top: horizontalScale(10),
			left: horizontalScale(10),
		},
		mask: {
			backgroundColor: 'transparent',
		},
		textGradient: {
			backgroundColor: 'transparent',
		},
		text: {
			opacity: 0,
		},
	});
};

export default memo(Tip);
