import 'react-native-gesture-handler';

import React, { useState, useEffect, useRef } from 'react';
import * as Notifications from 'expo-notifications';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { registerForPushNotificationsAsync } from './services/notification.service';

import LogoTitle from './components/LogoTitle';
import JokeDelivery from './components/JokeDelivery';
import DrawerNavigator from './components/DrawerNavigator';
import * as RootNavigation from './components/RootNavigation';

const Stack = createStackNavigator();

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const [notificationData, setNotificationData] = useState(null);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    // Source: https://docs.expo.dev/versions/v44.0.0/sdk/notifications/
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    // This listener is fired whenever a notification is received while the app is foregrounded
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    // This listener is fired whenever a user taps on or interacts with a notification (works when app is foregrounded, backgrounded, or killed)
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      RootNavigation.closeDrawer();

      const {setup, delivery} = response?.notification?.request?.content?.data;
      setNotificationData({ delivery: delivery, setup: setup });

      RootNavigation.push('Joke Delivery');
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  const customHeader = { headerTitle: props => <LogoTitle {...props} /> };

  return (
    <NavigationContainer ref={RootNavigation.navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          children={props => <DrawerNavigator expoPushToken={expoPushToken} {...props} />}
          options={customHeader} />
        <Stack.Screen
          name="Joke Delivery"
          children={props => <JokeDelivery notificationData={notificationData} {...props} />} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
