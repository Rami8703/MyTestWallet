import React, { FC, useEffect, useState } from 'react';

import { Pressable, StyleSheet } from 'react-native';

import { CustomTheme } from '../../theme/theme';
import { useTheme } from '../ThemeProvider/CustomeThemeProvider';

import { CustomText } from '../Text/Text';

import { horizontalScale } from 'src/utils/scale';

const TARGET_DATE = new Date('2025-05-01T07:00:00Z').getTime();

const calculateTimeLeft = () => {
	const now = new Date().getTime();
	const difference = TARGET_DATE - now;

	if (difference <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	}

	return {
		days: Math.floor(difference / (1000 * 60 * 60 * 24)),
		hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((difference / (1000 * 60)) % 60),
		seconds: Math.floor((difference / 1000) % 60),
	};
};

type Props = {
	onPress: () => void;
};

const CountdownTimer: FC<Props> = (props) => {
	const { onPress } = props;

	const { theme } = useTheme();
	const styles = createStyles(theme);

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		const updateTime = () => {
			setTimeLeft(calculateTimeLeft());

			const now = new Date().getTime();
			const nextUpdate = 1000 - (now % 1000);

			timeout = setTimeout(updateTime, nextUpdate);
		};

		updateTime();

		return () => {
			clearTimeout(timeout);
		};
	}, []);

	return (
		<Pressable
			style={({ pressed }) => [styles.container, { opacity: pressed ? 0.7 : 1 }]}
			onPress={onPress}
		>
			<CustomText
				color={theme.colors.blue700}
				fontS={16}
				fontW="400"
				style={styles.time}
			>
				{`${timeLeft.days} : ${timeLeft.hours
					.toString()
					.padStart(2, '0')} : ${timeLeft.minutes
					.toString()
					.padStart(2, '0')} : ${timeLeft.seconds.toString().padStart(2, '0')}`}
			</CustomText>
		</Pressable>
	);
};

export default CountdownTimer;

const createStyles = (theme: CustomTheme) => {
	return StyleSheet.create({
		container: {
			marginBottom: horizontalScale(24),
		},
		time: {
			textAlign: 'center',
			fontFamily: 'MOSCOW2024',
			fontVariant: ['tabular-nums'],
			textShadowColor: '#5AE3FFE5',
			textShadowOffset: { width: 0, height: 0 },
			textShadowRadius: 3,
		},
	});
};
