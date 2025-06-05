"use client";

import { useState } from 'react';
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import Button from "@/components/Button";

const Carousel = () => {
    const products = [
        {
            id: 1,
            name: 'The Witcher 3: Wild Hunt',
            platform: 'PC',
            price: 'R$ 99,90',
            image: 'https://image.api.playstation.com/vulcan/ap/rnd/202211/0914/TvcIHkYqqln1RGbaFqBeuFp6.jpg',
        },
        {
            id: 2,
            name: 'Cyberpunk 2077',
            platform: 'PC',
            price: 'R$ 129,90',
            image: 'https://images.hdqwalls.com/wallpapers/cyberpunk-2077-art-2020-4k-f9.jpg',
        },
        {
            id: 3,
            name: 'Hades',
            platform: 'Nintendo Switch',
            price: 'R$ 89,90',
            image: 'https://www.gameit.es/wp-content/uploads/2020/11/hades-1.jpg',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    };

    const prevProduct = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="relative w-full flex justify-center items-center overflow-hidden">
            <div className="flex items-center justify-between gap-4 w-full relative px-4 py-6 max-w-[1500px] flex-col md:flex-row">

                <button
                    className="text-white text-3xl p-3 rounded-full transition duration-300 transform hover:shadow-xl hover:scale-110 focus:outline-none hidden md:block"
                    onClick={prevProduct}
                >
                    <BsChevronLeft />
                </button>

                <div className="flex flex-col items-center w-full md:w-3/5">
                    <div className="w-full h-64 md:h-80 relative">
                        <img
                            src={products[currentIndex].image}
                            alt={products[currentIndex].name}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    <div className="mt-4 text-white w-full flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 px-1">
                        <div>
                            <div className="text-xl md:text-2xl font-semibold">
                                {products[currentIndex].name}
                            </div>
                            <div className="mt-1 text-base md:text-lg">
                                {products[currentIndex].platform}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-lg">
                            <div>{products[currentIndex].price}</div>
                            <Button variant="primary" className="w-full sm:w-auto">
                                Comprar
                            </Button>
                        </div>
                    </div>
                </div>

                <button
                    className="text-white text-3xl p-3 rounded-full transition duration-300 transform hover:shadow-xl hover:scale-110 focus:outline-none hidden md:block"
                    onClick={nextProduct}
                >
                    <BsChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
