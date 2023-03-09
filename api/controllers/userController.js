// ./src/controllers/userController.js

const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const secret = 'Fullstack-Login-2021';

// create the connection to database
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mydb",
});

exports.register = function(req, res, next) {
  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
    connection.execute(
      'INSERT INTO tbl_users (email,password,firstname,lastname) VALUES (?,?,?,?)',
      [req.body.email, hash, req.body.firstname, req.body.lastname],
      function (err, results, fields) {
        if (err) {
          res.json({status: 'error', message: err})
          return
        }
        res.json({ status: 'ok' });
      }
    );
  });
};


exports.user_detail = function(req, res, next) {
  try {
    // Check if Authorization header is present
    if (!req.headers.authorization) {
      return res.status(401).json({ status: 'error', message: 'Authorization header missing' });
    }
    
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.verify(token, secret);
    const userId = decoded.id;

    connection.execute('SELECT * FROM tbl_users WHERE user = ?', [userId], function(err, rows, fields) {
      if (err) {
        console.error(err);
        res.status(500).json({ status: 'error', message: 'An unexpected error occurred' });
        return;
      }

      if (rows.length === 0) {
        res.status(404).json({ status: 'error', message: 'User not found' });
      } 
      if(!err && rows.length > 0) {
        const user = rows[0];
        res.json({ status: 'ok', user });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(401).json({ status: 'error', message: 'Invalid or expired token' });
  }
};







exports.login = function(req, res, next) {
  connection.execute(
    'SELECT * FROM tbl_users WHERE email = ?',
    [req.body.email],
    function (err, tbl_users, fields) {
      if (err) {
        res.json({status: 'error', message: err})
        return
      }
      if (tbl_users.length == 0) {
        res.json({status: 'error', message: 'no user found'})
        return
      }
      bcrypt.compare(req.body.password, tbl_users[0].password, function(err, isLogin) {
        if (isLogin){
          var token = jwt.sign({ email: tbl_users[0].email,id: tbl_users[0].user },  secret, { expiresIn: '1h' });
          res.json({status: 'ok', message: 'login success',token})
        }else{
          res.json({status: 'error', message: 'login failed'})
        }
      });
    }
  );
};

exports.authen = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    var decoded = jwt.verify(token, secret);
    res.json({ status: 'ok', decoded })
  } catch (err) {
    res.json({ status: 'error', message: err.message })
  }
};
