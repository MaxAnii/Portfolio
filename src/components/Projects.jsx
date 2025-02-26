import { useEffect, useState } from "react";
import SectionLabel from "./SectionLabel";
import { ExpandableCardDemo } from "./ui/sticky-scroll-reveal";
import RepoInsights from "get-repo-insights";
const Projects = () => {
	const [data, setData] = useState([]);
	useEffect(() => {
		const fetcher = new RepoInsights("maxAnii", "description.json");
		fetcher.fetchInsights().then((files) => setData(files));
	}, []);

	return (
		<div className="py-10 min-h-screen">
			<SectionLabel
				label={"Innovation in Action"}
				context={"Professional Profile - There Is All About My Projects"}
			/>

			<ExpandableCardDemo data={data} />
		</div>
	);
};

export default Projects;
