import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/review';
import Header from '../shared/header';
import React from 'react';

const screens = {
   
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle:()=> <Header />,
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions: {
            title:'Review Details',

        }
    },

   
}

const HomeStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{ 
            backgroundColor: '#eee', 
            height: 60
        }

    }
});

export default HomeStack;