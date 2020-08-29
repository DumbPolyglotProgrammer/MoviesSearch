import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const AppNavigator = createStackNavigator(
  {
    Search: SearchScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Movies Search',
    },
  }
);

export default createAppContainer(AppNavigator);
