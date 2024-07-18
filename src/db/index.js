import moment from 'moment';
import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(false);

const db_name = 'lmapps.db';
const db_location = 'default';

let db = SQLite.openDatabase({name: db_name, location: db_location});

// Create Main Table
export const createTables = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(async txn => {
      await txn.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), action VARCHAR(255), type VARCHAR(255), gender VARCHAR(20), punch_time INTEGER, create_date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL)',
        [],
        (sqlTxn, res) => {
          console.log('table created successfully');
          resolve();
        },
        error => {
          console.log('error on creating table ' + error.message);
          reject(error);
        },
      );
    });
  });
};

// Create Details Table
export const createDetailTables = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(async txn => {
      await txn.executeSql(
        'CREATE TABLE IF NOT EXISTS details (action_id INTEGER, axis_y DECIMAL, axis_x DECIMAL, axis_z DECIMAL, speed DECIMAL, create_date DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL)',
        [],
        (sqlTxn, res) => {
          console.log('table created successfully');
          resolve();
        },
        error => {
          console.log('error on creating table ' + error.message);
          reject(error);
        },
      );
    });
  });
};

// Insert User Data
export const insertData = async payload => {
  return new Promise((resolve, reject) => {
    const dateTimeValue = moment().format('YYYY-MM-DD HH:mm:ss');
    db.transaction(async txn => {
      await txn.executeSql(
        'INSERT INTO users (name, action, type, gender, punch_time, create_date) VALUES (?, ?, ?, ?, ?, ?)',
        [
          payload.name,
          payload.action,
          payload.type,
          payload.gender,
          payload.limit,
          dateTimeValue,
        ],
        (sqlTxn, res) => {
          console.log(`User ${payload.name} added successfully`);
          resolve();
        },
        error => {
          console.log('error on adding user ' + error.message);
          reject(error);
        },
      );
    });
  });
};

// Insert Detail Data
export const insertDataDetail = async payload => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < payload.length; i++) {
      const dateTimeValue = moment(payload[i].TIMESTAMP).format(
        'YYYY-MM-DD HH:mm:ss',
      );
      db.transaction(async txn => {
        await txn.executeSql(
          'INSERT INTO details (action_id, axis_x, axis_y, axis_z, speed, created_date) VALUES (?, ?, ?, ?, ?, ?)',
          [
            payload[i].id,
            payload[i].AXIS_X,
            payload[i].AXIS_Y,
            payload[i].AXIS_Z,
            payload[i].SPEED,
            dateTimeValue,
          ],
          (sqlTxn, res) => {
            console.log('Data detail added successfully');
            resolve();
          },
          error => {
            console.log('error on adding user ' + error.message);
            reject(error);
          },
        );
      });
    }
  });
};

// Retrieve History Users Data
export const getDataHistory = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(async txn => {
      await txn.executeSql(
        'SELECT * FROM users ORDER BY id DESC',
        [],
        (sqlTxn, res) => {
          console.log('user retrieved successfully');
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
                limit: item.limit,
                created_date: item.created_date,
              });
            }

            resolve(results);
          } else {
            resolve([]);
          }
        },
        error => {
          console.log('error on getting categories ' + error.message);
          reject(error);
        },
      );
    });
  });
};

// Retrieve Detail History Action Data
export const getDataDetailHistory = async id => {
  return new Promise((resolve, reject) => {
    db.transaction(async txn => {
      await txn.executeSql(
        `SELECT * FROM details WHERE action_id=${id}`,
        [],
        (sqlTxn, res) => {
          console.log('detail retrieved successfully');
          let len = res.rows.length;

          if (len > 0) {
            let results = [];
            for (let i = 0; i < len; i++) {
              let item = res.rows.item(i);
              results.push({
                AXIS_X: item.axis_x,
                AXIS_Y: item.axis_y,
                AXIS_Z: item.axis_z,
                SPEED: item.speed,
                TIMESTAMP: item.created_date,
              });
            }

            resolve(results);
          } else {
            resolve([]);
          }
        },
        error => {
          console.log('error on getting categories ' + error.message);
          reject(error);
        },
      );
    });
  });
};

// Retrieve Latest User Data
export const getLatestUserData = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(async txn => {
      await txn.executeSql(
        'SELECT * FROM users ORDER BY id DESC limit 1',
        [],
        (sqlTxn, res) => {
          console.log('latest user retrieved successfully');
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

            console.log('latest user: ', results);

            resolve(results);
          } else {
            console.log('Data not found');
            resolve([]);
          }
        },
        error => {
          console.log('error on getting categories ' + error.message);

          reject(error);
        },
      );
    });
  });
};

// Delete User Data
export const deleteUser = async id => {
  return new Promise((resolve, reject) => {
    db.transaction(async txn => {
      await txn.executeSql(
        `DELETE FROM users WHERE id=${id}`,
        [],
        (sqlTxn, res) => {
          console.log('user deleted successfully');

          resolve();
        },
        error => {
          console.log('error on deleting user ' + error.message);
          reject(error);
        },
      );
    });
  });
};

// Delete History Data
export const deleteHistoryData = async id => {
  return new Promise((resolve, reject) => {
    db.transaction(async txn => {
      await txn.executeSql(
        `DELETE FROM details WHERE action_id=${id}`,
        [],
        (sqlTxn, res) => {
          console.log('history data deleted successfully');

          resolve();
        },
        error => {
          console.log('error on deleting history data ' + error.message);
          reject(error);
        },
      );
    });
  });
};
