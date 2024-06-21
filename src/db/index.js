import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(false);

const db_name = 'lmapps.db';
const db_location = 'default';

let db = SQLite.openDatabase({name: db_name, location: db_location});

// Create Main Table
export const createTables = () => {
  db.transaction(txn => {
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), action VARCHAR(255), type VARCHAR(255), gender VARCHAR(20), create_date DATETIME)',
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

// Create Details Table
export const createDetailTables = () => {
  db.transaction(txn => {
    txn.executeSql(
      'CREATE TABLE IF NOT EXISTS details (action_id INTEGER, axis_y DECIMAL, axis_x DECIMAL, axis_z DECIMAL, speed DECIMAL, create_date DATETIME)',
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

// Insert User Data
export const insertData = payload => {
  db.transaction(txn => {
    txn.executeSql(
      `INSERT INTO users (name, action, type, gender, create_date) VALUES (?, ?, ?, ?, DATE('now'))`,
      [payload.name, payload.action, payload.type, payload.gender],
      (sqlTxn, res) => {
        console.log(`User ${payload.name} added successfully`);
      },
      error => {
        console.log('error on adding user ' + error.message);
      },
    );
  });
};

// Insert Detail Data
export const insertDataDetail = payload => {
  db.transaction(txn => {
    txn.executeSql(
      `INSERT INTO details (action_id, axis_x, axis_y, axis_z, speed, created_date) VALUES (?, ?, ?, ?, ?, DATE('now'))`,
      [
        payload.id,
        payload.AXIS_X,
        payload.AXIS_Y,
        payload.AXIS_z,
        payload.SPEED,
      ],
      (sqlTxn, res) => {
        console.log('Data detail added successfully');
      },
      error => {
        console.log('error on adding user ' + error.message);
      },
    );
  });
};

// Retrieve History Users Data
export const getDataHistory = () => {
  db.transaction(txn => {
    txn.executeSql(
      'SELECT * FROM users ORDER BY id DESC',
      [],
      (sqlTxn, res) => {
        console.log('user retrieved successfully');
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

// Retrieve Detail History Data
export const getDataDetailHistory = id => {
  db.transaction(txn => {
    txn.executeSql(
      `SELECT * FROM details WHERE action_id=${id}`,
      [],
      (sqlTxn, res) => {
        console.log('detail retrieved successfully');
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

// Retrieve Latest User Data–
export const getLatestUserData = () => {
  db.transaction(txn => {
    txn.executeSql(
      'SELECT * FROM users ORDER BY id DESC limit 1',
      [],
      (sqlTxn, res) => {
        let len = res.rows.length;

        if (len > 0) {
          let results = [];
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i);
            results.push({
              id: item.id,
              name: item.name,
              action: item.action,
              type: item.type,
              gender: item.gender,
              created_date: item.created_date,
            });
          }

          console.log('result latest data: ', results);
        }
      },
      error => {
        console.log('error on getting categories ' + error.message);
      },
    );
  });
};

// Retrieve Latest User Data
export const dropTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      'SELECT id FROM users limit 1 ORDER BY id DESC',
      [],
      (sqlTxn, res) => {
        console.log('user retrieved successfully');
        let len = res.rows.length;

        if (len > 0) {
          let results = [];
          for (let i = 0; i < len; i++) {
            let item = res.rows.item(i);
            results.push({id: item.id, name: item.name});
          }

          console.log('result latest data: ', results);
        }
      },
      error => {
        console.log('error on getting categories ' + error.message);
      },
    );
  });
};
