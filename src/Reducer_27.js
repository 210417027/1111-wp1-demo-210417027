const Reducer_xx = (state, action) => {
    if(action.type === 'CLEAR_CART'){
        return {...state, cart: [] , amount: 0, total: 0 }
    }
}

export default Reducer_xx;
