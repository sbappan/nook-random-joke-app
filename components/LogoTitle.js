import { Image } from 'react-native';

// https://reactnavigation.org/docs/headers/#replacing-the-title-with-a-custom-component
export default function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('../assets/icon.png')}
    />
  );
}