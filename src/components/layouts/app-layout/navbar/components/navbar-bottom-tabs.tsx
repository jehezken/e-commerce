import React from "react";
import Link from "next/link";

export default function NavbarBottomTabs() {
	return (
		<nav className="flex h-full w-full items-center justify-center space-x-6">
			{Array.from(["Demo", "Shop", "Collection", "Pages", "Magazine", "Features"]).map((value, key) => (
				<Link
					href={value.toLowerCase()}
					key={key}
					className="relative text-lg after:absolute after:left-0 after:top-full after:h-0.5 after:w-full after:origin-[100%_50%] after:scale-x-0 after:bg-black after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-[0%_50%] hover:after:scale-x-100">
					{value}
				</Link>
			))}
		</nav>
	);
}
