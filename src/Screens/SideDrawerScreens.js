import { DrawerContentScrollView } from '@react-navigation/drawer'
import React from 'react'
import { StatusBar, View, Text, TouchableWithoutFeedback } from 'react-native'
import { Avatar, Icon, Badge } from 'react-native-elements'


const list = [
    { iconName: 'Home-outline', title: 'Home'},
    { iconName: 'grid-outline', title: 'Shop by Categort'},
    { iconName: 'person-outline', title: 'Profile'},
    { iconName: 'clipboard-outline', title: 'Addressbook'},
    { iconName: 'timer-outline', title: 'Orders'},
    { iconName: 'heart-outline', title: 'Wishlist'},
    
]
function SideDrawerScreens({ navigation  }) {
    // const [expanded, setExpanded] = React.useState(true);

    // const handlePress = () => setExpanded(!expanded)
    return (
        <DrawerContentScrollView showsVerticalScrollIndicator={false}>
            <StatusBar barStyle="dark-content" backgroundColor="transparent" />
            <View style={{ flex: 1 }}>
                <View style={{ backgroundColor: '#F86C4F', padding: 10, }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 2 }}>
                        <Avatar rounded size={50} source={{ uri: 'https://image.flaticon.com/icons/png/512/147/147144.png' }} />
                        <Text style={{ color: '#fff', fontWeight: 'bold',right: '70%' }}>Hi Seema Ajab</Text>
                        <View> 
                            <Icon name="notifications-outline" type="ionicon" size={20} color="#fff" />
                            <Badge
                                status="success"
                                value="0"
                                containerStyle={{ position: 'absolute', top: -9, right: -4, }}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ padding: 10 }}>
                    <TouchableWithoutFeedback style={{  }}>
                        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                            <Icon name="home" type="font-awesome-5" color="#34495E" size={18} style={{ paddingHorizontal: 10 }}/>
                            <Text style={{ fontSize: 13,color:"#34495E", paddingHorizontal: 20 }}>Home</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={()=> navigation.navigate('Category') }>
                        <View style={{ flexDirection: 'row',  paddingVertical:10}}>
                            <Icon name="grid-outline" type="ionicon" color="#34495E" size={18} style={{ paddingHorizontal: 10 }}/>
                            <Text style={{ fontSize: 13,color:"#34495E", paddingHorizontal: 20 }}>Shop by Category</Text>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={{ height: 1, backgroundColor: '#D7DBDD', paddingHorizontal: 10 }} />

                    <TouchableWithoutFeedback onPress={()=> navigation.navigate('Profile')}>
                        <View style={{ flexDirection: 'row',  paddingVertical:10}}>
                            <Icon name="person-outline" type="ionicon" color="#34495E" size={18} style={{ paddingHorizontal: 10 }}/>
                            <Text style={{ fontSize: 13,color:"#34495E", paddingHorizontal: 20 }}>Profile</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={{  }}>
                        <View style={{ flexDirection: 'row',  paddingVertical:10}}>
                            <Icon name="book" type="font-awesome-5" color="#34495E" size={18} style={{ paddingHorizontal: 10 }}/>
                            <Text style={{ fontSize: 13,color:"#34495E", paddingHorizontal: 20 }}>Address Book</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={{  }}>
                        <View style={{ flexDirection: 'row',  paddingVertical:10}}>
                            <Icon name="timer-outline" type="ionicon" color="#34495E" size={18} style={{ paddingHorizontal: 10 }}/>
                            <Text style={{ fontSize: 13,color:"#34495E", paddingHorizontal: 20 }}>Orders</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={{  }}>
                        <View style={{ flexDirection: 'row',  paddingVertical:10}}>
                            <Icon name="heart-outline" type="ionicon" color="#34495E" size={18} style={{ paddingHorizontal: 10 }}/>
                            <Text style={{ fontSize: 13,color:"#34495E", paddingHorizontal: 20 }}>Wishlist</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    
                    <View style={{ height: 1, backgroundColor: '#D7DBDD', paddingHorizontal: 10 }} />

                    <Text style={{ fontSize: 12, color: '#BDC3C7', paddingVertical: 10 }}>Communications</Text>
                    
                    <TouchableWithoutFeedback style={{  }}>
                        <View style={{ flexDirection: 'row',  paddingVertical:10}}>
                            <Icon name="envelope-open" type="font-awesome-5" color="#34495E" size={18} style={{ paddingHorizontal: 10 }}/>
                            <Text style={{ fontSize: 13,color:"#34495E", paddingHorizontal: 20 }}>Reviews & Ratings</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={{  }}>
                        <View style={{ flexDirection: 'row',  paddingVertical:10}}>
                            <Icon name="headset" type="font-awesome-5" color="#34495E" size={18} style={{ paddingHorizontal: 10 }}/>
                            <Text style={{ fontSize: 13,color:"#34495E", paddingHorizontal: 20 }}>Contact Us</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={{  }}>
                        <View style={{ flexDirection: 'row',  paddingVertical:10}}>
                            <Icon name="information-circle-outline" type="ionicon" color="#34495E" size={18} style={{ paddingHorizontal: 10 }}/>
                            <Text style={{ fontSize: 13,color:"#34495E", paddingHorizontal: 20 }}>Policy Info & Help</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={{  }}>
                        <View style={{ flexDirection: 'row',  paddingVertical:10}}>
                            <Icon name="store" type="font-awesome-5" color="#34495E" size={18} style={{ paddingHorizontal: 10 }}/>
                            <Text style={{ fontSize: 13,color:"#34495E", paddingHorizontal: 20 }}>Sell on Jumboshoppe</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={{  }}>
                        <View style={{ flexDirection: 'row',  paddingVertical:10}}>
                            <Icon name="star-outline" type="ionicon" color="#34495E" size={18} style={{ paddingHorizontal: 10 }}/>
                            <Text style={{ fontSize: 13,color:"#34495E", paddingHorizontal: 20 }}>Rate Us</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={{  }}>
                        <View style={{ flexDirection: 'row',  paddingVertical:10}}>
                            <Icon name="share-outline" type="ionicon" color="#34495E" size={18} style={{ paddingHorizontal: 10 }}/>
                            <Text style={{ fontSize: 13,color:"#34495E", paddingHorizontal: 20 }}>Share</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={{  }}>
                        <View style={{ flexDirection: 'row',  paddingVertical:10}}>
                            <Icon name="log-out-outline" type="ionicon" color="#34495E" size={18} style={{ paddingHorizontal: 10 }}/>
                            <Text style={{ fontSize: 13,color:"#34495E", paddingHorizontal: 20 }}>Sign Out</Text>
                        </View>
                    </TouchableWithoutFeedback>
                   


                </View>
            </View>
                
        </DrawerContentScrollView>
    )
}

export default SideDrawerScreens
