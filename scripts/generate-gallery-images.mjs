import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const categories = ["balcon", "meuble", "rampe", "voiture"];
const imports = [];
const imageLists = [];
let imageIndex = 0;

for (const category of categories) {
  const directory = path.join(projectRoot, "images", category);
  const entries = await readdir(directory, { withFileTypes: true });
  const files = entries
    .filter((entry) => entry.isFile())
    .filter((entry) => /\.(avif|gif|jpe?g|png|webp)$/i.test(entry.name))
    .filter((entry) => !/ \(\d+\)(?=\.[^.]+$)/i.test(entry.name))
    .sort((first, second) => first.name.localeCompare(second.name));
  const names = [];

  for (const file of files) {
    const variable = `galleryImage${String(++imageIndex).padStart(3, "0")}`;
    const importPath = `../images/${category}/${file.name}`;
    imports.push(`import ${variable} from ${JSON.stringify(importPath)};`);
    names.push(variable);
  }

  imageLists.push(`  ${category}: [${names.join(", ")}],`);
}

const output = [
  ...imports,
  "",
  "export const galleryImages = {",
  ...imageLists,
  "};",
  "",
].join("\n");

await writeFile(path.join(projectRoot, "app", "gallery-images.generated.ts"), output);