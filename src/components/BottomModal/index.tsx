import React from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { useTheme } from '../ThemeProvider/CustomeThemeProvider';
import { CustomTheme } from '../../theme/theme';

type BottomSheetModalProps = {
	visible: boolean;
	onClose: () => void;
	children: React.ReactNode;
	bgColor?: string;
};

export const BottomSheetModal: React.FC<BottomSheetModalProps> = ({
	visible,
	onClose,
	children,
	bgColor,
}) => {
	const { theme } = useTheme();
	const styles = createStyles(theme);
	return (
		<Modal
			isVisible={visible}
			onBackdropPress={onClose}
			style={styles.modal}
			backdropOpacity={0.5}
			hideModalContentWhileAnimating
			useNativeDriver
			useNativeDriverForBackdrop
		>
			<View
				style={[
					styles.modalContainer,
					{ backgroundColor: bgColor || theme.colors.secondary300 },
				]}
			>
				{children}
			</View>
		</Modal>
	);
};

const createStyles = (theme: CustomTheme) =>
	StyleSheet.create({
		modal: {
			justifyContent: 'flex-end',
			margin: 0,
		},
		modalContainer: {
			width: '100%',
			borderTopLeftRadius: 20,
			borderTopRightRadius: 20,
			padding: theme.spacing.layoutPaddingM,
		},
	});
