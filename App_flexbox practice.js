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
                        </View>
                    </View>
                    <View style={[styles.contentSection,{justifyContent:'space-between'}]}>
                            <View style={{flex:1, backgroundColor:'red'}}></View>
                            <View style={{flex:1, backgroundColor:'orange',marginHorizontal:15}}></View>
                            <View style={{flex:1, backgroundColor:'red'}}></View>
                    </View>
                    <View style={[styles.contentSection,{alignContent:'space-between', justifyContent:'center', flex:1.1}]}>
                        {/*<View style={{flex:1, aspectRatio:1, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>*/}
                        {/*<View style={{flex:1, aspectRatio:1, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>*/}
                        {/*<View style={{flex:1, aspectRatio:1, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>*/}
                        {/*<View style={{flex:1, aspectRatio:1, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>*/}
                        {/*<View style={{flex:1, aspectRatio:1, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>*/}
                        {/*<View style={{flex:1, aspectRatio:1, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>*/}
                        {/*<View style={{flex:1, aspectRatio:1, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>*/}

                        <View style={{height:50, width:50, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>
                        <View style={{height:50, width:50, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>
                        <View style={{height:50, width:50, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>
                        <View style={{height:50, width:50, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>
                        <View style={{height:50, width:50, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>
                        <View style={{height:50, width:50, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>
                        <View style={{height:50, width:50, backgroundColor:'red', marginLeft:10, marginRight:10}}></View>
                    </View>
                    <View style={[styles.contentSection,{justifyContent:'space-around', alignItems:'center'}]}>
                        <View style={[styles.headerIcon,{flex:1,aspectRatio:1, marginHorizontal:30}]}></View>
                        <View style={[styles.headerIcon,{flex:1,aspectRatio:1, marginHorizontal:30}]}></View>
                        <View style={[styles.headerIcon,{flex:1,aspectRatio:1, marginHorizontal:30}]}></View>
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
        paddingBottom:10,
        flex:0.05
    },
    headerIcon:{
        borderRadius:100,
        backgroundColor:'red',
        height:40,
        width:40
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
        marginBottom:20,
        flexWrap:'wrap',
        flex:1,
        borderColor:'black',
        borderWidth:1
    },
    bigRectangle:{
        backgroundColor:'brown',
        flex:1
    }
});

