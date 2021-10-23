import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//pages
import { Welcome } from '../pages/Welcome';
import { Home } from '../pages/Home';

import colors from '../styles/colors';

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        headerMode="none"
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.white,
            },
        }}
    >
        <stackRoutes.Screen
            name="Welcome"
            component={Welcome}
        ></stackRoutes.Screen>
        <stackRoutes.Screen name="Home" component={Home}></stackRoutes.Screen>
    </stackRoutes.Navigator>
);

export default AppRoutes;
