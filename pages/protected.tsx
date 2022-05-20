import dynamic from "next/dynamic"
import { ThirdPartyAuth } from "supertokens-auth-react/recipe/thirdparty"

const ThirdPartyAuthNoSSR = dynamic(
	new Promise<typeof ThirdPartyAuth>((res) => res(ThirdPartyAuth)),
	{ ssr: false }
);

export default function protectedRoute() {
	return (
		<ThirdPartyAuthNoSSR>
			<p>hello :)</p>
		</ThirdPartyAuthNoSSR>
	);
}