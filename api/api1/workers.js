const express = require('express');
const app = express();
const PORT = 3001;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/proxy1', async (req, res) => {
    const targetUrl = req.query.url;
    try {
        const response = await fetch(`http://localhost:3002/proxy2?url=${encodeURIComponent(targetUrl)}`);
        const data = await response.text();
        res.send(data);
    } catch (error) {
        res.status(500).send(`API1 Error: ${error.message}`);
    }
});

app.listen(PORT, () => console.log(`API1 running on port ${PORT}`));
