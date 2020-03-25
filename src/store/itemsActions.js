export const CREATE_TASK = 'CREATE_TASK';
export const SET_TASK = 'SET_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';

import { insertTasks, fetchTasks, delTasks, updateTk } from '../helpers/dbTasks';

export const createItem = (idList, description, isComplete) => { 
    return async dispatch => {         
        try {
            const dbResult = await insertTasks(
                idList, description, isComplete
            );
            dispatch({
                type: CREATE_TASK, 
                    itemData: {
                        idTask: dbResult.insertId,
                        idList: idList, 
                        descriptionTask: description, 
                        isCompleteTask: isComplete
                    }
            });
        } catch (err) {
            console.log(err);
            throw err;
        }
    };    
};

export const loadTasks = (idList) => {
    return async dispatch => {
      try {
        const dbResult = await fetchTasks(idList);
        dispatch({ type: SET_TASK, tasks: dbResult.rows._array });
      } catch (err) {
        throw err;
      }
    };
};

export const updateItem = (id, isComplete) => {
    return async dispatch => {         
        try {
            const dbResult = await updateTk(
                id, isComplete
            );
            dispatch({
                type: UPDATE_TASK, tid: id, isComplete: isComplete
            });
        } catch (err) {
            console.log(err);
            throw err;
        }
    };   
    // return { 
    //     type: UPDATE_TASK, 
    //     tid: idTask,
    //     itemData: {
    //         isComplete
    //     } 
    // };    
};

export const deleteItem = itemId => {
    return async dispatch => {
      try {
        const dbResult = await delTasks(
            itemId
        );
        dispatch({ type: DELETE_TASK, iId: itemId });
      } catch (err) {
        throw err;
      }
    };
    //return { type: DELETE_TASK, iId: itemId };    
};