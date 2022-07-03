import { gql, useQuery } from "@apollo/client";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import Layout from "../../../components/layout";
import { Product } from "../../../components/Product";

interface IStore {
	storeById: {
		name: string;
		description: string;
		products: {
			id: string;
			name: string;
			price: number;
			imageUrl: string;
		}[];
	}
}

const StoreId: NextPage = () => {
	const { storeId } = useRouter().query;

	const { data } = useQuery<IStore>(
		gql`
		query ($storeId: String!) {
			storeById(id: $storeId) {
				name
				description
					products {
					id
					name
					price
					imageUrl
				}
			}
		}`,
		{
			variables: {
				storeId: storeId,
			},
		},
	);

	return (
		<>
			<Layout />
			<p className="text-6xl font-bold text-center">{data?.storeById.name}</p>
			<div className="flex flex-wrap flex-row justify-between">
				{data?.storeById.products.map((product) => (
					<Link key={product.id} href={`/store/${storeId}/product/${product.id}`}>
						<Product product={product} />
					</Link>
				))}
			</div>
		</>
	);
};
export default StoreId;
