class user{
    constructor(login, password){
    }
}

let usuario = new user()

function valida(){
 


}

function cadastrar(){

    let mail = document.getElementById('user')
    let password = document.getElementById('password')

}

function verificaM(){
    let mail = document.getElementById('user')


}

function verificaPW(){
    
    let password = document.querySelector('#password')
    let password2 = document.querySelector('#password2')

    if(password === password2){
        cadastrar(password)
    }else{
        let aviso = document.createElement('p')
        aviso.innerHTML = '❗ Senhas não coincidem'
        document.querySelector('main').appendChild(aviso)
    }
}