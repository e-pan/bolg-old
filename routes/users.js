var express = require('express');
var mongoose = require('mongoose'); //导入mongoose模块
var MongoClient = require('mongodb').MongoClient;

var router = express.Router();
var Users = require('../modules/users'); //导入模型数据模块
var DB_CONN_STR = 'mongodb://localhost:27017';

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.send('/');
});

//查询所有用户数据
router.get('/user', function(req, res, next) {
    var selectData = function(db, callback) {
        //连接到表
        var db = db.db("myapp");
        var collection = db.collection('new');
        //查询数据

        collection.find().toArray(function(err, result) {
            if (err) {
                console.log('Error:' + err);
                return;
            }
            callback(result);
        });
    }

    MongoClient.connect(DB_CONN_STR, function(err, db) {
        console.log("连接成功！");
        selectData(db, function(result) {
            res.send(result);
            console.log(result);
            db.close();
        });
    });
})

module.exports = router;