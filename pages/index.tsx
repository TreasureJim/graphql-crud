import type { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClientOnly } from "../components/ClientOnly";
import Layout from "../components/layout";
import styles from './index.module.css'

import modelLeft from "../public/images/model-left.jpg";
import modelRight from "../public/images/model-right.jpg";

const Home: NextPage = () => {
	return (
		<>
			<ClientOnly>
				<Layout />
			</ClientOnly>

			<div className="flex flex-row absolute bottom-0 w-full h-screen text-7xl overflow-hidden">

				<div className="w-2/4 transition-all duration-300">
					<Image src={modelLeft} alt="model left" layout="responsive" className="absolute top-0 right-0" />
					<div className="absolute bottom-0 left-1">
						Build -- NOT IMPLEMENTED
					</div>
				</div>
				<Link href="/store">
					<div className="w-2/4 hover:brightness-75 transition-all duration-300 cursor-pointer">
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

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {}
	}
}

export default Home;