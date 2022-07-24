import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const ServerPort = process.env.PORT || 5500

let Output, PreviousOutput

http
  .createServer(function (request, response) {
    if (request.url === "/S-Output") {
      PreviousOutput = Output;
      Output = url.parse(request.url, true).query;
      response.writeHead(200);
      response.end();
    } else if (request.url === "/R-Output") {
      response.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive'
      });
      setInterval(() => {
        if (Output !== PreviousOutput || Output !== undefined){
          response.write(`data: ${JSON.stringify(Output)}\n\n`)
        }
      }, 700)
      
    } else {
      let filePath = "." + request.url;
      if (filePath == "./") filePath = "./index.html";

      let extname = path.extname(filePath);
      let contentType = "text/html";
      switch (extname) {
        case ".js":
          contentType = "text/javascript";
          break;
        case ".css":
          contentType = "text/css";
          break;
        case ".json":
          contentType = "application/json";
          break;
        case ".png":
          contentType = "image/png";
          break;
        case ".jpg":
          contentType = "image/jpg";
          break;
        case ".svg":
          contentType = "image/svg+xml";
          break;
        case ".wav":
          contentType = "audio/wav";
          break;
      }

      fs.readFile(filePath, function (error, content) {
        if (error) {
          response.writeHead(500);
          response.end(
            "Sorry, check with the site admin for error: " +
              error.code +
              " ..\n"
          );
          response.end();
        } else {
          response.writeHead(200, { "Content-Type": contentType });
          response.end(content, "utf-8");
        }
      });
    }
  })
  .listen(ServerPort);

console.log(
  `Node.js web server at http://127.0.0.1:${ServerPort}/ is running..`
);
