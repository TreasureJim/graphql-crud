import Link from "next/link";

export default function Layout() {
	return (
		<div className="z-10 relative">
			<div className="flex justify-end items-center h-20 w-full top-0 mx-auto text-right bg-black text-white">
				<span className="">Find your own space</span>
				<Link href="/auth/register">
					<div className="m-5 mr-0 border-2 border-white py-2 px-12 rounded-sm">
						Register
					</div>
				</Link>
				<Link href="/auth">
					<div className="m-5 border-2 bg-white text-black py-2 px-12 border-white rounded-sm">
						Login
					</div>
				</Link>
			</div>
		</div>
	);
}
