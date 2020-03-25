import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('lists.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS lists (id INTEGER PRIMARY KEY NOT NULL, description TEXT NOT NULL);',
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

  
export const insertList = (description) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            `INSERT INTO lists (description) VALUES (?);`,
            [description],
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
  
export const fetchLists = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            'SELECT * FROM lists',
            [],
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


export const delList = (id) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
          tx.executeSql(
            `DELETE FROM lists WHERE id = (?);`,
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