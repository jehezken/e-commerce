"use client";

import React from "react";
import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react";
import { Search } from "lucide-react";

export default function NavbarBottomSearch() {
	const [isOpen, setIsOpen] = React.useState<boolean>(false);
	return (
		<>
			<button
				type="button"
				onClick={() => setIsOpen(true)}>
				<Search className="size-5 stroke-1" />
			</button>
			<Transition
				appear
				show={isOpen}>
				<Dialog
					open={isOpen}
					onClose={() => setIsOpen(false)}
					className="fixed inset-0 z-10 bg-black/20">
					<TransitionChild
						enter="transition-all ease-in-out duration-300"
						enterFrom="-translate-y-full"
						enterTo="translate-y-0">
						<DialogPanel className="relative h-[90dvh] w-full bg-white">
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, saepe?</p>
						</DialogPanel>
					</TransitionChild>
				</Dialog>
			</Transition>
		</>
	);
}
