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
    headerStyle : {
        paddingTop:15,
        height:60,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F8F8F8'
    },
    textStyle : {
        fontSize:25
    }
};

export default Header;
