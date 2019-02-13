import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';

export default class LoggedOut extends Component {
  render() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.welcomeWrapper}>
                 <Image 
                source={require('../images/airbnb-logo.png')} 
                style={styles.logo}
                />
            </View>          
        </View>
    )
  }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display: 'flex',
        backgroundColor: colors.green01,
    },
    welcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20
    },  
    logo: {
        width: 50,
        height: 50,
    },
})