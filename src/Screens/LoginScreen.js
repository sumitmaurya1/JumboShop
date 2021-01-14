import React, { Component } from 'react';
import { ToastAndroid } from 'react-native';
import { View, TextInput, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';
import LeftHeaderComponenet from '../Components/LeftHeaderComponenet';

export default class LoginScreen extends Component {
    constructor(props){
        super(props);
        this.state= {
            email: '',
            password: '',
        }
    }

    validateLogin = () => {
        if(this.state.email !== '' && this.state.password !== ''){
            this.props.navigation.navigate('Home')
        }else{
            ToastAndroid.show("Please fill the Details", ToastAndroid.SHORT);
        }
    } 

    render() {
        
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" />
                <Header backgroundColor="#FCD70B"
                    leftComponent={<LeftHeaderComponenet iconName="arrow-back-outline" iconSize={23} iconColor="#EC6B00" iconType="ionicon" />}
                    centerComponent={{text: 'Log in to explore', style:{ fontSize: 16, color: '#EC6B00', right: 80 } }}
                />

                <View style={{ padding: 10 }}>
                    <View>
                        <View style={{ paddingVertical: 10 }}>
                            <TextInput onChangeText={(text)=> this.setState({ email: text }) } placeholder="Email/Mobile" style={styles.inputStyle} />
                        </View>
                        <View style={{ paddingBottom: 15 }}>
                            <TextInput onChangeText={(text)=> this.setState({ password: text }) } placeholder="Password" style={styles.inputStyle} />
                        </View>
                        <Text style={styles.forgotPasswordStyle}>Forgot Password</Text>
                    </View>

                    <View>
                        <TouchableOpacity onPress={()=> this.validateLogin()} style={{ borderRadius: 5 ,backgroundColor: '#F86C4F', padding: 10, alignItems: 'center' }}>
                            <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14, textTransform: 'uppercase' }}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View>
                        <View style={{ alignItems: 'center', paddingVertical: 15 }}>
                            <Text style={{ fontSize: 13 , color: '#BEB9B7', letterSpacing: 1}}>New to Jamboshop? <Text style={{ color: '#FF5733' }}>Register here</Text></Text>
                            <View style={{ flexDirection: 'row', paddingVertical: 15 }}>
                                <View style={{ height: 1, color: '#C8C6C3', }} />
                                <Text style={{ backgroundColor: '#C8C6C3', padding: 10, borderRadius: 40 }}>OR</Text>
                                <View />
                            </View>
                            <Text style={styles.socialStyle}>Login With your social account</Text>
                            <View style={{ flexDirection: 'row' , justifyContent: 'space-around'}}>
                                <TouchableOpacity style={{ backgroundColor: '#0757D1', padding: 10, width: '33%', marginHorizontal: '4%', alignItems: 'center', borderRadius: 5 }}>
                                    <Text style={{ fontWeight: 'bold' ,fontSize: 13, color: '#fff' }}>Facebook</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ backgroundColor: '#EB3C17', padding: 10,width: '33%', alignItems: 'center', borderRadius: 5  }}>
                                    <Text style={{ fontWeight: 'bold' ,fontSize: 13, color: '#fff' }}>Google</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    inputStyle:{
        padding: 10,
        borderColor: '#DDDAD8',
        borderWidth: 1
    },
    forgotPasswordStyle:{
        color: 'red',
        fontFamily: 'Roboto',
        alignSelf: 'flex-end',
        textDecorationLine: 'underline',
        paddingBottom: 15,
    },
    socialStyle:{
        fontWeight: 'bold',
        fontSize: 13,
        paddingBottom: 8,
        textAlign: 'center',
        textTransform: 'capitalize'
    }
});
