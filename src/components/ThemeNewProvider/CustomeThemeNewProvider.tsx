import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from 'react';
import {customNewThemeDark, customNewThemeLight} from 'theme/theme'; // 👈 import your new themes
import {useColorScheme} from 'react-native';

interface CustomThemeNewProviderProps {
  children: ReactNode;
}

type NewThemeType = {
  theme: typeof customNewThemeLight;
  setTheme: React.Dispatch<React.SetStateAction<typeof customNewThemeLight>>;
  isLightTheme: boolean | null;
  setIsLightTheme: React.Dispatch<React.SetStateAction<boolean | null>>;
};

const ThemeNewContext = createContext<NewThemeType | undefined>(undefined);

export const useThemeNew = (): NewThemeType => {
  const context = useContext(ThemeNewContext);
  if (context === undefined) {
    throw new Error('useThemeNew must be used within a CustomThemeNewProvider');
  }
  return context;
};

export const CustomThemeNewProvider: React.FC<CustomThemeNewProviderProps> = ({
  children,
}) => {
  const colorScheme = useColorScheme();

  const [theme, setTheme] = useState(
    colorScheme === 'light' ? customNewThemeLight : customNewThemeDark,
  );
  const [isLightTheme, setIsLightTheme] = useState<null | boolean>(
    colorScheme === 'light',
  );

  useEffect(() => {
    setTheme(
      colorScheme === 'light' ? customNewThemeLight : customNewThemeDark,
    );
    setIsLightTheme(colorScheme === 'light');
  }, [colorScheme]);

  return (
    <ThemeNewContext.Provider
      value={{theme, setTheme, isLightTheme, setIsLightTheme}}>
      {children}
    </ThemeNewContext.Provider>
  );
};
