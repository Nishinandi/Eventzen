// USER PARAMS
export type CreateUserParams = {
    clerkId:string;
    firstName : string | null;
    lastName:string | null;
    username : string;
    email:string;
    photo : string;
}

export type UpdateUserParams = {
    firstName : string
    lastName:string
    username : string
    photo : string
}

export type CreateEventParams = {
    userId:string
    event: {
        title : string
        description:string 
        Location : string 
        imageUrl: string
        startDateTime: Date 
        endDateTime : Date 
        categoryId: string
        price: string
        isFree:boolean
        url:string     
   }
   path :string
}

export type UpdateEventParams = {
    userId : string
    event: {
        _id:string
        title:string
        imageUrl:string
        description:string
        Location:string
        startDateTime:Date
        endDateTime: Date
        categoryId:string
        price:string
        isFree:string
        url:string
    }
    path :string
}

export type DeleteEventParams = {
    eventId:string
    path: string
}

export type GetAllEventParams = {
    query:string
    category: string
    limit:number
    page: number
}

export type GetEventsByUserParams = {
    userId:string
    limit?:number
    page: number
}

export type GetReLatedEventsByCategoryParams = {
    categoryId:string
    eventId: string
    limit?:number
    page: number | string
}

export type Event = {
    _id:string
    title:string    
    description:string
    price:string
    isFree:string
    imageUrl:string
    Location:string
    startDateTime:Date
    endDateTime: Date
    categoryId:string  
    url:string
    organizer:{
       firstName : string
       lastName: string
    }
    category: {
        _id:string
        name: string
    }
}

//...CATEGORY PARAMS
export type CreateCategoryParams={
    categoryName: string
    path:string
}

//...ORDER PARAMS
export type CheckOutOrderParams={
     eventTitle:string
     eventId:string
     price:string
     isFree:boolean
     buyerId:string
}

export type CreateOrderParams={
    stripeId:string
    eventId:string
    buyerId:string
    totalAmount:boolean
    createdAt:Date
}
export type GetOrderByEventParams={
    
    eventId:string
    searchString:string
}

export type GetOrderByUserParams={
    
    userId:string |null
    limit?:number
    page: string|number|null
}

 export type UrlQueryParams ={
    params: string
    key:string
    value:string | null
 }

 export type RemoveUrlQueryParams ={
    params: string
    keysToRemove:string[]
 }

 export type SearchParamsProps ={
    params: string
    searchParams:{[key: string]: string | string[] | undefined}
 }
