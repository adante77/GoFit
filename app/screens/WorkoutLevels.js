import React , {useState , useRef , useCallback , useEffect} from 'react';
import { View , Dimensions , StyleSheet, FlatList } from 'react-native';
import Screen from '../components/Screen';
import Navbar from '../components/navigation/Navbar';
import FeaturedCard from '../components/cards/FeaturedCard';
import LevelButtons from '../components/button/LevelButtons';
import GoIcon from '../components/GoIcon';
import colors from '../config/colors';
import { workoutCards } from '../assets/data/data';


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
        <GoIcon style={{ marginTop : 2.8}} name="Notification" size={23} color={colors.grayscale._900 } />
    )

    return (
       <Screen style={styles.screen}>
            <Navbar 
              title="Workout Levels"
              Actions = {<ActionsComponent/>}
              actionLenght={1}
              back={true}
              style={{marginBottom:20 , paddingVertical:8}}
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
    }
      
})
export default WorkoutLevels;