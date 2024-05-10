import React from "react";
import { AppLayout } from "@/components/layouts";
import Marquee from "react-fast-marquee";

export default function Home() {
	return (
		<AppLayout>
			<main>
				<section className="relative h-auto w-full">
					<div className="h-[calc(100dvh-64px)] w-full overflow-hidden xl:h-[calc(100dvh-121px)]">
						<video
							autoPlay
							playsInline
							loop
							muted
							preload="metadata"
							poster="//hongotheme.myshopify.com/cdn/shop/files/preview_images/49bfb3c5577a42d8b2b302098431ca34.thumbnail.0000000000_1920x.jpg?v=1683870837"
							className="h-full w-full object-cover">
							<source
								src="https://cdn.shopify.com/videos/c/vp/49bfb3c5577a42d8b2b302098431ca34/49bfb3c5577a42d8b2b302098431ca34.HD-1080p-4.8Mbps-14553891.mp4"
								type="video/mp4"
							/>
						</video>
					</div>

					<div className="absolute inset-0 flex h-full  w-full items-center justify-center xl:bg-black/20">
						<div className="flex flex-col items-center justify-center xl:max-w-[70ch]">
							<h6 className="mb-5 text-sm uppercase text-white drop-shadow-md">Splash into summer collections</h6>
							<h1 className="mb-10 text-center text-[70px] font-medium uppercase leading-none text-white md:text-[90px] lg:text-[120px]">
								Narrow edition
							</h1>
							<button
								type="button"
								className="flex h-auto w-fit items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-medium uppercase shadow-sm drop-shadow-md">
								Shop collection
							</button>
						</div>
					</div>
				</section>

				<section className="relative h-auto w-full bg-[#f7ece7] py-10 xl:py-20">
					<div className="container mx-auto h-auto w-full px-4 xl:px-6">
						<h2 className="text-center text-[30px]">Explore the latest shopping related offers</h2>
						<div className="mt-10 grid h-auto w-full grid-cols-12 gap-4 md:gap-6">
							{Array.from({ length: 4 }).map((_, key) => (
								<div
									key={key}
									className="col-span-full rounded-md bg-white px-8 py-4 shadow-sm drop-shadow-md md:col-span-6 lg:col-span-3">
									<h3 className="text-center text-[21px] leading-none">Season sale</h3>
									<h5 className="text-center text-lg text-neutral-500">Popular collections</h5>
									<button
										type="button"
										className="mx-auto mt-5 flex h-auto w-fit items-center justify-center rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white">
										Shop now
									</button>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="relative h-auto w-full bg-white py-2.5 shadow-sm">
					<Marquee autoFill>
						<p className="m-2.5 flex items-center">
							<span className="ml-[30px] mr-[50px] inline-block h-px w-[55px] bg-neutral-500"></span>
							<span>NEW AND EXCLUSIVE COLLECTION</span>
						</p>
					</Marquee>
				</section>
			</main>
		</AppLayout>
	);
}
