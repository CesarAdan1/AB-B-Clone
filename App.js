import React, {Component} from 'react';
import { AppRegistry, View } from 'react-native';
import LoggedOut from './src/screens/LoggedOut';


class App extends Component {
  render() {
    return (
      <View>
        <LoggedOut />
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App);

export default App;