import React , {memo} from 'react';
import { TouchableWithoutFeedback, View , StyleSheet, ImageBackground } from 'react-native';
import { LinearGradient } from "expo-linear-gradient"
import AppText from '../AppText';
import colors from '../../config/colors';
import GoIcon from '../GoIcon';
import Animated , { FadeOut , SlideInRight , Layout, ZoomIn} from 'react-native-reanimated';

function FeaturedCard({style , cardType ,  image , title , duration , level , animated , children}) {
    return (
        <>
        { !animated && 
            <TouchableWithoutFeedback >
                <ImageBackground resizeMode="cover" source={image} style={[styles(style , cardType).card , style]}>
                    <LinearGradient
                    style={[styles(style , cardType).box]}
                    end={[ .5,  1 ]}
                    start={[.5, 0 ]}
                    locations= {[0 , .1 , .3 , .4 , .5 , .6 , .8 , .9 ]}
                    colors={[ "#4B4B4B00" , "#4444441D" , "#4040404D" , "#3A3A3A66" , "#36363680" , "#2F2F2F99" , "#282828CC" , "#202020E5"]}
                    >
                        <AppText style={styles(style , cardType).title}>{title}</AppText>
                        <View style={styles(style , cardType).wrapper}>
                            <View style={styles(style , cardType).detail}>
                                <AppText style={styles(style , cardType).detailText}>{duration}  |  </AppText>
                                <AppText style={styles(style , cardType).detailText}>{level}</AppText>
                            </View >
                            <GoIcon style={{ marginRight : -2}} name="Bookmark" size={21} color="white" />
                        </View>
                    </LinearGradient>
                </ImageBackground>
             </TouchableWithoutFeedback>
        }
        { animated && 
            <Animated.View
               
                 exiting={ FadeOut }
                 entering={ZoomIn}
                
                
            >
                <TouchableWithoutFeedback >
                        <ImageBackground resizeMode="cover" source={image} style={[styles(style , cardType).card , style]}>
                            <LinearGradient
                            style={[styles(style , cardType).box]}
                            end={[ .5,  1 ]}
                            start={[.5, 0 ]}
                            locations= {[0 , .1 , .3 , .4 , .5 , .6 , .8 , .9 ]}
                            colors={[ "#4B4B4B00" , "#4444441D" , "#4040404D" , "#3A3A3A66" , "#36363680" , "#2F2F2F99" , "#282828CC" , "#202020E5"]}
                            >
                                <AppText style={styles(style , cardType).title}>{title}</AppText>
                                <View style={styles(style , cardType).wrapper}>
                                    <View style={styles(style , cardType).detail}>
                                        <AppText style={styles(style , cardType).detailText}>{duration}  |  </AppText>
                                        <AppText style={styles(style , cardType).detailText}>{level}</AppText>
                                    </View >
                                    <GoIcon style={{ marginRight : -2}} name="Bookmark" size={21} color="white" />
                                </View>
                            </LinearGradient>
                        </ImageBackground>
                    
                </TouchableWithoutFeedback>
            </Animated.View>
            
        }
        {/* For Passing Seprator */}
        {children}
        </>
        
        
    );
}

const styles = (style , cardType) => StyleSheet.create({
    card : {
        borderRadius : 36,
        overflow : "hidden",
    },
    box :{
        position : "absolute",
        paddingHorizontal :  cardType === "fullWidth" ? 24 : cardType === "bookmark" ? 15 : 32,
        paddingBottom: cardType === "fullWidth" ? 16 : cardType === "bookmark" ? 13 : 32,
        paddingTop : cardType === "fullWidth" ? 27 : cardType === "bookmark" ? 41 : 71,
        width : "100%",
        bottom : 0,
    },
    detail :{
        flexDirection : "row",
    },
    detailText : {
        color: "white" ,
        fontFamily : "Urbanist-Medium",
        fontSize: 13
    },
    title : {
        color : "white",
        fontSize : 22,
        fontFamily : "Urbanist-Bold",
        fontSize: 21
    },
    wrapper:{
        flexDirection : "row",
        paddingTop : 10,
        justifyContent : "space-between",
        alignItems : "center"
    }
})


export default memo(FeaturedCard);