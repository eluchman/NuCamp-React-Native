import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Input, CheckBox } from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            remember: false
        };
    }

    static navigationOptions = {
        title: 'Login'
    }

}

handleLogin() {
    console.log(JSON.stringify(this.state));
    if (this.state.remember) {
        SecureStore.setItemAsync('userinfo', JSON.stringify(
            {username: this.state.username, password: this.state.password}))
            .catch(error => console.log('Could not save user info', error));
    } else {
        SecureStore.deleteItemAsync('userinfo')
            .catch(error => console.log('Could not delete user info', error));
    }
}