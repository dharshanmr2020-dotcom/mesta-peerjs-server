const express = require("express");
const { PeerServer } = require("peer");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Mesta PeerJS Signaling Server Running");
});

PeerServer({
  port: PORT,
  path: "/peerjs",
  allow_discovery: true,
  corsOptions: {
    origin: "*"
  }
});

app.listen(PORT, () => {
  console.log("PeerJS server running on port", PORT);
});
