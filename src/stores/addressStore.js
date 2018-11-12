import { observable } from 'mobx'

class AddressStore {
    @observable nome = ''
    @observable cpf = 0
    @observable email = ''
    @observable cep = 0
    @observable estado = ''
    @observable logradouro = ''
    @observable numero = ''
    @observable bairro = ''
    @observable localidade = ''
}

export default AddressStore = new AddressStore()