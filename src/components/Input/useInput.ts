import {ThemeProvider} from '@react-navigation/native';
import {useTheme} from 'components/ThemeProvider/CustomeThemeProvider';

type InputProps = {
  isFocused: boolean;
  isError: boolean;
  isDisabled: boolean;
};

export function useInput({isFocused, isError, isDisabled}: InputProps) {
  const {theme} = useTheme();

  const getBorderColor = () => {
    switch (true) {
      case isError:
        return theme.colors.red100;
      case isFocused:
        return theme.colors.primary500;

      default:
        return theme.colors.border50;
    }
  };

  const getWraperColor = () => {
    switch (true) {
      case isError:
        return theme.colors.primary1250;
      case isFocused:
        return '#FFFFFF';
      default:
        return theme.colors.background100;
    }
  };

  const getBackgroundColor = () => {
    switch (true) {
      case isError:
        return theme.colors.primary1250;
      case isFocused:
        return theme.colors.buttonBackground50;
      case isDisabled:
        return theme.colors.secondary1100;
      default:
        return theme.colors.background100;
    }
  };

  const borderColor = getBorderColor();
  const wraperColor = getWraperColor();
  const backgroundColor = getBackgroundColor();

  return {
    borderColor,
    wraperColor,
    backgroundColor,
  };
}
