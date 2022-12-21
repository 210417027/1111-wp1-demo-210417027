const Reducer_xx = (state, action) => {
    if(action.type === 'SHOW_ALERT') {
        return { ...state, alert: action.payload}
    }
    if(action.type === 'REMOVE_ITEM') {
        const filteredCart = state.blogs.filter((data) => data.id !==action.payload );
        return {...state, blogs: filteredCart }
    }
    
}