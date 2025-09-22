import React from 'react';
import {
    CodeBracketIcon,
    PaintBrushIcon,
    GlobeAltIcon,
    ChartBarIcon,
    DevicePhoneMobileIcon,
    BriefcaseIcon
} from '@heroicons/react/24/outline';

const categories = [
    {
        icon: CodeBracketIcon,
        title: "Web Development",
        description: "WordPress, PHP, HTML, CSS",
        count: 12350
    },
    {
        icon: PaintBrushIcon,
        title: "Design & Creative",
        description: "Graphic Design, Illustration",
        count: 8420
    },
    {
        icon: GlobeAltIcon,
        title: "WordPress",
        description: "Themes, Plugins, Customization",
        count: 6240
    },
    {
        icon: ChartBarIcon,
        title: "Digital Marketing",
        description: "SEO, Social Media, Analytics",
        count: 5180
    },
    {
        icon: DevicePhoneMobileIcon,
        title: "Mobile Development",
        description: "iOS, Android, Cross-platform",
        count: 4320
    },
    {
        icon: BriefcaseIcon,
        title: "Business",
        description: "Virtual Assistant, Data Entry",
        count: 3890
    }
];

const PopularCategories = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Popular Professional Services</h2>
                    <p className="text-gray-600">Get inspired by these trending services</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-start">
                                <div className="p-3 bg-green-100 rounded-lg">
                                    <category.icon className="w-6 h-6 text-green-600" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                                    <p className="text-gray-600 mb-2">{category.description}</p>
                                    <span className="text-sm text-gray-500">{category.count.toLocaleString()} jobs</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularCategories;