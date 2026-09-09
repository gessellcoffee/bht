import {ButtonProps} from "@headlessui/react";

export default function Card({title, body} : {title: string, body: string}     ) {
    return (
        <div className={"text-white font-serif rounded-lg "}>
            <h1
            className={" text-4xl mb-4 md:mx-8 " +
                "font-medium justify-center mx-2  opacity-100"}>
                {title}
            </h1>

            <hr className={" md:me-64  mx-4 me-16 border border-gray-200 "} />
            <p
            className={" font-sans text-lg my-8 mx-1 md:my-8  md:text-xl font-medium text-left "}
            >
                {body}
            </p>
        </div>

    );
}