// HOME ADM

const homeADM = JSON.parse(sessionStorage.getItem("home-ADM"))
const homeFuncionario = JSON.parse(sessionStorage.getItem("home-FUNC"))
const homeTecnico = JSON.parse(sessionStorage.getItem("home-TEC"))

console.log(homeADM)
console.log(homeFuncionario)
console.log(homeTecnico)

if (user && user.role === 'adm'){
    document.getElementById("btnEntrar").style.display = 'inline-block'
} else if (user && user.role === 'funcionario') {
    document.getElementById("btnEntrar").style.display = 'inline-block'
} else if (user && user.role === 'tecnico') {
    document.getElementById("btnEntrar").style.display = 'inline-block'
}
