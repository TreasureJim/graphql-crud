import { FC, PropsWithChildren, ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const ProtectedRoute = ({ children }: any) => {
	const { status } = useSession();
	const router = useRouter();

	useEffect(() => {
		if (status != "authenticated") {

		}
	}, [router, status]);

	if (status === 'unauthenticated') return null;

	return (<>{children}</>);
}

export { ProtectedRoute }