var express = require('express');
var qiniu = require('qiniu'); // 七牛
var multipart = require('connect-multiparty'); // formdata中间件



var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var router = express.Router();
var multipartMiddleware = multipart();


var DB_url = 'mongodb://localhost:27017/user';

// var options = {
//     // -数据库设置
//     db: {
//         native_parser: true
//     },
//     // -服务器设置
//     server: {
//         poolSize: 5
//     },
//     // -副本集设置
//     replset: {
//         rs_name: 'myReplicaSetName'
//     },
//     // -用户名
//     user: 'myUserName',
//     // -密码
//     pass: 'myPassword',
//     // -鉴权选项
//     auth: '',
//     // -连接多个数据库
//     mongos: '',
//     promiseLibrary: ''
// }
//mongoose.connect(DB_url, options);

// mongoose.connect(DB_url, function(err) {
//     if (err) {
//         console.log('连接失败');
//     } else {
//         console.log('连接成功');
//     }
// });

//String      字符串
//Number      数字
//Date        日期
//Buffer      二进制
//Boolean     布尔值
//Mixed       混合类型
//ObjectId    对象ID
//Array       数组

// tag数据插入获取
var tagSchema = new mongoose.Schema({
    name: String,
});
router.post('/getTag', function(req, res, next) {
    mongoose.connect(DB_url, function(err) {
        if (err) {
            console.log('getTag连接失败');
            res.send({
                code: '500',
                msg: "获取数据失败",
                data: doc
            });
        } else {
            console.log('getTag连接成功');
            var tag = mongoose.model('tag', tagSchema);
            tag.find(function(err, doc) {
                //res.json(doc);
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send({
                    code: 200,
                    data: doc
                });
            })
        }
    });
});
router.post('/addTag', function(req, res, next) {
    console.log(req.query)
    mongoose.connect(DB_url, function(err) {
        if (err) {
            console.log('setTag连接失败')
        } else {
            console.log('setTag连接成功')
            var tag = mongoose.model('tag', tagSchema);
            new tag({
                name: req.query.tagName
            }).save(function(err, doc) {
                if (err) {

                } else {
                    res.send('插入成功');
                }
            });
        }
    });
});

// 登录
var userSchema = {
    name: String,
    type: Number
};
router.post('/login', function(req, res, next) {
    console.log(req.query)
    mongoose.connect(DB_url, function(err) {
        if (err) {
            console.log('getTag连接失败');
            res.send({
                code: '500',
                msg: "登录失败",
                data: doc
            });
        } else {
            console.log('getTag连接成功');
            var user = mongoose.model('user', userSchema);
            user.findOne({
                userName: req.query.userName,
                password: req.query.password
            }, function(err, doc) {
                //res.json(doc);
                if (doc) {
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200).send({
                        code: 200,
                        data: doc
                    });
                } else {
                    res.send({
                        code: '500',
                        msg: "登录失败",
                        data: doc
                    });
                }
            })
        }
    });
});

/** 文章 **/
var articleSchema = new mongoose.Schema({
    title: String,
    content: String,
    img: String,
    createTime: String,
    tag: String
});
// 插入文章
router.post('/insertArticle', function(req, res, next) {
    const { title, content, img, tag, createTime = Date.parse(new Date()) } = req.query
    console.log(tag)
    console.log(title)
    console.log(content)
    console.log(img)
    console.log(createTime)

    mongoose.connect(DB_url, function(err) {
        if (err) {
            console.log('setTag连接失败')
        } else {
            var article = mongoose.model('article', articleSchema)
            new article({
                title: title,
                content: content,
                img: img,
                tag: tag,
                createTime: createTime
            }).save(function(err, doc) {
                if (err) {
                    res.send({
                        code: '500',
                        msg: "插入失败",
                        data: doc
                    });
                } else {
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200).send({
                        code: 200,
                        data: doc
                    });
                }
            });

        }
    });
});
// 获取文章列表
router.post('/getArticleList', function(req, res, next) {
    mongoose.connect(DB_url, function(err) {
        if (err) {

        } else {
            var article = mongoose.model('article', articleSchema);
            article.find(function(err, doc) {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).send({
                    code: 200,
                    data: doc
                });
            });
        }
    });
});
// 获取文章详情
router.post('/getArticleDetail', function(req, res, next) {
    var id = req.query.id
    if (id) {
        mongoose.connect(DB_url, function(err) {
            if (!err) {
                var articleDetail = mongoose.model('article', articleSchema);
                articleDetail.findOne({
                    _id: id
                }, function(err, doc) {
                    if (doc) {
                        res.setHeader('Content-Type', 'application/json');
                        res.status(200).send({
                            code: 200,
                            data: doc
                        });
                    }
                });
            }
        });
    }
});

// 文件上传
router.post('/upload', multipartMiddleware, function(req, res) {
    let accessKey = 'JQ8ja-p6attJwQ5SzCJ7zEgmBkDFOsMlBIRbn7-4'
    let secretKey = 'HUr2NCLDx1gLVAl3xArJt2qsUwqWORxnX1AsisyL'
    let bucket = 'bolg'
    let host = 'http://p3rqu34ua.bkt.clouddn.com/'
    var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
    var options = {
        scope: bucket,
        returnBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}'
    };
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var uploadToken = putPolicy.uploadToken(mac);
    var config = new qiniu.conf.Config();
    //var localFile = "C:/Users/Administrator/Desktop/test/4.jpg";
    var formUploader = new qiniu.form_up.FormUploader(config);
    var putExtra = new qiniu.form_up.PutExtra();
    var key = '';
    var localFile = '';

    for (index in req.files) {
        localFile = req.files[index].path;
        console.log(localFile)
    }

    //文件上传
    formUploader.putFile(uploadToken, key, localFile, putExtra, function(respErr, respBody, respInfo) {
        if (respErr) {
            throw respErr;
        }
        if (respInfo.statusCode == 200) {
            console.log(respBody);
            res.send({
                code: 200,
                data: host+respBody.key
            });
        } else {
            console.log(respInfo.statusCode);
            console.log(respBody);
        }
    });
});


module.exports = router;