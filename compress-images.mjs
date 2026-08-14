import sharp from "sharp";
import fs from "fs";
import path from "path";

const dir = "attached_assets";
const files = fs.readdirSync(dir).filter((f) =>
  /^(hero-|case-|fixer-|locacao-).*\.(jpg|jpeg|png)$/i.test(f)
);

console.log(`Comprimindo ${files.length} arquivos...`);

for (const file of files) {
  const filePath = path.join(dir, file);
  const before = fs.statSync(filePath).size;

  const buffer = await sharp(filePath)
    .resize({ width: 2000, withoutEnlargement: true })
    .jpeg({ quality: 82 })
    .toBuffer();

  fs.writeFileSync(filePath, buffer);
  const after = fs.statSync(filePath).size;

  console.log(
    `${file}: ${(before / 1024 / 1024).toFixed(1)}MB -> ${(after / 1024 / 1024).toFixed(1)}MB`
  );
}

console.log("Pronto.");
