import { LISTS, TASKS} from '../data/dummy-data';
import { CREATE_TASK, SET_TASK, DELETE_TASK, UPDATE_TASK } from './itemsActions';
import Task from '../models/tasks';

const initialState = {
    //availableLists: [],//LISTS,
    //availableTasks: []//TASKS
    //tasks: TASKS
};

export default (state = initialState, action) => {
    switch (action.type) {
         
         case CREATE_TASK:
             const newTask = new Task(
                 action.itemData.idTask.toString(),
                 action.itemData.idList,
                 action.itemData.descriptionTask,
                 action.itemData.isCompleteTask
             );
             return {
                // ...state,
                 tasks: state.tasks.concat(newTask)
             };

        case SET_TASK:  
            return {
                tasks: action.tasks.map(tk => new Task(tk.idTask.toString(), tk.idList, tk.descriptionTask, tk.isCompleteTask))
            };

        case UPDATE_TASK:
            const taskIndex = state.tasks.findIndex(task => task.idTask === action.tid);
            const updateTask = new Task(
                action.tid,
                state.tasks[taskIndex].idList,
                state.tasks[taskIndex].descriptionTask,
                action.isComplete
            );
            const availableTaskIndex = state.tasks.findIndex(task => task.idTask === action.tid);
            const updatedTasks = [...state.tasks];
            updatedTasks[availableTaskIndex] = updateTask;
            return {
                //...state,
                tasks: updatedTasks
        };
                
        case DELETE_TASK:
            return{
                //...state,
                tasks: state.tasks.filter(task => task.idTask !== action.iId)
            };
        default:
            return state;
    }
    //return state;
};
