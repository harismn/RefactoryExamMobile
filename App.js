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
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import Home from './src/Home'
import Main from './src/Main'


const Navigation = StackNavigator({
  Home: {
    screen:Home,
  },
  main: {
    screen:Main,
  }
})

export default Navigation;