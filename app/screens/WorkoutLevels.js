import React , {useState , useRef , useCallback , useEffect} from 'react';
import { View , Dimensions , StyleSheet, FlatList } from 'react-native';
import Screen from '../components/Screen';
import { FlashList } from '@shopify/flash-list';
import Navbar from '../components/navigation/Navbar';
import FeaturedCard from '../components/cards/FeaturedCard';
import LevelButtons from '../components/button/LevelButtons';
import GoIcon from '../components/GoIcon';
import colors from '../config/colors';
import Logo from '../assets/logo.svg'

const workoutCards = [
    {
      id : 1,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching",
      duration : "10 minutes",
      level : "Intermediate"
    },
    {
      id : 2,
      image : require("../assets/images/yoga-movement-exercise.png"),
      title : "Squat Movement Exercise 1",
      duration : "15 minutes",
      level : "Advanced"
    },
    {
      id : 3,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 2",
      duration : "10 minutes",
      level : "Bigginer"
    },
    {
      id : 4,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 3 ",
      duration : "10 minutes",
      level : "Intermediate"
    },
    {
      id : 5,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 4",
      duration : "10 minutes",
      level : "Bigginer"
    },
    {
      id : 6,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 5",
      duration : "10 minutes",
      level : "Advanced"
    },
    {
      id : 7,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 6",
      duration : "10 minutes",
      level : "Intermediate"
    },
    {
      id : 8,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 7",
      duration : "10 minutes",
      level : "Bigginer"
    },
    {
      id : 9,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 8",
      duration : "10 minutes",
      level : "Intermediate"
    },
    {
      id : 10,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 9",
      duration : "10 minutes",
      level : "Bigginer"
    },
    {
      id : 11,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 10",
      duration : "10 minutes",
      level : "Advanced"
    },
    {
      id : 12,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 10",
      duration : "10 minutes",
      level : "Advanced"
    },
    {
      id : 13,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 10",
      duration : "10 minutes",
      level : "Advanced"
    },
    {
      id : 14,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 10",
      duration : "10 minutes",
      level : "Advanced"
    },
    {
      id : 15,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 10",
      duration : "10 minutes",
      level : "Advanced"
    },
    {
      id : 16,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 10",
      duration : "10 minutes",
      level : "Advanced"
    },
    {
      id : 17,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 10",
      duration : "10 minutes",
      level : "Advanced"
    },
    {
      id : 18,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 10",
      duration : "10 minutes",
      level : "Advanced"
    },
    {
      id : 19,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 10",
      duration : "10 minutes",
      level : "Advanced"
    },
    {
      id : 20,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 10",
      duration : "10 minutes",
      level : "Advanced"
    },
    {
      id : 21,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 10",
      duration : "10 minutes",
      level : "Advanced"
    },
    {
      id : 22,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 10",
      duration : "10 minutes",
      level : "Advanced"
    },
    {
      id : 23,
      image : require("../assets/images/yoga-women-exercise.png"),
      title : "Full Body Stretching 10",
      duration : "10 minutes",
      level : "Advanced"
    }
  ]

const {width } = Dimensions.get("window")

function WorkoutLevels(props) {
    const [data , setData] =useState(workoutCards.filter(item=> item.level === "Bigginer"))
    const list = useRef(null);

    const levelButtonPress =( level ) => {
      setData([...workoutCards.filter((item) => (item.level === level))])
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
                animated={true}
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
                animated={true}
                style={{ width : "100%" , height : width * .35, borderRadius : 24 }}
              />
          )
        }
        
    
      }
    
    const ActionsComponent = ()=>(
      <>
        <GoIcon style={{ marginTop : 2.8}} name="Notification" size={23} color={colors.grayscale._900 } />
      </>
    )

    useEffect(()=>{
      console.log(5);
    })
    return (
       <Screen style={styles.screen}>
            <Navbar 
              title="Workout Levels"
              Actions = {<ActionsComponent/>}
              actionLenght={1}
              back={true}
              style={{marginBottom:20}}
            />

            <FlatList
                ref={list}
                data={data}
                renderItem={workoutRenderItem}
                ListHeaderComponent={<LevelButtons onPress={levelButtonPress} style={{ paddingHorizontal : 0 }  }/>}
                ItemSeparatorComponent={<View style={{height : 20 }}/>}
                keyExtractor={item => item.id.toString() }
                overScrollMode="never"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{  paddingBottom :24 }}
                stickyHeaderIndices={[0]}
                windowSize={1}
                onEndReachedThreshold = {.5}
                
            />
       </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal : 24,
        paddingTop : 16,
        backgroundColor : "white"
    },
    workoutCardContainer:{
      width:"100%", 
      marginTop : 18,
    }
      
})
export default WorkoutLevels;