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
    padding: 12,
    margin: 4,
    color: nookBrandSecondaryColor,
    backgroundColor: nookBrandPrimaryColor,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: "uppercase",
  },
  jokeDelivery: { 
    fontSize: 32,
    color: nookBrandPrimaryColor,
  },
});