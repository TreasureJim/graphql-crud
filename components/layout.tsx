/* eslint-disable require-jsdoc */
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import githubIcon from "../public/images/github-icon.png";

export default function Layout() {
	function userElement(): JSX.Element {
		const { data: session, status } = useSession();

		if (status == "loading") {
			return <div></div>;
		}

		if (status == "authenticated") {
			return (<div className="flex justify-center items-center">
				<span className="mr-2">{session.user?.name}</span>
				{session.user?.image ?
					<Image className="inline object-cover w-12 h-12 mr-2 rounded-full" src={session.user.image} layout="fixed" height="42px" width="42px" /> :
					<div></div>
				}
				<button onClick={() => signOut()}>
					<div className="ml-5 text-black py-2 px-12 border border-black hover:bg-gray-100 transition">
						Sign out
					</div>
				</button>
			</div>);
		} else {
			return (
				<button onClick={() => signIn()} >
					<div className="m-5 border-2 text-black py-2 px-12 border-white rounded-sm">
						Login
					</div>
				</button>
			);
		}
	}

	function VD(): JSX.Element {
		return (
			<div className="h-12 border-l-2 border-black mx-2" />
		);
	}

	return (
		<div className="flex flex-row items-center justify-between h-20 z-10 mx-14">
			<Link href={"/"}>
				<span className="font-bold font-sans text-6xl tracking-widest cursor-pointer">AMELE</span>
			</Link>

			<div className="inline-flex">
				<span className="font-bold font-sans text-5xl cursor-pointer">CREATE</span>
				<VD />
				<Link href="store">
					<span className="font-bold font-sans text-5xl cursor-pointer">BROWSE</span>
				</Link>
				<VD />
				<div className="relative h-auto w-12">
					<a href="https://www.github.com/TreasureJim/graphql-crud" target="blank">
						<Image src={githubIcon} layout="fill" />
					</a>
				</div>
			</div>

			<div className="relative float-right">
				{userElement()}
			</div>
		</div>
	);
}
