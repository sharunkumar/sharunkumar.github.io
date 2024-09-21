import download from "download";
import favicons from "favicons";
import fs from "fs/promises";
import path from "path";

let profile;

try {
  const {default: jsonData} = await import("./public/profile.json", {
    with: {type: "json"},
  });
  profile = jsonData;
} catch (error) {
  console.error(error);
  console.error("Error: ./public/profile.json is not available.");
  console.error("Please run node fetch.mjs first.");
}

await fs.writeFile("public/avatar.png", download(profile.data.user.avatarUrl));

// ref: https://github.com/itgalaxy/favicons

const src = "public/avatar.png"; // Icon source file path.
const dest = "./public"; // Output directory path.
// const htmlBasename = "index.html"; // HTML file basename.

// // Configuration (see above in the README file).
// const configuration = {
//   path: "/public",
//   appName: "My Great App",
//   appShortName: "Great App",
//   appDescription: "A great application to test itgalaxy/favicons.",
//   // Extra options...
// };

// Below is the processing.
const response = await favicons(src);
await fs.mkdir(dest, {recursive: true});
await Promise.all(
  response.images.map(
    async image =>
      await fs.writeFile(path.join(dest, image.name), image.contents),
  ),
);

// await Promise.all(
//   response.files.map(
//     async file => await fs.writeFile(path.join(dest, file.name), file.contents),
//   ),
// );
// await fs.writeFile(path.join(dest, htmlBasename), response.html.join("\n"));
