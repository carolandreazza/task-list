import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native'


import ListsScreen from '../screens/ListsScreen';
import ItemsOfListScreen from '../screens/ItemsOfListScreen';
import Colors from '../constants/Colors';

const ListsNavigator = createStackNavigator({
    Lists: ListsScreen,
    ItemsOfList: ItemsOfListScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

// const SettingsNavigator = createStackNavigator({
//     Settings: 
// })

export default createAppContainer(ListsNavigator);
