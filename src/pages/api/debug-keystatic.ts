import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const clientId = process.env.KEYSTATIC_GITHUB_CLIENT_ID;
  const clientSecret = process.env.KEYSTATIC_GITHUB_CLIENT_SECRET;
  
  return new Response(
    JSON.stringify({
      timestamp: new Date().toISOString(),
      hasClientId: !!clientId,
      hasClientSecret: !!clientSecret,
      clientIdLength: clientId?.length || 0,
      clientIdPrefix: clientId?.substring(0, 4) || 'MISSING',
      secretLength: clientSecret?.length || 0,
      allEnvKeys: Object.keys(process.env).filter(k => k.includes('KEYSTATIC')),
    }, null, 2),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
