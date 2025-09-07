export interface Column<T> {
    header: string;
    accessor: keyof T | ((item: T) => React.ReactNode);
    sortable?: boolean;
    render?: (value: T[keyof T], item: T) => React.ReactNode;
}