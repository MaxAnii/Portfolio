import { useState, useEffect } from "react";
import SectionLabel from "./SectionLabel";
import { Timeline } from "@/components/ui/timeline";
import RepoInsights from "get-repo-insights";
import Loader from "./Loader";
const Experience = () => {
	const [repoFileData, setRepoFileData] = useState([]);
	const [timelineData, setTimeLineData] = useState([]);
	const [showLoader, setShowLoader] = useState(false);

	useEffect(() => {
		setShowLoader(true);
		const fetcher = new RepoInsights(
			"maxAnii",
			"details.json",
			"Career-Timeline"
		);
		fetcher
			.fetchInsights()
			.then((files) => {
				setRepoFileData(files.fileData);
			})
			.finally(() => {
				setShowLoader(false);
			});
	}, []);

	useEffect(() => {
		if (repoFileData && Object.keys(repoFileData).length > 0) {
			const tempData = repoFileData.map((item) => ({
				title: item.timePeriod,
				content: (
					<div>
						<h3 className="text-3xl mb-2">{item.company}</h3>
						<div className="mb-3 text-xl italic">
							<span className="pr-5">{item.role}</span>
						</div>
						<p className="text-xl">{item.description}</p>
						<div className="mb-3 mt-3">
							<b>Technologies:</b>{" "}
							{Array.isArray(item.techStack) ? item.techStack.join(", ") : ""}
						</div>
					</div>
				),
			}));

			setTimeLineData(tempData);
		}
	}, [repoFileData]);
	return (
		<div className="bg-neutral-950 pt-10">
			<div className="">
				<SectionLabel
					label="My Career Timeline"
					context="Professional Profile - There Is All About My Experience"
				/>
			</div>
			{showLoader ? (
				<Loader></Loader>
			) : (
				<div className="w-full">
					{timelineData.length > 0 && <Timeline data={timelineData} />}
				</div>
			)}
		</div>
	);
};

export default Experience;
