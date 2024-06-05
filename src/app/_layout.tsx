import { ThemeProvider } from '@react-navigation/native';
import { Slot, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { RecoilRoot } from 'recoil';
import { useColorScheme, useInitialAndroidBarSync } from '~/lib/useColorScheme';
import { NAV_THEME } from '~/theme';
import { useFonts } from 'expo-font';
import '../global.css';
import { useEffect } from 'react';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    InterBold: require('~assets/fonts/Inter-Black.ttf'),
  });
  useEffect(() => {
    const loadFont = async () => {
      if (loaded || error) {
        await SplashScreen.hideAsync();
      }
    };
    loadFont();
  }, [loaded, error]);
  if (!loaded && !error) return null;
  return <RootLayoutNav />;
}
function RootLayoutNav() {
  useInitialAndroidBarSync();

  const { colorScheme, isDarkColorScheme } = useColorScheme();

  return (
    <RecoilRoot>
      <StatusBar
        key={`root-status-bar-${isDarkColorScheme ? 'light' : 'dark'}`}
        style={isDarkColorScheme ? 'light' : 'dark'}
      />
      <ThemeProvider value={NAV_THEME[colorScheme]}>
        <Slot />
      </ThemeProvider>
    </RecoilRoot>
  );
}
