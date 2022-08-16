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

    file.writeFile(
      `./${fileDir}/style.css`,
      `@import url("https://fonts.font.im/css?family=Roboto");

    /*
    SPACING SYSTEM (px)
    2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
    
    FONT SIZE SYSTEM (px)
    10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98
    */
    
    /* 
    Main Colo:#087f5b
    Gary COlor:#343a40
     */
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    /* ------------------------ */
    /* GENERAL STYLES */
    /* ------------------------ */
    body {
      font-family: "Roboto", sans-serif;
      color: #343a40;
    }
    `,
      "utf-8",
      (err) => {
        process.exit();
      }
    );
  });
}

makeFile();
