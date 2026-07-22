'use client'
// app/fonts.ts (or src/fonts.ts)
import { useState } from 'react'
import {
    Dialog,
    DialogPanel,
    PopoverGroup,
} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from "next/link";


export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white drop-shadow-lg">
            <nav aria-label="Global" className="grid-cols-3 mx-auto flex max-w-7xl items-center justify-center p-2 lg:px-8">
                <div className="col-span-3 ">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Belong Here Theater</span>
                       <Image
                       src={'/logos/light-mode/Horizontal_LM_1.png'}
                       alt={'Belong Here Theater'}
                       width={200}
                       height={200}
                       className={"col-span-1 lg:w-64 lg:justify-center lg:col-span-1"}
                       />
                    </Link>
                </div>
                {/*<div className="flex lg:hidden">*/}
                {/*    <button*/}
                {/*        type="button"*/}
                {/*        onClick={() => setMobileMenuOpen(true)}*/}
                {/*        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"*/}
                {/*    >*/}
                {/*        <span className="sr-only">Open main menu</span>*/}
                {/*        <Bars3Icon aria-hidden="true" className="size-6" />*/}
                {/*    </button>*/}
                {/*</div>*/}
                {/*<PopoverGroup className="hidden lg:flex lg:gap-x-12 col-span-2 font-serif">*/}

                {/*    <a href="#" className="text-sm/6 font-semibold text-gray-900">*/}
                {/*        About Us*/}
                {/*    </a>*/}
                {/*    <a href="#" className="text-sm/6 font-semibold text-gray-900">*/}
                {/*        Mission*/}
                {/*    </a>*/}
                {/*    <a href="#" className="text-sm/6 font-semibold text-gray-900">*/}
                {/*        Company*/}
                {/*    </a>*/}
                {/*</PopoverGroup>*/}
                {/*<div className="hidden lg:flex lg:flex-1 lg:justify-end">*/}
                {/*    <Link href="/login" className="text-sm/6 font-semibold font-serif text-gray-900">*/}
                {/*        Log in <span aria-hidden="true">&rarr;</span>*/}
                {/*    </Link>*/}
                {/*</div>*/}
            </nav>
            {/*<Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">*/}
            {/*    <div className="fixed inset-0 z-50" />*/}
            {/*    <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">*/}
            {/*        <div className="flex items-center justify-between">*/}
            {/*            <a href="#" className="-m-1.5 p-1.5">*/}
            {/*                <span className="sr-only">Belong Here Theater</span>*/}
            {/*                <img*/}
            {/*                    alt="Belong Here Theater"*/}
            {/*                    src="/logos/light-mode/SecondaryGraphic_LM_1.png"*/}
            {/*                    className="h-8 w-auto"*/}
            {/*                />*/}
            {/*            </a>*/}
            {/*            <button*/}
            {/*                type="button"*/}
            {/*                onClick={() => setMobileMenuOpen(false)}*/}
            {/*                className="-m-2.5 rounded-md p-2.5 text-gray-700"*/}
            {/*            >*/}
            {/*                <span className="sr-only">Close menu</span>*/}
            {/*                <XMarkIcon aria-hidden="true" className="size-6" />*/}
            {/*            </button>*/}
            {/*        </div>*/}
            {/*        <div className="mt-6 flow-root">*/}
            {/*            <div className="-my-6 divide-y divide-gray-500/10">*/}
            {/*                <div className="space-y-2 py-6">*/}

            {/*                    <a*/}
            {/*                        href="#"*/}
            {/*                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"*/}
            {/*                    >*/}
            {/*                        About Us*/}
            {/*                    </a>*/}
            {/*                    <a*/}
            {/*                        href="#"*/}
            {/*                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"*/}
            {/*                    >*/}
            {/*                        Mission*/}
            {/*                    </a>*/}
            {/*                    <a*/}
            {/*                        href="#"*/}
            {/*                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"*/}
            {/*                    >*/}
            {/*                        Company*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*                <div className="py-6">*/}
            {/*                    <a*/}
            {/*                        href="/login"*/}
            {/*                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"*/}
            {/*                    >*/}
            {/*                        Log in*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </DialogPanel>*/}
            {/*</Dialog>*/}
        </header>
    )
}
