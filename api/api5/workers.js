export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const targetUrl = url.searchParams.get('url');

    try {
      const targetResponse = await fetch(targetUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      const data = await targetResponse.text();
      return new Response(data, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    } catch (error) {
      return new Response(`API5 Error: ${error.message}`, { status: 500 });
    }
  },
};
