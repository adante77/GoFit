import HomeStack from "../components/navigation/HomeStack"
import Discover from "../screens/Discover"
import Insight from "../screens/Insight"
import Profile from "../screens/Profile"
export default [
    { route : "HomeStack" , label : "Home" , icon : "Home" ,  component : HomeStack },
    { route : "Discover" , label : "Discover" , icon : "Discovery" ,  component : Discover },
    { route : "Insight" , label : "Insight" , icon : "Chart" ,  component : Insight },
    { route : "Profile" , label : "Profile" , icon : "Profile" , component : Profile }
]