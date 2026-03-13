import React from "react";
import "./GithubRepoCard.scss";
export default function GithubRepoCard({ repo, isDark }) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL in ${name} is undefined`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const description =
    repo.node.description || "No project description available yet.";

  return (
    <div className="github-repo-card">
      <div className={`card ${isDark ? "dark" : "light"}`}>
        <div className="image" aria-hidden="true"></div>

        <div className="card-info">
          <span>{repo.node.name}</span>
          <p>
            {repo.node.primaryLanguage
              ? repo.node.primaryLanguage.name
              : "Open Source Project"}
          </p>
        </div>

        <button
          type="button"
          className="button"
          onClick={() => openUrlInNewTab(repo.node.url, repo.node.name)}
          aria-label={`Open ${repo.node.name} on GitHub`}
        >
          GitHub
        </button>

        <div className="project-explanation">
          <p>{description}</p>
          <div className="project-meta">
            <span>Stars: {repo.node.stargazers.totalCount}</span>
            <span>Forks: {repo.node.forkCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
