/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    Linking
} from "react-native";
import Button from './Button';
import autoBind from 'auto-bind';

class AlbumInfo extends Component{
    constructor(){
        super();
        autoBind(this);
    }
    onBuyBtnClickHandler(){
        console.log('clicked album is hola + ' + this.props.album);
        Linking
            .openURL(this.props.album.url)
            .catch(err => console.error('An error occurred', err));
    }
    render(){
        const {
            thumbnailStyle,
            textContainerStyle,
            cardSectionStyle,
            albumImageStyle,
            albumInfoContainerStyle,
            thumbnailContainerStyle
        } = styles;

        return (
            <View style={albumInfoContainerStyle}>
                <View style={cardSectionStyle}>
                    <View style={thumbnailContainerStyle}>
                        <Image
                            source = { { uri:this.props.album.thumbnail_image } }
                            style = { thumbnailStyle }
                        />
                    </View>
                    <View style={textContainerStyle}>
                        <Text style={{fontSize:20}}> {this.props.album.title} </Text>
                        <Text> {this.props.album.artist}</Text>
                    </View>
                </View>
                <View style={cardSectionStyle}>
                    <Image
                        source = { { uri:this.props.album.image } }
                        style = { albumImageStyle }
                    />
                </View>
                <View style={cardSectionStyle}>
                    <Button onPressHandler={ this.onBuyBtnClickHandler }>
                        <Text>Buy Now!</Text>
                    </Button>
                </View>
            </View>
        )
    }
}

const styles = {
    cardSectionStyle:{
        flexDirection:'row',
        justifyContent:'flex-start',
        borderBottomWidth:1,
        borderColor:'#ddd',
        backgroundColor:'#fff',
        padding:5,
        // position:'relative'
    },
    thumbnailStyle :{
        width:50,
        height:50
    },
    thumbnailContainerStyle :{
        width:50,
        height:50,
        marginLeft:10, // ui breaks if padding is used here. y?
        marginRight:10 //
    },
    textContainerStyle:{
        justifyContent:'space-around'
    },
    headerTextStyle:{
    },
    albumImageStyle:{
        flex:1,
        height:300,
        width:null
    },
    albumInfoContainerStyle:{
        marginLeft:5,
        marginRight:5,
        marginTop:10,

        borderWidth:1,
        borderRadius:2,
        borderBottomWidth:0,
        borderColor:'#ddd',

        shadowOffset:{width:0,height:2},
        shadowColor:'#000',
        shadowRadius:2,
        shadowOpacity:0.1

    }
};

export default AlbumInfo;
