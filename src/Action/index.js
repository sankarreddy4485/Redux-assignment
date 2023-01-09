const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO ='REMOVE_TODO'

export const addTodo = (name,description,status) =>({
    type : ADD_TODO,
    name,
    description,
    status,
    id : Math.random(),
    
})
export const deleteTodo = (id) =>({
    type : REMOVE_TODO,
    id 
    
})