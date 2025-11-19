export default function handler(req, res) {
  if (req.method === "POST") {
    // Send phone notification here (Discord webhook, Telegram, etc.)
    console.log("Button pressed!");
    return res.status(200).json({ message: "Notification received!" });
  }

  res.status(405).json({ error: "Method not allowed" });
}
