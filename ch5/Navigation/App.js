import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const HomeScreen = ({}) => {
  return <Text>Home</Text>;
};
const SearchScreen = ({}) => {
  return <Text>Search</Text>;
};
const NotificationScreen = () => {
  return <Text>Notification</Text>;
};
const MessgaeScreen = () => {
  return <Text>Message</Text>;
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            tabBarIcon: ({color, size}) => {
              return <Icon name="home" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: '검색',
            tabBarIcon: ({color, size}) => {
              return <Icon name="search" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={NotificationScreen}
          options={{
            title: '알림',
            tabBarIcon: ({color, size}) => {
              return <Icon name="notifications" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Message"
          component={MessgaeScreen}
          options={{
            title: '메시지',
            tabBarIcon: ({color, size}) => {
              return <Icon name="message" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
