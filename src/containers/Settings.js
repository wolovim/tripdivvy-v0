import React, {
  Component,
  StyleSheet,
  Text,
  View
} from 'react-native';

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings Screen: Coming Soon!</Text>
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

export default Settings;
