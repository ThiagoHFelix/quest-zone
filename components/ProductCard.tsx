import React from "react";
import Button from '@/components/Button';

interface Game {
    image: string;
    title: string;
    discount: number;
    originalPrice: number;
    currentPrice: number;
    isAvailable: boolean;
}

interface ProductCardProps {
    game: Game;
}

export default function ProductCard({ game }: ProductCardProps) {

    return (
        <div
            className={`"col-span-1 row-span-1 relative rounded-2xl overflow-hidden shadow-lg bg-zinc-900`}
        >
            <img
                src={game.image}
                alt={game.title}
                className="w-full h-48 object-cover"
            />

            <div className="w-full h-7 bg-gray-600 flex items-center justify-center">
                <span
                    className="inline-block w-[74px] h-[18px] bg-[url('https://images.greenmangaming.com/static/img/sprites/7b29958861bc65fabf384fbff8dd2a48.png')] bg-[length:initial] bg-no-repeat"
                    style={{ backgroundPosition: "-74px -300px" }}
                />
            </div>

            <div className="p-4 flex flex-col justify-between">
                <h2 className="text-white font-bold text-lg mb-2 line-clamp-2">
                    {game.title}
                </h2>

                <div className="mt-2">
                    <span className="text-red-500 font-bold bg-zinc-800 px-2 py-1 rounded">
                        -{game.discount}%
                    </span>
                    <div className="text-gray-400 line-through text-sm">
                        R${game.originalPrice.toFixed(2)} BRL
                    </div>
                    <div className="text-green-500 font-bold text-lg">
                        R${game.currentPrice.toFixed(2)} BRL
                    </div>
                </div>

                <div className="mt-4">
                    {game.isAvailable ? (
                        <Button variant="primary">
                            COMPRAR
                        </Button>
                    ) : (
                        <Button disabled>
                            ESGOTADO
                        </Button>
                    )}
                </div>
            </div>
        </div >
    );
}
