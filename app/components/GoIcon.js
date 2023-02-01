import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';

const Icon = createIconSetFromIcoMoon(
  require('../assets/icomoon/selection.json'),
  'IcoMoon',
  'icomoon.ttf'
);


function GoIcon({ style , name , size , color }) {
    
    const [fontsLoaded] = useFonts({
        IcoMoon: require('../assets/icomoon/icomoon.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
            <Icon style={style} name={name} size={size} color={color} />
    );
}


export default GoIcon;