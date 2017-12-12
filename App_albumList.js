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
  View
} from "react-native";
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
import firebase from 'firebase';
import LoginForm from './src/components/LoginForm'
import Button from "./src/components/Button";
import Spinner from "./src/components/Spinner";

export default class App extends Component<{}> {
    render() {
        return (
            <View style={ {flex:1} }>
                <Header headerText={'Albums'}/>
                <AlbumList />
            </View>
        );
    }
}
