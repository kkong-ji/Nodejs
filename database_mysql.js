var mysql = require('mysql');
var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'kjh950330',
  database : 'o2'
});

conn.connect();

// var sql = 'SELECT * FROM topic';
//
// // conn.query(sql, function(err, rows, fields){
// //   if(err) {
// //     console.log(err);
// //   } else {
// //     for(var i=0; i<rows.length; i++){
// //       console.log(rows[i].title);
// //     }
// //   }
// // });

// var sql = 'INSERT INTO topic (title, description, author) VALUES(?, ?, ?)';
// var params = ['Supervisor', 'Watcher', 'graphitte'];

// conn.query(sql, params, function(err, rows, fields) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(rows);
//   }
// });
// conn.end();

/*
var sql = 'UPDATE topic SET title=?, description=? WHERE id=?';
var params = ['NPM', 'leezhe', 1];

conn.query(sql, params, function(err, rows, fields) {
  if(err) {
    console.log(err);
  } else {
    console.log(rows);
  }
});
conn.end();
*/

var sql = 'DELETE FROM topic WHERE id=?';
var params = [1];

conn.query(sql, params, function(err, rows, fields) {
  if(err) {
    console.log(err);
  } else {
    console.log(rows);
  }
});
conn.end();
