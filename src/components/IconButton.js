import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
//import { MaterialCommunityIcons } from '@expo/vector-icons';


const IconButton = props => {

    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={[styles.button, props.style]}>
            <props.iconComponent
                size={24}
                name={props.icon}
                color={props.color}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        paddingTop: 2,
        paddingStart: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default IconButton;