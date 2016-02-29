import React, {
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          TripDivvy
        </Text>

        <Button onPress={Actions.newTrip} style={styles.button}>
          Create a Trip
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 40,
  },
  button: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 20,
    marginBottom: 5,
    padding: 10,
    textAlign: 'center',
  },
});

export default App;
