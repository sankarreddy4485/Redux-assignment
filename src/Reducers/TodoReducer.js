const deletedtodos = (state, action) => {
    switch (action.type) {
        case 'REMOVE_TODO':
            let todo = state.filter(item => item.id !== action.id);
                return todo;        
        default:
            return state;
    }
}
export default deletedtodos;