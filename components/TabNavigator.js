import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { nookBrandPrimaryColor, nookBrandSecondaryColor, styles } from '../styles';

const Tab = createBottomTabNavigator();

function TabScreen({ textContent }) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60 }}>{textContent}</Text>
      <StatusBar style="auto" />
    </View>
  )
}

export default function TabNavigator() {
  const options = {
    tabBarIcon: () => null,
    tabBarActiveBackgroundColor: nookBrandPrimaryColor,
    tabBarActiveTintColor: nookBrandSecondaryColor,
    tabBarLabelStyle: {
      fontSize: 20,
      padding: 10,
    }
  }

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Tab 1"
        options={options}
        children={props => <TabScreen textContent="Tab 1" {...props} />} />
      <Tab.Screen
        name="Tab 2"
        options={options}
        children={props => <TabScreen textContent="Tab 2" {...props} />} />
    </Tab.Navigator>
  );
}