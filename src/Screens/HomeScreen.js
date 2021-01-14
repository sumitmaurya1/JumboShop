import React, { Component } from 'react';
import { View, TextInput, Text, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import HomeCenterHeader from '../Components/HomeCenterHeader';
import LeftHeaderComponenet from '../Components/LeftHeaderComponenet';


export default class HomeScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar barStyle="dark-content" backgroundColor="transparent" />
                <Header  backgroundColor="#FCD70B" containerStyle={{ paddingHorizontal: 20 }}
                    leftComponent={<LeftHeaderComponenet onPress={()=> this.props.navigation.openDrawer()} iconName="align-right" iconSize={20} iconColor="#EC6B00" iconType="font-awesome-5" />}
                    centerComponent={<HomeCenterHeader  />}
                />
                <View style={{ backgroundColor: '#FCD70B', bottom: '1%' }}>
                    <View style={{ flexDirection: 'row', padding: 8, paddingHorizontal: 10 }}>
                        <TextInput placeholder="Search Products" style={{ fontSize: 12 ,backgroundColor: '#fff', width: '90%', borderRadius: 3, height: 40}} />
                        <TouchableOpacity style={{ backgroundColor: '#F86C4F', padding: 7 }}>
                            <Icon name="search-outline" color='#fff' size={20} type="ionicon" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
})
