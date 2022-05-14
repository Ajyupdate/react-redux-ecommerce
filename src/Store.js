import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
// import { cartReducer } from "./reducers/CartReducer";
import {ProductReducer} from "./reducers/ProductReducers";

const initialState = {};
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        products: ProductReducer,
        // cart: cartReducer,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
)
export default store;