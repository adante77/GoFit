import React from 'react';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native'
import { createStackNavigator , TransitionPresets } from '@react-navigation/stack';
import Home from '../../screens/Home';
import WorkoutLevels from '../../screens/WorkoutLevels';

const Stack = createStackNavigator();

Stack
function HomeStack({route}) {
    const navigation = useNavigation()
    React.useLayoutEffect(() => {
        const tabHiddenRoutes = "WorkoutLevels";
        if(tabHiddenRoutes === getFocusedRouteNameFromRoute(route)){
            navigation.setOptions({tabBarStyle: {display: 'none'}});
        } else {
           navigation.setOptions({tabBarStyle: {display: 'flex'}});
        }
    }, [ route]);

    
    return (
        <Stack.Navigator
        
        screenOptions={{
            ...TransitionPresets.BottomSheetAndroid,
            headerShown : false,
            freezeOnBlur : true,
        }}
        >
            <Stack.Screen  name='Home' component={Home}/>
            <Stack.Screen options={{freezeOnBlur : true}} name='WorkoutLevels' component={WorkoutLevels}/>
        </Stack.Navigator>
    );
}

export default HomeStack;