import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/layout";

import logo from "../public/dev-logo.svg";
import modelLeft from "../public/images/model-left.jpg";
import modelRight from "../public/images/model-right.jpg";

const Home: NextPage = () => {
	return (
		<>
			<Layout />
			<div className="absolute z-10 w-full pt-2">
				<div className="m-auto w-20">
					<Image src={logo} layout="responsive" alt="logo" />
				</div>
			</div>

			<div className="flex flex-row absolute bottom-0 w-full cursor-pointer text-7xl overflow-hidden">
				<Link href="/mystore">
					<div className="w-2/4 hover:brightness-75 transition-all duration-300">
						<Image src={modelLeft} alt="model left" layout="responsive" />
						<div className="absolute bottom-0 left-1 w-1/2">
							Build
						</div>
					</div>
				</Link>
				<Link href="/stores">
					<div className="w-2/4 hover:brightness-75 transition-all duration-300">
						<Image src={modelRight} alt="model right" layout="responsive" />
						<div className="absolute bottom-0 right-1">
							Browse
						</div>
					</div>
				</Link>
			</div>
		</>
	);
};

export default Home;
