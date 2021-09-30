const fs = require("fs");
const dirPath = "static";

function readIcons() {
  const dir = fs.readdirSync(dirPath).filter((item) => item.includes(".svg"));
  let arr = [];
  dir.forEach((file) => {
    const name = file.replace(".svg", "");
    const path = fs
      .readFileSync(`${dirPath}/${file}`, "utf-8")
      .split("><")
      .filter((item) => item.includes("path"))[0]
      .split('" ')
      .filter((item) => item.includes("d="))[0]
      .replace('d="', "")
      .replace('"/', "");
    arr.push({ name: name, path: path });
  });
  fs.writeFileSync("icons.json", JSON.stringify(arr, null, 2));
}

readIcons();
