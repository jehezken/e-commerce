import React from "react";
import Link from "next/link";
import { Globe, Mail } from "lucide-react";
import NavbarTopListbox from "./navbar-top-listbox";

const languages = [
	{
		name: "English",
	},
	{
		name: "Turkish",
	},
	{
		name: "Deutsch",
	},
];
const currencies = [
	{
		name: "USD",
	},
	{
		name: "TR",
	},
	{
		name: "EUR",
	},
];

export default function NavbarTop() {
	return (
		<div className="relative z-10 hidden h-auto w-full border-b bg-white xl:block">
			<div className="container mx-auto grid h-10 w-full grid-cols-12 px-6">
				<div className="col-span-3">
					<div className="flex h-full w-full items-center justify-start space-x-6">
						<Link
							href="/"
							className="flex items-center space-x-1">
							<Mail className="size-4 stroke-1" />
							<span className="text-sm">Support</span>
						</Link>
						<Link
							href="/"
							className="flex items-center space-x-1">
							<Globe className="size-4 stroke-1" />
							<span className="text-sm">Store location</span>
						</Link>
					</div>
				</div>
				<div className="col-span-6">
					<div className="flex h-full w-full items-center justify-center">
						<p className="flex items-center justify-center space-x-1 text-center text-sm">
							<span>New season for this week: Texture striped sweatshirt</span>
							<span className="cursor-pointer underline underline-offset-4">Shop now</span>
						</p>
					</div>
				</div>
				<div className="col-span-3">
					<div className="flex h-full w-full items-center justify-end space-x-6">
						<NavbarTopListbox data={languages} />
						<NavbarTopListbox data={currencies} />
					</div>
				</div>
			</div>
		</div>
	);
}
