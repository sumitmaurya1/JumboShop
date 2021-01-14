import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

function HomeCenterHeader() {
    return (
        <View>
            <Text style={{ textTransform: 'uppercase', color: '#EC6B00', fontSize: 12, textDecorationLine: 'underline', fontWeight: 'bold'  }}>Jambo</Text>
            <Text  style={{ textTransform: 'uppercase', color: '#EC6B00', fontSize: 10, textDecorationLine: 'underline', fontWeight: 'bold' }}>Shoppe</Text>
        </View>
    )
}



export default HomeCenterHeader
