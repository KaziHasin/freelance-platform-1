import {
    HomeIcon,
    UsersIcon,
    UserGroupIcon,
    UserCircleIcon,
    DocumentCheckIcon,
} from '@heroicons/react/24/outline';

export interface MenuItem {
    title: string;
    path: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
    {
        title: 'Dashboard',
        icon: HomeIcon,
        path: '/',
    },
    {
        title: 'Packages',
        icon: DocumentCheckIcon,
        path: '/packages',
    },
    {
        title: 'Manage Users',
        icon: UsersIcon,
        path: '/users',
        children: [
            {
                title: 'All Users',
                icon: UserGroupIcon,
                path: '/users/all',
            },
            {
                title: 'Clients',
                icon: UserGroupIcon,
                path: '/users/clients',
            },
            {
                title: 'Developers',
                icon: UserGroupIcon,
                path: '/users/developers',
            },
            {
                title: 'User Profile',
                icon: UserCircleIcon,
                path: '/users/profile',
            },
        ],
    },
]; 