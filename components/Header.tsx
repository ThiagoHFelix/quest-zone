"use client";

import React, { useState } from "react";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import { FiMenu, FiSearch, FiUser } from "react-icons/fi";

export default function Header() {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <header className="bg-neutral-900 text-white px-4 py-6">
            <div className="container mx-auto flex items-center justify-between gap-4">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold hover:text-green-400">
                    <Logo />
                </a>

                {/* Menu (mobile only) */}
                <div className="block sm:hidden text-white text-3xl cursor-pointer">
                    <FiMenu />
                </div>

                {/* Search + Login (desktop only) */}
                <div className="hidden sm:flex items-center gap-4 flex-1 justify-end">
                    <div
                        className={`flex items-center border border-gray-600 rounded-md px-3 py-2 bg-gray-900 transition-all duration-300 overflow-hidden ${isFocused ? "w-72" : "w-32"
                            }`}
                    >
                        <FiSearch className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Buscar"
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className="bg-transparent outline-none text-white placeholder-gray-400 w-full"
                        />
                    </div>

                    <Button className="max-w-[150px] flex items-center gap-2 justify-center-safe">
                        <FiUser className="text-gray-400" />
                        Login
                    </Button>
                </div>
            </div>
        </header>
    );
}
