export type Role = "ADMIN" | "CLIENT" | "DEVELOPER";

export const Roles: { id: string; name: Role }[] = [
    { id: "ADMIN", name: "ADMIN" },
    { id: "CLIENT", name: "CLIENT" },
    { id: "DEVELOPER", name: "DEVELOPER" },
];