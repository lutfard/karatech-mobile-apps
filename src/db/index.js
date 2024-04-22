import React from 'react';
import SQLite from 'react-native-sqlite-storage';
import { openDatabase } from 'react-native-sqlite-storage'



SQLite.enablePromise(true);

const db_name = 'lmapps.db';
const db_version = '1.0';
const db_location = 'default';

const Db = SQLite.openDatabase(
    {
    name: 'lmapps.db',
    location: 'default',
    },
    () => console.log('init database'),
    error => console.error('Error init database: ', error)
);

// export const CreatedTable = async () => {
//     const query = 'CREATE TABLE IF NOT EXIST test (ID INTEGER PRIMARY KEY NOT NULL, NAME TEXT NOT NULL)';

//     try {
//         await Db.executeSql(query);
//         console.log('table created.');
//     }
//     catch(err) {
//         console.log(err);
//     }
// };

export const createTable = () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, axisx TEXT, axisy TEXT, axisz TEXT, speed TEXT)',
            [],
            () => {
            console.log('Table created successfully');
            resolve();
            },
            (_, error) => {
            console.error('Error creating table: ', error);
            reject(error);
            }
        );
        });
    });
};

export const DropTable = async () => {
    const query = 'DROP TABLE test';

    try {
        await Db.executeSql(query);
        console.log('table dropped.');
    }
    catch(err) {
        console.log(err);
    }
};


