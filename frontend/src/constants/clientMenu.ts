import {
    HomeIcon,
    FolderIcon,
    CreditCardIcon,
    CubeIcon,
    UserGroupIcon,
    Cog8ToothIcon,
} from "@heroicons/react/24/outline";

export interface MenuItem {
    title: string;
    path: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    children?: MenuItem[];
}

export const menuItems: MenuItem[] = [
    {
        title: "Dashboard",
        path: "/client/dashboard",
        icon: HomeIcon,
    },
    {
        title: "Projects",
        path: "/client/projects",
        icon: FolderIcon,
    },
    {
        title: "Plans & Billing",
        path: "/client/plans",
        icon: CreditCardIcon,
    },
    {
        title: "Packages",
        path: "/client/packages",
        icon: CubeIcon,
    },
    {
        title: "My Freelancers",
        path: "/client/freelancers",
        icon: UserGroupIcon,
    },
    {
        title: "Settings",
        path: "/client/settings",
        icon: Cog8ToothIcon,
    },
];
