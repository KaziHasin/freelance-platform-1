import React from 'react';
import {
    ShieldCheckIcon,
    StarIcon,
    ChatBubbleBottomCenterTextIcon,
    GlobeAltIcon
} from '@heroicons/react/24/outline';

const features = [
    {
        title: "Safe and Secure",
        description: "Payment is released only when you're completely satisfied with the work.",
        icon: <ShieldCheckIcon className="w-6 h-6" />
    },
    {
        title: "Proof of Quality",
        description: "Handpicked professionals and thorough vetting process ensures top quality.",
        icon: <StarIcon className="w-6 h-6" />
    },
    {
        title: "24/7 Support",
        description: "Round the clock customer service to assist you anytime.",
        icon: <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />
    },
    {
        title: "Global Marketplace",
        description: "Access to a diverse pool of skilled professionals worldwide.",
        icon: <GlobeAltIcon className="w-6 h-6" />
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Why Choose Our Platform</h2>
                    <p className="text-gray-600">The benefits of working with our global community</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="text-green-600 mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;