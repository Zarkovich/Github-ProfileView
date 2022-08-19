import { useContext } from "react";
import { GithubContext } from "../context/github-provide";

function useGithub() {
    const { githubState, getUser, getUserReposm, getUserStarred } =
        useContext(GithubContext);

    return { githubState, getUser, getUserReposm, getUserStarred };
}

export default useGithub;
