import React , { useEffect , memo , useRef, useState } from 'react';
import { View , StyleSheet } from 'react-native';
import Animated , { useSharedValue , useAnimatedStyle } from 'react-native-reanimated';
import colors from '../../config/colors';
import Button from '../Button';

const levels = [
    {
        id : 1,
        level : "Bigginer",
    },
    {
      id : 2,
      level : "Intermediate",
    },
    {
      id : 3,
      level : "Advanced",
    }
  ]

  const LevelButton = ({isFocused , handelPress , level}) =>{

    const bgColor = useSharedValue("")
    const fontColor = useSharedValue("")
  
    const animatedButton = useAnimatedStyle(()=>{
      return {
        backgroundColor : bgColor.value
      }
    })
    const animatedText = useAnimatedStyle(()=>{
      return {
        color : fontColor.value
      }
    })
  
    const animate = ()=>{
      bgColor.value =  isFocused ? colors.primary._500 : "white" 
      fontColor.value =  isFocused ? "white" : colors.primary._500
    }
  
    useEffect(() => {
      animate()
    }, [isFocused])
    
    return (
        <Button 
          onPress={ () => {
            handelPress(level)
          }} 
          buttonStyle={[styles.tabButton , animatedButton]}
          textStyle={[styles.tabButtonText , animatedText ]} 
        >
        {level}
        </Button> 
    )
}

function LevelButtons({onPress , style}) {
    const [level , setLevel] = useState("Bigginer")

    const handelPress = (lev)=>{
      if(lev !== level) {
        setLevel(lev)
        onPress(lev)
      }
    }
    return (
      <View style={[styles.levelTabsContainer , style]}>
            {
                levels.map((item , index) =>(
                    <LevelButton key={index} level={item.level} isFocused={level === item.level} handelPress={handelPress} />
                ))
            }
      </View>
    );
}

const styles = StyleSheet.create({
    tabButton : {
        borderColor : colors.primary._500,
        borderWidth : 2,
        paddingVertical : 8,
        paddingHorizontal : 13,
        borderRadius : 100
    },
    tabButtonText : {
      fontFamily : "Urbanist-SemiBold"
    },
    levelTabsContainer :{
      flex : 1 ,
      flexDirection : "row",
      justifyContent : "space-between",
      alignItems : "center",
      paddingBottom : 6,
      paddingHorizontal : 24,
      backgroundColor : "white",
    
    }
})
export default memo(LevelButtons);