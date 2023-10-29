import * as React from 'react';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Button, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ApplicationProvider, IconRegistry, Icon, Layout } from '@ui-kitten/components';
import { default as theme } from './theme.json'; // <-- Import app theme
import { default as mapping } from './mapping.json'; // <-- Import app mapping
import HomeScreen from './src/screen/HomeScreen';
import DetailsScreen from './src/screen/DetailsScreen';
import SettingsScreen from './src/screen/SettingsScreen';
import ProfileScreen from './src/screen/profile/ProfileScreen'


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const styles = StyleSheet.create({
  tabIcon: {
    color: "black",
    fontSize: 30,
    fontWeight: 600,
    width: 30,
    height: 30
  }
})


const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Scan Card" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={DetailsScreen} />
    </HomeStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Member" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home-outline' : 'home-outline';
              } else if (route.name === 'Profile') {
                iconName = focused ? 'person-outline' : 'person-outline';
              }

              // You can return any component that you like here!
              return <Icon
                fill='#58ceb2'
                name={iconName}
                style={styles.tabIcon}
              />;
            },
            tabBarActiveTintColor: '#B3B3B3',
            tabBarInactiveTintColor: 'gray',
            //Tab bar styles can be added here
            tabBarStyle: { paddingVertical: 5, borderTopLeftRadius: 15, borderTopRightRadius: 15, backgroundColor: 'white', position: 'absolute', height: 60 },
            tabBarLabelStyle: { paddingBottom: 3 },
          })}
          >
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="Profile" component={ProfileStackScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
}