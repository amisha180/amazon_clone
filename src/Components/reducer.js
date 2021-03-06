export const initialState = {
    basket : [],
    user:null
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount,item)=>item.price+amount ,0);

const reducer = (state,action) =>{
    console.log(action);
    switch(action.type){
        case 'SET_USER':

        return{
            ...state,
            user:action.user
        }
            break;
        case 'ADD_TO_BASKET':
            //logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket,action.item]
            };
            break;

        case 'REMOVE_FROM_BASKET':
        //logic to remove item from basket

        //we cloned the basket
            let newBasket = [...state.basket];

            //we check to see if product exists
            const index= state.basket.findIndex((basketItem) => basketItem.id=== action.id);

            if(index>=0){
                //item exist in basket, remove it...
                newBasket.splice(index,1);
            }

        return {...state, basket: newBasket};
          break;

        default:
             return state;
    }
}
export default reducer;