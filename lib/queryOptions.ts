import { queryOptions } from '@tanstack/react-query'
import { getNearProperties } from './apis'

export const getNearPropertiesByLongitudeLatitude = (longitude:string, latitude:string, pageNo:string) => {
    return queryOptions({
        queryKey:['property', longitude, latitude, pageNo],
        queryFn: () => getNearProperties(longitude, latitude, pageNo)
    })
}