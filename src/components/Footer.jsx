import { Button } from "@nextui-org/react";
import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import resume from "@/assets/resume.pdf";
const Footer = () => {
	const icons = [
		{
			icon: <FaDiscord />,
			url: "https://discordapp.com/users/1164203541737513031",
		},
		{ icon: <FaLinkedin />, url: "https://linkedin.com/in/ansar-ul-haq" },
		{ icon: <FaGithub />, url: "https://github.com/MaxAnii" },
		{ icon: <FaTwitter />, url: "https://twitter.com/ansar__baba" },
	];

	return (
		<div className="border-t-2 mx-5 p-5">
			<div className="flex justify-between md:gap-10 gap-5 flex-wrap-reverse items-center">
				<div className="flex justify-center gap-5">
					{icons.map((elem, index) => (
						<a
							href={elem.url}
							target="_blank"
							rel="noopener noreferrer"
							key={index}
						>
							<div className="text-white hover:text-[#FF6000] text-2xl transition-all">
								{elem.icon}
							</div>
						</a>
					))}
				</div>
				<div className="text-gray-400 justify-center flex items-center gap-5">
					<div>© 2025 Ansar</div>
					<Button
						// color="warning"
						// variant="bordered"
						className=" bg-[#FF6000] text-white shadow-xl "
					>
						<a href={resume} download={"Ansar ul haq"}>
							Download Resume
						</a>
					</Button>{" "}
				</div>
			</div>
		</div>
	);
};

export default Footer;
