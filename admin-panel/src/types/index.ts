
export interface User {
    _id: string;
    email: string;
    name: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    status: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    stock: number;
    image?: string;
}

export interface Document {
    id: string;
    title: string;
    type: string;
    size: string;
    lastModified: Date;
}

export interface StatCard {
    name: string;
    value: string;
    change: string;
    icon: React.ComponentType<{ className?: string }>;
}

export interface MenuItem {
    title: string;
    icon: React.ComponentType<{ className?: string }>;
    path: string;
    children?: MenuItem[];
} 