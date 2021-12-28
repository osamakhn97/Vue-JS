import {createStore} from 'vuex'
import products from './modules/products.js'
import cart from './modules/cart.js'

const store = createStore({
    modules:{
        prod:products,
        cart:cart
    }
})
export default store