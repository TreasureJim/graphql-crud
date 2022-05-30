import { gql } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";
import CreateApolloClient from "../../lib/ApolloClient";
import withApollo from "../../lib/withApollo";

interface IStoresProps {
	stores: any[];
}

const Stores: NextPage<IStoresProps> = ({ stores }) => {
	return (
		<>
			<Layout />
			<div className="flex flex-wrap flex-row justify-between">
				{stores.map(store => (
					<Link key={store.id} href={`/store/${store.id}`} >
						<div className="w-72 m-5 hover:shadow-lg transition rounded-md">
							{store.image_url &&
								<Image src={store.image_url} layout="responsive" width="5" height="2" />
							}
							<p className="text-center font-bold text-xl">{store.name}</p>
							<p className="text-center">{store.description}</p>
						</div>
					</Link>
				))}
			</div>
		</>
	)
}

export const getServerSideProps: GetServerSideProps<IStoresProps> = async () => {
	const client = CreateApolloClient({}, {});

	interface IQuery {
		dbo_store: {
			id: string;
			name: string;
			description?: string;
			image_url?: string;
		}[]
	}
	const { data } = await client.query<IQuery>({
		query:
			gql`
		query GetStores {
			dbo_store {
				description
				id
				name
				image_url
			  }
		}
	  `
	});

	return {
		props: {
			stores: data.dbo_store
		}
	}
};

export default withApollo(Stores);