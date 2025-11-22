import {GitHubCalendar} from "react-github-calendar";
import nullthrows from "nullthrows";
import { basics } from "@cv";

const username = basics.profiles.find(
  (profile) => profile.network === "GitHub",
)?.username;

export function GithubCalendarComponent() {
  return (
    <div className="text-skin-base">
      <GitHubCalendar
        username={nullthrows(username, "GitHub profile not found in cv.json")}
        colorScheme="dark"
        theme={{
          dark: ["hsl(0, 0%, 22%)", "rgb(var(--color))"],
        }}
        showMonthLabels={false}
      />
    </div>
  );
}
