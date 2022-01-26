import { StyleSheet } from 'react-native';

export const nookBrandPrimaryColor = "#FFD453";
export const nookBrandSecondaryColor = "#20272e";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    color: nookBrandSecondaryColor,
    backgroundColor: nookBrandPrimaryColor,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  jokeDelivery: { 
    fontSize: 32,
    color: nookBrandPrimaryColor,
  },
});