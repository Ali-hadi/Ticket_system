import { ActionType } from "action-types"
export const setproducts = (products) => {
    return {
        type: ActionType.SET_PRODUCTS,
        payload: products,
    }
}

export const selectedproduct = (product) => {
    return {
        type: ActionType.SELECTED_PRODUCT,
        payload: product,
    }
}

// export const removeselectedproduct = () => {
//     return {
//         type: ActionType.REMOVE_SELECTED_PRODUCT,

//     }
// }

