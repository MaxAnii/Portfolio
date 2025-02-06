import { FloatingDock } from "@/components/ui/floating-dock";
import { IconExchange, IconHome } from "@tabler/icons-react";
import { CgWorkAlt } from "react-icons/cg";
import { BsPersonWorkspace } from "react-icons/bs";
const Nav = () => {
	const links = [
		{
			title: "Home",
			icon: (
				<IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#HOME",
		},

		{
			title: "Projects",
			icon: (
				<BsPersonWorkspace className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#PROJECTS",
		},
		{
			title: "EXPERIENCE",
			icon: (
				<CgWorkAlt className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#EXPERIENCE",
		},

		{
			title: "Contact me",
			icon: (
				<IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "#CONTACT",
		},
	];

	return (
		<div className=" w-full">
			<FloatingDock mobileClassName="translate-y-20" items={links} />
		</div>
	);
};

export default Nav;
