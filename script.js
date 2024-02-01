let enviar = document.querySelector('#enviar')
enviar.addEventListener('click', tabuada)

function tabuada() {
    let txtn = document.querySelector('#txtn')
    let tab = document.querySelector('#tabuada')

    if (txtn.value == 0) {
        alert('Por favor, digite um número!')
    } else {
        let n = Number(txtn.value)
        tab.innerHTML = ''

        for (let i = 1; i <= 10; i++) {

            let item = document.createElement('p')
            let texto = document.createTextNode(`${n} x ${i} = ${n * i}`)
            item.appendChild(texto)
            tab.appendChild(item)

        }

    }

}