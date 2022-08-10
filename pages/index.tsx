import type { NextPage } from "next";
import Image from "next/image";
import { ClientOnly } from "../components/ClientOnly";
import Layout from "../components/layout";

import homePageImage from "../public/images/home-page.jpg";

const Home: NextPage = () => {
	return (
		<>
			<ClientOnly>
				<Layout />
			</ClientOnly>

			<div className="mx-12 mb-12">
				<div className="relative mb-12 mt-0">
					<Image src={homePageImage} layout="responsive" />
					<div className="absolute top-1/3 left-[14%]">
						<p className="leading-3 text-white font-sans text-[4rem] font-bold">SHOP WHERE YOU WANT</p>
						<p className="text-white font-sans text-[4rem] font-bold">WHEN YOU WANT</p>
					</div>
				</div>

				<div className="flex flex-row">
					<div>
						<div className="m-auto max-w-3/4">
							<h1 className="text-center">Where am I?</h1>
							<p className="mx-auto">This site was built to allow <a href="https://www.github.com/TreasureJim" target="blank" className="text-pink-500">me</a> to build my skills with GraphQL with NextJS and experiment with different designs and UX. You can view the code <a href="https://www.github.com/TreasureJim/graphql-crud" target="blank" className="text-pink-500">here</a>.</p>
							<p>You can browse the stores and products in them or create your own store with products and add images to them.</p>
						</div>
					</div>
					<div className="mb-0 p-7 bg-blue">
						<h3 className="text-center underline text-pink-500">Technologies</h3>
						<h4 className="text-center">NextJS</h4>
						<h4 className="text-center">Heroku</h4>
						<h4 className="text-center">Tailwind CSS</h4>
						<h4 className="text-center">Apollo GraphQL</h4>
						<h4 className="text-center">Postgres Server</h4>
						<h4 className="text-center">OAuth</h4>
					</div>
				</div>
			</div>

		</>
	);
};

export default Home;
