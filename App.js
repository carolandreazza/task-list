import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import listsReducer from './src/store/listsReducers';
import tasksReducers from './src/store/tasksReducers';
import ListsNavigator from './src/navigation/ListsNavigator';
import { init } from './src/helpers/dbLists';
import { initTasks } from './src/helpers/dbTasks';

init()
  .then(() => {
    console.log('Initialized database');
  })
  .catch(err => {
    console.log('Initializing db failed.');
    console.log(err);
  });

initTasks()
  .then(() => {
    console.log('Initialized database');
  })
  .catch(err => {
    console.log('Initializing db failed.');
    console.log(err);
  });

const rootReducer = combineReducers({
  lists: listsReducer,
  tasks: tasksReducers
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <ListsNavigator />
    </Provider>
  );
}

