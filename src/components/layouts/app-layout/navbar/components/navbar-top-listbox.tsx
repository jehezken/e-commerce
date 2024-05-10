"use client";

import React from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react";
import { ChevronDown } from "lucide-react";

export default function NavbarTopListbox({ data }: any) {
	const [selectedData, setSelectedData] = React.useState<any | undefined>(data[0]);

	return (
		<Listbox
			value={selectedData}
			onChange={setSelectedData}
			as="div"
			className="group">
			<ListboxButton className="flex items-center space-x-1">
				<span className="text-sm">{selectedData?.name}</span>
				<ChevronDown className="size-4 stroke-1 transition-transform group-data-[open]:rotate-180" />
			</ListboxButton>
			<Transition
				leave="transition ease-in duration-100"
				leaveFrom="opacity-100"
				leaveTo="opacity-0">
				<ListboxOptions
					anchor="bottom"
					className="z-10 rounded-md bg-white px-6 py-4 shadow-sm drop-shadow-md">
					{data.map((value: any, key: any) => (
						<ListboxOption
							key={key}
							value={value}
							className="cursor-pointer border-b border-transparent pb-1 text-sm transition-all last:pb-0 hover:border-black">
							{value.name}
						</ListboxOption>
					))}
				</ListboxOptions>
			</Transition>
		</Listbox>
	);
}
