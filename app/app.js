require('dotenv').config();

const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use(express.json());


// DATABASE CONNECTION
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});


// HOME
app.get('/', (req, res) => {
  res.send('API User Service Running');
});


// GET USERS
app.get('/users', (req, res) => {
  const sql = 'SELECT * FROM users';

  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(result);
    }
  });
});


// POST USER
app.post('/users', (req, res) => {
  const { name, email } = req.body;

  const sql = 'INSERT INTO users (name, email) VALUES (?, ?)';

  db.query(sql, [name, email], (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json({
        message: 'User added successfully',
        result
      });
    }
  });
});


// UPDATE USER
app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const sql = 'UPDATE users SET name=?, email=? WHERE id=?';

  db.query(sql, [name, email, id], (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json({
        message: 'User updated successfully',
        result
      });
    }
  });
});


// DELETE USER
app.delete('/users/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM users WHERE id=?';

  db.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json({
        message: 'User deleted successfully',
        result
      });
    }
  });
});


// SERVER
app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});