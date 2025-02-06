import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { Image } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
	let [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10",
				className
			)}
		>
			{items.map((item, idx) => (
				<div
					key={item?.github}
					className="relative group block p-2 h-full w-full"
					onMouseEnter={() => setHoveredIndex(idx)}
					onMouseLeave={() => setHoveredIndex(null)}
				>
					<AnimatePresence>
						{hoveredIndex === idx && (
							<motion.span
								className="absolute inset-0 h-full w-full border	-yellow-300 block rounded-3xl"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: { duration: 0.15 },
								}}
								exit={{
									opacity: 0,
									transition: { duration: 0.15, delay: 0.2 },
								}}
							/>
						)}
					</AnimatePresence>
					<div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
						<img
							src={item.src}
							alt={item.title}
							className="w-full h-48 object-cover rounded-md mb-4"
						/>
						<h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
						<p className="text-gray-400 text-sm mb-4">{item.description}</p>
						<div className="text-xs text-gray-500 mb-4">
							<strong>Technologies: </strong>
							{item.technologies}
						</div>
						<div className="flex justify-between items-center">
							{item.github && (
								<a
									href={item.github}
									target="_blank"
									rel="noopener noreferrer"
									className="text-teal-500 hover:underline"
								>
									GitHub
								</a>
							)}
							{item.liveDemo && (
								<a
									href={item.liveDemo}
									target="_blank"
									rel="noopener noreferrer"
									className="text-teal-500 hover:underline"
								>
									Live Demo
								</a>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export const Card = ({ className, children }) => {
	return (
		<div
			className={cn(
				"rounded-2xl h-full w-full p-4 overflow-hidden bg-gray-800 border   border-white/[0.2] group-hover:border-slate-700 relative z-20 border-neutral-800",
				className
			)}
		>
			<div className="relative z-50">
				<div className="p-4 overflow-auto">{children}</div>
			</div>
		</div>
	);
};

export const CardTitle = ({ className, children }) => {
	return (
		<h4
			className={cn(
				"text-zinc-100 font-bold tracking-wide my-4 text-xl",
				className
			)}
		>
			{children}
		</h4>
	);
};

export const CardDescription = ({ className, children }) => {
	return (
		<p
			className={cn(
				"mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
				className
			)}
		>
			{children}
		</p>
	);
};
