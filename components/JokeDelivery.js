import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

import ShareButton from './ShareButton';

import { nookBrandSecondaryColor, styles } from '../styles';

export default function JokeDelivery(props) {
  const {setup, delivery} = props?.notificationData;

  return (
    <View style={[styles.container, { backgroundColor: nookBrandSecondaryColor }]}>
      <Text style={styles.jokeDelivery}>
        {delivery}
      </Text>
      <ShareButton joke={`${setup} ${delivery}`} />
      <StatusBar style="auto" />
    </View>
  )
}