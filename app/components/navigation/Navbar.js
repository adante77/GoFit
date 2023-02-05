import React from 'react';
import { View  , StyleSheet , Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {AntDesign} from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


import colors from '../../config/colors';
import AppText from '../AppText';




function Navbar({ Logo , back , title , Actions , actionLenght , style}) {
    const navigation =useNavigation()
    return (
        <View style={[styles(actionLenght).container , style]}>
            <View style={styles(actionLenght).navbar}>
                <View style={styles(actionLenght).leftSection}>
                    {  back ? 
                        <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginRight : 16}}>
                            <AntDesign name="arrowleft" size={24} />
                        </TouchableOpacity>
                        : Logo
                    }
                    {  typeof title === "string" ? 
                        <AppText style={{ fontFamily:"Urbanist-Bold" , fontSize : 24 , color : colors.grayscale._900  }}>{title}</AppText>
                        : title
                    }
                    
                </View>
                <View style={styles(actionLenght).rightSection}>
                    {Actions}
                </View>
            </View>
        </View>
    );
}

const styles = (actionLength) => StyleSheet.create({
    container : {
        flexDirection : 'row',
    },
    navbar : {
        flexDirection: "row",
        flex : 1,
        justifyContent : "space-between"
    },
    leftSection :{
        flexDirection : "row",
        width : "79%",
        alignItems : "center",
       
    },
    rightSection :{
        flexDirection : "row",
        alignItems : "center",
        justifyContent : actionLength >=1 ? "flex-end" : "space-between",
        width : "21%",
    }
})
export default Navbar;