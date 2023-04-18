function somar() {
    var tn1 = window.document.getElementById('ad1')
    var tn2 = window.document.getElementById('ad2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `${n1} + ${n2} = <strong>${s}</strong>`
}

function multiplicar() {
    var mu1 = window.document.getElementById('mult1')
    var mu2 = window.document.getElementById('mult2')
    var resu = window.document.getElementById('resu')
    var nu1 = Number(mu1.value)
    var nu2 = Number(mu2.value)
    var m = nu1 * nu2
    resu.innerHTML = `${nu1} x ${nu2} = <strong>${m}</strong>`
}

function dividir() {
    var di1 = window.document.getElementById('divi1')
    var di2 = window.document.getElementById('divi2')
    var resul = window.document.getElementById('resul')
    var num1 = Number(di1.value)
    var num2 = Number(di2.value)
    var d = num1 / num2
    resul.innerHTML = `${num1} ÷ ${num2} = <strong>${d}</strong>`
}

function subtrair() {
    var su1 = window.document.getElementById('sub1')
    var su2 = window.document.getElementById('sub2')
    var result = window.document.getElementById('result')
    var nume1 = Number(su1.value)
    var nume2 = Number(su2.value)
    var su = nume1 - nume2
    result.innerHTML = `${nume1} - ${nume2} = <strong>${su}</strong>`
}

function potenciar() {
    var po1 = window.document.getElementById('pot1')
    var po2 = window.document.getElementById('pot2')
    var resulta = window.document.getElementById('resulta')
    var numer1 = Number(po1.value)
    var numer2 = Number(po2.value)
    var po = numer1 ** numer2
    resulta.innerHTML = `${numer1} ^ ${numer2} = <strong>${po}</strong>`
}