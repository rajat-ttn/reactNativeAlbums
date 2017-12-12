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
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        backgroundColor:'orange'
    }
};


export default Button;