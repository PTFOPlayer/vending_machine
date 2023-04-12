// interfejs do maszyny w założeniu może być używany jednocześnie przez backend jak i przez front end

import Product from "../Products/Product"

export enum payment_methods {
    Card = "Card",
    Cash = "Cash",
    Change = "Change"
}

export interface machine {
    id: number,
    slots: {
        heigth: number,
        width: number
        content: Array<Array<{
            amount:number,
            product: Product | string
        }>>
    },
    coordinates: {
        x: number,
        y: number
    },
    coin_eating_chance?: number | undefined,
    stuck_produckt_chance?: number | undefined,
    payment: payment_methods
}