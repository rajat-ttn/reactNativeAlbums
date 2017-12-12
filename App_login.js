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

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        firebase.initializeApp( {
            apiKey: "AIzaSyBfTx9D1iL3877JLt_yHTovWY-3goGs41E",
            authDomain: "auth-4dcf8.firebaseapp.com",
            databaseURL: "https://auth-4dcf8.firebaseio.com",
            projectId: "auth-4dcf8",
            storageBucket: "auth-4dcf8.appspot.com",
            messagingSenderId: "971504198072"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={{flexDirection:'row'}}>
                        <Button onPressHandler={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </View>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;