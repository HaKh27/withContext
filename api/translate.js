// This runs on Vercel's server, NOT in the browser.
// It holds your API key secretly and forwards requests to Anthropic.
export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Missing prompt' });
    }

    // The API key is read from a secret environment variable,
    // never hardcoded here. We set that up in a later step.
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'Server missing API key' });
    }

    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 700,
        messages: [{ role: 'user', content: prompt }]
      })
    });

    const data = await anthropicResponse.json();

    // Pass Anthropic's response straight back to the browser
    return res.status(anthropicResponse.status).json(data);

  } catch (err) {
    return res.status(500).json({ error: 'Translation failed: ' + err.message });
  }
}
