export const CREATE_LIST = 'CREATE_LIST';
export const SET_LIST = 'SET_LIST';
export const DELETE_LIST = 'DELETE_LIST';

import { insertList, fetchLists, delList } from '../helpers/dbLists';

export const createList = (description) => {
    return async dispatch => {         
        try {
            const dbResult = await insertList(
                description
            );
            dispatch({
                type: CREATE_LIST, 
                    listData: {
                        id: dbResult.insertId,
                        description: description
                    }
            });
        } catch (err) {
            console.log(err);
            throw err;
        }
    };    
};

export const loadLists = () => {
    return async dispatch => {
      try {
        const dbResult = await fetchLists();
        //console.log("loadLists") 
        //console.log(dbResult.rows) 
        dispatch({ type: SET_LIST, lists: dbResult.rows._array });
      } catch (err) {
        throw err;
      }
    };
};
  
export const deleteList = listId => {
    return async dispatch => {
      try {
        const dbResult = await delList(
            listId
        );
        dispatch({ type: DELETE_LIST, lId: listId });
      } catch (err) {
        throw err;
      }
    };
    //return { type: DELETE_LIST, lId: listId };    
};