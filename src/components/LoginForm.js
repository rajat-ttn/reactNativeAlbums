import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Button from './Button';
import Input from './Input';
import autoBind from 'auto-bind';
import firebase from 'firebase';
import Spinner from './Spinner';

class LoginForm extends Component{
    state = {
        email:'',
        password:'',
        errorMsg:'',
        loading:false
    };

    constructor(){
        super();
        autoBind(this);
    }

    onLoginClickHandler(){
        const {email, password, errorMsg} = this.state;

        this.setState({
            errorMsg:'',
            loading:true
        });

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess)
            .catch((ex)=>{
                return firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password)
            })
            .then(this.onLoginSuccess)
            .catch(this.onLoginFail)
    }

    onLoginSuccess(){
        this.setState({
            loading:false,
            email:'',
            password:''
        });
    }
    onLoginFail(){
        this.setState({
            loading:false,
            errorMsg: 'Login Failed!'
        });
    }
    render(){
        const {
            cardSectionStyle,
            albumInfoContainerStyle,
            errorMsgStyle
        } = styles;

        return (
            <View style={albumInfoContainerStyle}>
                <View style={cardSectionStyle}>
                    <Input
                        onChangeText = { (email) => { this.setState( {email} )} }
                        value = { this.state.email}
                        label={'Email'}
                        placeholder={'user@email.com'}
                    />
                </View>
                <View style={cardSectionStyle}>
                    <Input
                        onChangeText = { (password) => { this.setState( {password} )} }
                        value = { this.state.password}
                        label={'Password'}
                        placeholder={'Password'}
                        secureTextEntry = {true}
                    />
                </View>
                {this.renderErrorMsg()}
                <View style={cardSectionStyle}>
                    {this.renderButton()}
                </View>
            </View>
        )
    }
    renderButton(){
        if(this.state.loading){
            return <Spinner size={'small'}/>
        }
        return (
            <Button onPressHandler={ this.onLoginClickHandler }>
                <Text>Log in</Text>
            </Button>
        )
    }
    renderErrorMsg(){
        const {
            cardSectionStyle,
            albumInfoContainerStyle,
            errorMsgStyle
        } = styles;

        if(this.state.errorMsg.length >0) {
            return (
                <Text style={errorMsgStyle}>{this.state.errorMsg}</Text>
            )
        }
    }
}

const styles = {
    errorMsgStyle:{
        alignSelf:'center',
        fontSize:20,
        color:'red'
    },
    cardSectionStyle:{
        flexDirection:'row',
        justifyContent:'flex-start',
        borderBottomWidth:1,
        borderColor:'#ddd',
        backgroundColor:'#fff',
        padding:5,
        // position:'relative'
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

export default LoginForm;