import React, { useState, useCallback, useEffect } from 'react';
import { View, TextInput, Button, FlatList, StyleSheet, Keyboard, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as listsActions from '../store/listsActions';

import List from  '../components/Lists'
import Colors from '../constants/Colors';

const ListScreen = props => {
    const lists = useSelector(state => state.lists.lists);  
    const [description, setDescription] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {        
         dispatch(listsActions.loadLists());
    }, [dispatch]);
    
    const submitHandler = useCallback(() => {      
        if (description != ''){
            dispatch(listsActions.createList(description));    
            setDescription('');                
            Keyboard.dismiss();
        } else{
            Alert.alert("Adicionar", "Preencha o campo com a descrição da nova lista!", [{ text: 'Ok' }])
        }
    }, [dispatch, description]);


    return (        
        <View>
            <View style={styles.newItem}>
                <TextInput style={styles.textInput} placeholder="Nova Lista" 
                    value={description} onChangeText={setDescription} />
                <Button color={Colors.accent} title="Adicionar" 
                    onPress={submitHandler} />
            </View>
            <FlatList 
                //inverted
                ListFooterComponent={() => ( <View style={{ height: 152 }} /> )}
                data={lists} 
                keyExtractor={item => item.idList} 
                style={styles.flatList}
                renderItem={itemData => (//<Text>{itemData.item.task}</Text>
                    <List 
                        desc={itemData.item.descriptionList}
                        idList={itemData.item.idList}
                        onViewItems={() => {
                            props.navigation.navigate('ItemsOfList', {
                                listId: itemData.item.idList,
                                listTitle: itemData.item.descriptionList 
                            });
                        }}
                    />
                )}
            />
        </View>
    );
};

ListScreen.navigationOptions = {
    headerTitle: 'Listas de Tarefas'
};

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
        //borderBottomColor: '#ccc',
        //borderBottomWidth: 1
        borderWidth: 1
    },
})

export default ListScreen;