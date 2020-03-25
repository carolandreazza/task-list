import React, { useState } from 'react';
import { View, Text, Platform, StyleSheet, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import * as itemsActions from '../store/itemsActions';

import Checkbox from '../components/Checkbox';
import IconButton from '../components/IconButton';

const ItemsOfListScreen = props => {
    const dispatch = useDispatch();
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }        

    toggleComplete = (item) => {
        dispatch(itemsActions.updateItem(item.idTask, !item.isComplete));
    }
        
    return (                            
        <View >
            <TouchableCmp >     
                <View style={styles.row}>
                    <Checkbox
                        style={styles.checkbox} 
                        checked={props.isComplete}
                        onToggle={() => toggleComplete(props)}
                        iconComponent={MaterialCommunityIcons}
                    />

                    <Text numberOfLines={1} style={styles.text}>{props.task}</Text>

                    <IconButton
                        icon="trash-2"
                        flipForRTL={false}
                        iconComponent={Feather}
                        style={styles.deleteButton}
                        onPress={() => {dispatch(itemsActions.deleteItem(props.idTask));}}
                        color={Platform.OS === 'ios' ? '#FF3824' : '#F44336'}
                    /> 
                </View>
            </TouchableCmp> 
        </View>
    )
};

ItemsOfListScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('listTitle')
    };
}

const styles = StyleSheet.create({
    deleteButton: {
        marginBottom: 4 
    },
    text: {
        flex: 1,
        fontSize: 15,
        color: '#333',
        textAlign: 'left',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 10,
        paddingStart: 20,
        paddingEnd: 10,
    },
    checkbox: {
        width: 40,
        //marginBottom: 4 
    },
})


export default ItemsOfListScreen;