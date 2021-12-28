import {createStore} from 'vuex'
import products from './modules/products.js'

const store = createStore({
    modules:{
        prod:products
    }
})
export default store