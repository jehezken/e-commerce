import React from "react";
import Link from "next/link";
import NavbarBottomSearch from "./navbar-bottom-search";
import NavbarBottomMenu from "./navbar-bottom-menu";
import NavbarBottomCart from "./navbar-bottom-cart";
import NavbarBottomTabs from "./navbar-bottom-tabs";
import { Heart, User } from "lucide-react";

export default function NavbarBottom() {
	return (
		<header className="sticky top-0 z-10 h-auto w-full bg-white shadow-sm">
			<div className="relative h-full w-full">
				<div className="container mx-auto grid h-16 w-full grid-cols-12 px-4 xl:h-20 xl:px-6">
					<div className="col-span-4 xl:hidden">
						<div className="flex h-full w-full items-center justify-start space-x-3">
							<NavbarBottomMenu />
							<NavbarBottomSearch />
						</div>
					</div>
					<div className="col-span-4 xl:col-span-3">
						<div className="flex h-full w-full items-center justify-center space-x-3 xl:justify-start">
							<Link
								href="/"
								className="max-w-[145px]">
								<img
									src="https://hongotheme.myshopify.com/cdn/shop/files/demo-lifestyle-logo-black_2x_34fedf25-4c0e-4b39-8f1e-1b332b186d31.png?v=1683543508"
									alt="Hongo"
									className="h-auto max-w-full object-cover"
								/>
							</Link>
						</div>
					</div>
					<div className="col-span-6 hidden xl:block">
						<NavbarBottomTabs />
					</div>
					<div className="col-span-4 xl:col-span-3">
						<div className="flex h-full w-full items-center justify-end space-x-3">
							<div className="hidden items-center justify-center xl:flex">
								<NavbarBottomSearch />
							</div>
							<button type="button">
								<User className="size-5 stroke-1" />
							</button>
							<button type="button">
								<Heart className="size-5 stroke-1" />
							</button>
							<NavbarBottomCart />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
