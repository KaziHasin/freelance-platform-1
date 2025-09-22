import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';

const tiers = [
    {
        name: 'Basic',
        badge: '',
        price: '0',
        description: 'Get started with basic freelancing',
        features: [
            'Post up to 3 projects per month',
            'Basic project management tools',
            'Access to global freelancer network',
            'Standard support',
            'Project tracking',
            '1 active project at a time',
        ],
        cta: 'Get Started',
        mostPopular: false,
    },
    {
        name: 'Pro',
        badge: 'POPULAR',
        price: '2,999',
        description: 'More features for growing businesses',
        features: [
            'Everything in Basic, plus:',
            'Post unlimited projects',
            'Priority project placement',
            'Advanced project management',
            'Priority support',
            'Up to 5 active projects',
            'Team collaboration tools',
            'Custom project templates',
        ],
        cta: 'Get Pro',
        mostPopular: true,
    },
    {
        name: 'Business',
        badge: 'ENTERPRISE',
        price: '19,999',
        description: 'Advanced features for large teams',
        features: [
            'Everything in Pro, plus:',
            'Unlimited active projects',
            'Dedicated account manager',
            'Custom contracts & agreements',
            '24/7 premium support',
            'Advanced analytics & reporting',
            'API access',
            'Custom integration options',
            'White-label solution',
        ],
        cta: 'Contact Sales',
        mostPopular: false,
    },
];

const Packages = () => {
    return (
        <div className="py-8 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Choose Your Plan
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Select the perfect package for your business needs
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {tiers.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative flex flex-col rounded-3xl bg-white shadow-lg ring-1 ring-gray-200 ${tier.mostPopular ? 'ring-2 ring-green-600' : ''
                                }`}
                        >
                            {tier.badge && (
                                <div className={`absolute right-6 top-6 rounded-lg px-3 py-1.5 text-xs font-medium ${tier.mostPopular ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'
                                    }`}>
                                    {tier.badge}
                                </div>
                            )}
                            <div className="p-8">
                                <h3 className="text-lg font-semibold leading-8 text-gray-900">
                                    {tier.name}
                                </h3>
                                <p className="mt-4 text-sm leading-6 text-gray-600">
                                    {tier.description}
                                </p>
                                <p className="mt-6 flex items-baseline gap-x-1">
                                    <span className="text-4xl font-bold tracking-tight text-gray-900">₹{tier.price}</span>
                                    <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                                </p>
                                <button
                                    className={`mt-6 w-full rounded-lg px-4 py-3 text-center text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${tier.mostPopular
                                            ? 'bg-green-600 text-white hover:bg-green-500 focus-visible:outline-green-600'
                                            : 'bg-gray-100 text-gray-900 hover:bg-gray-50 focus-visible:outline-gray-600'
                                        }`}
                                >
                                    {tier.cta}
                                </button>
                                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                                    {tier.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <CheckIcon className="h-6 w-5 flex-none text-green-600" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="mt-20 text-center">
                    <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
                        Frequently asked questions
                    </h2>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                        Have a different question? Reach out to our{' '}
                        <a href="#" className="font-semibold text-green-600 hover:text-green-500">
                            support team
                        </a>{' '}
                        for more details.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Packages;