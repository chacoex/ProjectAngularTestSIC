export interface User {
  meta: {
     pagination: {
         total: number,
         pages: number,
         page: number,
         limit: number,
         links: {
            previous: String,
            current: String,
            next: String
         }
      }
  },
  data : [
    Data
  ]
}

interface Data {
    id: number,
    name: string,
    email: string,
    gender: string,
    status: string  
}
