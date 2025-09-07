import {
    HomeIcon,
    UsersIcon,
    UserGroupIcon,
    UserCircleIcon,
    ShieldCheckIcon as AccessControlIcon,
    KeyIcon as RolesIcon,
    BookOpenIcon as SubjectsIcon,
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
        title: 'Subjects',
        icon: SubjectsIcon,
        path: '/subjects',
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
                title: 'User Profile',
                icon: UserCircleIcon,
                path: '/users/profile',
            },
        ],
    },
    {
        title: 'Access Control',
        icon: AccessControlIcon,
        path: '/access-control',
        children: [
            {
                title: 'Roles',
                icon: RolesIcon,
                path: '/access-control/roles',
            },
        ],
    }
]; 