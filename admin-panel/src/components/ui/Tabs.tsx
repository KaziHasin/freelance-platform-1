import React, { useState } from 'react';

interface Tab {
    label: string;
    content: React.ReactNode;
}

interface TabsProps {
    tabs: Tab[];
    defaultActiveTab?: number;
    className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultActiveTab = 0, className = '' }) => {
    const [activeTab, setActiveTab] = useState(defaultActiveTab);

    return (
        <div className={`w-full ${className}`}>
            <div className="border-b border-gray-200">
                <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                ${activeTab === index
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                }
              `}
                            aria-current={activeTab === index ? 'page' : undefined}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>
            <div className="mt-4">
                {tabs[activeTab].content}
            </div>
        </div>
    );
};

export default Tabs;
