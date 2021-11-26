const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Index</h2>");
  } else if (req.url === "/hakkimida") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Hakkimda</h2>");
  } else if (req.url === "/iletisim") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Iletisim</h2>");
  }
});
server.listen(5000, () => {
  console.log("Server Listening on port : 5000....");
});