import React from "react";
import Navbar from "./navbar";

interface IProps {
	children?: React.ReactNode;
}

export default function AppLayout({ children }: IProps) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
