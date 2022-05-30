import { gql } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../../../../components/layout";
import CreateApolloClient from "../../../../lib/ApolloClient";
import { PlusIcon, MinusIcon } from "@heroicons/react/outline";
import { Counter } from "../../../../components/Counter";
import { ClientOnly } from "../../../../components/ClientOnly";

interface IProductProps {
	product: {
		name: string;
		description: string;
		creator_review: string;
		brand: string;
		price: number;
		image_url: string;
		store: {
			name: string;
		}
	}
}

const Product: NextPage<IProductProps> = ({ product }) => {
	return (
		<>
			<Layout />
			<p className="text-center font-bold text-5xl mb-7">{product.store.name}</p>

			<div className="h-fit w-2/3 mx-auto">
				<div className="p-2 bg-red-700 h-fit flex flex-row justify-between">
					<div className="w-1/3">
						<Image src={product.image_url} layout="responsive" width="1" height="1" />
					</div>
					<div className="w-2/6 flex justify-center align-middle flex-col">
						<div className="w-16 mx-auto">
							<Counter />
						</div>
						<button className="mt-5 mx-auto border-black w-36 bg-green-500">Buy now</button>
					</div>
					<div className="w-4/6 text-right">
						<p className="text-6xl font-light text-right">{product.price}</p>
						<p className="text-base">{product.description}</p>
						<p className=" underline text-lg">Creator Review</p>
						<p className="text-base">{product.creator_review}</p>

					</div>
				</div>
				<div className="text-right">
					<p className="text-7xl font-semibold">{product.name}</p>
					<p className="text-base">{product.brand}</p>
				</div>
			</div>
		</>
	)
}
export default Product;

export const getServerSideProps: GetServerSideProps<IProductProps> = async (ctx) => {
	const { productId: productIdString } = ctx.query;
	let productId: number;

	if (typeof productIdString != 'string') {
		ctx.res.statusCode = 400;
		return {
			props: { product: {} }
		}
	}
	try {
		productId = parseInt(productIdString);
	} catch {
		ctx.res.statusCode = 400;
		return {
			props: { product: {} }
		}
	}

	const graphqlClient = CreateApolloClient({}, {});

	const { data } = await graphqlClient.query({
		query: gql`
		query Product($id: Int!) {
			dbo_product_by_pk(id: $id) {
			  brand
			  creator_review
			  description
			  id
			  image_url
			  name
			  price
			  store {
				  name
			  }
			}
		  }
		`,
		variables: {
			id: productId
		}
	});

	return {
		props: {
			product: data.dbo_product_by_pk
		}
	}
}