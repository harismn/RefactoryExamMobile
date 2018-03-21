/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Button
} from 'react-native';
import axios from 'axios';

export default class Main extends Component {
 componentWillMount(){
     axios.get('https://facebook.github.io/react-native/movies.json')
     .then((response)=>{
         console.warn(response.data.movies);
     })
 }

    static navigationOptions = { 
        title: 'Main'
    }
  render() {
    return (
    <View style={styles.container}>
       {/* <Image
        style={styles.image}
        // source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        source={require('../images/nat.jpg')}
      /> */}
        <Text style={styles.header}>Registration</Text>

        <TextInput style={styles.textinput} placeholder="Your Name" placeholderTextColor="white"
        underlineColorAndroid={'transparent'} />

         <TextInput style={styles.textinput} placeholder="Your Email"placeholderTextColor="white"
        underlineColorAndroid={'transparent'} />

         <TextInput style={styles.textinput} placeholder="Your Password" placeholderTextColor="white"
         secureTextEntry={true} underlineColorAndroid={'transparent'} />

        <TouchableOpacity style={styles.button}  >
            <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      flexDirection: 'row',
      flexWrap: 'wrap',
      position: 'relative',
      backgroundColor: 'red'
    },
    regform: {
          alignSelf: 'stretch',
    },
    header: {
          fontSize: 15,
          color: '#fff',
          paddingBottom: 30,
          marginBottom: 70,
          borderBottomColor: 'transparent',
          borderBottomWidth: 1,
          alignSelf: 'center'
    },
    textinput: {
          alignSelf: 'stretch',
          height: 35,
          width: 300,
          marginBottom: 20,
          color: '#f8f8f8',
          borderColor: '#f8f8f8',
          borderWidth: 1,
          fontSize: 12,
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#59cbbd',
        marginTop: 20,
        width: 300,
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',
  
    },
    image: {
      width: 150,
      height: 150,
      borderRadius: 120,
      alignSelf: 'stretch',
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 1,
    },
  });

  /*
      <View style={styles.container}>
        <Text>This is Main Screen</Text>
        </View>
  */