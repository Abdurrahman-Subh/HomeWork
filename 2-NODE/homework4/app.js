const fs = require("fs");

fs.writeFile(
  "./employees.json",
  '{"name": "First Employee", "salary": 5000}',
  (err) => {
    if (err) console.log(err);
    console.log("Added Employee One");
  }
);

fs.readFile("./employees.json", "utf8", (err, data) => {
  if (err) console.log(err);
  console.log(data);
});

fs.appendFile(
  "./employees.json",
  '\n{"name": "Second Employee", "salary": 8000}',
  (err) => {
    if (err) console.log(err);
    console.log("Added Employee Number 2");
  }
);

fs.unlink("./employees.json", (err) => {
  if (err) console.log(err);
  console.log("Deleted employees.json");
});