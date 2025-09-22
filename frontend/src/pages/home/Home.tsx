import React from 'react';
import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import PopularCategories from '@/components/home/PopularCategories';
import HowItWorks from '@/components/home/HowItWorks';
import FeaturedFreelancers from '@/components/home/FeaturedFreelancers';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Footer from '@/components/home/Footer';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Navbar />
            <main className="flex-grow">
                <Hero />
                <PopularCategories />
                <HowItWorks />
                <FeaturedFreelancers />
                <WhyChooseUs />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
