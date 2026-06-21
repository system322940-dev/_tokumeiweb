export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const targetUrl = url.searchParams.get('url');

    try {
      const targetResponse = await fetch(targetUrl);
      const data = await targetResponse.text();
      return new Response(data, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    } catch (error) {
      return new Response(`API5 Error: ${error.message}`, { status: 500 });
    }
  },
};
