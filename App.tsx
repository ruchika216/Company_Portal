// App.js
import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {ICONS} from './src/Custom/Constants';
import Home from './src/screens/Home';
import Sessions from './src/screens/Sessions';
import Performance from './src/screens/Performance';
import More from './src/screens/More';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        {/* Top Bar */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            height: 50,
            alignItems: 'center',
          }}>
          <TouchableOpacity>
            <Image
              source={ICONS.DRAWER}
              style={{
                tintColor: '#2cbe75',
                height: 35,
                width: 35,
                margin: 10,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginLeft: 10,
              fontSize: 18,
              fontWeight: 'bold',
              color: 'black',
            }}>
            TIPS
          </Text>
          <View style={{flex: 1}} />
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#2cbe75',
              borderRadius: 7,
              paddingHorizontal: 15,
              paddingVertical: 5,
              margin: 10,
            }}>
            <Text style={{color: '#2cbe75'}}>Edit Availability</Text>
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation */}
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarShowLabel: false,
            tabBarIcon: ({focused}) => {
              let iconName = ICONS[route.name.toUpperCase()];

              return (
                <View style={styles.iconContainer}>
                  <Image
                    source={iconName}
                    style={{
                      tintColor: focused ? '#2cbe75' : '#bab8b8',
                      height: 25,
                      width: 25,
                    }}
                  />
                  <Text
                    style={{
                      color: focused ? '#2cbe75' : '#939191',
                      fontSize: 10,
                    }}>
                    {route.name}
                  </Text>
                </View>
              );
            },
          })}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Session"
            component={Sessions}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="Performance"
            component={Performance}
            options={{headerShown: false}}
          />
          <Tab.Screen
            name="More"
            component={More}
            options={{headerShown: false}}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
