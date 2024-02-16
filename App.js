import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Button from './components/Buttons';
import ImageViewer from './components/ImageViewer';
import { LinearGradient } from 'expo-linear-gradient';

const PlaceholderImage = require('./assets/coffee.png');

export default function App() {
  return (
    <View style={styles.container}>

      <StatusBar style="light" />
      
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
        
      </View>

      <LinearGradient colors={['rgba(1, 255, 255, 0)', 'rgba(0, 0, 0, 1)', 'rgba(0, 0, 0, 1)']} style={styles.contentContainer}>


          <View style={styles.textContainer}>
            <Text style={styles.h1text}>Coffee so good, your taste buds will love it.</Text>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.h2text}>The best grain, the finest roast, the powerful flavor.</Text>
          </View>

          <View style={styles.footerContainer}>
            <Button label="Get Started" />
          </View>

      </LinearGradient>
    

    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
    bottom: 250,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#000',
    
    justifyContent: 'flex-end', // Align the content at the bottom
  },

  footerContainer: {
    alignItems: 'center',
    alignContent: 'center',

  },

  contentContainer: {
    alignContent: 'center',
    width: 375,
    paddingVertical: 50,
  },

  textContainer: {
    alignContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    width: '100%'

  },

  h1text: {
    fontSize: 34,
    fontStyle: 'normal',
    fontWeight: '600',
    color: '#fff',
    width: '70%',
    alignContent: 'center',
    textAlign: 'center'
  },

  h2text: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    width: '70%',
    marginTop: 7,
    textAlign: 'center',
    color: '#A9A9A9'
  },
});
