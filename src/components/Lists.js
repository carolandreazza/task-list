import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import * as listsActions from '../store/listsActions'

import IconButton from '../components/IconButton'

const ListItems = props => {
    const dispatch = useDispatch();

    return (
        <View  style={styles.row}>
            <TouchableOpacity onPress={() => props.onViewItems()}>
                <Text style={styles.text}>{props.desc}</Text>
            </TouchableOpacity>

            <IconButton
                icon="trash-2"
                flipForRTL={false}
                iconComponent={Feather}
                style={styles.deleteButton}
                onPress={() => {dispatch(listsActions.deleteList(props.idList));}}
                color={Platform.OS === 'ios' ? '#FF3824' : '#F44336'}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    deleteButton: {
        marginBottom: 4 
    },
    updateButton: {
        marginBottom: 4,
        position: 'absolute', 
        right: 50,
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
    text: {
        flex: 1,
        fontSize: 18,
        color: '#333',
        textAlign: 'left',
    }
})

export default ListItems;