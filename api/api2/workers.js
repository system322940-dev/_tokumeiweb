const express = require('express');
const app = express();
const PORT = 3002;

app.get('/proxy2', async (req, res) => {
    const targetUrl = req.query.url;
    try {
        const response = await fetch(`http://localhost:3003/proxy3?url=${encodeURIComponent(targetUrl)}`);
        const data = await response.text();
        res.send(data);
    } catch (error) {
        res.status(500).send(`API2 Error: ${error.message}`);
    }
});

app.listen(PORT, () => console.log(`API2 running on port ${PORT}`));
