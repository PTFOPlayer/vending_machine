
export enum product_type {
    Bottle,
    ChocolateBar,
    Other,
}

export interface product {
    id: number
    price: number
    type: product_type
    product: Object | null
}