import React from 'react';
import {Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../pages/Home';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator>
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: () => (
              <Image
                source={{
                  uri:
                    'https://stat.ameba.jp/user_images/20181004/23/plusmarket-kanda/e9/8d/p/o0656058914278182582.png?caw=800',
                }}
                style={{width: 35, height: 35}}
              />
            ),
            headerStyle: {
              backgroundColor: '#4A81F6',
            },
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
