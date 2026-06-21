const express = require('express');
const app = express();
const PORT = 3003;

app.get('/proxy3', async (req, res) => {
    const targetUrl = req.query.url;
    try {
        const response = await fetch(`http://localhost:3004/proxy4?url=${encodeURIComponent(targetUrl)}`);
        const data = await response.text();
        res.send(data);
    } catch (error) {
        res.status(500).send(`API3 Error: ${error.message}`);
    }
});

app.listen(PORT, () => console.log(`API3 running on port ${PORT}`));
