// let nama = 'Adi Nugroho'
// let usia = 30
// let tinggiBadan = 174.3
// let beratBadan
// let pacar = 1

// beratBadan = 10

// if(pacar == null){
//     pacar = 'belum punya'
// }else {
//     pacar = 'udah punya'
// }

// alert(`nama saya ${nama} usia saya ${usia} tinggi badan saya ${tinggiBadan} berat badan saya ${beratBadan} dan pacar saya ${pacar}`) 

const token = ~~[Math.random() * 123456789]

function login (username){
    return {token, username}
}

function getUser(token) {
    if(token) return{apiKey: "xkey123"}
}

const user = login ("Adi_nugroho");;
const apiKey = getUser(user.token);
console.log(apiKey)
console.log(user)
