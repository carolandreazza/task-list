import React, { useState, useCallback, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Keyboard, Alert} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as itemsActions from '../store/itemsActions';

import Items from '../components/Items';
import Colors from '../constants/Colors';

const ItemsOfListScreen = props => {
    const listId = props.navigation.getParam('listId');
    const displayedTasks = useSelector(state => state.tasks.tasks);     
    const dispatch = useDispatch();    
    const [idList, setIdList] = useState(listId);
    const [description, setDescription] = useState('');
    
    //  console.log("displayedTasks") 
    //  console.log(displayedTasks) 
     useEffect(() => {
         dispatch(itemsActions.loadTasks(listId));
     }, [dispatch]); 

    const submitHandler = useCallback(() => {     
        if (description != ''){
            dispatch(itemsActions.createItem(idList, description, 0));
            setDescription('');        
            Keyboard.dismiss();
        } else{
            Alert.alert("Adicionar", "Preencha o campo com a descrição do novo item!", [{ text: 'Ok' }])
        }        
    }, [dispatch, idList, description]);
       
    return ( 
        <View>
            <View style={styles.newItem}>
                <TextInput style={styles.textInput} placeholder="Novo Item"
                    value={description} onChangeText={setDescription}  />
                <Button color={Colors.accent} title="Adicionar" onPress={submitHandler} />
            </View>
            <FlatList 
                data={displayedTasks} 
                keyExtractor={item => item.idTask} 
                style={styles.flatList}
                renderItem={itemData => (
                    <Items 
                        isComplete={itemData.item.isCompleteTask}
                        idTask={itemData.item.idTask}
                        task={itemData.item.descriptionTask}
                    />
                )}
            />   
        </View> 
    )
};

ItemsOfListScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('listTitle')
    };
}

const styles = StyleSheet.create({
    flatList: {
        width: '100%',
    },
    newItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingStart: 20,
        paddingEnd: 10,
    },
    textInput: {      
        width: '70%',  
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderColor: '#ccc',
        borderWidth: 1
    },
})


export default ItemsOfListScreen;