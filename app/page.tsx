import Header from '@/components/Header';
import ProductCarousel from '@/components/ProductCarousel';
import FeaturedOffers from '@/components/FeaturedOffers';
import Footer from '@/components/Footer';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* ======= HEADER ======= */}
            <section className="">
                <Header />
            </section>

            {/* ======= BANNER PRINCIPAL ======= */}
            <section className="my-4 h-fit flex items-center justify-center">
                <ProductCarousel />
            </section>

            {/* ======= SEÇÃO DE OFERTAS ESPECIAIS ======= */}
            <section className="py-10 container mx-auto">
                <FeaturedOffers />
            </section>

            {/* ======= FOOTER ======= */}
            <Footer />
        </div>
    )
}
