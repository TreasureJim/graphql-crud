import { FC, useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/outline";

export const QuantityPicker: FC = () => {
	const [counter, setCounter] = useState(0);

	const minus = () => {
		if (counter == 0) return; setCounter(counter - 1);
	};
	const plus = () => setCounter(counter + 1);

	return (
		<div className="w-20 m-auto flex items-center justify-center">
			<span className="block text-5xl px-5 cursor-pointer select-none">-</span>

			<span className="block text-5xl px-5 cursor-pointer select-none">+</span>
		</div>
	);
};
