import React from "react";
import Image from "next/image";
import { Link } from "@nextui-org/react";

export default function Nav() {
	return (
		<div className="w-full flex items-center justify-center px-8 py-4 mx-auto bg-transparent fixed top-0 left-0 z-50">
			<div className="flex items-center justify-between w-full">
				<div>
					<Link href="/" >
						<Image src="/42 Blockchain Blanc.svg" alt="42 Blockchain" width={200} height={200} />
					</Link>
				</div>
				<div className="flex justify-between gap-8">
					<Link href="#">
						Events
					</Link>
					<Link color="foreground" href="#">
						Contact
					</Link>
				</div>
			</div>
		</div>
	);
}
