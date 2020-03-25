import { LISTS, TASKS} from '../data/dummy-data';
import { CREATE_LIST, SET_LIST, DELETE_LIST } from './listsActions';
import List from '../models/list';

const initialState = {
    //availableLists: [],//LISTS,
    //availableTasks: []//TASKS
    //tasks: TASKS
};

export default (state = initialState, action) => {
    switch (action.type) {
         case CREATE_LIST:
             const newList = new List(
                 action.listData.id.toString(),
                 action.listData.description
             );
             return {
                 //...state,
                 lists: state.lists.concat(newList)
             };
        case SET_LIST:
            return {
                lists: action.lists.map(lt => new List(lt.id.toString(), lt.description))
            };

        case DELETE_LIST:
            return{
                lists: state.lists.filter(list => list.idList !== action.lId)
            };

        default:
            return state;
    }
    //return state;
};
