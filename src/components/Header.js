/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View
} from "react-native";


const Header = (props) => {
    const { headerText } = props;
    const { headerStyle, textStyle} = styles;

    return (
        <View style = { headerStyle }>
            <Text style = { textStyle }>{ headerText }</Text>
        </View>
    )
}

const styles = {
    headerStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export default Header;
