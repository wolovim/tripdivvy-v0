import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class NewTrip extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>New Trip Screen: Coming Soon!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
  },
});

export default NewTrip;
