
export type OrderItem = {
    cardId :string,
    title : string,
    count: number,
}


export type CreateOrderRequestBody = {
    name: string,
    surname: string,
    email: string,
    country: string,
    city: string,
    address: string,
    postcode: string,
    orderItems: OrderItem[],
    price: number,
}