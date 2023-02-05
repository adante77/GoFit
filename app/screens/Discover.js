import React , {useRef , useState} from 'react'
import { StyleSheet , View , FlatList , Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Animated , { color, Easing, log, useAnimatedProps, useAnimatedStyle , useDerivedValue, useSharedValue, withDecay, withDelay, withRepeat, withSpring, withTiming } from 'react-native-reanimated';
import Screen from '../components/Screen';
import GoIcon from '../components/GoIcon';
import Navbar from '../components/navigation/Navbar';
import Logo from '../assets/logo.svg'
import colors from '../config/colors';
import LevelButtons from '../components/button/LevelButtons';
import AppText from '../components/AppText';
import FeaturedCard from '../components/cards/FeaturedCard';
import { workoutCards } from '../assets/data/data';
import { FlashList } from '@shopify/flash-list';

const {width , height} = Dimensions.get("window")
const MARGIN = 24
const SEARCH_BAR_WIDTH = width - 2*MARGIN
const Button = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);


function Discover(props) {

    const [data , setData] =useState(workoutCards)
    const list = useRef(null);

    const active = useSharedValue(false)

    const fade = useAnimatedStyle(()=>{
        return{
            opacity : withTiming(active.value ? 0 : 1 , {duration : 500}),
            transform : [{translateX : withDelay( 200 , withTiming(active.value ? -150 : 0) )}],  
        }
    })
    const LogoComponent = ()=>{
        return(
            <Animated.View style={fade}>
                <Logo style={styles.logo} />
            </Animated.View>
        )
        
    }

    const Title = () =>{

        return(
            <Animated.View style={fade} >
              <AppText style={{ fontFamily:"Urbanist-Bold" , fontSize : 24 , color : colors.grayscale._900  }}>Discover</AppText>
            </Animated.View>
        )
    }

    


    const SearchBox = ()=>{
        const [text , setText] =useState('')
        const focused = useSharedValue(false)
        const inputRef= useRef(null)

        const activeAnime = useAnimatedStyle(()=>{
            return {
                width: withTiming(active.value ? SEARCH_BAR_WIDTH : 35 , {duration : 500 , easing : Easing.quad}),
                backgroundColor : active.value ? focused.value ? 'rgba(104, 66, 255, .08)' : colors.grayscale._100 : "white",
                paddingHorizontal : withTiming(active.value ? 20 : 5),
                borderWidth :  focused.value ? 1.4 : 0,
                borderColor : focused.value ? colors.primary._500 : 'transparent',
            }
        }) 
        const scale = useAnimatedStyle(()=>{    
            return {
                transform : [{scale: withTiming(active.value ? .8 : 1 )}]
            }     
        })

        const close = useAnimatedStyle(()=>{    
            return {
                opacity :withTiming(active.value ? 1 : 0 , {duration: 500} )
            }     
        })

        const colorAnime = useAnimatedStyle(()=>{    
            return {
                color :withTiming(focused.value ? colors.primary._500 : colors.grayscale._900  )
            }     
        })

        const submit = (text) =>{
        
        }

        return(
            <Animated.View style={[styles.searchBox  , activeAnime ]}>

                <Button  style={[styles.searchButton, scale]}  onPress={()=> {
                    if(!active.value){
                        active.value = true
                    }
                } }>
                     <GoIcon style={colorAnime} name="Search" size={23}  />
                </Button>

                <AnimatedTextInput 
                    ref={inputRef} 
                    onChangeText={text => setText(text)} 
                    onBlur={()=>focused.value = false} 
                    onFocus={()=>focused.value = true} 
                    style={[styles.input , close]} placeholder={"Search"}
                    onSubmitEditing={submit}
                    
                />

                <Button style={[styles.closeButton , close]} onPress={()=> {
                    active.value = false
                    focused.value = false
                    inputRef.current.blur()
                    inputRef.current.clear()
                } }>
                     <GoIcon style={colorAnime} name="Close-Square" size={23}  />
                </Button>
            </Animated.View>
          )
    }

   

    const levelButtonPress =( level ) => {
        
    }

    const workoutRenderItem=({item , index})=>{
        
        if(index ===0){
          return(
            <>
             <View style={{height : 18 }}/>
             <FeaturedCard 
                cardType="fullWidth"
                image={item.image} 
                title={item.title}
                duration = {item.duration}
                level = {item.level}
                style={{ width : "100%" , height : width * .35, borderRadius : 24 }}
              />
            </>
          )
        }else{
          return (
              <FeaturedCard 
                cardType="fullWidth"
                image={item.image} 
                title={item.title}
                duration = {item.duration}
                level = {item.level}
                style={{ width : "100%" , height : width * .35, borderRadius : 24 }}
              />
          )
        }
        
    
    }

    const ActionsComponent = ()=>(
        <SearchBox/>
    )

    return (
        <Screen style={styles.screen}>
           <Navbar 
            style={{marginBottom:20 , paddingVertical:8}}
            title={<Title/>}
            Logo={<LogoComponent/>}
            Actions = {<ActionsComponent/>}
            actionLenght = {1}
           />


            <LevelButtons style={{ paddingHorizontal : 0 } } onPress={ levelButtonPress }/> 
            

            <FlashList
                ref={list}
                data={data}
                renderItem={workoutRenderItem}
                estimatedItemSize={(width * .35) }
                ItemSeparatorComponent={()=><View style={{height : 20 }}/>}
                keyExtractor={item => item.id.toString() }
                overScrollMode="never"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{  paddingBottom :24 }}
                windowSize={1}
                onEndReachedThreshold = {.5}
                
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal : 24,
        paddingTop : 24,
        paddingBottom : 81,
        backgroundColor : "white"
    },
    logo : {
        marginRight : 14,
        height : 32
    },
    searchBox:{
        position : "absolute",
        paddingVertical: 14,
        flexDirection : "row",
        overflow : "hidden",
        borderRadius : 15,
    },
    searchButton : {
        justifyContent : "center",
    },
    closeButton : {
        justifyContent : "center"
    },
    input : {
        width : "83%",
        fontFamily : "Urbanist-Bold" ,
        fontSize :18,
        paddingHorizontal : 10,
        marginLeft : 6
    }
})
export default Discover;