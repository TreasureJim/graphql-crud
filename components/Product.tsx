import Image from "next/image";
import { FC } from "react"

export interface IProduct {
	id: number;
	name: string;
	price: number;
	image_url: string;
	brand: string;
}
interface IProductProps {
	product: IProduct;
}

export const Product: FC<IProductProps> = ({ product }) => {
	return (
		<div className="w-72 hover:shadow-lg m-5 transition rounded-md">
			{product.image_url &&
				<Image src={product.image_url} layout="responsive" height="200" width="300" />
			}
			<div className="ml-2">
				<p>{product.brand}</p>
				<p className="font-bold text-xl">{product.name}</p>
				<p>{product.price} USD</p>
			</div>
		</div>
	);
}