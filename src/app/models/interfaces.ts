


export interface APIResponse<T> {
    data: {
        current_page: number;
        data: Array<T>;
        first_page_url: string;
        from: number;
        last_page: number;
        last_page_url: string;
        links: Array<Link>;
        next_page_url?: string;
        path: string;
        per_page: number;
        prev_page_url?: string;
        to: number;
        total: number;
    }
}


export interface Product {
    _id: string;
    name: string;
    category: string;
    price: number;
    currency: string;
    image: Image;
    bestseller: boolean;
    featured: boolean;
    description: string;
    people_also_buy: Array<Product>;
    updated_at: string;
    created_at: string;
}





export interface Link {
    url?: string;
    label: string;
    active: boolean; 
}



export interface Image {
    src: string;
    alt: string;
}

