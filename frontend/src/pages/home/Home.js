import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from '@/components/home/Navbar';
import Hero from '@/components/home/Hero';
import PopularCategories from '@/components/home/PopularCategories';
import HowItWorks from '@/components/home/HowItWorks';
import FeaturedFreelancers from '@/components/home/FeaturedFreelancers';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Footer from '@/components/home/Footer';
const Home = () => {
    return (_jsxs("div", { className: "min-h-screen flex flex-col bg-gray-50", children: [_jsx(Navbar, {}), _jsxs("main", { className: "flex-grow", children: [_jsx(Hero, {}), _jsx(PopularCategories, {}), _jsx(HowItWorks, {}), _jsx(FeaturedFreelancers, {}), _jsx(WhyChooseUs, {})] }), _jsx(Footer, {})] }));
};
export default Home;
