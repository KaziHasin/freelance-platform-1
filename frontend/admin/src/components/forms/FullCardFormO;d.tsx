import { BuildingOfficeIcon, CreditCardIcon, DocumentIcon, EnvelopeIcon, PhoneIcon, UserIcon } from '@heroicons/react/24/outline';
import React from 'react';
import Button from '../ui/Button';

const FullCardForm: React.FC = () => {
    return (
        <div className="mt-2">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="bg-gray-50 dark:bg-gray-700/50 -m-8 p-2 mb-8 border-b border-gray-100 dark:border-gray-700">
                    <h2 className="text-lg font-medium text-gray-800 dark:text-white">User Information Form</h2>
                </div>
                <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Full Name</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <UserIcon className="h-5 w-5 text-indigo-500" />
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full pl-10 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-indigo-500 hover:border-indigo-300 focus:ring-0 dark:focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all duration-200 ease-in-out"
                                        placeholder="John Doe"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <EnvelopeIcon className="h-5 w-5 text-indigo-500" />
                                    </div>
                                    <input
                                        type="email"
                                        className="w-full pl-10 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-indigo-500 hover:border-indigo-300 focus:ring-0 dark:focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all duration-200 ease-in-out"
                                        placeholder="you@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Phone Number</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <PhoneIcon className="h-5 w-5 text-indigo-500" />
                                    </div>
                                    <input
                                        type="tel"
                                        className="w-full pl-10 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-indigo-500 hover:border-indigo-300 focus:ring-0 dark:focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all duration-200 ease-in-out"
                                        placeholder="+1 (555) 987-6543"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Gender</label>
                                <div className="flex space-x-6">
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio h-4 w-4 text-indigo-600 border-2 dark:border-gray-600 dark:bg-gray-700" name="gender" value="male" />
                                        <span className="ml-2 text-gray-700 dark:text-gray-200">Male</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio h-4 w-4 text-indigo-600 border-2 dark:border-gray-600 dark:bg-gray-700" name="gender" value="female" />
                                        <span className="ml-2 text-gray-700 dark:text-gray-200">Female</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio h-4 w-4 text-indigo-600 border-2 dark:border-gray-600 dark:bg-gray-700" name="gender" value="other" />
                                        <span className="ml-2 text-gray-700 dark:text-gray-200">Other</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <BuildingOfficeIcon className="h-5 w-5 text-indigo-500" />
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full pl-10 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-indigo-500 hover:border-indigo-300 focus:ring-0 dark:focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all duration-200 ease-in-out"
                                        placeholder="1234 Main St"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Card Information</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <CreditCardIcon className="h-5 w-5 text-indigo-500" />
                                    </div>
                                    <input
                                        type="text"
                                        className="w-full pl-10 py-3 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-indigo-500 hover:border-indigo-300 focus:ring-0 dark:focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all duration-200 ease-in-out"
                                        placeholder="Card number"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Expiration Date</label>
                                    <input
                                        type="text"
                                        className="w-full py-3 px-4 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-indigo-500 hover:border-indigo-300 focus:ring-0 dark:focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all duration-200 ease-in-out"
                                        placeholder="MM/YY"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">CVC</label>
                                    <input
                                        type="text"
                                        className="w-full py-3 px-4 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-indigo-500 hover:border-indigo-300 focus:ring-0 dark:focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all duration-200 ease-in-out"
                                        placeholder="123"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Profile Picture</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-indigo-500 transition-all duration-200 ease-in-out">
                                    <div className="space-y-1 text-center">
                                        <DocumentIcon className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500" />
                                        <div className="flex text-sm text-gray-600 dark:text-gray-400">
                                            <label className="relative cursor-pointer rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none dark:text-indigo-400 dark:hover:text-indigo-300">
                                                <span>Upload a file</span>
                                                <input type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                        <div className="space-y-4">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Preferences</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <label className="inline-flex items-center p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-indigo-500 transition-all duration-200 ease-in-out">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded border-2 dark:border-gray-600 dark:bg-gray-700" />
                                    <span className="ml-2 text-gray-700 dark:text-gray-200">Email notifications</span>
                                </label>
                                <label className="inline-flex items-center p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-indigo-500 transition-all duration-200 ease-in-out">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded border-2 dark:border-gray-600 dark:bg-gray-700" />
                                    <span className="ml-2 text-gray-700 dark:text-gray-200">Newsletter</span>
                                </label>
                                <label className="inline-flex items-center p-3 border border-gray-200 dark:border-gray-600 rounded-lg hover:border-indigo-500 transition-all duration-200 ease-in-out">
                                    <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 rounded border-2 dark:border-gray-600 dark:bg-gray-700" />
                                    <span className="ml-2 text-gray-700 dark:text-gray-200">Two-factor auth</span>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 dark:border-gray-700">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Additional Notes</label>
                            <textarea
                                rows={4}
                                className="w-full py-3 px-4 border border-gray-200 dark:border-gray-600 rounded-lg focus:border-indigo-500 hover:border-indigo-300 focus:ring-0 dark:focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all duration-200 ease-in-out"
                                placeholder="Any additional information..."
                            />
                        </div>
                    </div>

                    <div className="pt-6 border-t border-gray-100 dark:border-gray-700 flex justify-end">
                        <Button variant="danger" className='mr-2'>
                            Cancel
                        </Button>
                        <Button>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FullCardForm;