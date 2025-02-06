import React from "react";

import SectionLabel from "./SectionLabel";
import { Timeline } from "@/components/ui/timeline";

const Experience = () => {
	const data = [
		{
			title: "April 2024 - June 2024",
			content: (
				<div>
					<h3 className="text-3xl mb-2">
						Elogixa Pvt. Lmt. | Mangalore, Karnataka
					</h3>
					<div className="mb-3 text-xl italic">
						<span className="pr-5">Software Developer Intern</span>
					</div>
					<p className="text-xl">
						• As an intern at Elogixa, I contribute to the design and
						development of our Transportation Management System (TMS) using the
						latest technology stack.
					</p>
					<div className="mb-3 mt-3">
						<b> Technologies :</b> Canva, Figma, Bootstrap, React JS, Node JS,
						MYSQL, Express Framework.
					</div>
				</div>
			),
		},
		{
			title: "Jul 2023 - Dec 2023",
			content: (
				<div>
					<h3 className="text-3xl mb-2">
						Karnataka State Pollution Control Board | Mangalore, Karnataka
					</h3>
					<div className="mb-3 text-xl italic">
						<span className="pr-5">Software Developer</span>
					</div>
					<p className="text-xl">
						• Led development of user-friendly data management system for
						industries. Enabled input of crucial environmental metrics,
						including water and biodegradable waste. Designed advanced filtering
						options, resulting in a 30% reduction in time spent on data
						retrieval. Incorporated seamless Excel export functionality,
						improving user experience and productivity by 20%.
					</p>
					<div className="mb-3 mt-3">
						<b> Technologies :</b> Bootstrap, React JS, Node JS, Electron JS,
						PostgreSQL, Express Framework and RESTful services.
					</div>
				</div>
			),
		},
		{
			title: "Nov 2022 - Dec 2022",
			content: (
				<div>
					<h3 className="text-3xl mb-2">
						Varcons Technologies Pvt Ltd | Bangalore, Karnataka
					</h3>
					<div className="mb-3 text-xl italic">
						<span className="pr-5">Full Stack Intern</span>
					</div>
					<p className="text-xl">
						• I led a team of 5 in the creation of the 'Leisure Square' café
						website.Managed team projects and developed a responsive website,
						fulfilling project deadlines with a 95% on-time rate.",
						technologies: " HTML, CSS, JavaScript, Bootstrap.
					</p>
					<div className="mb-3 mt-3">
						<b> Technologies :</b> HTML, CSS, JavaScript, Bootstrap.
					</div>
				</div>
			),
		},
	];

	return (
		<div className="bg-neutral-950 pt-10">
			<div className="">
				<SectionLabel
					label="My Career Timeline"
					context="Professional Profile - There Is All About My Experience"
				/>
			</div>
			<div className="w-full">
				<Timeline data={data} />
			</div>
			{/* <div className="pt-[9vh] md:pl-[10vw] md:pr-[10vw] px-5">
				<div className="flex ">
					<div>
						<Divider className="ml-[-15px]" orientation="vertical"></Divider>
					</div>
					<div>
						<ul className="list-disc ">
							{experience.map((elem, index) => {
								return (
									<div key={index}>
										<ExperienceContainer {...elem}></ExperienceContainer>
										{index !== experience.length - 1 && (
											<Divider
												className="ml-[-15px]"
												orientation="horizontal"
											></Divider>
										)}
									</div>
								);
							})}
						</ul>
					</div>
				</div>
			</div> */}
		</div>
	);
};

export default Experience;
