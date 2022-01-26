import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import { nookBrandSecondaryColor, styles } from '../styles';

export default function JokeDelivery(props) {
  return (
    <View style={[styles.container, { backgroundColor: nookBrandSecondaryColor }]}>
      <Text style={styles.jokeDelivery}>
        {props?.notificationData?.delivery}
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}