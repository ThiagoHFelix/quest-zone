import ProductCard from "@/components/ProductCard";

interface Product {
    image: string;
    title: string;
    discount: number;
    originalPrice: number;
    currentPrice: number;
    isAvailable: boolean;
}

const sampleProducts: Product[] = [
    {
        image: "https://images.greenmangaming.com/31ed94c4a7b1494a9605d163a280e756/d50035b59be3475cabb5c536d49d8458.jpg",
        title: "The Elder Scrolls Online",
        discount: 78,
        originalPrice: 61.5,
        currentPrice: 13.53,
        isAvailable: false,
    },
    {
        image: "https://images.greenmangaming.com/51bdc68337204945837b5677164d8c80/9f3dcf982f8d48cb89a8dcb1c068f686.jpg",
        title: "Skyrim Anniversary Edition",
        discount: 71,
        originalPrice: 179.0,
        currentPrice: 51.98,
        isAvailable: true,
    },
    {
        image: "https://images.greenmangaming.com/5d378139d22b4c1f8fa6252aa136f973/2482860c9f2a47448cdf5c713ebd75c6.jpg",
        title: "Soulmask",
        discount: 30,
        originalPrice: 89.99,
        currentPrice: 62.99,
        isAvailable: true,
    },
    {
        image: "https://images.greenmangaming.com/cfaf509093974bf69ec5c1f3d49d5df9/1caad7ac4242493da5e3a8f5fb0e69a6.jpg",
        title: "Farm Together 2",
        discount: 10,
        originalPrice: 77.13,
        currentPrice: 69.42,
        isAvailable: true,
    }
];

export function FeaturedOffers() {
    return (
        <section className="p-6">
            <h1 className="text-2xl font-bold text-white mb-4">OFERTAS EM DESTAQUE</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {sampleProducts.map((product, index) => (
                    <ProductCard key={index} game={product} />
                ))}
            </div>
        </section>
    );
}

export default FeaturedOffers;
