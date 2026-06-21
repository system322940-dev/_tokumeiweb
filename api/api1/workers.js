const http = require('http');
const PORT = 3001;

const server = http.createServer(async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    const reqUrl = new URL(req.url, `http://${req.headers.host}`);
    const targetUrl = reqUrl.searchParams.get('url');

    if (!targetUrl) {
        res.statusCode = 400;
        return res.end('Missing url parameter');
    }

    try {
        const nextApiResponse = await fetch(`http://localhost:3002/?url=${encodeURIComponent(targetUrl)}`);
        const data = await nextApiResponse.text();
        res.end(data);
    } catch (error) {
        res.statusCode = 500;
        res.end(`API1 Error: ${error.message}`);
    }
});

server.listen(PORT, () => console.log(`API1 (No Lib) running on port ${PORT}`));
