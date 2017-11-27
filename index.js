const glob = require("glob");
const fs = require("fs");
const parse = require("xml-parser");
const xlsx = require("node-xlsx");



glob("rawdata/**/*.XML", (err, res) => {
    if (err) {
        console.log("Error", err);
    } else {
        res.forEach((fileName) => {
            console.log(fileName);
            var xml = fs.readFileSync(fileName, "utf8");
            var inspect = require("util").inspect;

            var obj = parse(xml);
            console.log(inspect(obj, { colors: true, depth: 1 }));
        })
    }
});
