import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";

const Stores: NextPage = () => {
	interface IQuery {
		stores: {
			id: string;
			name: string;
			description: string;
			imageUrl: string;
		}[]
	}

	const { data } = useQuery<IQuery>(
		gql`
		query Query {
			stores {
				id
				name
				description
				imageUrl
			}
		}
	  `,
	);

	return (
		<>
			<Layout />
			<div className="flex flex-wrap flex-row justify-between">
				{data?.stores.map((store) => (
					<Link key={store.id} href={`/store/${store.id}`} >
						<div className="w-72 m-5 hover:shadow-lg transition rounded-md">
							{store.imageUrl &&
								<Image src={store.imageUrl} layout="responsive" width="5" height="2" />
							}
							<p className="text-center font-bold text-xl">{store.name}</p>
							<p className="text-center">{store.description}</p>
						</div>
					</Link>
				))}
			</div>
		</>
	);
};

export default Stores;
