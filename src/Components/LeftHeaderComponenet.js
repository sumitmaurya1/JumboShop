import React from 'react';
import { View , Text} from 'react-native';
import { Icon } from 'react-native-elements';

function LeftHeaderComponenet({ iconName, iconSize, iconColor, iconType, onPress }) {
    return (
        <View style={{  }}>
            <Icon name={iconName} size={iconSize} color={iconColor} type={iconType} onPress={onPress} />
        </View>
    )
}

export default LeftHeaderComponenet;
