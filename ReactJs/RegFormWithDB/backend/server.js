const express = require('express');
const cors = require('cors');
const db = require('./db');
const isExist = require('./checkExist');

const port = 8081;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/RegForm', async (req, res) => {
    const { name, mobile, email, password } = req.body;

    isExist(mobile, null, (err, exists) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: err.message });
        }

        if (exists) {
            return res.status(400).json({ message: 'User Already Exists !!!' });
        }

        const sql = 'INSERT INTO INFORMATION (fname, mobile, email, passwords) VALUES (?, ?, ?, ?)';
        const values = [name, mobile, email, password];

        db.query(sql, values, (err, data) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ error: err.message });
            }

            return res.status(200).json({ message: 'Registration Successful', data });
        });
    });
});

app.post('/LoginForm', async (req, res) => {
    const { email, password } = req.body;

    isExist(email,password, (err, exists) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: err.message });
        }

        if (exists) {
            return res.status(200).json({ message: 'Log In Successful' });
        }else{
            return res.status(400).json({ message: 'Credentials Mismatched!!!'});
        }
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
