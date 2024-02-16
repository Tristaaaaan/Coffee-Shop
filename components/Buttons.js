import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('You pressed a button.')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 315,
    height: 62,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    backgroundColor: '#C67C4E',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600'
  },
});
