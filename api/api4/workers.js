export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const targetUrl = url.searchParams.get('url');

    try { 
      const nextApiResponse = await fetch(`https://tokumeiapi5.system322940-dev.workers.dev/?url=${encodeURIComponent(targetUrl)}`, {
        headers: { 'User-Agent': 'Cloudflare-Worker-Relay-4' }
      });
      const data = await nextApiResponse.text();
      return new Response(data, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
    } catch (error) {
      return new Response(`API4 Error: ${error.message}`, { status: 500 });
    }
  },
};
