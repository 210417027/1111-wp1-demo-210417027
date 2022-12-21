const Reducer_xx = (state, action) => {
    if(action.type === 'CLEAR_CART'){
        return {...state, cart: [] , amount: 0, total: 0 }
    }
    if(action.type === 'CLEAR_BUTTON'){
        return {...state, amount: 0 ,id:[], img:[],price:0, title:[] }
    }
    if(action.type === 'INCREASE') {
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount +1 };
            }
            return cartItem;
        });
        return {...state, cart: tempCart}
    }
    if(action.type === 'DECREASE') {
        let tempCart = state.cart.map((cartItem) => {
            if(cartItem.id === action.payload) {
                if(cartItem.amount>0){
                    return { ...cartItem, amount: cartItem.amount -1 };
                }
            }
            return cartItem;
        });
        return {...state, cart: tempCart}
    }
    if(action.type === 'GET_TOTALS'){
        let {total, amount} = state.cart.reduce((cartTotal, cartItem) => {
            const {price, amount} = cartItem;
            const itemTotal = price * amount;
            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            return cartTotal;
        },{
            total: 0,
            amount: 0
        });

        total = parseFloat(total.toFixed(2));

        return {...state, total, amount: amount}
    }

}

export default Reducer_xx;