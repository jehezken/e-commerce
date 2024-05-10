"use client";

import React from "react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { AlignLeft } from "lucide-react";

export default function NavbarBottomMenu() {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	return (
		<>
			<button
				type="button"
				onClick={() => setIsOpen(true)}>
				<AlignLeft className="size-5 stroke-1" />
			</button>
			<Transition
				appear
				show={isOpen}>
				<Dialog
					open={isOpen}
					onClose={() => setIsOpen(false)}
					className="fixed inset-0 z-10 bg-black/50">
					<TransitionChild
						enter="transition-all ease-in-out duration-300"
						enterFrom="-translate-x-full"
						enterTo="translate-x-0">
						<DialogPanel className="relative h-dvh w-full max-w-80 bg-white">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, saepe?</p>
						</DialogPanel>
					</TransitionChild>
				</Dialog>
			</Transition>
		</>
	);
}
