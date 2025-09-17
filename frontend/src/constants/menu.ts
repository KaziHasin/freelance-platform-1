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
        path: '/admin',
    },
    {
        title: 'Packages',
        icon: DocumentCheckIcon,
        path: '/admin/packages',
    },
    {
        title: 'Manage Users',
        icon: UsersIcon,
        path: '/admin/users',
        children: [
            {
                title: 'All Users',
                icon: UserGroupIcon,
                path: '/admin/users',
            },
            {
                title: 'Clients',
                icon: UserGroupIcon,
                path: '/admin/users/clients',
            },
            {
                title: 'Developers',
                icon: UserGroupIcon,
                path: '/admin/users/developers',
            },
            {
                title: 'User Profile',
                icon: UserCircleIcon,
                path: '/admin/users/profile',
            },
        ],
    },
]; 