import {ButtonProps} from "@headlessui/react";

export default function Button(props: ButtonProps) {
    return (
        <button type="submit"
                className="flex w-32  justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
            {props.name}</button>

    );
}