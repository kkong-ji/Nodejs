var OrientDB = require("orientjs");

var server = OrientDB({
  host: "localhost",
  port: 2424,
  username: 'root',
  password: 'kjh950330'
});

var db = server.use({
  name:'o2',
  username: 'root',
  password: 'kjh950330'
});
/*
var rec = db.record.get('#35:0')
   .then(function(record){
         console.log('Loaded Record:', record);
       });
*/

/*
* CREATE
* READ
* UPDATE
* DELETE
*
* CRUD
*/

// CREATE
/*
var sql = 'SELECT FROM topic';
db.query(sql).then(function(results){
  console.log(results);
});
*/

var sql = 'SELECT FROM topic WHERE @rid=:rid';
var param = {
    params:{
      rid:'#35:0'
    }
};
db.query(sql, param).then(function(results){
  console.log(results);
});
