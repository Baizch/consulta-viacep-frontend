export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const apiUrl = import.meta.env.VITE_API_URL;
  const url = `${apiUrl}/api${req.url}`;

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        ...req.headers,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
