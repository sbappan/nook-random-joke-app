import { Text, Pressable } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';

import { sendPushNotification } from '../services/notification.service';

import TabNavigator from './TabNavigator';

import { styles } from '../styles';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = props => (
  <DrawerContentScrollView {...props}>
    <Pressable
      style={styles.button}
      onPress={async () => {
        await sendPushNotification(props.expoPushToken);
      }}
    >
      <Text style={styles.buttonText}>
        SHOW ME A JOKE
      </Text>
    </Pressable>
  </DrawerContentScrollView>
)

export default function DrawerNavigator({expoPushToken}) {
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