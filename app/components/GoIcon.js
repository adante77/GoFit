import React from 'react';
import { useFonts } from 'expo-font';
import { createIconSetFromIcoMoon } from '@expo/vector-icons';
import Animated from 'react-native-reanimated';

const Icon = createIconSetFromIcoMoon(
  require('../assets/icomoon/selection.json'),
  'IcoMoon',
  'icomoon.ttf'
);

const AnimatedIcon = Animated.createAnimatedComponent(Icon);


function GoIcon({ style , name , size , color }) {
    
    const [fontsLoaded] = useFonts({
        IcoMoon: require('../assets/icomoon/icomoon.ttf'),
    });

    if (!fontsLoaded) {
        return null;
    }
    return (
            <AnimatedIcon style={style} name={name} size={size} color={color} />
    );
}


export default GoIcon;