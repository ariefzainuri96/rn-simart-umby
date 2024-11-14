import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AuthProvider } from '@/context/auth';
import { useFonts } from 'expo-font';
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';
import 'react-native-reanimated';
import '@/global.css';
import { delay } from '@/helper/utils';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    SfPro100: require('../assets/fonts/SF-Pro-Text-Thin.otf'),
    SfPro200: require('../assets/fonts/SF-Pro-Text-Ultralight.otf'),
    SfPro300: require('../assets/fonts/SF-Pro-Text-Light.otf'),
    SfPro400: require('../assets/fonts/SF-Pro-Text-Regular.otf'),
    SfPro500: require('../assets/fonts/SF-Pro-Text-Medium.otf'),
    SfPro600: require('../assets/fonts/SF-Pro-Text-Semibold.otf'),
    SfPro700: require('../assets/fonts/SF-Pro-Text-Bold.otf'),
    SfPro900: require('../assets/fonts/SF-Pro-Text-Black.otf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  // useEffect(() => {
  //   async function loadAssets() {
  //     console.log('loadAssets');
  //     await delay(1000);

  //     SplashScreen.hideAsync();
  //   }

  //   if (loaded) {
  //     loadAssets();
  //   }
  // }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <AuthProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Slot />
      </ThemeProvider>
    </AuthProvider>
  );
}
