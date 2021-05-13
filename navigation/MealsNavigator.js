import React from 'react'
import { Platform, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator  } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'

import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import FavoritesScreen from '../screens/FavoritesScreen'
import FiltersScreen from '../screens/FiltersScreen'
import Colors from '../constants/Colors'

const defaultStackNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ?  Colors.primaryColor : 'white'
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
}

const MealsNavigator = createStackNavigator ({
    Categories: {
        screen: CategoriesScreen
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
        navigationOptions: {            
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ?  Colors.primaryColor : 'white'
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
        }
    },
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const FavoriteNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultStackNavOptions
})

const tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-restaurant' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.primaryColor,
            tabBarLabel: <Text style={{fontFamily: 'open-sans'}}>Meals!!</Text>
        }
    },
    Favorites: {
        screen: FavoriteNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name='ios-star' size={25} color={tabInfo.tintColor}/>
            },
            tabBarColor: Colors.accentColor,
            tabBarLabel: <Text style={{fontFamily: 'open-sans'}}>Favorites</Text>
        }
    }
}

const MealsFavoriteTabNavigator = 
    Platform.OS === 'android' 
        ? createMaterialBottomTabNavigator(tabScreenConfig, {
            activeTintColor: 'white',
            shifting: true,
            barStyle: {
                backgroundColor: Colors.primaryColor
            }
        }) 
        : createBottomTabNavigator(tabScreenConfig, {
            tabBarOptions: {
                labelStyle: {
                    fontFamily: 'open-sans'
                },
                activeTintColor: Colors.accentColor
            }
        });

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    // navigationOptions: {
    //     drawerLabel: 'Filters!!'
    // },
    defaultNavigationOptions: defaultStackNavOptions
})

const MainNavigator = createDrawerNavigator({
    MealsFav: { 
        screen: MealsFavoriteTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
})

export default createAppContainer(MainNavigator)