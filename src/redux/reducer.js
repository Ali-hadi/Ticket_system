import { ActionType } from "./action-types";

const initialState = {
    products: [
        {
            id : 1,
            title: "Shahzad Ali",
            Department: "programmer",

        },
    ],
};
export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.SET_PRODUCTS:
            return state;
        default:
            return state; 
    }
}

