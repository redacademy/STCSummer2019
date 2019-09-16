import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import NavigationLayout from './NavigationLayout';
import FilterModal from '../screens/Filter';
import SignInScreen from '../screens/SignIn';
import SignUpScreen from '../screens/SignUp';
import AuthLoadingScreen from '../screens/AuthLoading';
import OnBoarding from '../screens/OnBoarding';

const AuthStack = createStackNavigator(
  {
    OnBoarding: {
      screen: OnBoarding,
    },
    SignIn: {
      screen: SignInScreen,
    },
    SignUp: {
      screen: SignUpScreen,
    },
  },
  {
    headerMode: 'none',
  },
);

const AppStack = createStackNavigator(
  {
    Layout: NavigationLayout,
    Filter: FilterModal,
  },
  {
    headerMode: 'none',
    mode: 'modal',
  },
);

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
