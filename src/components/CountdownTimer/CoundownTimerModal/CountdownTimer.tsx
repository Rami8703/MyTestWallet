import React, { FC, useEffect, useState } from 'react';

import { StyleSheet } from 'react-native';

import { CustomText } from 'components/Text/Text';
import { useTheme } from 'components/ThemeProvider/CustomeThemeProvider';

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

const CountdownTimer: FC = () => {
	const { theme } = useTheme();
	const styles = createStyles();

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
		<CustomText
			color={theme.colors.blue700}
			fontS={32}
			fontW="400"
			style={styles.time}
		>
			{`${timeLeft.days} : ${timeLeft.hours.toString().padStart(2, '0')} : ${timeLeft.minutes
				.toString()
				.padStart(2, '0')} : ${timeLeft.seconds.toString().padStart(2, '0')}`}
		</CustomText>
	);
};

const createStyles = () => {
	return StyleSheet.create({
		time: {
			marginTop: horizontalScale(18),
			textAlign: 'center',
			fontFamily: 'MOSCOW2024',
			fontVariant: ['tabular-nums'],
			textShadowColor: '#5AE3FFE5',
			textShadowOffset: { width: 0, height: 0 },
			textShadowRadius: 4,
		},
	});
};

export default CountdownTimer;
