import { gql } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import { Product, IProduct } from "../../../components/Product";
import CreateApolloClient from "../../../lib/ApolloClient";

interface IStoreProps {
	store: {
		name: string;
		products: IProduct[];
	};
}

const StoreId: NextPage<IStoreProps> = ({ store }) => {
	const { storeId } = useRouter().query;

	return (
		<>
			<Layout />
			<p className="text-6xl font-bold text-center">{store.name}</p>
			<div className="flex flex-wrap flex-row justify-between">
				{store.products.map(product => (
					<Link key={product.id} href={`/store/${storeId}/product/${product.id}`}>
						<div>

							<Product product={product} />
						</div>
					</Link>
				))}
			</div>
		</>
	);
}
export default StoreId;

export const getServerSideProps: GetServerSideProps<IStoreProps> = async (ctx) => {
	const { storeId: storeIdString } = ctx.query;
	let storeId;

	if (typeof storeIdString != 'string') {
		ctx.res.statusCode = 400;
		return {
			props: { store: {} }
		}
	}
	try {
		storeId = parseInt(storeIdString);
	} catch {
		ctx.res.statusCode = 400;
		return {
			props: { store: {} }
		}
	}


	const graphqlClient = CreateApolloClient({}, {});

	const { data } = await graphqlClient.query({
		query: gql`
		query Store($storeId: Int!) {
			dbo_store_by_pk(id: $storeId) {
			  name
			  products {
				brand
				description
				id
				image_url
				name
				price
			  }
			}
		  }					  
		  `,
		variables: {
			storeId: storeId
		}
	});

	return {
		props: {
			store: data.dbo_store_by_pk
		}
	};
}