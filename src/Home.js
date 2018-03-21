/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image
} from 'react-native';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Home '
    }
  render() {
    return (
      <View style={styles.container}>
        {/* <Image
        style={styles.image}
        source={require('../images/nat.jpg')}
      /> */}
        <Text>Welcome to Refactory</Text>
        <Button title="Click here to enter the login screen"
        onPress={()=>this.props.navigation.navigate('main')} />
        </View>
    );
  }
}   

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 120,
        alignSelf: 'stretch',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 1,
    }
})