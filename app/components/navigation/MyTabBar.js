import React, { useEffect } from 'react';
import { Text , View , Dimensions , StyleSheet , TouchableOpacity, TextBase } from 'react-native';
import Animated, { useSharedValue , useAnimatedStyle, withSpring, withTiming } from 'react-native-reanimated';
import GoIcon from '../GoIcon';
import TabArr from '../../config/tabs';
import colors from '../../config/colors';
import { getFocusedRouteNameFromRoute, useNavigation } from '@react-navigation/native'

const {width} = Dimensions.get("window") 
const MARGIN = 16
const TAB_BAR_WIDTH = width - 2 * MARGIN
const TAB_WIDTH = TAB_BAR_WIDTH / TabArr.length 



function MyTabBar({ state, descriptors, navigation }) {
    const translateX = useSharedValue(0)
  
    const animatedIndicator = useAnimatedStyle(() => {
      return {
        transform: [{ translateX: withTiming(translateX.value)}],
      };
    });
    
    
    useEffect(()=>{
      translateX.value = state.index * TAB_WIDTH
    },[state.index])
    
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if(focusedOptions?.tabBarStyle?.display === "none"){
      return null;
    }else{
      return (
        <View style={styles.tabBarContainer}>
          <Animated.View style={styles.indicatorContainer}>
              <Animated.View style={[styles.indicator , animatedIndicator]}/>
          </Animated.View>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
    
            const isFocused = state.index === index;
    
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
    
              if (!isFocused && !event.defaultPrevented) {
                // The `merge: true` option makes sure that the params inside the tab screen are preserved
                navigation.navigate({ name: route.name, merge: true });
              }
            };
            const tabBarIcon = options.tabBarIcon
            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityState={isFocused ? { selected: true } : {}}
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                style={{ alignItems : 'center' , justifyContent : 'center' , width : TAB_WIDTH , height : "100%"}}
              >
                <GoIcon name={ tabBarIcon.icon } size={24} color={isFocused ? colors.primary._500 : colors.grayscale._600}  />
              </TouchableOpacity>
            );
          })}
        </View>
      );
    }
  }

const styles = StyleSheet.create({
tabBarContainer: {
    width : TAB_BAR_WIDTH,
    flexDirection : "row",
    position : 'absolute',
    alignSelf : "center",
    backgroundColor : "white",
    elevation : 5,
    borderRadius : 10,
    bottom : 16,
    height : 65,
    alignItems : 'center',
    justifyContent : "space-around",
},
indicatorContainer :{
    position : "absolute",
    width : TAB_WIDTH,
    alignItems : "center",
    justifyContent : "center",
},
indicator :{
    width : 50,
    height : 50,
    backgroundColor : colors.primary._200,
    borderRadius : 14,
    opacity : .35,
}
})

export default MyTabBar;