import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import LoggedOut from './src/screens/LoggedOut';


export default class App extends Component<Props> {
  render() {
    return (
      <View style={{backgroundColor: 'white'}}>
        <LoggedOut />
      </View>
    
    )
  }
}

