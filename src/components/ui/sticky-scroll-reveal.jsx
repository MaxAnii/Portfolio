"use client";
import { Image } from "@nextui-org/react";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export function ExpandableCardDemo(props) {
	const projects = props.data.map((project) => ({
		title: project.title,
		src: project.banner,
		description: `• ${project.description}`,
		technologies: project.techStack,
		github: project.github,
		liveDemo: project.live || null,
	}));

	const [active, setActive] = useState(null);
	const id = useId();
	const ref = useRef(null);

	useEffect(() => {
		function onKeyDown(event) {
			if (event.key === "Escape") {
				setActive(false);
			}
		}

		if (active && typeof active === "object") {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		window.addEventListener("keydown", onKeyDown);
		return () => window.removeEventListener("keydown", onKeyDown);
	}, [active]);

	useOutsideClick(ref, () => setActive(null));

	return (
		<>
			<AnimatePresence>
				{active && typeof active === "object" && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 bg-black/20 h-full w-full z-10"
					/>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{active && typeof active === "object" ? (
					<div className="fixed inset-0 grid place-items-center z-[100] ">
						<motion.button
							key={`button-${active.title}-${id}`}
							layout
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{
								opacity: 0,
								transition: { duration: 0.05 },
							}}
							className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
							onClick={() => setActive(null)}
						>
							<CloseIcon />
						</motion.button>
						<motion.div
							layoutId={`card-${active.title}-${id}`}
							ref={ref}
							className="w-full max-w-[400px] md:max-w-[700px] p-3 h-full md:h-fit md:max-h-[90%] flex flex-col bg-neutral-800 rounded-3xl overflow-y-auto"
						>
							<motion.div layoutId={`image-${active.title}-${id}`}>
								<div className={`flex justify-center  px-3 pt-5 `}>
									<div>
										<Image
											isBlurred
											src={active.src}
											className="border-2"
										></Image>
									</div>
								</div>
							</motion.div>

							<div>
								<div className="flex justify-between items-start p-4 mt-3">
									<div className="">
										<motion.h3
											layoutId={`title-${active.title}-${id}`}
											className="font-medium text-[#FF6000] text-2xl"
										>
											{active.title}
										</motion.h3>
										<motion.p
											layoutId={`description-${active.description}-${id}`}
											className="text-neutral-200 text-lg my-2"
										>
											{active.description}
										</motion.p>
										<motion.div className="text-neutral-300 text-lg my-2  mt-3 flex flex-wrap items-center gap-3">
											<strong>Tech Stack:-</strong>{" "}
											{active.technologies.split(",").map((elem, index) => (
												<div
													key={index}
													className="text-[#FF6000] bg-[#ff620027] rounded-2xl p-2"
												>
													{elem}
												</div>
											))}
										</motion.div>
										<div className="flex justify-center gap-10 pt-5">
											<div>
												<a
													href={active.github}
													target="_blank"
													className="text-[#FF6000] hover:underline"
												>
													Github
												</a>
											</div>
											{active.liveDemo ? (
												<div>
													<a
														href={active.liveDemo}
														target="_blank"
														className="text-[#FF6000] hover:underline"
													>
														Live Demo
													</a>
												</div>
											) : (
												""
											)}
										</div>
									</div>
								</div>
								<div className="pt-4 relative px-4">
									<motion.div
										layout
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										exit={{ opacity: 0 }}
										className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
									>
										{typeof active.content === "function"
											? active.content()
											: active.content}
									</motion.div>
								</div>
							</div>
						</motion.div>
					</div>
				) : null}
			</AnimatePresence>
			<ul className="flex flex-wrap lg:grid lg:grid-cols-3 gap-6  rounded-xl cursor-pointer p-3  shadow-2xl">
				{projects.map((project) => (
					<motion.div
						layoutId={`card-${project.title}-${id}`}
						key={project.title}
						onClick={() => setActive(project)}
						className="flex  hover:bg-neutral-900 rounded-xl cursor-pointer p-3 border-2  shadow-2xl"
					>
						<div className="" data-aos="zoom-in">
							<motion.div layoutId={`image-${project.title}-${id}`}>
								<div className={` lg:pt-0 lg:pl-5 px-3 pt-5 `}>
									<div>
										<Image
											isBlurred
											src={project.src}
											className="lg:w-[40vw]"
										></Image>
									</div>
								</div>
							</motion.div>
							<div className="">
								<motion.h3
									layoutId={`title-${project.title}-${id}`}
									className="font-medium text-[#FF6000] text-center  text-xl my-3"
								>
									{project.title}
								</motion.h3>
							</div>
						</div>
					</motion.div>
				))}
			</ul>
		</>
	);
}

export const CloseIcon = () => {
	return (
		<motion.svg
			initial={{
				opacity: 0,
			}}
			animate={{
				opacity: 1,
			}}
			exit={{
				opacity: 0,
				transition: {
					duration: 0.05,
				},
			}}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-4 w-4 text-black"
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M18 6l-12 12" />
			<path d="M6 6l12 12" />
		</motion.svg>
	);
};

// const projects = [
// 	{
// 		title: "Tweet EveryDay",
// 		src: techNew,
// 		description:
// 			"• Stay ahead with automated tweets delivering the freshest tech news right to your feed. From groundbreaking discoveries to industry trends, I've got you covered.Plus, enjoy the convenience of timely updates! TechNews Automate tweets the latest tech news every 4 hours, ensuring you stay in the loop effortlessly.",
// 		technologies: " Python, tweepy, newsapi",
// 		github: "https://github.com/MaxAnii/Tweet_EveryDay",
// 		liveDemo: "https://twitter.com/__TechNews",
// 	},
// 	{
// 		title: "Check Your History",
// 		src: checkYourHistory,
// 		description:
// 			"• Chromium-based browsers extension to access your history without leaving your active browser tab and allows you to delete the history of a specific site and you can see the top 10 most visited site in 3 months",
// 		technologies: " React JS, Chrome API.",
// 		github: "https://github.com/MaxAnii/Web-History-Extension",
// 	},
// 	{
// 		title: "Share Expense",
// 		src: shareexpense,
// 		description:
// 			"• By providing teams with the essential resources, this project has ensured that they have everything they need tefficiently coordinate their finances. Collaborative spaces were established, and members were encouraged to join and participate. Monitored expenses seamlessly through note writing and maintenance, leading to a 25% increase in financial transparency",
// 		technologies:
// 			" React JS, Bootstrap, Node JS, PostgreSQL, Express, Passport JS.",
// 		github: "https://github.com/MaxAnii/Share-Expense",
// 		liveDemo: "https://shareexpense.vercel.app",
// 	},
// 	{
// 		title: "Project Harbor",
// 		src: projectmanager,
// 		description:
// 			"• This project facilitates efficient project management within a college ecosystem, enabling college administrators, HODs, professors, and students to collaborate seamlessly. It streamlines mentor selection, project approval, and project finalization processes, while also providing hierarchical visibility of ongoing projects tailored to each role.",
// 		technologies: "  React JS, Bootstrap, Node JS, PostgreSQL, Express, S3.",
// 		github: "https://github.com/MaxAnii/ProjectHarbor",
// 	},
// ];
