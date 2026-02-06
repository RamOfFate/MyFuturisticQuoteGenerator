export default async function handler(req, res) {
  const apiKey = process.env.NINJA_API_KEY;

  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v2/randomquotes?",
      {
        headers: { "X-Api-Key": apiKey },
      },
    );

    if (!response.ok) throw new Error("Failed to fetch from API Ninjas");

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
