import {useThemeNew} from 'components/ThemeNewProvider/CustomeThemeNewProvider';

type InputProps = {
  isFocused: boolean;
  isError: boolean;
  isDisabled: boolean;
};

export function useInput({isFocused, isError, isDisabled}: InputProps) {
  const {theme} = useThemeNew();

  const getBorderColor = () => {
    switch (true) {
      case isError:
        return theme.colors['border/primary'];
      case isFocused:
        return theme.colors['border/selected'];

      default:
        return theme.colors['border/primary'];
    }
  };

  const getWraperColor = () => {
    switch (true) {
      case isError:
        return theme.colors['surface/secondary-dimmed'];
      case isFocused:
        return theme.colors['surface/secondary-dimmed'];
      default:
        return theme.colors['surface/secondary-dimmed'];
    }
  };

  const getBackgroundColor = () => {
    return 'transparent';
    // switch (true) {
    //   case isError:
    //     return 'transparent';
    //return theme.colors['surface/secondary-dimmed'];
    //   case isFocused:
    //     return theme.colors['surface/secondary-dimmed'];
    //   case isDisabled:
    //     return 'transparent';
    //   default:
    //     return 'transparent';
    // }
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
