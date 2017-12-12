import React, { Component } from 'react';
import { Text, View, TextInput } from 'react-native';

class Input extends Component{
    render(){
        const {
            label,
            onChangeText,
            placeholder,
            value,
            secureTextEntry
        } = this.props;

        const {
            containerStyle,
            labelStyle,
            textInputStyle
        } = styles;

        return (
            <View style={containerStyle}>
                <Text style={labelStyle}>{label}</Text>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    autoCorrect={false}
                    onChangeText = {onChangeText}
                    placeholder = {placeholder}
                    value = {value}
                    style={textInputStyle}
                />
            </View>
        )
    }
}

const styles = {
    containerStyle:{
        flexDirection:'row',
        flex:1,
        height:40,
        alignItems:'center'
    },
    labelStyle:{
        paddingLeft:20,
        flex:1
    },
    textInputStyle:{
        height:20,
        width:200,
        paddingLeft:5,
        paddingRight:5,
        color:'#000',
        fontSize:18,
        lineHeight:23, // what does it do?
        flex:2

    }
};

export default Input;