import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import NavigationLayout from './NavigationLayout';
import FilterModal from '../screens/Filter';

export default createAppContainer(
  createStackNavigator(
    {Layout: NavigationLayout, Filter: FilterModal},
    {
      mode: 'modal',
      headerMode: 'none',
    },
  ),
);
