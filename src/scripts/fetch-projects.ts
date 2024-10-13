import { Octokit } from "@octokit/rest";

const octokit = new Octokit({ auth: import.meta.env.GITHUB_TOKEN });

export async function fetchProjectDetails(repoUrl: string) {
  const [owner, repo] = repoUrl.split('/').slice(-2);
  
  const { data: project } = await octokit.repos.get({ owner, repo });
  const { data: languages } = await octokit.repos.listLanguages({ owner, repo });

  return {project, languages};
}

export async function fetchAllProjects(projectUrls: string[]) {
  return Promise.all(projectUrls.map(fetchProjectDetails));
}

