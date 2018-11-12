import { observable, action } from 'mobx'

class CartStore {
    @observable qtdCart = 0
    @observable qtdTeste = 10

    @action
    setQuantity(value){
        this.qtdCart = value
    }
}

export default CartStore = new CartStore()