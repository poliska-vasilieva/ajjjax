const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/echo', (req, res) => {
    const { text } = req.body;
    res.json({ echo: `Ты отправил: ${text}` });
});

app.use(express.static('public'));

app.get('/api/echo', (req, res) => {
    res.json({ echo: `Ты отправил: ${text}` });
});


app.get('/data', (req, res) => {
    const currentTime = new Date().toLocaleTimeString();
    res.json({ echo: `Привет! Текущее время: ${currentTime} ` });
});


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});
