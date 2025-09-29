import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import {CustomTheme, customTheme, customThemeLight} from 'theme/theme';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface CustomThemeProviderProps {
  children: ReactNode;
}

type ThemeType = {
  theme: CustomTheme;
  setTheme: React.Dispatch<React.SetStateAction<CustomTheme>>;
  isLightTheme: boolean | null;
  setIsLightTheme: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const ThemeContext = createContext<ThemeType | undefined>(undefined);

export const useTheme = (): ThemeType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a CustomThemeProvider');
  }
  return context;
};

export const CustomThemeProvider: React.FC<CustomThemeProviderProps> = ({
  children,
}) => {
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState(
    colorScheme === 'light' ? customThemeLight : customTheme,
  );
  const [isLightTheme, setIsLightTheme] = useState<null | boolean>(
    colorScheme === 'light',
  );

  useEffect(() => {
    setTheme(colorScheme === 'light' ? customThemeLight : customTheme);
    setIsLightTheme(colorScheme === 'light');
  }, [colorScheme]);

  // useEffect(() => {
  //   (async () => {
  //     const asyncTheme = await AsyncStorage.getItem('asyncTheme');

  //     if (!asyncTheme) {
  //       if (colorScheme) {
  //         setTheme(colorScheme === 'light' ? customThemeLight : customTheme);
  //         setIsLightTheme(colorScheme === 'light');
  //         await AsyncStorage.setItem('asyncTheme', colorScheme);
  //       } else {
  //         setTheme(customThemeLight);
  //         setIsLightTheme(true);
  //         await AsyncStorage.setItem('asyncTheme', 'light');
  //       }
  //     } else {
  //       setTheme(asyncTheme === 'light' ? customThemeLight : customTheme);
  //       setIsLightTheme(asyncTheme === 'light');
  //     }
  //   })();
  // }, []);

  return (
    <ThemeContext.Provider
      value={{theme, setTheme, isLightTheme, setIsLightTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
