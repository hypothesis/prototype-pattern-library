const fs = require("fs");
const dir = fs.readdirSync("static");

function readIcons() {
  let arr = [];
  dir.forEach((file) => {
    const name = file.replace(".svg", "");
    const path = fs
      .readFileSync(`static/${file}`, "utf8")
      .toString()
      .split("><")[1]
      .split("=")[2]
      .replace('"', "")
      .replace(" fill-rule", "")
      .replace('"/', "")
      .replace('"', "");
    arr.push({ name: name, path: path });
  });
  fs.writeFileSync("icons.json", JSON.stringify(arr, null, 1));
}

readIcons();
