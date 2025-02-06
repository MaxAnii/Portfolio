import React from "react";
import {
	SiJavascript,
	SiTypescript,
	SiHtml5,
	SiCss3,
	SiMysql,
	SiPostgresql,
	SiNodedotjs,
	SiExpress,
	SiReact,
	SiBootstrap,
	SiTailwindcss,
	SiMongodb,
	SiDocker,
	SiNextdotjs,
	SiSvelte,
	SiPython,
	SiGraphql,
} from "react-icons/si";
import SectionLabel from "./SectionLabel";

const Skills = () => {
	const skills = [
		{
			title: "JavaScript",
			icon: <SiJavascript className=" text-yellow-500" />,
		},
		{
			title: "TypeScript",
			icon: <SiTypescript className=" text-blue-500" />,
		},
		{ title: "HTML", icon: <SiHtml5 className=" text-orange-500" /> },
		{ title: "CSS", icon: <SiCss3 className=" text-blue-500" /> },
		{ title: "MySQL", icon: <SiMysql className=" text-blue-600" /> },
		{
			title: "PostgreSQL",
			icon: <SiPostgresql className=" text-blue-700" />,
		},
		{
			title: "Node.js",
			icon: <SiNodedotjs className=" text-green-600" />,
		},
		{
			title: "Express.js",
			icon: <SiExpress className=" text-gray-500" />,
		},
		{ title: "React.js", icon: <SiReact className=" text-blue-400" /> },
		{
			title: "Bootstrap",
			icon: <SiBootstrap className=" text-purple-600" />,
		},
		{
			title: "Tailwind CSS",
			icon: <SiTailwindcss className=" text-teal-400" />,
		},
		{
			title: "MongoDB",
			icon: <SiMongodb className=" text-green-500" />,
		},
		{ title: "Docker", icon: <SiDocker className=" text-blue-400" /> },
		{ title: "Next.js", icon: <SiNextdotjs className=" text-black" /> },
		{
			title: "Svelte",
			icon: <SiSvelte className=" text-orange-600" />,
		},
		{
			title: "Python",
			icon: <SiPython className=" text-yellow-400" />,
		},
		{
			title: "System Design",
			icon: <SiGraphql className=" text-pink-500" />,
		},
	];

	return (
		<section className="py-12 text-white">
			<div className="container mx-auto px-6">
				<SectionLabel label="What I Excel At" />
				<div className="flex justify-center">
					<div className="border-2 rounded-lg border-gray-400 p-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
						{skills.map((skill, index) => (
							<div
								data-aos="flip-left"
								key={index}
								className=" bg-gray-900 rounded-xl shadow-lg hover:scale-105 hover:rotate-3 hover:shadow-[0px_0px_52px_0px_rgba(255,255,255,0.4)] transition-transform flex flex-col items-center p-4 w-40 md:w-48 md:h-38"
							>
								<div className="flex flex-col items-center p-4 text-3xl lg:text-5xl">
									{skill.icon}
									<span className="text-sm md:text-lg font-semibold mt-2">
										{skill.title}
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
