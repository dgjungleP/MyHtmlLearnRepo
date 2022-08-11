#!/usr/bin/env node

const file = require("fs");
const co = require("co");
const prompt = require("co-prompt");

console.log("Hello Jungle!");
function makeFile() {
  co(function* () {
    const fileDir = yield prompt("Project Name:");

    console.log(fileDir);
    file.mkdir(`./${fileDir}`, () => {});
    file.writeFile(
      `./${fileDir}/index.html`,
      `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="style.css" />
  </head>
  
  <body>
  
  </body>
  
  </html>`,
      "utf-8",
      (err) => {}
    );

    file.writeFile(`./${fileDir}/style.css`, ``, "utf-8", (err) => {
      process.exit();
    });
  });
}

makeFile();
