const express = require('express');
const app = express();
const PORT = 3004;

app.get('/proxy4', async (req, res) => {
    const targetUrl = req.query.url;
        const response = await fetch(`http://localhost:3005/proxy5?url=${encodeURIComponent(targetUrl)}`);
        const data = await response.text();
        res.send(data);
    } catch (error) {
        res.status(500).send(`API4 Error: ${error.message}`);
    }
});

app.listen(PORT, () => console.log(`API4 running on port ${PORT}`));
