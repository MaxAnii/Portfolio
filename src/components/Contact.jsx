import React, { useRef } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import SectionLabel from "./SectionLabel";
import toast, { Toaster } from "react-hot-toast";
const Contact = () => {
	const form = useRef();

	const sendMail = async (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_PUBLIC_KEY
			)
			.then(
				(result) => {
					form.current.reset();
					toast.success("Message Recieved.");
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className="bg-neutral-950 pt-10">
			{" "}
			<Toaster position="top-center" reverseOrder={false} />
			<SectionLabel
				label={"Get in touch"}
				context={"Feel free to drop me a line - Contact me"}
			/>
			<div className="border-2 md:mx-[10vw] lg:mx-[15vw] mx-4 mt-[9vh] p-6 rounded-3xl">
				<form onSubmit={sendMail} ref={form}>
					<div className="flex   md:gap-10 gap-3">
						<Input
							type="email"
							label="Email"
							labelPlacement="outside"
							isRequired
							placeholder="Enter your email"
							name="user_email"
						/>
						<Input
							type="text"
							label="Name"
							labelPlacement="outside"
							isRequired
							placeholder="Enter your name"
							name="user_name"
						/>
					</div>
					<div className="pt-[3vh] w-[100%]">
						<Input
							type="text"
							label="Subject"
							labelPlacement="outside"
							isRequired
							placeholder="Enter your subject"
							name="subject"
						/>
					</div>
					<div className="pt-[3vh] w-[100%]">
						<Textarea
							type="text"
							isRequired
							label="Description"
							labelPlacement="outside"
							minRows="4"
							placeholder="How can i help you?"
							name="message"
						/>
					</div>
					<div className="flex justify-end pt-3">
						<Button
							// color="warning"
							variant="bordered"
							className="text-[#FF6000] hover:bg-[#FF6000] hover:text-white shadow-xl mt-3"
							type="submit"
						>
							Send
						</Button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Contact;
