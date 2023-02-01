import React from 'react';
import AppText from './AppText'
import { StyleSheet , Pressable, TouchableWithoutFeedback } from 'react-native';
import Animated , { useAnimatedStyle , useSharedValue} from 'react-native-reanimated';

function Button({buttonStyle , textStyle , children , onPress , onLayout }) {
    return (
        
            <TouchableWithoutFeedback onLayout={onLayout} onPress={onPress} >
                <Animated.View style = {[styles.pressable , buttonStyle]}>
                     <AppText style = {textStyle}>{children}</AppText>
                </Animated.View>
            </TouchableWithoutFeedback>
        
    );
}

const styles = StyleSheet.create({
    pressable : {
        flexDirection : "row",
        justifyContent:"center"

    }
})
export default Button;