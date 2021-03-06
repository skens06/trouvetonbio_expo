import React from 'react';
import { Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

// Screen to import
import ExploreScreen from '../screens/Explore';
import EventsScreen from '../screens/EventsScreen';
import MapScreen from '../screens/MapScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfilScreen from '../screens/ProfilScreen';
import AlertScreen from '../screens/AlertScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryProductsScreen from '../screens/CategoryProductsScreen';
import SousCategoryProduct from '../screens/SousCategoryProduct';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import EventsScreenDetails from '../screens/EventsScreenDetails';
import EventsScreenCategory from '../screens/EventsScreenCategory';



const ProductsNavigator = createStackNavigator({
    //all pages of navigation
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Catégories'
        }
    },
    CategoryProducts: {
        screen: CategoryProductsScreen,
    },
    SousCategoryProduct: {
        screen: SousCategoryProduct,
    },
    ProductDetail: ProductDetailScreen,
    Events:
    {
        screen: EventsScreen,
        navigationOptions:{
            headerTitle: 'Events Categories'  
        }
    },
    EventsCategory:
    {
        screen: EventsScreenCategory,
        navigationOptions:{
            headerTitle: 'Events Categories'  
        }
    },
    EventsDetails:
    {
        screen: EventsScreenDetails,
        navigationOptions:{
            headerTitle: 'Events Details',
            
        }
    }
}, {
    // initialRouteName: 'CategoryProducts', commencé par cette page!
    // Apply headerStyle for all screen
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colors.primaryColor
        },
        headerTintColor: 'white'
    }
});

//create caracteristique navBar
const tabScreenConfig = {
    Accueil: {screen: ExploreScreen, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-home" size={28} color="white" activeColor='white'/>
        },
        tabBarColor: Colors.primaryColor
    }
    },
    Events: {screen: ProductsNavigator, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <MaterialIcons name="event-available" size={28} color="white" activeColor='white'/>
        },
        tabBarColor: Colors.accentColor
    }
    },
    Carte: {screen: MapScreen, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <MaterialCommunityIcons name="map-marker-radius" size={28} color="white" activeColor='white'/>
        },
        tabBarColor: Colors.primaryColor
    }
    },
    Profil: {screen: ProfilScreen, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <MaterialCommunityIcons name="account" size={28} color="white" activeColor='white'/>
        },
        tabBarColor: Colors.accentColor
    }
    },
    Alertes: {screen: AlertScreen, navigationOptions: {
        tabBarIcon: (tabInfo) => {
            return <Ionicons name="md-notifications" size={28} color="white" activeColor='white'/>
        },
        tabBarColor: Colors.primaryColor
    }
    }
};

//create the bar navigation!
const TabNavigator  = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.primaryColor,
        shifting: true,
    })
    :createBottomTabNavigator(
        tabScreenConfig, {
    tabBarOptions: {
        height: 150,
        activeTintColor: Colors.primaryColor,
        activeColor: Colors.primaryColor,
        inactiveTintColor: 'white',
        activeBackgroundColor: Colors.accentColor,
        alignContent: 'center',
        style: {
            backgroundColor: Colors.primaryColor,
            alignContent: 'center',
            height: 150,
            paddingTop: 50,
            borderTopWidth: 5,
        },
        tabStyle: {
            height: 150,
        }
    }
});

export default createAppContainer(TabNavigator);