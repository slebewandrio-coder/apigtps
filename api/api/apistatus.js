export default async function handler(req, res) {
  try {

    const response = await fetch("https://dash.gtps.cloud/api/server/10");
    const data = await response.json();

    res.status(200).json({
      uptime: data.uptime || "0m",
      record_online: data.record_online || 0,
      server_status: data.status || "online",
      players_online: data.players || 0,
      max_players: data.max_players || 2000
    });

  } catch {

    res.status(200).json({
      uptime: "0m",
      record_online: 0,
      server_status: "offline",
      players_online: 0,
      max_players: 5000
    });

  }
}
