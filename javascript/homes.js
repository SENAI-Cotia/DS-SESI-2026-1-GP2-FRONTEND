// HOME ADM

const homeADM = JSON.parse(sessionStorage.getItem("home-ADM"))

console.log(homeADM)

if(user && user.role === 'admin'){
    document.getElementById("btnCriar").style.display = 'inline-block'
}
