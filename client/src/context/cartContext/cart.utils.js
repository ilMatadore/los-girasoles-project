export const addItemToCart = (cartItems, cartItemToAdd) => {

    const existingItem = cartItems.find((cartItem) => cartItem.id === cartItemToAdd.id);

    if (existingItem) {
        return cartItems.map((cartItem) => {
            if (cartItem.id === cartItemToAdd.id) {
                 return {...cartItem, quantity: cartItem.quantity + 1}
            } else return cartItem
        })
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {

    const existingItem = cartItems.find((cartItems) => cartItems.id === cartItemToRemove.id);

    if(existingItem.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id)
    }

    return cartItems.map((cartItem) => {
        if (cartItem.id === cartItemToRemove.id) {
            return { ...cartItem, quantity: cartItem.quantity - 1}
        } else return cartItem
        
        }
    )

}

export const filterItemFromCart = (cartItems, item) =>
  cartItems.filter((cartItem) => cartItem.id !== item.id);

export const getCartItemsCount = (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,
    0
);

export const getCartTotal = (cartItems) =>
  cartItems.reduce(
    (accumalatedQuantity, cartItem) =>
      accumalatedQuantity + cartItem.quantity * cartItem.price,
    0
);