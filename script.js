function contar() {
    let inicio = window.document.getElementById("txti")
    let fim = window.document.getElementById("txtf")
    let passo = window.document.getElementById("txtp")
    let resultado = window.document.getElementById("resultado")

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        resultado.innerHTML = "Impossivel contar"
        window.alert("ERRO")
        
    } else {
        resultado.innerHTML = "Contando: "
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p == 0) {
            window.alert("Invalido")
            p = 1
        }
        if (i < f) {
            // contagem crescente
            for (let contador = i; contador <= f; contador += p) {
                resultado.innerHTML += ` ${contador} `
            }
        }  else {
            // contagem regressiva
            for(let contador = i; contador >= f; contador -= p) {
                resultado.innerHTML += ` ${contador} `
            }
        }  
       

    }
}