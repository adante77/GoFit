import HomeStack from "../components/navigation/HomeStack"
import Temp from "../screens/Temp"
import WorkoutLevels from "../screens/WorkoutLevels"
export default [
    { route : "HomeStack" , label : "Home" , icon : "Home" ,  component : HomeStack },
    { route : "Discover" , label : "Discover" , icon : "Discovery" ,  component : Temp },
    { route : "Insight" , label : "Insight" , icon : "Chart" ,  component : Temp },
    { route : "Profile" , label : "Profile" , icon : "Profile" , component : Temp }
]