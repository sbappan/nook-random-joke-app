import React from 'react';
import { Share, View, Button } from 'react-native';

// https://docs.expo.dev/versions/v44.0.0/react-native/share/
const ShareButton = ({joke}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: joke,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <View style={{ marginTop: 50 }}>
      <Button onPress={onShare} title="Share joke" />
    </View>
  );
};

export default ShareButton;