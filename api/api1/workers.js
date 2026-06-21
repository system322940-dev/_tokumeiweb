export default {
  async fetch(request, env, ctx) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      });
    }

    const url = new URL(request.url);
    const targetUrl = url.searchParams.get('url');

    if (!targetUrl) {
      return new Response('Missing url parameter', { status: 400 });
    }

    try {
      const nextApiResponse = await fetch(`https://<あなたのapi2のURL>/?url=${encodeURIComponent(targetUrl)}`);
      const data = await nextApiResponse.text();

      return new Response(data, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'text/plain; charset=utf-8'
        }
      });
    } catch (error) {
      return new Response(`API1 Error: ${error.message}`, { status: 500 });
    }
  },
};
