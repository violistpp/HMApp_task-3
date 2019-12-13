import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
 
import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import LoginScreen from './pages/Authentication/LoginScreen';
import RegisterScreen from './pages/Authentication/RegisterScreen';


const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#30d0fe',
      },
      headerTintColor: 'white',
      title: 'Skelbimai',
    },
  }
);
const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#30d0fe',
      },
      headerTintColor: 'white',
      title: 'Settings',
    },

  },

);
const ProfileStack = createStackNavigator(
	{
	  Profile: { screen: ProfileScreen },
	  Login: { screen: LoginScreen },
	  Register: { screen: RegisterScreen },
	},
	{
	  defaultNavigationOptions: {
		headerStyle: {
		  backgroundColor: '#30d0fe',
		},
		headerTintColor: 'white',
		title: 'Profile',
	  },
	},
  );
const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
    Profile: { screen: ProfileStack},
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-cart`;
        } 
        else if (routeName === 'Settings') {
          iconName = `ios-build`;
        }
        else if (routeName === 'Profile') {
          iconName = `ios-contact`;
        }
        return <IconComponent name={iconName} size={35} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'black',
    },
    initialRouteName: "Home",
    
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'black',
      labelStyle: {
        fontSize: 10,
      },
      style: {
        backgroundColor: '#30d0fe',
        borderColor: 'white',
        borderTopWidth: 0,
      },
    }
  }
);
export default createAppContainer(App);