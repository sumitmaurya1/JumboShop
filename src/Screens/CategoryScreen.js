import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class CategoryScreen extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', flex: 1, alignItems: 'center' }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Category Screen</Text>
            </View>
        )
    }
}
