import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();


import AppHeader from './src/components/AppHeader';
import { useCallback } from 'react';

export default function App() {
  const [fontsLoaded] = useFonts({
    'TeX-Gyre-Adventor': require('./assets/fonts/texgyreadventor-regular.otf'),
    'TeX-Gyre-Adventor-Bold': require('./assets/fonts/texgyreadventor-bold.otf'),
    'TeX-Gyre-Adventor-Italic': require('./assets/fonts/texgyreadventor-italic.otf'),
    'TeX-Gyre-Adventor-Bold-Italic': require('./assets/fonts/texgyreadventor-bolditalic.otf')
  });

  const onLayoutRootView = useCallback(async() => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View>
      <View onLayout={onLayoutRootView}>
        <AppHeader />
        <Text style={styles.welcomeText}>Welcome to the Bible Essentials Podcast!</Text>
        <Text style={styles.aboutText}>This podcast is meant to help you understand the Bible in a much simpler way.</Text>
      </View>
      <View>
        {/* This view will hold all the episodes of the podcast */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    textAlign: "center",
    fontFamily: 'TeX-Gyre-Adventor-Bold',
    fontSize: 32,
    paddingTop: 10
  },
  aboutText: {
    textAlign: "center",
    fontWeight: "normal",
    fontFamily: 'TeX-Gyre-Adventor',
    fontSize: 32,
    paddingTop: 10
  }
})

