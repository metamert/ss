export const additem=(item)=>(
    {
type:"additem",
payload:item
    }
)


export const removeitem=(item)=>(
{
type:"removeitem",
payload:item

}
)
export const removefull=(item)=>(
    {
        type:"removefull",
        payload:item
    }
)
export const success=()=>(
  {
      type:"success",
      
  }
)


/**  utils*/


 const addItemToCart = (cartItems, cartItemToAdd) => {
const sum=0;

  const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>


      
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };
  
   const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  };



/* ınıtal_state */

const INITIAL_STATE = {
    total:0,
    cartItems: []
  };
  



  /* reducers */
  const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
     
      case "additem":
        return {
          ...state,
          cartItems: addItemToCart(state.cartItems, action.payload)
        };
      case "removeitem":
        return {
          ...state,
          cartItems: removeItemFromCart(state.cartItems, action.payload)
        };
      case "removefull":
        return {
          ...state,
          cartItems: state.cartItems.filter(
            cartItem => cartItem.id !== action.payload.id
          )
        };
        case "success":
          return {
            ...state,
            cartItems:[]
          };
      default:
        return state;
    }
  };
  
  export default cartReducer;