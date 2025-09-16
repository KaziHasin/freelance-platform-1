import { NumberInput } from '@/components/forms/inputs/NumberInput';
import { TextInput } from '@/components/forms/inputs/TextInput';
import FormSectionHeader from '@/components/forms/sections/FormSectionHeader';
import React from 'react';

const AddressSection: React.FC = () => {
    return (
        <div className="mt-2">
            <div className="bg-white dark:bg-gray-800 p-8 mb-6 shadow-md border border-gray-100 dark:border-gray-700 rounded-xl">
                <FormSectionHeader title="User Address" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Street Address (full width) */}
                    <div className="md:col-span-2">
                        <TextInput
                            id="street"
                            name="street"
                            label="Street Address"
                            placeholder="123 Main St"
                        />
                    </div>

                    {/* City */}
                    <TextInput
                        id="city"
                        name="city"
                        label="City"
                        placeholder="New York"
                    />

                    {/* State / Province */}
                    <TextInput
                        id="state"
                        name="state"
                        label="State / Province"
                        placeholder="California"
                    />

                    {/* Postal Code */}
                    <NumberInput
                        id="postalCode"
                        name="postalCode"
                        label="Postal Code"
                        placeholder="10001"
                    />

                    {/* Country */}
                    <TextInput
                        id="country"
                        name="country"
                        label="Country"
                        placeholder="United States"
                    />
                </div>
            </div>
        </div>
    );
};

export default AddressSection;
