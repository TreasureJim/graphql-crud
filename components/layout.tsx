import { useUser } from "@auth0/nextjs-auth0";
import Image from "next/image"
import Link from "next/link";
import logo from "../public/dev-logo.svg";

export default function Layout() {

	function userElement(): JSX.Element {
		const { isLoading, user } = useUser();

		if (isLoading)
			return (<div></div>);

		if (user) {
			return (<div className="mx-5 flex justify-center items-center">
				{user?.picture ?
					<Image className="inline object-cover w-12 h-12 mr-2 rounded-full" src={user.picture} layout="fixed" height="42px" width="42px" />
					:
					<div></div>
				}
				<span className="ml-2">{user.name}</span>
				<Link href="/api/auth/logout">
					<div className="ml-5 bg-white text-black py-2 px-12 hover:bg-gray-100">
						Sign out
					</div>
				</Link>
			</div>);
		} else {
			return (
				<Link href="/api/auth/login">
					<div className="m-5 border-2 bg-white text-black py-2 px-12 border-white rounded-sm">
						Login
					</div>
				</Link>
			);
		}
	}

	return (
		<div className="z-10 relative">
			<div className="flex items-center h-20 w-full top-0 mx-auto text-right bg-black text-white">
				<a href="https://github.com/TreasureJim" target="_blank" className="float-left ml-3">
					<Image src={logo} layout="fixed" width="50" height="50" alt="logo" />
				</a>
				<div className="fixed right-0">
					{userElement()}
				</div>
			</div>
		</div>
	);
}
