import { FC, useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";

export const QuantityPicker: FC = () => {
	const [counter, setCounter] = useState(0);

	const minus = () => {
		if (counter == 0) return; setCounter(counter - 1);
	};
	const plus = () => setCounter(counter + 1);

	return (
		<div className="flex flex-row justify-center items-center h-10 w-fit">
			<div className="h-full bg-gray-200 w-10 flex rounded-l-md" onClick={minus}><MinusIcon className="w-4 m-auto" /></div>
			<div className="bg-white w-14 px-4 text-4xl text-center select-none">{counter}</div>
			<div className="h-full bg-gray-200 w-10 flex rounded-r-md" onClick={plus}><PlusIcon className="w-4 m-auto" /></div>
		</div >
	);
};
