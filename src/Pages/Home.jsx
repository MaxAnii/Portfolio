import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../index.css";
const Home = () => {
	return (
		<div>
			<Nav></Nav>
			<section id="HOME" className="">
				<Hero></Hero>
			</section>

			<section id="EXPERIENCE" className="pt-20 pb-10">
				<Experience></Experience>
			</section>
			<section id="PROJECTS" className="">
				<Projects></Projects>
			</section>

			<section id="SKILLS" className="pt-20 pb-10">
				<Skills></Skills>
			</section>
			<section id="CONTACT" className="py-20  ">
				<Contact></Contact>
			</section>
			<Footer></Footer>
		</div>
	);
};

export default Home;
