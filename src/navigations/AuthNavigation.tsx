import {createStackNavigator} from '@react-navigation/stack';
import {createStaticNavigation} from '@react-navigation/native';

import { colors } from '../constants/colors';
import AuthHomeScreen from '@/screens/auth/AuthHomeScreen';
import LoginScreen from '@/screens/auth/LoginScreen';
import SignupScreen from '@/screens/auth/SignupScreen';

const AuthStack = createStackNavigator({
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
  screens: {
    AuthHome: {
      screen: AuthHomeScreen,
      options: {headerShown: false},
    },
    Login: {
      screen: LoginScreen,
      options: {
        title: 'Log-In',
      },
    },
    Signup: {
      screen: SignupScreen,
      options: {
        title: 'Sign-Up',
      },
    },
  },
});

const AuthNavigation = createStaticNavigation(AuthStack);

export default AuthNavigation;
