import { queryOptions } from '@tanstack/react-query'
import { getTodosById } from '@/lib/apis'

export const  getTodosByIdQuery = (id:number) => {
    return queryOptions({
        queryKey:['todos', id],
        queryFn: () => getTodosById(id)
    })
}
