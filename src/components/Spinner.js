import React, { Component } from  'react';
import {View, ActivityIndicator } from 'react-native';

const Spinner = ({size}) =>{
    const { spinnerStyle } = styles;

    return (
        <View style={spinnerStyle}>
            <ActivityIndicator size={ size || 'large'}/>
        </View>
    )
}

const styles = {
  spinnerStyle : {
      justifyContent:'center',
      alignItems:'center',
      flex:1
  }
};

export default Spinner;