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
    state = {
        isLoggedIn:null
    };
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyBfTx9D1iL3877JLt_yHTovWY-3goGs41E",
            authDomain: "auth-4dcf8.firebaseapp.com",
            databaseURL: "https://auth-4dcf8.firebaseio.com",
            projectId: "auth-4dcf8",
            storageBucket: "auth-4dcf8.appspot.com",
            messagingSenderId: "971504198072"
        });

        firebase.auth().onAuthStateChanged((user)=>{
            return this.setState({isLoggedIn:(user?true:false)})
        })
    }
    renderContent(){

        switch(this.state.isLoggedIn){
            case true: return (
                <View style={{flexDirection: 'row'}}>
                    <Button onPressHandler = {()=> firebase.auth().signOut()}>
                        Log out
                    </Button>
                </View>
            )
            case false: return (
                <LoginForm />
            )
            default: return (
                <Spinner size={'large'}></Spinner>
            )
        }

    }
    // render() {
    //     return (
    //         <View>
    //
    //             <Header headerText={'Albums'}/>
    //             {this.renderContent()}
    //         </View>
    //     );
    // }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerIcon}></View>
                    <View style={ styles.headerTextContainer}>
                        <Text style={styles.headerTextStyle}>Rajat</Text>
                        <Text style={styles.headerTextStyle}>Sharma</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={styles.contentSection}>
                        <View style={styles.bigRectangle}>
                            <Text>Hola</Text>
                        </View>
                    </View>
                    <View style={styles.contentSection}>
                            <View style={{height:100, width:100, backgroundColor:'red'}}></View>
                            <View style={{height:100, width:100, backgroundColor:'orange'}}></View>
                            <View style={{height:100, width:100, backgroundColor:'red'}}></View>
                    </View>
                    <View style={styles.contentSection2}>
                        <View style={{height:50, width:50, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>
                        <View style={{height:50, width:50, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>
                        <View style={{height:50, width:50, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>
                        <View style={{height:50, width:50, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>
                        <View style={{height:50, width:50, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>
                        <View style={{height:50, width:50, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>
                        <View style={{height:50, width:50, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>
                    </View>
                    <View style={styles.contentSection3}>
                        <View style={styles.headerIcon}></View>
                        <View style={styles.headerIcon}></View>
                        <View style={styles.headerIcon}></View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop:20,
        flex:1,
        backgroundColor:'green'
    },
    header:{
        flexDirection:'row',
        backgroundColor:'orange',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
        paddingBottom:10
    },
    headerIcon:{
        borderRadius:100,
        backgroundColor:'red',
        width:50,
        height:50
    },
    headerTextContainer:{
        flexDirection:'row'
    },
    headerTextStyle:{
        backgroundColor:'red',
        padding:10,
        marginLeft:10
    },
    contentContainer:{
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10,
        backgroundColor:'blue',
        flex:1
    },
    contentSection:{
        flexDirection:'row',
        marginBottom:40,
        justifyContent:'space-between',
        flexWrap:'wrap',
        flex:1
    },
    contentSection2:{
        flexDirection:'row',
        marginBottom:40,
        justifyContent:'center',
        flexWrap:'wrap',
        alignContent:'space-between',
        height:120
    },
    contentSection3:{
        flexDirection:'row',
        marginBottom:40,
        justifyContent:'space-around',
        flexWrap:'wrap'
    },
    bigRectangle:{
        flex:1,
        backgroundColor:'brown'
    }
});



// export default class App extends Component<{}> {
//     render() {
//         return (
//             <View style={ {flex:1} }>
//                 <Header headerText={'Albums'}/>
//                 <AlbumList />
//             </View>
//         );
//     }
// }
