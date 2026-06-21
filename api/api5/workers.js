const express = require('express');
const app = express();
const PORT = 3005;

app.get('/proxy5', async (req, res) => {
    const targetUrl = req.query.url;
    try {
        const response = await fetch(targetUrl);
        const data = await response.text();
        
        res.send(data);
    } catch (error) {
        res.status(500).send(`API5 (Final) Error: ${error.message}`);
    }
});

app.listen(PORT, () => console.log(`API5 running on port ${PORT}`));
