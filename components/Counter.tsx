import { FC, useState } from "react";
import { MinusIcon, PlusIcon } from "@heroicons/react/outline";

export const Counter: FC = () => {
	const [counter, setCounter] = useState(0);

	const minus = () => { if (counter == 0) return; setCounter(counter - 1) }
	const plus = () => setCounter(counter + 1);

	return (
		<div className="border border-black h-fit py-1 flex flex-row align-middle bg-white">
			<MinusIcon className="h-8 mr-2" onClick={minus} />
			<span className="text-2xl font-medium mx-auto leading-none select-none">{counter}</span>
			<PlusIcon className="h-8 ml-2" onClick={plus} />
		</div>
	);
}