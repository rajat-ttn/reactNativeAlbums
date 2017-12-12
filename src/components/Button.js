/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity
} from "react-native";


const Button = (props) => {
    const { buttonStyle, textStyle} = styles;

    return (
        <TouchableOpacity
            style = { buttonStyle }
            onPress={ props.onPressHandler }
        >
            <Text style={textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>
    )
}

const styles = {
    buttonStyle : {
        alignSelf:'stretch',
        flex:1,
        borderWidth:1,
        borderRadius:5,
        borderColor:'#007aff',
        alignItems:'center',
        // justifyContent: 'center',
        // paddingTop: 10,
        // paddingBottom: 10
    },
    textStyle:{
        fontWeight: '600',
        fontSize: 15,
        alignSelf: 'center',
        paddingTop:10,
        paddingBottom:10
    }
};

export default Button;