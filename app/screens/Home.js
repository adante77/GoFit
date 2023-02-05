import React, {useRef , useState , useEffect, memo , useCallback } from 'react'
import { Pressable, FlatList, ScrollView, StyleSheet , View , Text , Dimensions} from 'react-native';
import Screen from '../components/Screen';
import Navbar from '../components/navigation/Navbar';
import colors from '../config/colors';
import AppText from '../components/AppText';
import GoIcon from '../components/GoIcon';
import Logo from '../assets/logo.svg'
import FeaturedCard from '../components/cards/FeaturedCard';
import { FlashList } from "@shopify/flash-list";
import Animated , { useAnimatedStyle , useSharedValue} from 'react-native-reanimated';
import LevelButtons from '../components/button/LevelButtons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { workoutCards  , cards} from '../assets/data/data';




const {width , height} = Dimensions.get("window")


function Home({}) {
    const navigation = useNavigation()
    const [data , setData] =useState(workoutCards.filter(item=> item.level === "Bigginer"))

    const list = useRef(null);

    const levelButtonPress =( level ) => {
      setData([...workoutCards.filter((item) => (item.level === level))])
      list.current?.prepareForLayoutAnimationRender();
    }

    const LogoComponent = ()=>(
      <Logo style={styles.logo} />
    )

    const ActionsComponent = ()=>(
      <>
        <GoIcon style={{ marginTop : 2.8}} name="Notification" size={23} color={colors.grayscale._900 } />
        <GoIcon style={{ marginRight : -2}} name="Bookmark" size={22} color={colors.grayscale._900 } />
      </>
    )
    
    const ItemSeparatorComponent = useCallback(()=>
        <View style={{height : 20 }}/>
    )
    const renderItem = ({item}) =>(
        <FeaturedCard 
          image={item.image} 
          title={item.title}
          duration = {item.duration}
          level = {item.level}
          style={{ width : width * .71 , height : width * .71, marginRight : 24 }}
        />
    )

    const workoutRenderItem=({item , index})=>(
        <FeaturedCard 
            cardType="fullWidth"
            image={item.image} 
            title={item.title}
            duration = {item.duration}
            level = {item.level}
            animated = {true}
            style={{ width : "100%" , height : width * .35, borderRadius : 24 }}
          />
    
    )
    return (
        <Screen style={styles.screen}>
          <Navbar 
            style={{paddingVertical : 12}}
            title="Gofit"
            Logo={<LogoComponent/>}
            Actions = {<ActionsComponent/>}
          />
          
          <ScrollView 
            showsVerticalScrollIndicator={false} 
            style={{marginHorizontal : -24}}
            contentContainerStyle = {{ paddingBottom : 24 }}
            overScrollMode = "never"
            stickyHeaderHiddenOnScroll = {false}
            stickyHeaderIndices={[3]}
            scrollEventThrottle={16}
            nestedScrollEnabled={true}
            
          >


                <AppText style={styles.text}>Morning, Christina 👋</AppText>

                {/* Feature Card  Container  */}
                <View  style={styles.featuredCardContainer}>
                    <View style={styles.featuredCardHeader}>
                        <AppText style={{fontFamily:"Urbanist-Bold" , fontSize:18 }}>Featured Workout</AppText>
                        <AppText style={{fontFamily:"Urbanist-Bold" , fontSize:14 , color:colors.primary._500  }}>See All</AppText>
                    </View>

                    <FlatList 
                        data = {cards}
                        keyExtractor = {card => card.id.toString()}
                        horizontal = {true}
                        overScrollMode = "never"
                        showsHorizontalScrollIndicator = {false}
                        renderItem = {renderItem}
                        style={{marginRight:-24}}
                    />
                    
                </View>

                {/* WorkOut Card Header Container */}
                <View style={styles.workoutCardHeader}>
                  <AppText style={{fontFamily:"Urbanist-Bold" , fontSize:18 }}>Workout Levels</AppText>
                  <TouchableOpacity onPress={()=>navigation.navigate("HomeStack" , {screen : "WorkoutLevels" })}>
                    <AppText style={{fontFamily:"Urbanist-Bold" , fontSize:14 , color:colors.primary._500  }}>See All</AppText>
                  </TouchableOpacity>
                </View>

                {/* Level Tabs  */}
                <LevelButtons  onPress={ levelButtonPress }/> 
                  
                {/* WorkOut Card Container */}
                <View  style={[styles.workoutCardContainer ,{height: ((width * .35) + 20) * data.length -20 }]}>
                  <FlashList
                      ref={list}
                      data={data}
                      renderItem={workoutRenderItem}
                      estimatedItemSize={(width * .35) }
                      ItemSeparatorComponent={ItemSeparatorComponent}
                      keyExtractor={item => item.id.toString() }
                  />
                </View> 
              
          </ScrollView>
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
    text:{
      fontSize : 26,
      fontFamily:"Urbanist-Bold",
      color :colors.grayscale._900,
      paddingHorizontal : 24,
    },
    logo : {
      marginRight : 14,
      height : 32
    },
    featuredCardContainer:{
      width:"100%",
      marginVertical : 24,
      paddingHorizontal : 24,
    },
    featuredCardHeader:{
      flexDirection : "row",
      alignItems : "flex-end",
      marginBottom : 24,
      justifyContent : "space-between",
    },
    workoutCardContainer:{
      width:"100%", 
      paddingHorizontal : 24,
      marginTop : 18,
    },
    workoutCardHeader:{ 
      flexDirection : "row",
      alignItems: "flex-end",
      justifyContent : "space-between",
      paddingHorizontal : 24,
      marginBottom : 24
    }
  });

export default Home;