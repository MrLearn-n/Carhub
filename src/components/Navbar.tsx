"use client";
import React from "react";
import { Button } from "./Button";
import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
    return (
        <header className="w-full absolute z-10">
            <nav className="flex max-w-[1440px] mx-auto justify-between items-center sm:px-16 px-6 py-4"
            >
                <Link href="/" className="flex justify-center items-center">
                    <Image
                        src="/logo.svg"
                        alt="Car Hub Logo"
                        width={118}
                        height={118}
                        className="object-contain"
                    />
                </Link>

                <Button
                    title="Sign In"
                    btnStyle="text-primary-blue rounded-full bg-white min-w-[130px]"
                    btnType="submit"
                    onClick={() => {}}
                />
            </nav>
        </header>
    );
};
