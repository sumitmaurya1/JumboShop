import React, { Component } from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';


export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Profile Screen</Text>
            </View>

        )
    }
}
