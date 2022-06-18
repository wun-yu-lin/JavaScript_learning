const HTTP = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");
const server = HTTP.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "content-Type": "text/html" }); //run js script
      res.write(data);
      res.end();
    });
  } else {
    let parsedURL = url.parse(req.url);
    console.log(req.url); //web 的 request
    res.write("Hello, " + parsedURL.pathname);
    res.end();
  }
});
server.listen(3502, () => {
  console.log("hello, this is 3502 port");
});
