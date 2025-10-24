import { createDrawerNavigator } from "@react-navigation/drawer";
import MapHomeScreen from "../screens/map/MapHomeScreen";
import FeedListScreen from "../screens/feed/FeedListScreen";
import CalendarScreen from "../screens/calendar/CalendarScreen";
import { createStaticNavigation } from "@react-navigation/native";
import { MapStack } from "./MapNavigation";
import { FeedStack } from "./FeedNavigation";
import DrawerButton from "../components/DrawerButton";
import { colors } from "../constants/colors";
import CustomDrawerContent from "../components/CustomDrawerContent";
import { MainDrawerParamList } from "../types/navigation";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";
type DrawerIconName = 'map'|'book'|'calendar'

function DrawerIcons(routeName:keyof MainDrawerParamList, focused:boolean){
    let iconName : DrawerIconName;

    switch(routeName){
        case 'Map':{
            iconName = 'map'
            break;
        }
        case 'Feed':{
            iconName = 'book'
            break
        }
        case 'Calendar':{
            iconName = 'calendar'
            break
        }
    }
    return <FontAwesome6 name={iconName} iconStyle='solid' size={20} color={focused?colors.WHITE : colors.GRAY_300}/>
}

const MainDrawer = createDrawerNavigator({
    screenOptions:({route})=>{
        return {
        drawerStyle:{
            width:'60%',
            backgroundColor:colors.WHITE,
        },
        drawerLabelStyle:{
            fontWeight:'600',
        },
        drawerItemStyle:{
            borderRadius:5,
        },
        drawerType:'front',
        drawerActiveTintColor:colors.WHITE,
        drawerActiveBackgroundColor:colors.PINK_700,
        drawerInactiveTintColor:colors.GRAY_500,
        drawerInactiveBackgroundColor:colors.GRAY_100,
        drawerIcon : ({focused})=> DrawerIcons(route.name as keyof MainDrawerParamList, focused),
        headerTitleAlign: 'center',
    headerBackButtonDisplayMode: 'minimal',
    headerTintColor: colors.BLACK,
    headerStyle: {
      backgroundColor: colors.WHITE,
      shadowColor: colors.GRAY_500,
    },
    headerTitleStyle: {
      fontSize: 16,
    },
    }
    },
    screens : {
        Map : {
            screen:MapStack,
            options:{
                title:'Home',
                headerShown:false
            }
        },
        Feed : {
            screen : FeedStack,
            options:{
                title:'Feed',
                headerShown:false
            }
        },
        Calendar : {
            screen:CalendarScreen,
            options:{
                title:'Calendar',
                headerLeft : ()=> <DrawerButton/>
            }
        }
    },
    drawerContent:props => <CustomDrawerContent {...props}/>
})

const DrawerNavigation = createStaticNavigation(MainDrawer)

export default DrawerNavigation