import { useContext } from "react";
import { GithubContext } from "../context/github-provide";

function useGithub() {
    const { githubState, getUser, getUserRepos, getUserStarred } =
        useContext(GithubContext);

    return { githubState, getUser, getUserRepos, getUserStarred };
}

export default useGithub;
