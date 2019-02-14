import React, {Component} from 'react';
import { Image, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import RoundedButton from '../components/buttons/RoundedButton';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/FontAwesome';


const airbnbLogo = require('../images/airbnb-logo.png')

class LoggedOut extends Component {
    onFacebookPress(){
        alert('Facebook press')
    }

    onCreateAccountPress(){
        alert('Create Account')
    }

    onMoreOptionsPress(){
        alert('More Options')
    }

  render() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.welcomeWrapper}>
                 <Image 
                    source={airbnbLogo} 
                    style={styles.logo}
                />
                <Text style={styles.welcomeText}>
                Welcome to Airbnb
                </Text>
                <RoundedButton 
                    text="Continue with Facebook"
                    textColor={colors.green01}
                    background={colors.white}
                    icon={<Icon name="facebook" size={20} style={styles.facebookButtonIcon} />}
                    handleOnPress={this.onFacebookPress}
                />
                 <RoundedButton 
                    text="Create Account"
                    textColor={colors.white}
                    background={colors.green01}
                    handleOnPress={this.onCreateAccountPress}
                />
                <TouchableHighlight 
                    style={styles.moreOptionsButton}
                    onPress={this.onMoreOptionsPress}
                >
                    <Text style={styles.moreOptionsButtonText}>More Options</Text>
                </TouchableHighlight>
                <View style={styles.termsAndConditions}>
                    <Text style={styles.termsText}>
                    By Tapping Continue. Create An Account or More 
                    </Text>
                        <Text style={styles.termsText}>options, </Text>
                        <Text style={styles.termsText}>I agree to Airbnb's</Text>
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Terms of Service</Text>
                    </TouchableHighlight>
                        <Text style={styles.termsText}> ,</Text>                  
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Payments, Terms of Service</Text>
                    </TouchableHighlight>
                    <Text style={styles.termsText}> ,and</Text> 
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Privacy Policy</Text>
                    </TouchableHighlight>  
                    <Text style={styles.termsText}> ,</Text> 
                    <TouchableHighlight style={styles.linkButton}>
                        <Text style={styles.termsText}>Nondiscrimination Policy.</Text>
                    </TouchableHighlight>   
                </View>                     
            </View>          
        </View>
    )
  }
}

export default LoggedOut;

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
        marginTop: 50,
        marginBottom: 40,
    },
    welcomeText: {
        fontSize: 30,
        height: 60,
        color: colors.white,
        fontWeight: '300',
    },
    facebookButtonIcon: {
        color: colors.green01,
        position: 'relative',
        left: 30,
        zIndex: 8,
        width: 20,
    },
    moreOptionsButton: {
        marginTop: 15,
        width: 50,
    },
    moreOptionsButtonText: {
        color: colors.white,
        width: 200,
        fontSize: 20,
        height: 30,
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 40
    },
    termsText: {
        color: colors.white,
        fontSize: 12,
        fontWeight: '600',
        height: 20
    },
    linkButton: {
        borderBottomWidth: 0.5,
        display: 'flex',
        borderBottomColor: colors.white,
    }
})