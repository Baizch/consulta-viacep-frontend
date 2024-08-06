export default async function middleware(request) {
  const url = new URL(request.url);

  if (url.pathname.startsWith('/api')) {
    url.hostname = import.meta.env.VITE_API_URL.replace('https://', '');
    return Response.redirect(url.toString(), 307);
  }

  return fetch(request);
}

export const config = {
  matcher: '/api/:path*',
};
