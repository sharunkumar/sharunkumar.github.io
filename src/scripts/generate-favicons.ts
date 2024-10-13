import favicons from "favicons";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { basics } from "@cv";
import { Octokit } from "@octokit/rest";
import download from "download";

const src = "public/me_avatar.jpg";
const dest = "./public"; // Output directory path.
const htmlBasename = "index-stub.html"; // HTML file basename.

async function downloadAvatar() {
  const username = basics.profiles.find(
    (profile) => profile.network === "GitHub",
  )?.username;

  if (!username) {
    throw new Error("GitHub username not found in profiles");
  }

  const octokit = new Octokit();

  try {
    const { data } = await octokit.users.getByUsername({ username });
    console.log("Avatar URL:", data.avatar_url);
    await writeFile(src, download(data.avatar_url));
    console.log("Avatar downloaded successfully");
  } catch (error) {
    console.error("Error downloading avatar:", error);
  }
}

export async function generateFavicons() {
  await downloadAvatar();
  const response = await favicons(src);
  await mkdir(dest, { recursive: true });
  await Promise.all(
    response.images.map(
      async (image) =>
        await writeFile(path.join(dest, image.name), image.contents),
    ),
  );

  if (import.meta.env.GENERATE_FILES != null) {
    await Promise.all(
      response.files.map(
        async (file) =>
          await writeFile(path.join(dest, file.name), file.contents),
      ),
    );
    await writeFile(path.join(dest, htmlBasename), response.html.join("\n"));
  }
}

if (import.meta.main) {
  await generateFavicons();
}
