import { createStore, combineReducers, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
// import {composeWithDevTools} from 'redux-devtools-extension'
import { categoryListReducers, productDetailsReducers, productsListReducers } from './reducers/productsReducer'
import { userLoginReducers, userSignupReducers } from './reducers/userReducer'


const reducer = combineReducers({
    productsList: productsListReducers,
    productDetails: productDetailsReducers,
    userLogin: userLoginReducers,
    userSignup: userSignupReducers,
    categoryList: categoryListReducers,
})

const initialState = {}
const middleware =[thunk]
// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
const store = createStore(reducer, initialState, applyMiddleware(...middleware))

export default store;