import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('tasks.db');


export const initTasks = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS tasks (idTask INTEGER PRIMARY KEY NOT NULL, idList INTEGER NOT NULL, descriptionTask TEXT NOT NULL, isCompleteTask INTEGER DEFAULT 0);',
          [],
          () => {
            resolve();
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
    return promise;
  };
  
export const insertTasks = (idList, descriptionTask, isCompleteTask) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            `INSERT INTO tasks (idList, descriptionTask, isCompleteTask) VALUES (?, ?, ?);`,
            [idList, descriptionTask, isCompleteTask],
            (_, result) => {
              resolve(result);
            },
            (_, err) => {
              reject(err);
            }
          );
        });
      });
      return promise;
};
  
export const fetchTasks = (idList) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            `SELECT * FROM tasks WHERE idList = (?)`,
            [idList],
            (_, result) => {
              resolve(result);
            },
            (_, err) => {
              reject(err);
            }
          );
        });
      });
      return promise;
};

  
export const updateTk = (id, isCompleteTask) => {
  const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          `UPDATE tasks SET isCompleteTask = (?) WHERE idTask = (?);`,
          [isCompleteTask, id],
          (_, result) => {
            resolve(result);
          },
          (_, err) => {
            reject(err);
          }
        );
      });
    });
    return promise;
};

export const delTasks = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            `DELETE FROM tasks WHERE idTask = (?);`,
            [id],
            (_, result) => {
              resolve(result);
            },
            (_, err) => {
              reject(err);
            }
          );
        });
      });
      return promise;
};