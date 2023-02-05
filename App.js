import 'react-native-gesture-handler';
import React , { useCallback , useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Navigator from './app/components/navigation/Navigator';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {  
  const [fontsLoaded] = useFonts({
    "Urbanist-Bold" : require('./app/assets/fonts/Urbanist/Urbanist-Bold.otf'),
    "Urbanist-Medium" : require('./app/assets/fonts/Urbanist/Urbanist-Medium.otf'),
    "Urbanist-SemiBold" : require('./app/assets/fonts/Urbanist/Urbanist-SemiBold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
  if (fontsLoaded) {
      await SplashScreen.hideAsync();
  }
  }, [fontsLoaded]);


  if (!fontsLoaded) {
  return null;
  }

  
  
  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <Navigator/>
    </NavigationContainer>
  );
}