import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/dashboard/SearchScreen';
import EventScreen from '../screens/dashboard/EventScreen';
import Favorite from '../screens/dashboard/Favorites';
import ProfileScreen from '../screens/dashboard/ProfileScreen';
import Images from '../lib/Image';
import {activeColor, black, white} from '../lib/Color';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Events"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: black,
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused}) => {
          let iconName;
          if (route.name === 'Search') {
            iconName = Images.search;
          } else if (route.name === 'Events') {
            iconName = Images.calendar;
          } else if (route.name === 'Favorites') {
            iconName = Images.unlike;
          } else if (route.name === 'Profile') {
            iconName = Images.user;
          }
          return (
            <>
              <Image
                source={iconName}
                style={[
                  styles.icon,
                  {
                    tintColor: focused ? activeColor : null,
                  },
                ]}
              />
            </>
          );
        },
        tabBarStyle: styles.tabBarStyle,
      })}>
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorite}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabBar;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  icon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  tabBarStyle: {
    borderTopWidth: 1,
    elevation: 0,
    backgroundColor: white,
    paddingBottom: 2,
  },
});
