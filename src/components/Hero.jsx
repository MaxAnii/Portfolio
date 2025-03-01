import React from "react";
import "../App.css";
import Typewriter from "typewriter-effect";
import hero from "../assets/Profile/test.jpg";
import { Button, Image } from "@nextui-org/react";
import { CardBody, CardContainer } from "@/components/ui/3d-card";
const Hero = () => {
	return (
		<section className=" flex flex-col-reverse md:flex-row items-center justify-between min-h-screen md:px-6  lg:px-10  hero-section ">
			{/* Left Content */}
			<div className=" flex flex-col items-center md:items-start  space-y-6">
				<div className="px-5 pb-10 md:pb-0" data-aos="fade-right">
					<h4 className="text-4xl bg-clip-text text-transparent bg-gradient-to-b from-gray-300 to-gray-500  font-bold tracking-tight">
						Hi, I'm
					</h4>
					<div className="flex a text-7xl md:text-8xl font-[900] my-3  font-dancing animate-pulse">
						{["A", "N", "S", "A", "R"].map((elem, index) => (
							<h1
								key={index}
								className="-mr-2.5 drop-shadow-[-4px_0px_4px_rgba(0,0,0,0.8)] uppercase bg-gradient-to-r from-slate-300 to-slate-500 bg-clip-text text-transparent"
							>
								{elem}
							</h1>
						))}
					</div>
					<div className=" text-2xl lg:text-5xl font-semibold text-[#FF6000] pt-3 md:mt-5">
						<Typewriter
							options={{
								strings: [
									"TECH ALCHEMIST",
									"WEB DEVELOPER",
									"SOFTWARE ENGINEER",
								],
								autoStart: true,
								loop: true,
								cursor: "|",
							}}
						/>
					</div>
					<p className="text-sm md:text-lg text-gray-300 mt-4">
						Welcome to my digital universe! I specialize in translating lines of
						code into engaging software.
					</p>
					<Button
						variant="bordered"
						className="text-[#FF6000] border-1 border-[#FF6000] hover:bg-[#FF6000] hover:text-white hover:border-white shadow-xl mt-5"
					>
						<a href="#CONTACT">Connect with me</a>
					</Button>{" "}
				</div>
			</div>
			<div data-aos="fade-left">
				<CardContainer className="inter-var">
					<CardBody className="shadow-[0px_0px_300px_41px_rgba(250,248,241,.5)] relative group/card hover:border-2 hover:shadow-inner hover:p-2 transition-all  w-auto  h-auto rounded-xl ">
						<Image
							src={hero}
							alt="Hero Image"
							className=" object-cover w-72 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] "
						/>
						{/* </CardItem> */}
					</CardBody>
				</CardContainer>
			</div>
		</section>
	);
};

export default Hero;
