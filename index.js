const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const db = require('./models'); 

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, Express + Sequelize!');
});

app.get('/users', async (req, res) => {
    const users = await db.User.findAll();
    res.json(users);
});

app.post('/users', async (req, res) => {
    const user = await db.User.create(req.body);
    res.json(user);
});

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
});
