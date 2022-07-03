import Image from "next/image";
import { FC } from "react";

export interface IProduct {
	id: string;
	name: string;
	price: number;
	imageUrl: string;
}
interface IProductProps {
	product: IProduct;
}

export const Product: FC<IProductProps> = ({ product }) => {
	return (
		<div className="w-72 relative hover:shadow-lg m-5 transition rounded-md">
			<div className="relative w-72 h-96">
				{product.imageUrl &&
					<Image src={product.imageUrl} layout="fill" />
				}
			</div>
			<div className="ml-2">
				<p className="font-bold text-xl">{product.name}</p>
				<p>{product.price} USD</p>
			</div>
		</div>
	);
};
