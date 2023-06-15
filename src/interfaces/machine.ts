// interfejs do maszyny, służy do parsowania jsona oraz dziedziczą go inne obiekty związane z maszyną
export interface machine {
    id: number,
    slots: {
        heigth: number,
        width: number
        content: Array<Array<{
            amount: number,
            product: string
        }>>
    },
    coin_eating_chance?: number | undefined,
    stuck_product_chance?: number | undefined,
    payment: string
}