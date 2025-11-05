export async function dataLogLoader({ request }) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page')) || 0;

  const API_BASE = 'https://obd-api.moemoola.com/api/obd';

  try {
    const response = await fetch(`${API_BASE}?page=${page}`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return { data, page };
  } catch (error) {
    console.error('⚠️ Error:', error);
    return { data: { content: [] }, page, error: error.message };
  }
}
