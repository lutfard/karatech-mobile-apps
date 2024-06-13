import {openDatabase, enablePromise} from 'react-native-sqlite-storage';

enablePromise(true);

const db_name = 'lmapps.db';
const db_location = 'default';

const db = openDatabase({name: db_name, location: db_location});

export const createTables = () => {
  db.transaction(txn => {
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(20))',
      [],
      (sqlTxn, res) => {
        console.log('table created successfully');
      },
      error => {
        console.log('error on creating table ' + error.message);
      },
    );
  });
};

export const insertData = name => {
  db.transaction(txn => {
    txn.executeSql(
      'INSERT INTO users (name) VALUES (?)',
      [name],
      (sqlTxn, res) => {
        console.log(`User ${name} added successfully`);
      },
      error => {
        console.log('error on adding user ' + error.message);
      },
    );
  });
};

export const getData = () => {
  db.transaction(txn => {
    txn.executeSql(
      'SELECT * FROM users ORDER BY id DESC',
      [],
      (sqlTxn, res) => {
        console.log('categories retrieved successfully');
        let len = res.rows.length;

        if (len > 0) {
          let results = [];
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i);
            results.push({id: item.id, name: item.name});
          }

          console.log('result: ', results);
        }
      },
      error => {
        console.log('error on getting categories ' + error.message);
      },
    );
  });
};
