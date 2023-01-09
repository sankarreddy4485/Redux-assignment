const initialState = {
    data: []
}

const todos = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                data: [...state.data, { id: action.id, name: action.name,description: action.description, status: action.status }]
            }
           
        default:
            return state;
    }
}
export default todos;