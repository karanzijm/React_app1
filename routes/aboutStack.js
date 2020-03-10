import { createStackNavigator } from 'react-navigation-stack';
import About from '../screens/about';
import Header from '../shared/header';
import React from 'react';

const screens = {
   
    About: {
        screen: About,
        navigationOptions: {
            headerTitle:() => <Header />,
        }
    },
      
}

const AboutStack = createStackNavigator(screens,{
    defaultNavigationOptions:{
        headerStyle:{ 
            backgroundColor: '#eee', 
            height: 60,
        }

    }
});

export default AboutStack;