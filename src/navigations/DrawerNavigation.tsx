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

const MainDrawer = createDrawerNavigator({
    screenOptions:{
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