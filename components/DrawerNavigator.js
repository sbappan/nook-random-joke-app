import { Text, Pressable } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';

import { sendPushNotification } from '../services/notification.service';

import TabNavigator from './TabNavigator';

import { styles } from '../styles';

const Drawer = createDrawerNavigator();

const JokeButton = ({ expoPushToken, type, bgColor }) => (
  <Pressable
    style={[styles.button, bgColor && { backgroundColor: bgColor }]}
    onPress={async () => {
      await sendPushNotification(expoPushToken, type);
    }}
  >
    <Text style={styles.buttonText}>
      SHOW ME A {type && `${type} `}JOKE
    </Text>
  </Pressable>
)

const CustomDrawerContent = props => (
  <DrawerContentScrollView {...props}>
    <JokeButton {...props} />
    <JokeButton type="Pun" bgColor="#ADC9FF" {...props} />
    <JokeButton type="Dark" bgColor="rgba(104, 119, 217, .9)" {...props} />
    <JokeButton type="Programming" bgColor="rgba(20, 199, 151, .6)" {...props} />
    <JokeButton type="Christmas" bgColor="rgba(239, 71, 102, .9)" {...props} />
  </DrawerContentScrollView>
)

export default function DrawerNavigator({ expoPushToken }) {
  return (
    <Drawer.Navigator
      initialRouteName="Tabs"
      drawerContent={props => <CustomDrawerContent {...props} expoPushToken={expoPushToken} />}
    >
      <Drawer.Screen
        name="Tabs"
        children={props => <TabNavigator {...props} />}
        options={{ title: "Nook Random Joke App" }} />
    </Drawer.Navigator>
  );
}