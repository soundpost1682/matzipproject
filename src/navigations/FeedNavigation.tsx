import DrawerButton from "@/components/DrawerButton";
import { colors } from "@/constants/colors";
import EditLocationScreen from "@/screens/feed/EditLocationScreen";
import FeedDetailScreen from "@/screens/feed/FeedDetailScreen";
import FeedFavoriteScreen from "@/screens/feed/FeedFavoriteScreen";
import FeedListScreen from "@/screens/feed/FeedListScreen";
import { createStackNavigator } from "@react-navigation/stack";


export const FeedStack = createStackNavigator({
    screenOptions: {
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
    cardStyle: {
      backgroundColor: colors.WHITE,
    },
  },

    screens : {
        FeedList :{
            screen : FeedListScreen,
            options:{
              title:'Feed',
              headerLeft: ()=> <DrawerButton />
            }

        },
        FeedDetail :{
            screen:FeedDetailScreen
        },
        FeedFavorite :{
            screen : FeedFavoriteScreen
        },
        EditLocation:{
            screen:EditLocationScreen
        }
    }
})