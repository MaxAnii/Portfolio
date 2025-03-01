import React from "react";
import { MutatingDots } from "react-loader-spinner";
const Loader = () => {
	return (
		<div className="flex justify-center items-center h-[90vh]">
			<MutatingDots
				visible={true}
				height="100"
				width="100"
				color="#FF6000"
				secondaryColor="#FF6000"
				radius="12.5"
				ariaLabel="mutating-dots-loading"
				wrapperStyle={{}}
				wrapperClass=""
			/>
		</div>
	);
};

export default Loader;
