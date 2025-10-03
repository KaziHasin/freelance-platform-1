export interface Payment {
    _id: string;
    amount: number;
    currency: string;
    packageTitle: string;
    paymentMethod: string;
    planInterval: string;
    status: string;
    transactionId: string;
    createdAt: string;
};

export interface Package {
    _id: string;
    title: string;
    code: string;
    prices: {
        INR: number;
        USD: number;
        EUR: number;
    };

};

export interface Subscription {
    _id: string;
    clientId: string;
    packageId: Package,
    paymentId: Payment;
    status: 'ACTIVE' | 'EXPIRED' | 'CANCELLED';
    startDate: string;
    endDate?: string;
    isTrial: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface SubscriptionResponse {
    items: Subscription[];
    total: number;
    page: number;
    limit: number;
}
