//Add all the apis in here
// for TypeScript safety add retun type to the function

export const getTodosById = async (id:number) =>{
    const response = await fetch("/api/todos/Id="+id)
    return response.json()
}