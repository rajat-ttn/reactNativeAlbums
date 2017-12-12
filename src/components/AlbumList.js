/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Text,
    ScrollView
} from "react-native";
import axios from 'axios';
import AlbumInfo from './AlbumInfo'

class AlbumList extends Component{
    state = {
        albums :[]
    };
    componentWillMount(){

        axios
            .get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response)=>{
                this.setState({albums:response.data});
            })
    }
    getAlbums(){
        return this.state.albums.map((album)=>{
            return <AlbumInfo album={ album } key={ album.title}/>
        })
    }
    render(){
        return (
            <ScrollView>
                {this.getAlbums()}
            </ScrollView>
        )
    }
}

const styles = {
};

export default AlbumList;