import { useEffect, useState } from "react";
import SectionLabel from "./SectionLabel";
import { ExpandableCardDemo } from "./ui/sticky-scroll-reveal";
const githubToken = import.meta.env.VITE_GITHUB_TOKEN;
import GetYourGitHubProjects from "get-your-github-projects";
const Projects = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		try {
			console.log("hi");
			const fetcher = new GetYourGitHubProjects(
				"maxAnii",
				"description.json",
				githubToken
			);
			fetcher.fetchRepositoryFiles().then((files) => setData(files));
		} catch (error) {
			console.log(error.message);
		}
	}, []);

	return (
		<div className="py-10 min-h-screen">
			<SectionLabel
				label={"Innovation in Action"}
				context={"Professional Profile - There Is All About My Projects"}
			/>
			{/* <ExpandableCardDemo /> */}
			<ExpandableCardDemo data={data} />
		</div>
	);
};

export default Projects;
