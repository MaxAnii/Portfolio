import { useState, useEffect } from "react";

import SectionLabel from "./SectionLabel";
import { Timeline } from "@/components/ui/timeline";
import RepoInsights from "get-repo-insights";
const Experience = () => {
	const [data2, setData2] = useState([]);
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetcher = new RepoInsights(
			"maxAnii",
			"details.json",
			"Career-Timeline"
		);
		fetcher.fetchInsights().then((files) => {
			setData2(Array.isArray(files) ? files : []); // Ensure it's an array
		});
	}, []); // Ensure dependencies are correct

	useEffect(() => {
		if (data2 && Object.keys(data2).length > 0) {
			const generateTempData = (data) => {
				return Object.values(data)
					.filter(
						(item) =>
							item &&
							typeof item === "object" &&
							!Array.isArray(item) &&
							!("repoInsights" in item)
					)
					.map((item) => ({
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
									{Array.isArray(item.techStack)
										? item.techStack.join(", ")
										: ""}
								</div>
							</div>
						),
					}));
			};
			const tempData = generateTempData(data2[0]);
			console.log(tempData);
			setData(tempData);
		}
	}, [data2]);

	// const data =

	return (
		<div className="bg-neutral-950 pt-10">
			<div className="">
				<SectionLabel
					label="My Career Timeline"
					context="Professional Profile - There Is All About My Experience"
				/>
			</div>
			<div className="w-full">
				{data.length > 0 && <Timeline data={data} />}
			</div>
		</div>
	);
};

export default Experience;
