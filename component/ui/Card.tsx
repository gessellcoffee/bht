import {ButtonProps} from "@headlessui/react";

export default function Card({title, body} : {title: string, body: string}     ) {
    return (
        <div className={" justify-center text-center lg:m-16 m-8 bg-white rounded-lg outline-2 outline-gray-100 p-16"}>
            <h1
            className={" md:text-2xl text-xl font-medium justify-center "}>
                {title}
            </h1>

            <hr className={" lg:mx-16 lg:my-8 mx-4 my-2 border border-gray-200 "} />
            <p
            className={" text-md my-8 md:my-2 md:text-lg font-medium justify-center "}
            >
                {body}
            </p>
        </div>

    );
}