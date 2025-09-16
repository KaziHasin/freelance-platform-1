import React, { Fragment } from 'react';
import { Dialog, DialogTitle, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface OffcanvasProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    position?: 'left' | 'right' | 'top' | 'bottom';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    overlay?: boolean;
}

const Offcanvas: React.FC<OffcanvasProps> = ({
    isOpen,
    onClose,
    title,
    children,
    position = 'right',
    size = 'md',
    overlay = true,
}) => {
    const sizeClasses = {
        sm: {
            left: 'w-80 h-full',
            right: 'w-80 h-full',
            top: 'h-1/3',
            bottom: 'h-1/3',
        },
        md: {
            left: 'w-120 h-full',
            right: 'w-120 h-full',
            top: 'h-1/2',
            bottom: 'h-1/2',
        },
        lg: {
            left: 'w-3xl h-full',
            right: 'w-3xl h-full',
            top: 'h-2/3',
            bottom: 'h-2/3',
        },
        xl: {
            left: 'w-3xl h-full',
            right: 'w-3xl h-full',
            top: 'h-3/4',
            bottom: 'h-3/4',
        },
    };


    const positionClasses = {
        left: 'left-0 inset-y-0',
        right: 'right-0 inset-y-0',
        top: 'top-0 inset-x-0',
        bottom: 'bottom-0 inset-x-0',
    };

    const slideAnimation = {
        left: {
            enter: 'transform transition ease-in-out duration-300',
            enterFrom: '-translate-x-full',
            enterTo: 'translate-x-0',
            leave: 'transform transition ease-in-out duration-300',
            leaveFrom: 'translate-x-0',
            leaveTo: '-translate-x-full',
        },
        right: {
            enter: 'transform transition ease-in-out duration-300',
            enterFrom: 'translate-x-full',
            enterTo: 'translate-x-0',
            leave: 'transform transition ease-in-out duration-300',
            leaveFrom: 'translate-x-0',
            leaveTo: 'translate-x-full',
        },
        top: {
            enter: 'transform transition ease-in-out duration-300',
            enterFrom: '-translate-y-full',
            enterTo: 'translate-y-0',
            leave: 'transform transition ease-in-out duration-300',
            leaveFrom: 'translate-y-0',
            leaveTo: '-translate-y-full',
        },
        bottom: {
            enter: 'transform transition ease-in-out duration-300',
            enterFrom: 'translate-y-full',
            enterTo: 'translate-y-0',
            leave: 'transform transition ease-in-out duration-300',
            leaveFrom: 'translate-y-0',
            leaveTo: 'translate-y-full',
        },
    };

    return (
        <Transition.Root show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                {overlay && (
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25 transition-opacity" />
                    </TransitionChild>
                )}

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className={`pointer-events-none fixed ${positionClasses[position]}`}>
                            <TransitionChild
                                as={Fragment}
                                enter={slideAnimation[position].enter}
                                enterFrom={slideAnimation[position].enterFrom}
                                enterTo={slideAnimation[position].enterTo}
                                leave={slideAnimation[position].leave}
                                leaveFrom={slideAnimation[position].leaveFrom}
                                leaveTo={slideAnimation[position].leaveTo}
                            >
                                <DialogPanel
                                    className={`pointer-events-auto ${sizeClasses[size][position]} bg-white shadow-xl`}
                                >
                                    {title && (
                                        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                                            <DialogTitle className="text-lg font-medium">
                                                {title}
                                            </DialogTitle>
                                            <button
                                                type="button"
                                                className="rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                                                onClick={onClose}
                                            >
                                                <XMarkIcon className="h-6 w-6" />
                                            </button>
                                        </div>
                                    )}
                                    <div className="p-4">
                                        {children}
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default Offcanvas;
