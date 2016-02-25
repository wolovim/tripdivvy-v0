'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class TripDivvy extends Component {
  handleTripCreate() {
    console.log('creating trip...');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          TripDivvy
        </Text>
        <TouchableHighlight onPress={this.handleTripCreate}>
          <Text style={styles.button}>
            Create a Trip
          </Text>
        </TouchableHighlight>
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

AppRegistry.registerComponent('TripDivvy', () => TripDivvy);
