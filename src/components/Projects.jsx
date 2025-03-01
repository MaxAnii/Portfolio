import { useEffect, useState } from "react";
import SectionLabel from "./SectionLabel";
import { ExpandableCardDemo } from "./ui/sticky-scroll-reveal";
import RepoInsights from "get-repo-insights";
import Loader from "./Loader";
const Projects = () => {
	const [data, setData] = useState([]);
	const [showLoader, setShowLoader] = useState(false);
	useEffect(() => {
		setShowLoader(true);
		const fetcher = new RepoInsights("maxAnii", "description.json");
		fetcher
			.fetchInsights()
			.then((files) => {
				console.log(files);
				setData(files);
			})
			.finally(setShowLoader(false));
	}, []);

	return (
		<div className="py-10 min-h-screen">
			<SectionLabel
				label={"Innovation in Action"}
				context={"Professional Profile - There Is All About My Projects"}
			/>
			{showLoader ? (
				<Loader></Loader>
			) : (
				data.length > 0 && <ExpandableCardDemo data={data} />
			)}
		</div>
	);
};

export default Projects;
