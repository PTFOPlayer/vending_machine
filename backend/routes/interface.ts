export interface slot {
    amount:number,
    product: string
}

export interface machine {
    id: number,
    slots: {
        heigth: number,
        width: number
        content: Array<Array<slot>> 
    },
    coordinates: {
        x: number,
        y: number
    },
    coin_eating_chance?: number | undefined,
    stuck_produckt_chance?: number | undefined,
    payment: string
}