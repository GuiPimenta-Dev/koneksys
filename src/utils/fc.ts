import fs from "fs";

function readQuery(file) {
  return fs.readFileSync(`src/resources/queries/${file}.sql`).toString();
}

export { readQuery };
