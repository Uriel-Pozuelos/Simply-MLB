export interface CarouselImage {
    id: number;
    url: string;
    alt: string;
    title?: string;
}

export interface NavigationItem {
    id: number;
    title: string;
    color: string;
    link: string;
    icon?: React.ReactNode;
}