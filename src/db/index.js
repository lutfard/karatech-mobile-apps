import React from 'react';
import SQLite from 'react-native-sqlite-storage';
import { openDatabase } from 'react-native-sqlite-storage'



SQLite.enablePromise(true);

const db_name = 'lmapps.db';
const db_version = '1.0';
const db_location = 'default';

export const Db = openDatabase({
    name: 'lmapps.db',
    location: 'default',
});

export const CreatedTable = async () => {
    const query = 'CREATE TABLE IF NOT EXIST test (ID INTEGER PRIMARY KEY NOT NULL, NAME TEXT NOT NULL)';

    try {
        await Db.executeSql(query);
        console.log('table created.');
    }
    catch(err) {
        console.log(err);
    }
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


// const DB_init = () => {
//     const db = openDB();
//     const query = `CREATE TABLE IF NOT EXIST test (
//                 ID INTEGER PRIMARY KEY NOT NULL,
//                 NAME TEXT NOT NULL)`;
//     db.transaction(tx => {
//         tx.executeSql(query,
//             [],
//             () => console.log('Ttable created'),
//             (tx, error) => console.log('failed created table', error)
//             );
//     });
// };


// export default { openDB };
