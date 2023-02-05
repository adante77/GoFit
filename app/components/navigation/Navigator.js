import React from 'react';
import { View , Dimensions } from 'react-native';
import { createBottomTabNavigator , Text } from '@react-navigation/bottom-tabs';
import MyTabBar from './MyTabBar';
import TabArr from '../../config/tabs';



const Tab = createBottomTabNavigator();


const {width, height} = Dimensions.get("window")
function Navigator(props) {
    return (
          <View style={{ width , height }}>
            <Tab.Navigator
              id="NavID"
              tabBar={props => <MyTabBar {...props} />}
              screenOptions={{ 
                headerShown: false ,
                tabBarShowLabel : false,
              }}
          >
              {
                TabArr.map(( _ , index) =>(
                    <Tab.Screen  key={index} name={_.route} component={_.component} 
                        options={{
                          tabBarIcon : { icon : _.icon},
                        }}
                    />
                ))
              }
              
          </Tab.Navigator>
          </View>
          
       
    )
}


export default Navigator;